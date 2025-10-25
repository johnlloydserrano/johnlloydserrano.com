import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import CardList from '../components/CardList';
import { Service } from '@/models/services/types';

interface ServiceSectionProps {
  serviceData: Service[] | null;
}

export default function ServiceSection({ serviceData }: ServiceSectionProps) {
  return (
    <div id="services" className="service-wrapper bg-white">
      <div className="xl:px-24 mx-auto py-6">
        <motion.div
          className="skill-box p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ amount: 0.1, once: true }}
        >
          <SectionHeader title="My Services" />

          <div className="w-full py-6">
            <CardList listData={serviceData} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
