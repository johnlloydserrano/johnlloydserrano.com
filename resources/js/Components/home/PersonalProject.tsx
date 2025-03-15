import { useTranslation } from "react-i18next";
import SectionHeader from "../layout/SectionHeader";
import { HOME } from "@/constants/home";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/Components/ui/card"
import { motion } from "framer-motion";
import { PersonalProjectSkeleton } from "@/Components/layout/skeleton/HomeSkeleton";

interface Props {
    personalProjectData: PersonalProject[];
    isLoading: boolean;
}

export default function PersonalProject({ personalProjectData, isLoading }: Props) {
    const { t } = useTranslation()

    return (
        <div className="personal-project-wrapper bg-white">
            <div className="container px-24 py-6 mx-auto">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ margin: "-200px", once: true }}
                >
                    <SectionHeader title={t(HOME.section.title.personalProject)} />
                    <div className="h-full w-full flex justify-center">
                        <div className="w-full grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 py-6">
                            {isLoading ? (
                                <PersonalProjectSkeleton />
                            ) : (
                                personalProjectData.map((personalProject, index) => (
                                    <Card className="rounded-md border shadow-none" key={index}>
                                        <CardContent className="p-0">
                                            <img src={personalProject.imageUrl} className="object-cover rounded-t-md" alt={`${personalProject.name} logo`} />
                                        </CardContent>
                                        <CardFooter className="p-2 flex flex-col items-start">
                                            <p className="text-md quicksand-semibold text-lg">{personalProject.name}</p>
                                            <p className="text-md quicksand-regular text-sm">{personalProject.description}</p>
                                        </CardFooter>
                                    </Card>
                                ))
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}