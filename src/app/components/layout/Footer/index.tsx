import { Rocket } from 'lucide-react';
import Particles from '@tsparticles/react';
import { useParticles } from '@/app/hooks/useParticles';
import Link from 'next/link';
import Image from 'next/image';
import { heroData } from '@/app/data/data';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { init, options } = useParticles();
  const { t } = useTranslation();

  return (
    <div className="relative w-full select-none border-t bg-linear-to-b from-white to-background/80 backdrop-blur-md">
      {init && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            className="h-full"
            id="bannerParticles"
            options={options}
          />
        </div>
      )}
      <div className="px-8 xl:px-24 mx-auto py-10 z-10 space-y-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex space-x-3 items-center">
            <Rocket size={48} className="text-black" />
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base quicksand-medium">
                {t('footer.title')}
              </h3>
              <p className="text-sm text-title-sub quicksand-regular">
                {t('footer.description')}
              </p>
            </div>
          </div>

          <Link
            href="https://www.producthunt.com/products/john-lloyd-serrano?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-john-lloyd-serrano-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1032511&theme=light&t=1761873028499"
              alt="John Lloyd Serrano - A simple portfolio built to share my work and journey | Product Hunt"
              width={250}
              height={54}
              style={{ width: '250px', height: '54px' }}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Link href="#" className="z-10 flex items-center gap-2">
              <div
                className="h-12 w-12 rounded-full bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${heroData?.imageUrl})`,
                }}
                aria-label={heroData?.name}
                role="img"
              />
              <span className="caveat-bold text-lg">{t('brand')}</span>
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-1.5">
            <p className="hover:underline hover:decoration-primary flex items-center text-title-sub quicksand-regular text-sm">
              <Link
                href="privacy-policy"
                className="z-10 flex items-center gap-2"
              >
                {t('privacyPolicy')}
              </Link>
            </p>
            <p className="text-sm text-title-sub quicksand-regular">
              <a
                href="https://github.com/johnlloydserrano/johnlloydserrano.com"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-primary"
              >
                {t('viewGithubSource')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
