// components/services/WebSection.tsx
'use client';

import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, Smartphone, Link2, Wrench } from 'lucide-react';

const webServices: string[] = [
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

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const WebSection: FC = () => {
  return (
    <div id="web" className="pt-20">
      {/* ───────── Top Heading + Subtitle ───────── */}
      <motion.h3
        className="text-4xl md:text-5xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Custom Web Solutions
      </motion.h3>

      <motion.p
        className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: 'easeInOut' }}
      >
        From concept and custom design to hosting and post-launch support, we deliver
        full-stack web solutions tailored to your business goals. Your site will be
        fast, secure, and optimized for growth.
      </motion.p>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl md:mx-10 p-4 border">
        {/* ───────── Two-Column Section (inverted) ───────── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 px-4 md:px-0">
          {/* ─── Left Column: Dark Scrollable Panel ─── */}
          <motion.div
            className="
              w-full lg:w-1/2
              bg-black dark:bg-gray-900 text-white
              rounded-xl
              shadow-lg
              flex flex-col
              overflow-hidden
              max-h-[24rem]
            "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Header inside the dark panel */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
              <span className="font-bold text-lg">Web Services</span>
              <span className="text-sm text-gray-400">Scroll ↓</span>
            </div>

            {/* Scrollable List */}
            <motion.div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {webServices.map((svc) => (
                <motion.div
                  key={svc}
                  variants={item}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">{svc}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right Column: Light “Callout” Box ─── */}
          <motion.div
            className="
              w-full lg:w-1/2
              bg-white/80 dark:bg-gray-700
              backdrop-blur-md
              rounded-xl
              shadow-lg
              p-6
            "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              End-to-End Web Expertise
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you need a simple landing page or a complex web application, we handle
              every step—design, development, deployment, and ongoing optimization. Our
              solutions are responsive, secure, and built to drive engagement.
            </p>
          </motion.div>
        </div>

        {/* ───────── Bottom Row: Three Core Web Service Cards ───────── */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {/* ─── Card #1: Responsive Development ─── */}
          <motion.div
            className="
              bg-white dark:bg-gray-700
              p-6
              rounded-xl
              shadow-lg
              flex flex-col items-start
              hover:shadow-2xl transition-shadow duration-300
            "
            whileHover={{ y: -4 }}
          >
            <Smartphone className="w-6 h-6 text-blue-500 dark:text-blue-400 mb-4" />
            <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Responsive Development
            </h5>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              We build mobile-first, responsive websites that adapt seamlessly to any device,
              ensuring an optimal user experience from smartphone to desktop.
            </p>
          </motion.div>

          {/* ─── Card #2: API Integrations & Webhooks ─── */}
          <motion.div
            className="
              bg-white dark:bg-gray-700
              p-6
              rounded-xl
              shadow-lg
              flex flex-col items-start
              hover:shadow-2xl transition-shadow duration-300
            "
            whileHover={{ y: -4 }}
          >
            <Link2 className="w-6 h-6 text-purple-500 dark:text-purple-400 mb-4" />
            <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              API Integrations & Webhooks
            </h5>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              From payment gateways to third-party services, we connect your site with
              the tools you need—automating workflows and ensuring data flows smoothly.
            </p>
          </motion.div>

          {/* ─── Card #3: Ongoing Maintenance & Support ─── */}
          <motion.div
            className="
              bg-white dark:bg-gray-700
              p-6
              rounded-xl
              shadow-lg
              flex flex-col items-start
              hover:shadow-2xl transition-shadow duration-300
            "
            whileHover={{ y: -4 }}
          >
            <Wrench className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mb-4" />
            <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Ongoing Maintenance & Support
            </h5>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              After launch, we keep your site up-to-date, secure, and performing at its best—
              from updates and backups to troubleshooting and feature enhancements.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
