import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

/**
 * AnimatedBackground - A computer-themed animated background
 * Features floating code elements, circuit patterns, and tech symbols
 * Adapts to light and dark themes for optimal visibility
 */
export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('AnimatedBackground: useEffect triggered');
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('AnimatedBackground: Canvas ref is null');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('AnimatedBackground: Could not get 2D context');
      return;
    }

    console.log('AnimatedBackground: Canvas initialized successfully');

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`AnimatedBackground: Canvas resized to ${canvas.width}x${canvas.height}`);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class for floating elements
    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 1;
      opacity: number = 0.1;
      text: string = '';
      type: 'code' | 'symbol' | 'circuit' = 'code';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.3; // Increased minimum opacity
        this.type = Math.random() > 0.7 ? 'symbol' : Math.random() > 0.5 ? 'circuit' : 'code';
        
        // Computer-related symbols and code snippets
        const symbols = ['</>', '{ }', '[ ]', '()', '=>', '&&', '||', '++', '--', '//', '/*', '*/'];
        const codeSnippets = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export'];
        
        if (this.type === 'symbol') {
          this.text = symbols[Math.floor(Math.random() * symbols.length)];
        } else if (this.type === 'code') {
          this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        } else {
          this.text = '●';
        }
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Theme-aware colors with much higher opacity
        const isDark = document.documentElement.classList.contains('dark');
        const colors = {
          light: {
            primary: '#3b82f6',
            secondary: '#22c55e',
            text: '#1e40af', // Much darker blue
            symbol: '#7c3aed' // Much darker purple
          },
          dark: {
            primary: '#60a5fa',
            secondary: '#4ade80',
            text: '#dbeafe', // Much lighter blue
            symbol: '#c4b5fd' // Much lighter purple
          }
        };

        const theme = isDark ? colors.dark : colors.light;
        
        if (this.type === 'code') {
          ctx.fillStyle = theme.text;
          ctx.font = `${this.size * 6}px 'Courier New', monospace`; // Larger font
        } else if (this.type === 'symbol') {
          ctx.fillStyle = theme.symbol;
          ctx.font = `${this.size * 7}px 'Courier New', monospace`; // Larger font
        } else {
          ctx.fillStyle = theme.primary;
          ctx.font = `${this.size * 5}px 'Courier New', monospace`; // Larger font
        }

        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000)); // More particles
    
    console.log(`AnimatedBackground: Creating ${particleCount} particles`);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    let frameCount = 0;
    
    const animate = () => {
      if (!canvas || !ctx) return;
      
      frameCount++;
      if (frameCount % 60 === 0) {
        console.log('AnimatedBackground: Animation running, frame:', frameCount);
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a test rectangle to ensure canvas is working
      ctx.fillStyle = 'rgba(59, 130, 246, 0.9)'; // Blue test rectangle instead of red
      ctx.fillRect(50, 50, 200, 100);
      
      // Draw gradient background with much higher opacity
      const isDark = document.documentElement.classList.contains('dark');
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      if (isDark) {
        gradient.addColorStop(0, 'rgba(30, 41, 59, 0.7)'); // Dark blue-gray instead of reddish
        gradient.addColorStop(0.5, 'rgba(51, 65, 85, 0.5)'); // Medium blue-gray
        gradient.addColorStop(1, 'rgba(30, 41, 59, 0.7)'); // Dark blue-gray
      } else {
        gradient.addColorStop(0, 'rgba(248, 250, 252, 0.9)'); // Light gray
        gradient.addColorStop(0.5, 'rgba(241, 245, 249, 0.8)'); // Slightly darker light gray
        gradient.addColorStop(1, 'rgba(248, 250, 252, 0.9)'); // Light gray
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines between nearby particles with much higher opacity
      ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.8)' : 'rgba(100, 116, 139, 0.8)'; // Much higher opacity
      ctx.lineWidth = 2; // Thicker lines

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) { // Slightly larger connection distance
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    console.log('AnimatedBackground: Starting animation loop');
    animate();

    return () => {
      console.log('AnimatedBackground: Cleaning up');
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  console.log('AnimatedBackground: Component rendered');

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ 
        zIndex: 0, // Fixed: Changed from -1 to 0 to match the CSS class
        backgroundColor: 'rgba(59, 130, 246, 0.3)' // Blue background that works with both themes
      }}
    />
  );
};
