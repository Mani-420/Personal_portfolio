import React from 'react';
import { AnimatedElement, StaggeredContainer, FloatingElement, ShimmerElement } from './AnimatedElement';

/**
 * AnimationDemo - A showcase component for all available animations
 * This component demonstrates the various animation types and configurations
 */
const AnimationDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <AnimatedElement
          animation="fade-in-down"
          duration={600}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Animation Showcase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Smooth, fast, and performant animations for your portfolio
          </p>
        </AnimatedElement>

        {/* Basic Animations */}
        <section className="space-y-8">
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Basic Animations
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedElement
              animation="fade-in-up"
              duration={400}
              delay={100}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl mb-2">⬆️</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Fade In Up</h3>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-in-down"
              duration={400}
              delay={200}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl mb-2">⬇️</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Fade In Down</h3>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-in-left"
              duration={400}
              delay={300}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl mb-2">⬅️</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Fade In Left</h3>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-in-right"
              duration={400}
              delay={400}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl mb-2">➡️</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Fade In Right</h3>
            </AnimatedElement>
          </div>
        </section>

        {/* Scale and Bounce Animations */}
        <section className="space-y-8">
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            delay={200}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Scale & Bounce
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedElement
              animation="scale-in"
              duration={500}
              delay={300}
              className="bg-white dark:bg-dark-700 p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Scale In</h3>
              <p className="text-gray-600 dark:text-gray-400">Smooth scaling animation</p>
            </AnimatedElement>

            <AnimatedElement
              animation="bounce-in"
              duration={600}
              delay={400}
              className="bg-white dark:bg-dark-700 p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">🎾</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Bounce In</h3>
              <p className="text-gray-600 dark:text-gray-400">Playful bounce effect</p>
            </AnimatedElement>
          </div>
        </section>

        {/* Staggered Animations */}
        <section className="space-y-8">
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            delay={300}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Staggered Animations
            </h2>
          </AnimatedElement>

          <StaggeredContainer staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <AnimatedElement
                key={item}
                animation="slide-in-up"
                duration={500}
                className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Item {item}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Staggered delay</p>
              </AnimatedElement>
            ))}
          </StaggeredContainer>
        </section>

        {/* Hover Animations */}
        <section className="space-y-8">
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            delay={400}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Hover Effects
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedElement
              animation="fade-in-up"
              duration={400}
              hover={true}
              hoverAnimation="lift"
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center cursor-pointer"
            >
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Lift</h3>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-in-up"
              duration={400}
              hover={true}
              hoverAnimation="scale"
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center cursor-pointer"
            >
              <div className="text-3xl mb-2">📏</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Scale</h3>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-in-up"
              duration={400}
              hover={true}
              hoverAnimation="glow"
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center cursor-pointer"
            >
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Glow</h3>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-in-up"
              duration={400}
              hover={true}
              hoverAnimation="slide"
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center cursor-pointer"
            >
              <div className="text-3xl mb-2">➡️</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Slide</h3>
            </AnimatedElement>
          </div>
        </section>

        {/* Floating Elements */}
        <section className="space-y-8">
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            delay={500}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Floating Elements
            </h2>
          </AnimatedElement>

          <div className="flex justify-center space-x-8">
            <FloatingElement speed={3} className="bg-primary-600 text-white p-4 rounded-full shadow-lg">
              <span className="text-lg font-medium">React</span>
            </FloatingElement>
            
            <FloatingElement speed={4} className="bg-secondary-600 text-white p-4 rounded-full shadow-lg">
              <span className="text-lg font-medium">Node.js</span>
            </FloatingElement>
            
            <FloatingElement speed={5} className="bg-gray-600 text-white p-4 rounded-full shadow-lg">
              <span className="text-lg font-medium">TypeScript</span>
            </FloatingElement>
          </div>
        </section>

        {/* Loading States */}
        <section className="space-y-8">
          <AnimatedElement
            animation="fade-in-up"
            duration={500}
            delay={600}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Loading States
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ShimmerElement loading={true} className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg h-32">
              <div className="h-full bg-gray-200 dark:bg-dark-600 rounded"></div>
            </ShimmerElement>
            
            <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center">
              <div className="animate-pulse-slow text-4xl mb-2">⏳</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Slow Pulse</h3>
            </div>
            
            <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-lg text-center">
              <div className="animate-wiggle text-4xl mb-2">🔄</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Wiggle</h3>
            </div>
          </div>
        </section>

        {/* Performance Note */}
        <AnimatedElement
          animation="fade-in-up"
          duration={600}
          delay={700}
          className="text-center bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            🚀 Performance Optimized
          </h3>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            All animations use CSS transforms and opacity for optimal performance. 
            Intersection Observer ensures animations only trigger when elements are visible.
            Smooth 60fps animations with hardware acceleration.
          </p>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default AnimationDemo;
