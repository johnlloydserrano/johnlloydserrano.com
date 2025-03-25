import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import { motion } from "framer-motion";
import SectionHeader from "@/Components/layout/SectionHeader";
import CarouselList from "@/Components/CarouselList";

interface Props {
    achievementData: Timeline[];
    isLoading: boolean;
}

export default function Achievement({ achievementData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="achievement-wrapper bg-white">
            <div className="xl:px-24 mx-auto pt-6 pb-12">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <SectionHeader title={t(HOME.section.title.achievement)} />
                    <CarouselList achievementData={achievementData} />
                </motion.div>
            </div>
        </div>
    );
}
