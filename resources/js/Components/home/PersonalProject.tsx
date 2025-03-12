import { useTranslation } from "react-i18next";
import SectionHeader from "../layout/SectionHeader";
import { HOME } from "@/constants/home";

interface Props {
    personalProjectData: PersonalProject[];
}

export default function PersonalProject({ personalProjectData }: Props) {
    const { t } = useTranslation()

    return (
        <div className="personal-project-wrapper">
            <div className="container mx-auto">
                <SectionHeader title={t(HOME.section.title.personalProject)} />
                <div className="h-full w-full flex justify-center">
                    <div className="w-full grid grid-cols-1 gap-x-6 p-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6 py-6">
                        {personalProjectData.map((personalProject, index) => (
                            <div className="group relative" key={index}>
                                <div className="border shadow-sm rounded-lg bg-white relative flex flex-wrap">
                                    <img src={personalProject.imageUrl} className="object-contain p-6 w-full object-center" alt={`image of ${personalProject.name}`} />
                                    <p>{personalProject.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}