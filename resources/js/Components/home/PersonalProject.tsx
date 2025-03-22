import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/Components/ui/card";
import { motion } from "framer-motion";
import { PersonalProjectSkeleton } from "@/Components/layout/HomeSkeleton";
import { Link } from "@inertiajs/react";
import SectionHeader from "@/Components/layout/SectionHeader";

interface Props {
    personalProjectData: PersonalProject[];
    isLoading: boolean;
}

export default function PersonalProject({ personalProjectData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="personal-project-wrapper">
            <div className="xl:px-24 mx-auto py-6">
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
                            <div className="w-full grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 py-6">
                                {personalProjectData.map((personalProject, index) => (
                                    <Link
                                        key={index}
                                        href={route('project.detail', { slug: personalProject.slug })}
                                        className="rounded-md"
                                    >
                                        <Card className="rounded-md border shadow-none bg-white">
                                            <CardContent className="p-0">
                                                <div
                                                    className="w-full h-64 rounded-t-md bg-center bg-cover"
                                                    style={{ backgroundImage: `url(${personalProject.imageUrl})` }}
                                                    role="img"
                                                    aria-label={`${personalProject.name} logo`}
                                                />
                                            </CardContent>
                                            <CardFooter className="p-2 flex flex-col items-start space-y-2">
                                                <p className="text-md quicksand-semibold text-lg">{personalProject.name}</p>
                                                <p className="text-md quicksand-regular text-sm">{personalProject.description}</p>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
