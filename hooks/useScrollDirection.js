'use client';
import { useEffect, useState } from 'react';

export default function useScrollDirection(initialDirection = 'up', threshold = 10) {
  const [scrollDir, setScrollDir] = useState(initialDirection);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let lastDir = initialDirection;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      const dir = scrollY > lastScrollY ? 'down' : 'up';
      if (dir !== lastDir) {
        setScrollDir(dir);
        lastDir = dir;
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, threshold]);
  return scrollDir;
} 