'use client';

import {
  educationData,
  heroData,
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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="page-wrapper">
      <Header sectionData={sectionData} />
      <HeroSection heroData={heroData} isLoading={isLoading} />
      <EducationAndWorkExperienceSection
        educationData={educationData}
        workExperienceData={workExperienceData}
        isLoading={isLoading}
      />
      <SkillSection skillData={skillData} isLoading={isLoading} />
      <ServiceSection serviceData={serviceData} isLoading={isLoading} />
      <PersonalProjectSection
        personalProjectData={personalProjectData}
        isLoading={isLoading}
      />
      <AchievementSection
        achievementData={timelineData}
        isLoading={isLoading}
      />
      <Contact />
      <Footer />
    </div>
  );
}
