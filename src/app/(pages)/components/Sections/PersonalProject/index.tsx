import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { PersonalProjectSkeleton } from '../../Skeletons';
import { CardListGrids } from '../components/CardListGrid';
import { PersonalProject } from '@/models/personalProjects/types';

interface PersonalProjectSectionProps {
  personalProjectData: PersonalProject[];
  isLoading: boolean;
}

export default function PersonalProjectSection({
  personalProjectData,
  isLoading,
}: PersonalProjectSectionProps) {
  return (
    <div className="personal-project-wrapper">
      <div className="xl:px-24 mx-auto pt-6 pb-12">
        <motion.div
          className="skill-box p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionHeader title="My Personal Projects" />
          <div className="h-full w-full flex justify-center">
            {isLoading ? (
              <PersonalProjectSkeleton />
            ) : (
              personalProjectData.length > 0 && (
                <CardListGrids
                  data={personalProjectData}
                  withDescription
                  withLink
                  // linkRoute={(slug) => route("project.detail", { slug })}
                  gridClasses="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                />
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
