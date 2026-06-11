import { useEffect, useState, useRef, useCallback } from 'react';

const CustomCursor = () => {
  // ── Mouse position stored in a ref (NOT state) to avoid re-render loops ──
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ── Animate both cursors in a single rAF loop using refs + direct DOM ────
  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;
    const innerPos = { x: 0, y: 0 };
    const outerPos = { x: 0, y: 0 };

    const updateMousePosition = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const target = mousePosition.current;

      // Lerp inner cursor (faster follow)
      innerPos.x += (target.x - innerPos.x) * 0.15;
      innerPos.y += (target.y - innerPos.y) * 0.15;

      // Lerp outer cursor (slower follow)
      outerPos.x += (target.x - outerPos.x) * 0.08;
      outerPos.y += (target.y - outerPos.y) * 0.08;

      // Direct DOM mutation — zero React re-renders
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${innerPos.x}px, ${innerPos.y}px)`;
      }
      if (outerCursorRef.current) {
        outerCursorRef.current.style.transform = `translate(${outerPos.x}px, ${outerPos.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', updateMousePosition);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  // ── Mobile detection ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (isMobile) return null;

  return (
    <>
      {/* Inner cursor - small lime filled circle */}
      <div 
        ref={cursorRef}
        className="custom-cursor-inner"
      />
      {/* Outer cursor - larger thin outlined circle */}
      <div 
        ref={outerCursorRef}
        className="custom-cursor-outer"
      />
    </>
  );
};

export default CustomCursor;