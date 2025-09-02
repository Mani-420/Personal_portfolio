import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationClass?: string;
  delay?: number;
}

/**
 * Custom hook for scroll-triggered animations
 * Provides smooth, performant animations when elements come into view
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  animationClass = 'animate-fade-in-up',
  delay = 0
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            if (triggerOnce) setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  const animationClasses = isVisible && !hasAnimated ? animationClass : '';

  return {
    ref: elementRef,
    isVisible,
    animationClasses,
    triggerAnimation: () => setIsVisible(true),
  };
};

/**
 * Hook for staggered animations in lists
 * Provides sequential animation delays for multiple elements
 */
export const useStaggeredAnimation = (
  count: number,
  baseDelay: number = 100,
  staggerDelay: number = 50
) => {
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  const triggerItem = (index: number) => {
    const delay = baseDelay + (index * staggerDelay);
    setTimeout(() => {
      setAnimatedItems(prev => new Set(prev).add(index));
    }, delay);
  };

  const triggerAll = () => {
    for (let i = 0; i < count; i++) {
      triggerItem(i);
    }
  };

  const isAnimated = (index: number) => animatedItems.has(index);

  return {
    triggerItem,
    triggerAll,
    isAnimated,
    animatedItems,
  };
};

/**
 * Hook for smooth scroll animations
 * Provides smooth scrolling with easing functions
 */
export const useSmoothScroll = () => {
  const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 800;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (ease-out-cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startPosition + distance * easeOut);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    scrollToElement,
    scrollToTop,
  };
};

/**
 * Hook for parallax scroll effects
 * Provides smooth parallax scrolling for background elements
 */
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref: elementRef,
    offset,
    style: {
      transform: `translateY(${offset}px)`,
    },
  };
};
