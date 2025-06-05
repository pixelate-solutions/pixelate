'use client';

import { motion } from 'framer-motion';

export function AIGallery() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-100"
        >
          AI Examples
        </motion.h2>

        {/* Single Video */}
        <div className="max-w-2xl mx-auto">
          <video
            src="/WebDemoAI.mp4"
            loop
            autoPlay
            muted
            playsInline
            controls={false}
            className="w-full rounded-xl overflow-hidden shadow-lg pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
