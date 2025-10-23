'use client';

import useQueryHero from '@/app/hooks/useQueryHero';
import type { Hero } from '@/models/heroes/types';

export const useHero = (): {
  hero: Hero | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isLoading, error } = useQueryHero();

  return {
    hero: data ?? null,
    isLoading,
    error: error ?? null,
  };
};

export default useHero;
