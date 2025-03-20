import { useParticles } from "@/hooks/use-particles";
import { Button } from "../ui/button";
import { Handshake, Rocket } from "lucide-react";
import { HOME } from "@/constants/home";
import { useTranslation } from "react-i18next";
import Particles from "@tsparticles/react";

interface Props {
    heroData: Hero;
    isLoading: boolean;
}

export default function HeroSection({ heroData, isLoading }: Props) {
    const { init, options } = useParticles();
    const { t } = useTranslation();

    return (
        <div className="hero-wrapper min-h-screen h-full relative overflow-hidden select-none flex flex-col justify-center items-center mx-auto">
            {init && (
                <div className="absolute inset-0 z-0 pointer-events-none h-full w-full overflow-hidden">
                    <Particles id="heroParticles" className="h-full w-full" options={options} />
                </div>
            )}
            <section className="relative px-8 xl:px-24 mx-auto w-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-full py-6">
                    <p className="font-acorn text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-xl-responsive tracking-tight color-effect leading-tight w-full">
                        {heroData.name}
                    </p>
                </div>
                <div className="hero-section-box w-full flex flex-col lg:flex-row items-center justify-center">
                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left">
                        <div
                            className="mt-6 w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96 bg-center bg-contain bg-no-repeat"
                            style={{ backgroundImage: `url(${heroData.imageUrl})` }}
                        />
                        <div className="mt-6 w-full flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Button
                                className="w-full sm:w-auto px-6 py-3 relative overflow-hidden group"
                                variant="primary"
                            >
                                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    <Handshake />
                                    {t(HOME.section.button.work)}
                                </span>
                            </Button>
                            <Button
                                className="w-full sm:w-auto px-6 py-3 relative overflow-hidden group"
                                variant="primary"
                            >
                                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    <Rocket />
                                    {t(HOME.section.button.project)}
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-4 mt-10 lg:mt-0">
                        <p className="font-acorn text-3xl md:text-4xl lg:text-4xl color-effect sm:text-start text-center">
                            {heroData.headline}
                        </p>
                        <div className="space-y-4 mt-6 quicksand-medium text-text text-base sm:text-md tracking-wide leading-relaxed sm:text-start text-center">
                            {heroData.paragraphs.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
