import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel"
import SectionHeader from "@/Components/layout/SectionHeader";
import Autoplay from "embla-carousel-autoplay";

interface Props {
    achievementData: Timeline[];
    isLoading: boolean;
}

export default function Achievement({ achievementData, isLoading }: Props) {
    const { t } = useTranslation();

    return (
        <div className="achievement-wrapper bg-white">
            <div className="xl:px-24 mx-auto py-6">
                <motion.div
                    className="skill-box p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <SectionHeader title={t(HOME.section.title.achievement)} />
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full p-4 select-none mb-6"
                    >
                        <CarouselContent>
                            {achievementData.map((achievement, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="shadow-none p-0 border-none rounded-none">
                                            <CardContent className="p-0 flex flex-col aspect-square gap-3">
                                                <div className="w-full h-[80%] bg-accent/5 border border-accent/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                                                    <img
                                                        src={achievement.imageUrl}
                                                        alt=""
                                                        className="max-w-full max-h-full object-contain"
                                                    />
                                                </div>
                                                <p className="w-full text-start px-2 space-y-2 pt-4">
                                                    <span className="quicksand-semibold text-lg line-clamp-1">{achievement.title}</span>
                                                    <span className="line-clamp-6 text-sm quicksand-regular leading-relaxed text-justify">{achievement.description}</span>
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>
            </div>
        </div>
    );
}