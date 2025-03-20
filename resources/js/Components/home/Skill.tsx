import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import {
    Card,
    CardContent,
} from "@/Components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Download } from "lucide-react";
import { SkillSkeleton } from "@/Components/layout/HomeSkeleton";
import SectionHeader from "@/Components/layout/SectionHeader";

interface Props {
    skillData: Skill[];
    isLoading: boolean;
}

export default function Skill({ skillData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="skill-wrapper">
            <div className="xl:px-24 mx-auto py-6">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ margin: "-200px", once: true }}
                >
                    <SectionHeader title={t(HOME.section.title.skill)} />
                    <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
                        {isLoading ? (
                            <SkillSkeleton />
                        ) : (
                            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6">
                                {skillData?.map((skill, index) => (
                                    <Card
                                        className="rounded-md border shadow-none border-none bg-transparent"
                                        key={index}
                                    >
                                        <CardContent className="p-4">
                                            <div
                                                className="bg-center bg-contain bg-no-repeat w-full h-24"
                                                style={{
                                                    backgroundImage: `url(${skill.imageUrl})`,
                                                    backgroundPosition: "center center",
                                                }}
                                                aria-label={`${skill.name || "Skill"} logo`}
                                                role="img"
                                            />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                        <div className="flex justify-center items-center space-x-6">
                            <Button
                                className="w-auto relative overflow-hidden group"
                                variant="primary"
                            >
                                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-400 ease-out group-hover:w-full"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download />
                                    {t(HOME.section.button.resume)}
                                </span>
                            </Button>
                            <Button
                                className="w-auto relative overflow-hidden group"
                                variant="primary"
                            >
                                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-400 ease-out group-hover:w-full"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download />
                                    {t(HOME.section.button.skillSheet)}
                                </span>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}