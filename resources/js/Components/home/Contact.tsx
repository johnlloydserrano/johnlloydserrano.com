import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { HOME } from "@/constants/home"
import { socialLinksData } from "@/data/data"
import SectionHeader from "@/Components/layout/SectionHeader"
import SocialMediaList from "@/Components/SocialMediaList"
import ContactForm from "@/Components/ContactForm"
import ContactInfo from "@/Components/ContactInfo"

export default function Contact() {
    const { t } = useTranslation()

    return (
        <section className="w-full pb-6">
            <div className="xl:px-24 mx-auto py-6">
                <motion.div
                    className="h-full w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    <div className="p-6">
                        <SectionHeader
                            title={t(HOME.section.title.contact.text)}
                            description={t(HOME.section.title.contact.desc)}
                        />
                        <div className="px-4 py-6 flex flex-col gap-8 md:flex-row">
                            <div className="w-full md:w-[80%] space-y-6 relative">
                                <ContactForm />
                            </div>
                            <div className="w-full md:w-[25%] flex flex-col justify-start mt-6 space-y-4">
                                <ContactInfo />
                                <SocialMediaList socialMediaData={socialLinksData} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
