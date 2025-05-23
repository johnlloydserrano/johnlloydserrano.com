import { useTranslation } from "react-i18next"
import { HOME } from "@/constants/home"

export default function ContactInfo() {
    const { t } = useTranslation()

    return (
        <div className="h-1/3 flex items-center px-6 w-full rounded-md">
            <div className="space-y-2">
                <h4 className="quicksand-semibold">{t(HOME.section.title.contact.subTextContact)}</h4>
                <p className="text-sm text-title-sub quicksand-regular leading-relaxed">
                    Greenland, Cogon Pardo
                    <br />
                    Cebu City, 6000 Cebu
                    <br />
                    contact@johnlloydserrano.com
                    <br />
                    +63 976 428 1616
                </p>
            </div>
        </div>
    )
}
