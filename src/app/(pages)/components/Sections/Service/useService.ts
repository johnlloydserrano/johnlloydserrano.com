'use client';

import useQueryService from '@/app/hooks/useQueryService';
import type { Service } from '@/models/services/types';

export const useService = (): {
  services: Service[] | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isLoading, error } = useQueryService();

  return {
    services: data ?? null,
    isLoading,
    error: error ?? null,
  };
};

export default useService;
