import { lazy, Suspense, memo, useRef, useCallback, useEffect, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useThrottledMouse from '../hooks/useThrottledMouse';

// ── Code-split the heavy Spline runtime (~200 KB) ──────────────────────────
const Spline = lazy(() => import('@splinetool/react-spline'));

// ── Constants ──────────────────────────────────────────────────────────────
const SPLINE_SCENE_URL =
  'https://prod.spline.design/N1F731RYGjgwHGcF/scene.splinecode';
const MOBILE_BREAKPOINT = 768;

/**
 * SplineFallback — lightweight placeholder shown while the Spline runtime
 * loads or on mobile devices. Matches the scene's dark aesthetic so the
 * transition feels seamless.
 */
function SplineFallback() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-[700px] z-0"
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, rgba(60,207,145,0.08) 0%, transparent 60%), #000',
      }}
    />
  );
}

/**
 * SplineCanvas — the actual Spline <canvas> with:
 *   • rAF-throttled mouse forwarding
 *   • play/pause tied to viewport visibility
 *   • proper cleanup on unmount
 */
function SplineCanvas({ isVisible }) {
  const appRef = useRef(null);

  // ── Play / Pause on visibility ──────────────────────────────────────────
  useEffect(() => {
    const app = appRef.current;
    if (!app) return;

    try {
      if (isVisible) {
        app.play?.();
      } else {
        app.stop?.();
      }
    } catch {
      // Spline runtime may throw if the context is already disposed
    }
  }, [isVisible]);

  // ── Cleanup GPU resources on unmount ────────────────────────────────────
  useEffect(() => {
    return () => {
      const app = appRef.current;
      if (app) {
        try {
          app.stop?.();
          app.dispose?.();
        } catch {
          // Silently handle if already disposed
        }
        appRef.current = null;
      }
    };
  }, []);

  // ── Throttled mouse handler (caps at display refresh rate) ──────────────
  const onMouseMoveThrottled = useThrottledMouse(
    useCallback((e) => {
      const app = appRef.current;
      if (app?.emitEvent) {
        app.emitEvent('mouseMove', e);
      }
    }, []),
    isVisible
  );

  // ── Store the Spline Application reference on load ─────────────────────
  const handleLoad = useCallback((splineApp) => {
    appRef.current = splineApp;
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full z-0 h-[700px]"
      style={{
        contain: 'strict',
        willChange: 'transform',
      }}
      onMouseMove={onMouseMoveThrottled}
    >
      <Spline scene={SPLINE_SCENE_URL} onLoad={handleLoad} />
    </div>
  );
}

/**
 * OptimizedSplineScene — the top-level wrapper that orchestrates:
 *   1. Mobile detection → render a static fallback instead of the 3D scene
 *   2. IntersectionObserver → lazy-mount / pause when off-screen
 *   3. Suspense → code-split the Spline runtime
 */
const OptimizedSplineScene = memo(function OptimizedSplineScene() {
  const [isMobile, setIsMobile] = useState(false);

  // ── Mobile detection ──────────────────────────────────────────────────
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ── Viewport detection (200px lookahead for preloading) ───────────────
  const { ref: containerRef, isIntersecting: isVisible } =
    useIntersectionObserver({
      rootMargin: '200px',
      threshold: 0,
    });

  // ── Mobile → static fallback ─────────────────────────────────────────
  if (isMobile) {
    return <SplineFallback />;
  }

  return (
    <div ref={containerRef}>
      <Suspense fallback={<SplineFallback />}>
        {isVisible ? (
          <SplineCanvas isVisible={isVisible} />
        ) : (
          <SplineFallback />
        )}
      </Suspense>
    </div>
  );
});

export default OptimizedSplineScene;
