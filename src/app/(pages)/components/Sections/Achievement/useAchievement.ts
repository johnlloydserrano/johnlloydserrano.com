'use client';

import useQueryTimeline from '@/app/hooks/useQueryTimeline';
import type { Timeline } from '@/models/timelines/types';

export const useAchievement = (): {
  achievements: Timeline[] | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isLoading, error } = useQueryTimeline();

  return {
    achievements: data ?? null,
    isLoading,
    error: error ?? null,
  };
};

export default useAchievement;
