'use client';

import {
  educationData,
  heroData,
  sectionData,
  serviceData,
  skillData,
  workExperienceData,
} from '@/app/data/data';
import {
  AchievementSection,
  ContactSection,
  EducationAndWorkExperienceSection,
  HeroSection,
  PersonalProjectSection,
  ServiceSection,
  SkillSection,
  useAchievement,
  usePersonalProject,
} from '../components/Sections';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
  const { personalProjects, isLoading: isLoadingPersonalProjects } =
    usePersonalProject();
  const { achievements, isLoading: isLoadingAchievements } = useAchievement();

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
