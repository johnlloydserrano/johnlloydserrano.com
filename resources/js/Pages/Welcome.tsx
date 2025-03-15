import Achievement from '@/Components/home/Achievement';
import Contact from '@/Components/home/Contact';
import EducationAndWorkExperience from '@/Components/home/EducationAndWorkExperience';
import Footer from '@/Components/home/Footer';
import HeroSection from '@/Components/home/Hero';
import PersonalProject from '@/Components/home/PersonalProject';
import Skill from '@/Components/home/Skill';
import { timelineData, educationData, heroData, personalProjectData, skillData, workExperienceData } from '@/data/data';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            <HeroSection heroData={heroData} isLoading={isLoading} />
            <EducationAndWorkExperience educationData={educationData} workExperienceData={workExperienceData} isLoading={isLoading} />
            <Skill skillData={skillData} isLoading={isLoading} />
            <PersonalProject personalProjectData={personalProjectData} isLoading={isLoading} />
            <Achievement achievementData={timelineData} isLoading={isLoading} />
            <Contact />
            <Footer />
        </>
    );
}
