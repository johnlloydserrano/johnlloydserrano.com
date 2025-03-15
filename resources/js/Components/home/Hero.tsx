import Particles from "@tsparticles/react";
import { useParticles } from "@/hooks/use-particles";
import { HeroSkeleton } from "@/Components/layout/skeleton/HomeSkeleton";
import { Button } from "../ui/button";
import { Handshake, Rocket } from "lucide-react";
import { HOME } from "@/constants/home";
import { useTranslation } from "react-i18next";

interface Props {
    heroData: Hero;
    isLoading: boolean;
}

export default function HeroSection({ heroData, isLoading }: Props) {
    const { init, options } = useParticles();
    const { t } = useTranslation();

    if (isLoading) return <HeroSkeleton />;

    return (
        <div className="hero-wrapper h-screen relative overflow-hidden select-none">
            {init && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Particles id="heroParticles" options={options} />
                </div>
            )}
            <section className="relative container px-24 mx-auto bg-transparent w-full h-full flex items-center">
                <div className="hero-section-box">
                    <div className="flex items-start justify-center">
                        <div className="p-6 mt-6 text-start">
                            <p className="font-acorn text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-xxl-responsive tracking-tight color-effect leading-tight">
                                {heroData.name}
                            </p>
                        </div>
                    </div>
                    <div className="h-full flex flex-col md:flex-row p-6">
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0">
                            <img className="h-72 sm:h-80 md:h-96" src={heroData.imageUrl} alt={heroData.name} />
                            <div className="mt-6 w-full flex justify-center items-center py-6 space-x-6">
                                <Button className="w-[30%] relative overflow-hidden group" variant="primary">
                                    <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Handshake />
                                        {t(HOME.section.button.work)}
                                    </span>
                                </Button>
                                <Button className="w-[30%] relative overflow-hidden group" variant="primary">
                                    <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Rocket />
                                        {t(HOME.section.button.project)}
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-1/2 p-4 mt-6">
                            <p className="font-acorn text-3xl sm:text-4xl md:text-5xl lg:text-4xl color-effect">{heroData.headline}</p>
                            <div className="space-y-4 mt-12 quicksand-medium text-text text-base sm:text-md tracking-wide leading-relaxed">
                                {heroData.paragraphs.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
