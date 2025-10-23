'use client';

import {
  educationData,
  personalProjectData,
  sectionData,
  serviceData,
  skillData,
  timelineData,
  workExperienceData,
} from '@/app/data/data';
import { useEffect, useState } from 'react';
import HeroSection from '../components/Sections/Hero';
import EducationAndWorkExperienceSection from '../components/Sections/EducationAndWorkExperience';
import SkillSection from '../components/Sections/Skill';
import ServiceSection from '../components/Sections/Service';
import AchievementSection from '../components/Sections/Achievement';
import PersonalProjectSection from '../components/Sections/PersonalProject';
import Contact from '../components/Sections/Contact';
import Footer from '@/app/components/layout/Footer';
import Header from '@/app/components/layout/Header';
import useHero from '../components/Sections/Hero/useHero';
import PageLoader from '@/app/components/layout/Loader';

export default function Home() {
  const { hero, isLoading: isLoadingHero } = useHero();

  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading || isLoadingHero) {
    return <PageLoader />;
  }

  return (
    <div className="page-wrapper">
      <Header sectionData={sectionData} />
      <HeroSection heroData={hero} isLoading={isLoadingHero} />
      <EducationAndWorkExperienceSection
        educationData={educationData}
        workExperienceData={workExperienceData}
        isLoading={false}
      />
      <SkillSection skillData={skillData} isLoading={false} />
      <ServiceSection serviceData={serviceData} isLoading={false} />
      <PersonalProjectSection
        personalProjectData={personalProjectData}
        isLoading={false}
      />
      <AchievementSection achievementData={timelineData} isLoading={false} />
      <Contact />
      <Footer />
    </div>
  );
}
