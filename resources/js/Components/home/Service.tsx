import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import SectionHeader from "@/Components/layout/SectionHeader";
import CardList from "@/Components/CardList";

interface Props {
    serviceData: Service[];
    isLoading: boolean;
}

export default function Service({ serviceData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="service-wrapper bg-white">
            <div className="xl:px-24 mx-auto py-6">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    <SectionHeader title={t(HOME.section.title.service)} />

                    <div className="w-full py-6">
                        <CardList listData={serviceData} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}