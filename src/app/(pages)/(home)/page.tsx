'use client';

import { sectionData } from '@/app/data/data';
import { useEffect, useState } from 'react';
import {
  AchievementSection,
  ContactSection,
  EducationAndWorkExperienceSection,
  HeroSection,
  PersonalProjectSection,
  ServiceSection,
  SkillSection,
  useAchievement,
  useEducationAndWorkExperience,
  useHero,
  usePersonalProject,
  useService,
  useSkill,
} from '../components/Sections';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import PageLoader from '@/app/components/layout/Loader';

export default function Home() {
  const { hero, isLoading: isLoadingHero } = useHero();
  const { education, workExperience, isLoading } =
    useEducationAndWorkExperience();
  const { skills, isLoading: isLoadingSkills } = useSkill();
  const { services, isLoading: isLoadingServices } = useService();
  const { personalProjects, isLoading: isLoadingPersonalProjects } =
    usePersonalProject();
  const { achievements, isLoading: isLoadingAchievements } = useAchievement();

  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader />;
  }

  return (
    <div className="page-wrapper">
      <Header sectionData={sectionData} />
      <HeroSection heroData={hero} isLoading={isLoadingHero} />
      <EducationAndWorkExperienceSection
        educationData={education}
        workExperienceData={workExperience}
        isLoading={isLoading}
      />
      <SkillSection skillData={skills} isLoading={isLoadingSkills} />
      <ServiceSection serviceData={services} isLoading={isLoadingServices} />
      <PersonalProjectSection
        personalProjectData={personalProjects}
        isLoading={isLoadingPersonalProjects}
      />
      <AchievementSection
        achievementData={achievements}
        isLoading={isLoadingAchievements}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
