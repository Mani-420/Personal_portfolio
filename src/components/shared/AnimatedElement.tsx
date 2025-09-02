import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in' | 'slide-in-up' | 'slide-in-down';
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  hover?: boolean;
  hoverAnimation?: 'lift' | 'scale' | 'glow' | 'slide';
  style?: React.CSSProperties;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  stagger?: number;
}

/**
 * AnimatedElement - A reusable component for smooth, performant animations
 * 
 * Features:
 * - Scroll-triggered animations
 * - Hover animations
 * - Staggered animations
 * - Customizable timing and easing
 * - Intersection Observer for performance
 */
export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
  style = {},
  onAnimationStart,
  onAnimationEnd,
  hover = false,
  hoverAnimation = 'lift',
  stagger = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Animation classes mapping
  const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in',
    'slide-in-up': 'animate-slide-in-up',
    'slide-in-down': 'animate-slide-in-down',
  };

  // Hover animation classes
  const hoverClasses = {
    lift: 'hover-lift',
    scale: 'hover-scale',
    glow: 'hover-glow',
    slide: 'hover-slide',
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Add stagger delay if specified
          const totalDelay = delay + stagger;
          
          animationTimeoutRef.current = setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
            onAnimationStart?.();
            
            // Trigger animation end callback after animation completes
            setTimeout(() => {
              onAnimationEnd?.();
            }, duration);
          }, totalDelay);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [threshold, delay, stagger, duration, hasAnimated, onAnimationStart, onAnimationEnd]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const baseClasses = 'transition-all duration-200 ease-out';
  const animationClass = isVisible ? animationClasses[animation] : '';
  const hoverClass = hover ? hoverClasses[hoverAnimation] : '';

  return (
    <div
      ref={elementRef}
      className={`${baseClasses} ${animationClass} ${hoverClass} ${className}`}
      style={{
        ...style,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * StaggeredContainer - Container component for staggered animations
 * Automatically applies delays to child AnimatedElements
 */
interface StaggeredContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  staggerDelay = 100,
  className = '',
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child) && child.type === AnimatedElement) {
          return React.cloneElement(child, {
            ...child.props,
            stagger: index * staggerDelay,
            key: index,
          });
        }
        return (
          <AnimatedElement
            key={index}
            stagger={index * staggerDelay}
            animation="fade-in-up"
          >
            {child}
          </AnimatedElement>
        );
      })}
    </div>
  );
};

/**
 * FloatingElement - Component with continuous floating animation
 */
interface FloatingElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  speed = 3,
  className = '',
}) => {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * ShimmerElement - Component with loading shimmer effect
 */
interface ShimmerElementProps {
  children: ReactNode;
  loading?: boolean;
  className?: string;
}

export const ShimmerElement: React.FC<ShimmerElementProps> = ({
  children,
  loading = false,
  className = '',
}) => {
  if (loading) {
    return (
      <div className={`animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${className}`}>
        <div className="opacity-0">{children}</div>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};
