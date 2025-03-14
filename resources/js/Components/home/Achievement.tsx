import { useTranslation } from "react-i18next";
import SectionHeader from "../layout/SectionHeader";
import { HOME } from "@/constants/home";
import { motion } from "framer-motion";
import TimelineLayout from "../layout/timeline/TimelineLayout";

interface Props {
    achievementData: Timeline[];
    isLoading: boolean;
}

export default function Achievement({ achievementData, isLoading }: Props) {
    const { t } = useTranslation()

    return (
        <div className="achievement-wrapper">
            <div className="container px-24 py-6 mx-auto">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ margin: "-200px", once: true }}
                >
                    <SectionHeader title={t(HOME.section.title.achievement)} />
                    <div className="h-full w-full flex justify-center items-center">
                        <TimelineLayout timelineData={achievementData} isLoading={isLoading} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}