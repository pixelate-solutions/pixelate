// components/services/Services.tsx
'use client';

import { FC } from 'react';
import { AISection } from './ai-section';
import { WebSection } from './web-section';
import { AIGallery } from './ai-gallery';
import { WebGallery } from './web-gallery';

export const Services: FC = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* If you want a main “Our Services” heading+subtitle, you can uncomment below: */}
        {/*
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-gray-100 rounded-xl border-t-2 border-gray-300 pt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          From building pixel-perfect websites to integrating powerful AI solutions, we tailor everything to
          your unique needs. Browse below to see how we can help you succeed.
        </motion.p>
        */}

        {/* ─── AI Section ─── */}
        <AISection />
        <AIGallery />

        {/* ─── Web Section ─── */}
        <WebSection />
        <WebGallery />
      </div>
    </section>
  );
};
