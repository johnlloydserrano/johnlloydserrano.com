'use client';

import useQuerySkill from '@/app/hooks/useQuerySkill';
import type { Skill } from '@/models/skills/types';

export const useSkill = (): {
  skills: Skill[] | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isLoading, error } = useQuerySkill();

  return {
    skills: data ?? null,
    isLoading,
    error: error ?? null,
  };
};

export default useSkill;
