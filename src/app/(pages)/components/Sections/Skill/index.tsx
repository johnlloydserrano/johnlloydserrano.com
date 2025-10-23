import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SkillSkeleton } from '../../Skeletons';
import { CardListGrids } from '../components/CardListGrid';
import { Skill } from '@/models/skills/types';
import { Button } from '@/app/components/atoms/Button';

interface SkillSectionProps {
  skillData: Skill[];
  isLoading: boolean;
}

export default function SkillSection({
  skillData,
  isLoading,
}: SkillSectionProps) {
  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.click();
  };

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
          <SectionHeader title="My Skills" />
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
            <div className="flex justify-center items-center space-x-4 md:space-x-6">
              {/* onClick={() => handleDownload(route('download.resume'))} */}
              <Button
                className="rounded-full px-6 py-3 w-auto relative overflow-hidden group"
                variant="primary"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-linear-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Download />
                  Resume
                </span>
              </Button>
              {/* onClick={() => handleDownload(route('download.skillsheet'))} */}
              <Button
                className="rounded-full px-6 py-3 w-auto relative overflow-hidden group"
                variant="primary"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-linear-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Download />
                  SkillSheet
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
