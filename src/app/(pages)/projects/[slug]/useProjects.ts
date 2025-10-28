'use client';

import useQueryProjectDetail from '@/app/hooks/useQueryProjectDetail';
import type { ProjectDetail } from '@/models/projects/types';
import { useParams } from 'next/navigation';

export const useProjects = (): {
  project: ProjectDetail | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { slug } = useParams();
  const { data, isLoading, error } = useQueryProjectDetail(slug as string);

  return {
    project: data ?? null,
    isLoading,
    error: error ?? null,
  };
};

export default useProjects;
