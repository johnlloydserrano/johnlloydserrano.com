import { SocialLink } from '@/models/socialLinks/types';
import { useTranslation } from 'react-i18next';

interface Props {
  socialMediaData: SocialLink[] | null;
}

export default function SocialMediaList({ socialMediaData }: Props) {
  const { t } = useTranslation();

  return (
    <div className="h-[50%] w-full p-6 rounded-md space-y-6">
      <h4 className="font-medium">{t('contactForm.info.socialMediaTitle')}</h4>
      <div className="flex space-x-4">
        {socialMediaData?.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            className="flex items-center justify-center hover:text-primary transition-colors"
            rel="noopener noreferrer"
          >
            <div
              className="h-8 w-8 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${social.imageUrl})` }}
              title={social.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
