import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { SkillSkeleton } from "@/Components/layout/HomeSkeleton";
import SectionHeader from "@/Components/layout/SectionHeader";
import { GridCardList } from "@/Components/CardListGrid";
import { CTAButton } from "@/Components/CTAButton";

interface Props {
    skillData: Skill[];
    isLoading: boolean;
}

export default function Skill({ skillData, isLoading }: Props) {
    const { t } = useTranslation();

    const handleDownload = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.click();
    };

    return (
        <div className="skill-wrapper">
            <div className="xl:px-24 mx-auto pt-6 pb-12">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    <SectionHeader title={t(HOME.section.title.skill)} />
                    <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
                        {isLoading ? (
                            <SkillSkeleton />
                        ) : (
                            <GridCardList
                                data={skillData}
                                gridClasses="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                                cardContentClass="p-4"
                            />
                        )}
                        <div className="flex justify-center items-center space-x-4 md:space-x-6">
                            <CTAButton
                                icon={Download}
                                variant="primary"
                                onClick={() => handleDownload(route('download.resume'))}
                            >
                                {t(HOME.section.button.resume)}
                            </CTAButton>
                            <CTAButton
                                icon={Download}
                                variant="primary"
                                onClick={() => handleDownload(route('download.skillsheet'))}
                            >
                                {t(HOME.section.button.skillSheet)}
                            </CTAButton>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}