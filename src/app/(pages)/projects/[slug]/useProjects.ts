'use client';

import { projectDetailsData } from '@/app/data/data';
import type { ProjectDetail } from '@/models/projects/types';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export const useProjects = (): {
  project: ProjectDetail | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { slug } = useParams();

  const project = useMemo(() => {
    if (!slug) return null;
    return projectDetailsData.find(p => p.slug === slug) || null;
  }, [slug]);

  return {
    project,
    isLoading: false,
    error: null,
  };
};

export default useProjects;
