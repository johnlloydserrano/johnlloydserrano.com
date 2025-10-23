'use client';

import { useState, useLayoutEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

type HeaderState = {
  hidden: boolean;
  isAtTop: boolean;
  menuOpen: boolean;
  isFirstRender: boolean;
};

export const useHeader = () => {
  const { scrollY } = useScroll();
  const [state, setState] = useState<HeaderState>({
    hidden: true,
    isAtTop: true,
    menuOpen: false,
    isFirstRender: true,
  });

  useLayoutEffect(() => {
    queueMicrotask(() => {
      setState(prev => ({ ...prev, isFirstRender: false }));
    });
  }, []);

  useMotionValueEvent(scrollY, 'change', latest => {
    setState(prev => {
      if (latest > 10) return { ...prev, hidden: false, isAtTop: false };
      if (!prev.menuOpen) return { ...prev, hidden: true, isAtTop: true };
      return prev;
    });
  });

  const toggleMenu = (open?: boolean) =>
    setState(prev => ({
      ...prev,
      menuOpen: typeof open === 'boolean' ? open : !prev.menuOpen,
    }));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -30;
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    toggleMenu(false);
  };

  return {
    state,
    toggleMenu,
    handleScroll,
  };
};
