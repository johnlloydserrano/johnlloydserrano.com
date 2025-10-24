'use client';

import useQuerySocialLink from '@/app/hooks/useQuerySocialLink';
import type { SocialLink } from '@/models/socialLinks/types';

export const useSocialLink = (): {
  socialLinks: SocialLink[] | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isLoading, error } = useQuerySocialLink();

  return {
    socialLinks: data ?? null,
    isLoading,
    error: error ?? null,
  };
};

export default useSocialLink;
