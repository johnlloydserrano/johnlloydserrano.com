import { useTranslation } from "react-i18next";
import SectionHeader from "../layout/SectionHeader";
import { HOME } from "@/constants/home";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/Components/ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { SkillSkeleton } from "@/Components/layout/HomeSkeleton";

interface Skill {
    name: string;
    imageUrl: string;
}

interface Props {
    skillData: Skill[];
    isLoading: boolean;
}

export default function Skill({ skillData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="skill-wrapper">
            <div className="container px-6 sm:px-12 md:px-16 lg:px-24 py-6 mx-auto">
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
                            <div className="w-full grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6">
                                {skillData?.map((skill, index) => (
                                    <Card
                                        className="rounded-md border shadow-none"
                                        key={index}
                                    >
                                        <CardContent className="p-0">
                                            <img
                                                src={skill.imageUrl || "/placeholder.png"}
                                                className="object-cover rounded-t-md w-full h-32"
                                                alt={`${skill.name || "Skill"} logo`}
                                            />
                                        </CardContent>
                                        <CardFooter className="p-2">
                                            <p className="text-xs quicksand-regular text-center w-full">{skill.name}</p>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        )}
                        <Button
                            className="w-full sm:w-auto relative overflow-hidden group"
                            variant="primary"
                        >
                            <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-400 ease-out group-hover:w-full"></span>
                            <span className="relative z-10 flex items-center gap-2">
                                <Download />
                                {t(HOME.section.button.skillSheet)}
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}