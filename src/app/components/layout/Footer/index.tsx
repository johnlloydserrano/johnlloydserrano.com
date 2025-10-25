import { ArrowRight, Rocket } from 'lucide-react';
import Particles from '@tsparticles/react';
import { useParticles } from '@/app/hooks/useParticles';
import { Button } from '../../atoms/Button';
import Link from 'next/link';
import { heroData } from '@/app/data/data';

export default function Footer() {
  const { init, options } = useParticles();

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
                Ready to bring your ideas to life?
              </h3>
              <p className="text-sm text-title-sub quicksand-regular">
                Let’s build something amazing together.
              </p>
            </div>
          </div>

          <Button
            className="w-auto text-base relative overflow-hidden group px-6! py-3"
            variant="primary"
          >
            <span className="absolute left-0 top-0 h-full w-full bg-linear-to-tr from-primary to-accent"></span>
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight />
            </span>
          </Button>
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
              <span className="caveat-bold text-lg">John Lloyd Serrano</span>
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-1.5">
            <p className="hover:underline hover:decoration-primary flex items-center text-title-sub quicksand-regular text-sm">
              <Link href="#" className="z-10 flex items-center gap-2">
                Privacy Policy
              </Link>
            </p>
            <p className="text-sm text-title-sub quicksand-regular">
              <a
                href="https://github.com/johnlloydserrano/johnlloydserrano.com"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-primary"
              >
                View Source on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
