'use client';

import Link from 'next/link';
import { heroData } from './data/data';
import { ArrowLeftIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center gap-y-6">
      <div className="flex flex-col items-center justify-center font-acorn font-semibold color-effect text-2xl  gap-y-6">
        {heroData?.imageUrl && (
          <div
            className="h-12 w-12 rounded-full bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${heroData?.imageUrl})`,
            }}
            aria-label={heroData?.name || 'User avatar'}
            role="img"
          />
        )}
        {t('errors.404NotFound')}
      </div>
      <Link
        href="/"
        className="hover:underline hover:decoration-primary flex items-center gap-x-1"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        {t('errors.goBackHome')}
      </Link>
    </div>
  );
}
