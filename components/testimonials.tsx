'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Lila Thompson',
    // role: 'Marketing Manager, BrightSide Inc',
    feedback:
      'Pixelate Solutions revamped our website—visitor engagement has never been so high!',
  },
  {
    name: 'Marcus Nguyen',
    // role: 'Product Lead, NextEdge',
    feedback:
      'Their attention to detail and proactive communication made the entire process seamless.',
  },
  {
    name: 'Sophia Robertson',
    // role: 'CTO, GreenWave Solutions',
    feedback:
      'They took our complex requirements and turned them into a beautiful, user-friendly platform.',
  },
];

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-100"
        >
          Testimonials
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow backdrop-blur-md"
            >
              <p className="italic text-gray-700 dark:text-gray-300 mb-6">
                “{t.feedback}”
              </p>
              <div className="flex items-center space-x-4">
                {/* Initials avatar */}
                <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {t.name}
                  </p>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
