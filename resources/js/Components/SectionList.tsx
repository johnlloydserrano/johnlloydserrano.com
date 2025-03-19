import { useEffect, useState } from "react";
import { sectionData, educationData, workExperienceData, heroData, skillData, personalProjectData, timelineData, serviceData } from "@/data/data";
import EducationAndWorkExperience from "@/Components/home/EducationAndWorkExperience";
import Skill from "@/Components/home/Skill";
import PersonalProject from "@/Components/home/PersonalProject";
import Achievement from "@/Components/home/Achievement";
import Contact from "@/Components/home/Contact";
import Navbar from "@/Components/home/Navbar";
import HeroSection from "@/Components/home/Hero";
import Footer from "@/Components/home/Footer";
import Service from "@/Components/home/Service";

export default function SectionList() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            <Navbar sectionData={sectionData} />
            <HeroSection heroData={heroData} isLoading={isLoading} />
            {sectionData.map((section) => (
                <div key={section.id} id={section.id}>
                    {section.id === "experience" && (
                        <EducationAndWorkExperience
                            educationData={educationData}
                            workExperienceData={workExperienceData}
                            isLoading={isLoading}
                        />
                    )}
                    {section.id === "skills" && (
                        <Skill skillData={skillData} isLoading={isLoading} />
                    )}
                    {section.id === "services" && (
                        <Service serviceData={serviceData} isLoading={isLoading} />
                    )}
                    {section.id === "personal-projects" && (
                        <PersonalProject
                            personalProjectData={personalProjectData}
                            isLoading={isLoading}
                        />
                    )}
                    {section.id === "achievements" && (
                        <Achievement achievementData={timelineData} isLoading={isLoading} />
                    )}
                    {section.id === "contact" && <Contact />}
                </div>
            ))}
            <Footer />
        </>
    );
}
