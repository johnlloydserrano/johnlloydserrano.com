import { ArrowRight, Heart, Rocket } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useParticles } from "@/hooks/use-particles";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { HOME } from "@/constants/home";
import { heroData } from "@/data/data";
import Particles from "@tsparticles/react";

export default function Footer() {
    const { t } = useTranslation();
    const { init, options } = useParticles();

    return (
        <div className="relative w-full select-none border-t bg-gradient-to-b from-white to-background/80 backdrop-blur-md">
            {init && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Particles className="h-full" id="bannerParticles" options={options} />
                </div>
            )}
            <div className="px-8 xl:px-24 mx-auto py-10 z-10 space-y-10">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex space-x-3 items-center">
                        <Rocket
                            size={48}
                            className="text-black"
                        />
                        <div className="space-y-1 text-center sm:text-left">
                            <h3 className="text-base quicksand-medium">{t(HOME.section.title.footer.project.text)}</h3>
                            <p className="text-sm text-muted-foreground quicksand-regular">{t(HOME.section.title.footer.project.desc)}</p>
                        </div>
                    </div>

                    <Button className="w-auto text-lg relative overflow-hidden group !px-6 py-3" variant="primary">
                        <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-tr from-primary to-accent"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            {t(HOME.section.button.footer)}
                            <ArrowRight />
                        </span>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <Link
                            href="/"
                            className="z-10 flex items-center gap-2"
                        >
                            <div
                                className="h-12 w-12 rounded-full bg-center bg-cover bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${heroData.imageUrl})`,
                                }}
                                aria-label={heroData.name}
                                role="img"
                            />
                            <span className="caveat-bold text-lg">{t(HOME.section.title.footer.project.name)}</span>
                        </Link>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-1">
                        <p className="flex items-center text-muted-foreground quicksand-regular text-xs">
                            {t(HOME.section.title.footer.project.made)}
                            <Heart className="ml-1 h-4 w-4 fill-current text-primary" />
                        </p>
                        <p className="text-xs text-muted-foreground quicksand-regular">
                            by <a
                                href="https://www.linkedin.com/in/jl-serrano"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:decoration-primary"
                            >
                                {t(HOME.section.title.footer.project.copyright)}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}