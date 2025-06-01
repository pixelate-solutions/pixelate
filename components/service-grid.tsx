// components/services/ServiceGrid.tsx
'use client';

import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { ServiceCard } from './service-card';

export interface ServiceGridProps {
  services: string[];
}

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

export const ServiceGrid: FC<ServiceGridProps> = ({ services }) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    {services.map((svc) => (
      <ServiceCard key={svc} title={svc} variants={item} />
    ))}
  </motion.div>
);
