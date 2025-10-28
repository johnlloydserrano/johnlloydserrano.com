'use client';

import { heroData } from '@/app/data/data';
import Image from 'next/image';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import useProjects from './useProjects';
import Loader from '@/app/components/layout/Loader';

export default function Projects() {
  const { project, isLoading, error } = useProjects();

  if (isLoading) return <Loader />;
  if (!error) {
    return (
      <div className="w-full h-full min-h-screen flex flex-col items-center justify-center font-acorn font-semibold color-effect text-2xl gap-y-6">
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
        Something went wrong. Please try again later.
      </div>
    );
  }
  if (!project) {
    return (
      <div className="w-full h-full min-h-screen flex flex-col items-center justify-center font-acorn font-semibold color-effect text-2xl gap-y-6">
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
        Sorry, we couldn&apos;t find that project.
      </div>
    );
  }

  const {
    title,
    overview,
    objectives = [],
    key_features = [],
    tech_stack = [],
    design,
    improvements = [],
    outcomes,
    repository,
    conclusion,
    images,
  } = project;

  return (
    <>
      {images?.banner && (
        <div
          className="relative bg-[#FFEEEA] w-full min-h-screen h-full rounded-lg overflow-hidden"
          onContextMenu={e => e.preventDefault()}
        >
          <Image
            src={images.banner}
            alt={`${title} Banner`}
            fill
            className="object-contain select-none pointer-events-none"
            priority
          />
        </div>
      )}

      <div className="px-6 py-18 max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="hover:underline hover:decoration-primary text-xs font-normal gap-x-1 flex items-center">
            <ArrowLeftIcon className="w-4 h-4" />
            <Link href="/" className="z-10 flex items-center gap-2">
              Back to Home
            </Link>
          </h2>

          <h1 className="text-5xl font-acorn font-bold color-effect">
            {title}
          </h1>
          {overview && <p className="text-gray-700">{overview}</p>}
        </div>

        {objectives.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Objectives</h2>
            <ul className="list-disc ml-6 space-y-1">
              {objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </section>
        )}

        {key_features.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="list-disc ml-6 space-y-1">
              {key_features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </section>
        )}

        {tech_stack.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <ul className="list-disc ml-6 space-y-1">
              {tech_stack.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </section>
        )}

        {images?.diagram && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Infrastructure Diagram</h2>
            <div className="w-full rounded-lg overflow-hidden relative h-[650px]">
              <Image
                src={images.diagram}
                alt={`${title} Diagram`}
                fill
                className="object-cover select-none pointer-events-none"
                priority
              />
            </div>
          </section>
        )}

        {design && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Design & User Experience</h2>
            <p className="text-gray-700">{design}</p>
          </section>
        )}

        {improvements.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Future Improvements</h2>
            <ul className="list-disc ml-6 space-y-1">
              {improvements.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </section>
        )}

        {outcomes && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Outcomes & Learnings</h2>
            <p className="text-gray-700 whitespace-pre-line">{outcomes}</p>
          </section>
        )}

        {repository && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Source Code</h2>
            <p className="text-sm text-title-sub quicksand-regular">
              <a
                href={repository}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:underline hover:decoration-primary"
              >
                {repository}
              </a>
            </p>
          </section>
        )}

        {conclusion && (
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Conclusion</h2>
            <p className="text-gray-700">{conclusion}</p>
          </section>
        )}
      </div>
    </>
  );
}
