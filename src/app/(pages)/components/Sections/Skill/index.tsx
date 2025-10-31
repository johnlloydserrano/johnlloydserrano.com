import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { SkillSkeleton } from '../../Skeletons';
import { CardListGrids } from '../components/CardListGrid';
import { Skill } from '@/models/skills/types';
import { useTranslation } from 'react-i18next';

interface SkillSectionProps {
  skillData: Skill[] | null;
  isLoading: boolean;
}

export default function SkillSection({
  skillData,
  isLoading,
}: SkillSectionProps) {
  const { t } = useTranslation();

  return (
    <div id="skills" className="skill-wrapper">
      <div className="xl:px-24 mx-auto pt-6 pb-12">
        <motion.div
          className="skill-box p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ amount: 0.1, once: true }}
        >
          <SectionHeader title={t('sectionTitles.mySkills')} />
          <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
            {isLoading ? (
              <SkillSkeleton />
            ) : (
              <CardListGrids
                data={skillData}
                gridClasses="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                cardContentClass="p-4"
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
