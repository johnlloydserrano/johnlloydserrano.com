import Achievement from '@/Components/home/Achievement';
import EducationAndWorkExperience from '@/Components/home/EducationAndWorkExperience';
import HeroSection from '@/Components/home/Hero';
import PersonalProject from '@/Components/home/PersonalProject';
import Skill from '@/Components/home/Skill';
import { timelineData, educationData, heroData, personalProjectData, skillData, workExperienceData } from '@/data/data';

export default function Welcome() {
    return (
        <>
            <HeroSection {...heroData} />
            <EducationAndWorkExperience educationData={educationData} workExperienceData={workExperienceData}/>
            <Skill skillData={skillData}/>
            <PersonalProject personalProjectData={personalProjectData}/>
            <Achievement achievementData={timelineData}/>
        </>
    );
}
