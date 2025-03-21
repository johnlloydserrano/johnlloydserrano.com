import { useState, useRef } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Link } from "@inertiajs/react"
import { useTranslation } from "react-i18next"
import { HOME } from "@/constants/home"
import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { Menu, X } from "lucide-react"
import { heroData } from "@/data/data"

interface Props {
    sectionData: Section[]
}

export default function Navbar({ sectionData }: Props) {
    const { t } = useTranslation()
    const [hidden, setHidden] = useState(true)
    const { scrollY } = useScroll()
    const [isAtTop, setIsAtTop] = useState(true)
    const isFirstRender = useRef(true)
    const [menuOpen, setMenuOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 10) {
            setHidden(false)
            setIsAtTop(false)
        } else {
            if (!menuOpen) {
                setHidden(true)
                setIsAtTop(true)
            }
        }

        if (isFirstRender.current) {
            isFirstRender.current = false
        }
    })


    const handleScroll = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            const yOffset = -30
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
        }
        setMenuOpen(false)
    }

    return (
        <>
            <motion.div
                className={cn(
                    "fixed top-0 z-50 w-full border-b bg-linear-to-b from-background/80 via-background/80 to-background backdrop-blur-md transition-all",
                    isFirstRender.current ? "-translate-y-full" : "",
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
                <div className="mx-auto px-8 xl:px-24 flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
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

                    <nav className="quicksand-semibold hidden lg:flex lg:items-center md:gap-6">
                        {sectionData.map((item) => (
                            <motion.div
                                key={item.id}
                                className="relative text-sm text-gray-700 transition-colors hover:text-gray-900 cursor-pointer"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ y: -2 }}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleScroll(item.id)
                                }}
                            >
                                {item.name}
                                <motion.span
                                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-gray-900 origin-left scale-x-0"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button className="hidden sm:block text-xs px-3! py-0!" variant="primary">
                            <span className="relative z-10 flex items-center gap-2">
                                {t(HOME.section.button.header)}
                            </span>
                        </Button>

                        <button
                            className="lg:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="md:hidden w-full bg-background/95 backdrop-blur-xs fixed top-16 left-0 right-0 z-10 shadow-md"
                    >
                        <div className="flex flex-col gap-4 p-4">
                            {sectionData.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-gray-700 text-base"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleScroll(item.id)
                                    }}
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
