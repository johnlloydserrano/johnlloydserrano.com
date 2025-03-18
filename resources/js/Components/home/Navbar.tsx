import { useState, useRef } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link } from "@inertiajs/react"
import { useTranslation } from "react-i18next"
import { HOME } from "@/constants/home"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

interface Props {
    className?: string
    sectionData: Section[]
}

export default function Navbar({ className, sectionData }: Props) {
    const { t } = useTranslation()
    const [hidden, setHidden] = useState(true)
    const { scrollY } = useScroll()
    const [isAtTop, setIsAtTop] = useState(true)
    const isFirstRender = useRef(true)

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 10) {
            setHidden(false)
            setIsAtTop(false)
        } else {
            setHidden(true)
            setIsAtTop(true)
        }

        if (isFirstRender.current) {
            isFirstRender.current = false
        }
    })

    return (
        <motion.div
            className={cn(
                "fixed top-0 z-50 w-full border-b bg-gradient-to-b from-background/80 via-background/80 to-background backdrop-blur-md transition-all",
                isAtTop ? "border-transparent" : "border-gray-200 dark:border-gray-800",
                isFirstRender.current ? "-translate-y-full" : "",
                className || "",
            )}
            initial={{ y: "-100%" }}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{
                duration: isFirstRender.current ? 0 : 0.2,
                ease: "easeInOut",
            }}
        >
            <div className="container mx-auto px-4 lg:px-[8.5rem] flex h-16 items-center justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-12 w-12 rounded-full flex items-center justify-center">
                            <img src="/images/serrano.png" alt="" />
                        </div>
                        <span className="caveat-bold text-lg">{t(HOME.section.title.footer.project.name)}</span>
                    </Link>
                </div>

                <nav className="quicksand-semibold hidden md:flex md:items-center md:gap-6">
                    {sectionData.map((item) => (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            className="relative text-sm text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white cursor-pointer"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ y: -2 }}
                            onClick={(e) => {
                                e.preventDefault()
                                const section = document.getElementById(item.id)
                                if (section) {
                                    const yOffset = -30
                                    const y = section.getBoundingClientRect().top + window.scrollY + yOffset
                                    window.scrollTo({ top: y, behavior: "smooth" })
                                }
                            }}
                        >
                            {item.name}
                            <motion.span
                                className="absolute left-0 -bottom-1 h-0.5 w-full bg-gray-900 dark:bg-white origin-left scale-x-0"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </nav>


                <Button className="w-full sm:w-auto text-xs relative overflow-hidden group !px-3 !py-0" variant="primary">
                    <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-tr from-primary to-accent"></span>
                    <span className="relative z-10 flex items-center gap-2">
                        {t(HOME.section.button.header)}
                    </span>
                </Button>
            </div>
        </motion.div>
    )
}

