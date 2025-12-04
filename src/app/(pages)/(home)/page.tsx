'use client';

import {
  educationData,
  heroData,
  personalProjectsData,
  sectionData,
  serviceData,
  skillData,
  workExperienceData,
  achievementsData,
} from '@/app/data/data';
import {
  AchievementSection,
  ContactSection,
  EducationAndWorkExperienceSection,
  HeroSection,
  PersonalProjectSection,
  ServiceSection,
  SkillSection,
} from '../components/Sections';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header sectionData={sectionData} />
      <HeroSection heroData={heroData} />
      <EducationAndWorkExperienceSection
        educationData={educationData}
        workExperienceData={workExperienceData}
      />
      <SkillSection skillData={skillData} isLoading={false} />
      <ServiceSection serviceData={serviceData} />
      <PersonalProjectSection
        personalProjectData={personalProjectsData}
        isLoading={false}
      />
      <AchievementSection
        achievementData={achievementsData}
        isLoading={false}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
