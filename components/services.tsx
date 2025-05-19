'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const services = [
  'Responsive, Mobile-First Pages',
  'Custom Design & Branding',
  'Personalized Domains & Professional Emails',
  'API Integrations & Webhooks',
  'Dynamic Routing & Single-Page Apps',
  'Unlimited Revisions & Iterations',
  'Payment Gateway Setup (Stripe, PayPal, etc.)',
  'Blog Integration with Dynamic Routing',
  'SEO & Performance Optimization',
  'Accessibility (WCAG) Compliance',
  'Analytics & Tracking',
  'Ongoing Maintenance & Support',
];

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Decorative accent blob */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-green-300 opacity-20 blur-3xl rounded-full dark:bg-purple-600"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Custom Web Solutions
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          Everything is tailored to your needs. From design & development to deployment & beyond, we handle it all.
        </motion.p>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((svc) => (
            <motion.div
              key={svc}
              variants={item}
              className="flex items-start space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <CheckCircle className="w-6 h-6 text-green-500 dark:text-purple-400 mt-1" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">{svc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
