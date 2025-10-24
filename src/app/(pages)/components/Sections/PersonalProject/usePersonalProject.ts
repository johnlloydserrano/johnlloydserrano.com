'use client';

import useQueryPersonalProject from '@/app/hooks/useQueryPersonalProject';
import type { PersonalProject } from '@/models/personalProjects/types';

export const usePersonalProject = (): {
  personalProjects: PersonalProject[] | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isLoading, error } = useQueryPersonalProject();

  return {
    personalProjects: data ?? null,
    isLoading,
    error: error ?? null,
  };
};

export default usePersonalProject;
