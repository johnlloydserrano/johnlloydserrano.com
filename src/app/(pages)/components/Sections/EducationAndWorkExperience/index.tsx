import { motion } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CardList from '../components/CardList';
import { Education } from '@/models/educations/types';
import { WorkExperience } from '@/models/workExperiences/types';
import { Button } from '@/app/components/atoms/Button';
import { useTranslation } from 'react-i18next';

interface EducationAndWorkExperienceSectionProps {
  educationData: Education[] | null;
  workExperienceData: WorkExperience[] | null;
}

export default function EducationAndWorkExperienceSection({
  educationData,
  workExperienceData,
}: EducationAndWorkExperienceSectionProps) {
  const { t } = useTranslation();

  return (
    <section>
      <div id="experience" className="education-and-work-wrapper bg-white">
        <div className="xl:px-24 mx-auto pt-6 pb-12">
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ amount: 0.1, once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 p-6 space-y-12 lg:space-y-0">
              <div className="w-full space-y-6">
                <SectionHeader title={t('sectionTitles.myEducation')} />
                <div className="w-full grid grid-cols-1 gap-4 px-4">
                  {educationData?.map(({ id, logo, school, degree, year }) => (
                    <CardList
                      key={id}
                      logo={logo}
                      title={school}
                      subtitle={degree}
                      description={year}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full space-y-6">
                <SectionHeader title={t('sectionTitles.myWorkExperience')} />
                <div className="w-full grid grid-cols-1 gap-4 px-4">
                  {workExperienceData?.map(
                    ({ id, logo, company, role, period }) => (
                      <CardList
                        key={id}
                        logo={logo}
                        title={company}
                        subtitle={role}
                        description={period}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center py-6">
              <a
                href="https://linkedin.com/in/jl-serrano"
                rel="noopener noreferrer"
                target="_blank"
                className="w-auto relative overflow-hidden group"
              >
                <Button
                  className="rounded-full px-6 py-3 w-auto relative overflow-hidden group"
                  variant="primary"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-linear-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <SquareArrowOutUpRight />
                    {t('linkedIn')}
                  </span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
