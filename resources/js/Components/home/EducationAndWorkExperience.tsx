import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import { Button } from "@/Components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { EducationAndWorkExperienceSkeleton } from "@/Components/layout/HomeSkeleton";
import ListItem from "@/Components/layout/ListItem";
import SectionHeader from "@/Components/layout/SectionHeader";

interface Props {
    educationData: Education[];
    workExperienceData: WorkExperience[];
    isLoading: boolean
}

export default function EducationAndWorkExperience({ educationData, workExperienceData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <section>
            <div className="education-and-work-wrapper bg-white">
                <div className="xl:px-24 mx-auto py-6">
                    <motion.div
                        className="h-full w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ amount: 0.1, once: true }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 space-y-12 lg:space-y-0">
                            <div className="w-full space-y-6">
                                <SectionHeader title={t(HOME.section.title.education)} />
                                <div className="w-full grid grid-cols-1 gap-4 px-4">
                                    {isLoading ? (
                                        <EducationAndWorkExperienceSkeleton />
                                    ) : (
                                        educationData?.map(({ id, logo, school, degree, year }) => (
                                            <ListItem
                                                key={id}
                                                logo={logo}
                                                title={school}
                                                subtitle={degree}
                                                description={year}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>

                            <div className="w-full space-y-6">
                                <SectionHeader title={t(HOME.section.title.workExperience)} />
                                <div className="w-full grid grid-cols-1 gap-4 px-4">
                                    {isLoading ? (
                                        <EducationAndWorkExperienceSkeleton />
                                    ) : (
                                        workExperienceData?.map(({ id, logo, company, role, period }) => (
                                            <ListItem
                                                key={id}
                                                logo={logo}
                                                title={company}
                                                subtitle={role}
                                                description={period}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center py-6">
                            <a href="https://linkedin.com/in/jl-serrano" rel="noopener noreferrer" target="_blank" className="w-auto relative overflow-hidden group">
                                <Button className="w-auto relative overflow-hidden group" variant="primary">
                                    <span className="absolute left-0 top-0 h-full w-0 bg-linear-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <SquareArrowOutUpRight />
                                        {t(HOME.section.button.linkedIn)}
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
