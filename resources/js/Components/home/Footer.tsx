import { ArrowRight, Heart, Rocket } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { useParticles } from "@/hooks/use-particles"
import Particles from "@tsparticles/react"
import { Link } from "@inertiajs/react"
import { useTranslation } from "react-i18next"
import { HOME } from "@/constants/home"

export default function Footer() {
    const { t } = useTranslation();
    const { init, options } = useParticles();

    return (
        <div className="relative w-full select-none">
            {init && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Particles className="h-full" id="bannerParticles" options={options} />
                </div>
            )}
            <div className="container pt-12 pb-6 px-[8.5rem] z-10 space-y-12 mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex space-x-2">
                        <Rocket size={48} className="text-black" />
                        <div className="space-y-1">
                            <h3 className="text-base font-medium">{t(HOME.section.title.footer.project.text)}</h3>
                            <p className="text-sm text-muted-foreground">{t(HOME.section.title.footer.project.desc)}</p>
                        </div>
                    </div>
                    <Button className="w-[22%] text-lg relative overflow-hidden group" variant="primary">
                        <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-tr from-primary to-accent"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            {t(HOME.section.button.footer)}
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
                <div className="z-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                    <div className="w-1/3 flex items-center gap-1 text-sm">
                        <Link href="/" className="z-10 flex items-center gap-2">
                            <div className="h-12 w-12 rounded-full flex items-center justify-center">
                                <img src="/images/serrano.png" alt="" />
                            </div>
                            <span className="caveat-bold text-lg">{t(HOME.section.title.footer.project.name)}</span>
                        </Link>
                    </div>
                    <div className="w-1/3 flex flex-col items-end justify-center">
                        <p className="flex items-center">{t(HOME.section.title.footer.project.made)} <Heart className="ml-1 h-4 w-4 fill-current text-primary" /></p>
                        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {t(HOME.section.title.footer.project.copyright)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

