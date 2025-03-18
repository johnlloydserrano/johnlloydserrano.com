import { useTranslation } from "react-i18next";
import SectionHeader from "../layout/SectionHeader";
import { HOME } from "@/constants/home";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/Components/ui/card";
import { motion } from "framer-motion";
import { PersonalProjectSkeleton } from "@/Components/layout/HomeSkeleton";

interface Props {
    personalProjectData: PersonalProject[];
    isLoading: boolean;
}

export default function PersonalProject({ personalProjectData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="personal-project-wrapper bg-white">
            <div className="container px-6 sm:px-12 md:px-16 lg:px-24 py-6 mx-auto">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <SectionHeader title={t(HOME.section.title.personalProject)} />
                    <div className="h-full w-full flex justify-center">
                        {isLoading ? (
                            <PersonalProjectSkeleton />
                        ) : personalProjectData.length > 0 && (
                            <div className="w-full grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 py-6">
                                {personalProjectData.map((personalProject, index) => (
                                    <Card
                                        className="rounded-md border shadow-none"
                                        key={index}
                                    >
                                        <CardContent className="p-0">
                                            <img
                                                src={personalProject.imageUrl}
                                                className="object-cover rounded-t-md"
                                                alt={`${personalProject.name} logo`}
                                            />
                                        </CardContent>
                                        <CardFooter className="p-2 flex flex-col items-start space-y-2">
                                            <p className="text-md quicksand-semibold text-lg">{personalProject.name}</p>
                                            <p className="text-md quicksand-regular text-sm">{personalProject.description}</p>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}