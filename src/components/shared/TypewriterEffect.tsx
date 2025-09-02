import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

/**
 * TypewriterEffect - A component that creates a typewriter animation effect
 * Cycles through different words with typing and deleting animations
 */
export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      // Typing animation
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      // Deleting animation
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentWordIndex, isTyping, isDeleting, words, speed, deleteSpeed, delay]);

  return (
    <span className={`${className} relative`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

/**
 * Enhanced TypewriterEffect with gradient text and better styling
 */
export const GradientTypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      // Typing animation
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      // Deleting animation
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentWordIndex, isTyping, isDeleting, words, speed, deleteSpeed, delay]);

  return (
    <span className={`${className} relative`}>
      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="animate-pulse text-primary-600 dark:text-primary-400">|</span>
    </span>
  );
};


