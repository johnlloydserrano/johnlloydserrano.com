import { useTranslation } from 'react-i18next';

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="h-1/3 flex items-center px-6 w-full rounded-md">
      <div className="space-y-2">
        <h4 className="quicksand-semibold">{t('contactForm.info.title')}</h4>
        <p className="text-sm text-title-sub quicksand-regular leading-relaxed">
          {t('contactForm.info.address')}
          <br />
          {t('contactForm.info.city')}
          <br />
          {t('contactForm.info.email')}
          <br />
          {t('contactForm.info.phone')}
        </p>
      </div>
    </div>
  );
}
