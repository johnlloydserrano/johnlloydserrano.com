import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import CarouselList from '../components/CarouselList';
import { Timeline } from '@/models/timelines/types';
import { useTranslation } from 'react-i18next';

interface AchievementSectionProps {
  achievementData: Timeline[] | null;
  isLoading: boolean;
}

export default function AchievementSection({
  achievementData,
}: AchievementSectionProps) {
  const { t } = useTranslation();

  return (
    <div id="achievements" className="achievement-wrapper bg-white">
      <div className="xl:px-24 mx-auto pt-6 pb-12">
        <motion.div
          className="skill-box p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionHeader title={t('sectionTitles.myAchievements')} />

          <CarouselList achievementData={achievementData} />
        </motion.div>
      </div>
    </div>
  );
}
