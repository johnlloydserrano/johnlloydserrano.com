import { SocialLink } from '@/models/socialLinks/types';

interface Props {
  socialMediaData: SocialLink[];
}

export default function SocialMediaList({ socialMediaData }: Props) {
  return (
    <div className="h-[50%] w-full p-6 rounded-md space-y-6">
      <h4 className="font-medium">Social Media</h4>
      <div className="flex space-x-4">
        {socialMediaData.map((social, index) => (
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
