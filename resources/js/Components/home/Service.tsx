import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import { Card, CardContent } from "@/Components/ui/card";
import { Check } from "lucide-react";
import SectionHeader from "@/Components/layout/SectionHeader";

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
                    viewport={{ margin: "-200px", once: true }}
                >
                    <SectionHeader title={t(HOME.section.title.service)} />

                    <div className="w-full py-6">
                        <Card className="rounded-md border shadow-none border-none">
                            <CardContent className="px-4">
                                <ul className="space-y-4">
                                    {serviceData?.map((service, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 leading-relaxed mb-2"
                                        >
                                            <Check className="text-accent min-w-[20px] min-h-[20px]" />
                                            <span className="quicksand-regular">{service.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}