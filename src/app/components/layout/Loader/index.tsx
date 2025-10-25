'use client';

import { heroData } from '@/app/data/data';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      onAnimationComplete={() => console.log('JLS-40 : Page Loaded')}
    >
      <div
        className="h-12 w-12 rounded-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroData?.imageUrl})`,
        }}
        aria-label={heroData?.name}
        role="img"
      />
    </motion.div>
  );
}
