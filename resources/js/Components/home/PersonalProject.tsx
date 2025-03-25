import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import { motion } from "framer-motion";
import { PersonalProjectSkeleton } from "@/Components/layout/HomeSkeleton";
import SectionHeader from "@/Components/layout/SectionHeader";
import { GridCardList } from "@/Components/CardListGrid";

interface Props {
    personalProjectData: PersonalProject[];
    isLoading: boolean;
}

export default function PersonalProject({ personalProjectData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="personal-project-wrapper">
            <div className="xl:px-24 mx-auto pt-6 pb-12">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <SectionHeader title={t(HOME.section.title.personalProject)} />
                    <div className="h-full w-full flex justify-center">
                        {isLoading ? (
                            <PersonalProjectSkeleton />
                        ) : personalProjectData.length > 0 && (
                            <GridCardList
                                data={personalProjectData}
                                withDescription
                                withLink
                                linkRoute={(slug) => route("project.detail", { slug })}
                                gridClasses="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            />
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
