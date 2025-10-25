'use client';

import {
  educationData,
  heroData,
  sectionData,
  serviceData,
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
  useSkill,
} from '../components/Sections';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
  const { skills, isLoading: isLoadingSkills } = useSkill();
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
      <SkillSection skillData={skills} isLoading={isLoadingSkills} />
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
