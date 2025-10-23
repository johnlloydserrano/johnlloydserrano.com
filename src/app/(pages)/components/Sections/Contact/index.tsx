import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SocialMediaList from '../components/SocialMediaList';
import { socialLinksData } from '@/app/data/data';

export default function Contact() {
  return (
    <section className="w-full pb-6">
      <div className="xl:px-24 mx-auto py-6">
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ amount: 0.1, once: true }}
        >
          <div className="p-6">
            <SectionHeader
              title="Contact Me"
              description="I look forward to hearing from you. Fill out the form below, and I’ll get back to you as soon as possible."
            />
            <div className="px-4 py-6 flex flex-col gap-8 md:flex-row">
              <div className="w-full md:w-[80%] space-y-6 relative">
                <ContactForm />
              </div>
              <div className="w-full md:w-[25%] flex flex-col justify-start mt-6 space-y-4">
                <ContactInfo />
                <SocialMediaList socialMediaData={socialLinksData} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
