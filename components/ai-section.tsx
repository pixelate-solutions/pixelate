// components/services/AISection.tsx
'use client';

import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  CheckCircle,
  CloudUpload,
  ClipboardCheck,
  Mic,
} from 'lucide-react';

const aiServices: string[] = [
  'AI Strategy & Consultation',
  'Custom Chatbot Configurations',
  'AI-Powered Chatbots & Virtual Assistants',
  'Custom AI Application Development',
  'Natural Language Processing (NLP) Integration',
  'Computer Vision & Image Recognition Solutions',
  'AI-Driven Analytics & Business Insights',
  'Automation & Workflow Optimization',
  'Data Pipeline & ETL for AI',
  'AI Model Deployment & Monitoring',
  'Ongoing AI Maintenance & Support',
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

export const AISection: FC = () => {
  return (
    <div id="ai" className="pt-20">
      {/* ───────── Top Heading + Subtitle ───────── */}
      <motion.h3
        className="text-4xl md:text-5xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        AI Integration Solutions
      </motion.h3>

      <motion.p
        className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: 'easeInOut' }}
      >
        Our team helps you harness the power of AI from day one. We build tailored strategies,
        develop custom solutions and applications, integrate intelligent workflows, and provide
        ongoing support so your business can scale with confidence.
      </motion.p>
    <div className='bg-gray-100 dark:bg-gray-800 rounded-2xl md:mx-10 p-4 border'>
      {/* ───────── Two-Column Section ───────── */}
      <div className="flex flex-col lg:flex-row items-stretch gap-8 px-4 md:px-0">
        {/* ─── Left Column: Light “Callout” Box ─── */}
        <motion.div
          className="
            w-full lg:w-1/2
            bg-white/80 dark:bg-gray-700
            backdrop-blur-md
            rounded-xl
            shadow-lg
            p-6
          "
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            End-to-End AI Expertise
          </h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            From initial strategy workshops to designing and shipping production-ready AI applications,
            we partner with you at every stage. Whether you need a proof of concept or a fully managed
            AI platform, our experts ensure you get measurable ROI and long-term support.
          </p>
        </motion.div>

        {/* ─── Right Column: Dark Scrollable Panel ─── */}
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Header inside the dark panel */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <span className="font-bold text-lg">AI Services</span>
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
            {aiServices.map((svc) => (
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
      </div>

      {/* ───────── Bottom Row: Three Core AI Service Cards ───────── */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {/* ─── Card #1: AI Strategy & Consulting ─── */}
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
          <CloudUpload className="w-6 h-6 text-blue-500 dark:text-blue-400 mb-4" />
          <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            AI Strategy & Consulting
          </h5>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            We work with your stakeholders to define KPIs and use cases, audit data readiness,
            and create a prioritized roadmap—ensuring you get maximum value from your AI investments.
          </p>
        </motion.div>

        {/* ─── Card #2: Custom AI Solutions & Apps ─── */}
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
          <ClipboardCheck className="w-6 h-6 text-purple-500 dark:text-purple-400 mb-4" />
          <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Custom AI Solutions & Apps
          </h5>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              We craft advanced, AI-driven solutions—chatbots, recommendation systems, predictive analytics,
              and more—custom-built to streamline your operations and align seamlessly with your business goals.
          </p>
        </motion.div>

        {/* ─── Card #3: Integration & Deployment ─── */}
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
          <Mic className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mb-4" />
          <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Integration & Deployment
          </h5>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Once your solution is ready, we seamlessly integrate it into your existing systems (web,
            mobile, or backend), set up monitoring/alerting for model drift, and provide ongoing
            maintenance so your AI workflows stay reliable in production.
          </p>
        </motion.div>
      </div>
    </div>
    </div>
  );
};
