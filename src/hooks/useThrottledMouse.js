import { useEffect, useRef, useCallback } from 'react';

/**
 * Throttles mousemove events to at most once per animation frame (~16ms at 60 fps).
 * Returns a stable event handler that can be attached to a DOM element.
 *
 * @param {(event: MouseEvent) => void} callback - Called at most once per rAF tick.
 * @param {boolean} [enabled=true] - When false, the handler becomes a no-op (useful for pausing).
 * @returns {(event: MouseEvent) => void} Throttled handler.
 */
export default function useThrottledMouse(callback, enabled = true) {
  const rafId = useRef(null);
  const latestEvent = useRef(null);
  const callbackRef = useRef(callback);

  // Always keep the callback ref current without re-subscribing
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  const throttledHandler = useCallback(
    (event) => {
      if (!enabled) return;

      // Store the latest event but only schedule one rAF tick
      latestEvent.current = event;

      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          rafId.current = null;
          if (latestEvent.current && callbackRef.current) {
            callbackRef.current(latestEvent.current);
          }
        });
      }
    },
    [enabled]
  );

  return throttledHandler;
}
