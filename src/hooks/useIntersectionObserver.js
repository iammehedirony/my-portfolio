import { useState, useEffect, useRef } from 'react';

/**
 * Reusable hook that wraps IntersectionObserver.
 * Returns a ref to attach to the target element and a boolean indicating visibility.
 *
 * @param {Object} options
 * @param {string} [options.rootMargin='200px'] - Margin around the root (loads slightly before visible).
 * @param {number} [options.threshold=0]        - Visibility ratio to trigger (0 = any pixel).
 * @param {boolean} [options.freezeOnceVisible=false] - If true, stays `true` once seen (no unmount on scroll-away).
 * @returns {{ ref: React.RefObject, isIntersecting: boolean }}
 */
export default function useIntersectionObserver({
  rootMargin = '200px',
  threshold = 0,
  freezeOnceVisible = false,
} = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Skip if already frozen as visible
    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, freezeOnceVisible, isIntersecting]);

  return { ref, isIntersecting };
}
