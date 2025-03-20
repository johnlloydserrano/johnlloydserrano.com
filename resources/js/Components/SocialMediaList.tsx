import { HOME } from "@/constants/home"
import { useTranslation } from "react-i18next"

interface Props {
    socialMediaData: SocialLink[]
}

export default function SocialMediaList({ socialMediaData }: Props) {
    const { t } = useTranslation();

    return (
        <div className="h-[50%] w-full p-6 rounded-md space-y-6">
            <h4 className="font-medium">{t(HOME.section.title.contact.subTextSocial)}</h4>
            <div className="flex space-x-4">
                {socialMediaData.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={social.imageUrl}
                            alt={social.name}
                            className="h-8 w-8 object-contain"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}