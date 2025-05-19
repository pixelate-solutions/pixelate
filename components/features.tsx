'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Riverstone Painting Co.',
    description: 'Responsive company site with modern design.',
    src: '/riverstone.png',
    href: 'https://painting-co.vercel.app',
  },
  {
    title: 'LocalPulse',
    description: 'High-converting landing page with interactive API calls.',
    src: '/local-pulse.png',
    href: 'https://local-pulse-sandy.vercel.app',
  },
  {
    title: 'Link',
    description: 'Personalized budgeting site with Stripe & Plaid integration plus AI.',
    src: '/link.png',
    href: 'https://link-omega.vercel.app',
  },
];

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Features() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-100"
        >
          Recent Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((proj) => (
            <motion.a
              key={proj.title}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="block bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={proj.src}
                  alt={proj.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Text */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {proj.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {proj.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
