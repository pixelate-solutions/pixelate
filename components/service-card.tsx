// components/services/ServiceCard.tsx
'use client';

import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  variants: Variants;
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, variants }) => (
  <motion.div
    variants={variants}
    className="
      flex items-start space-x-4
      p-6
      bg-white/80 dark:bg-gray-800/80
      backdrop-blur-md
      rounded-xl
      shadow-lg
      hover:shadow-2xl
      transition-shadow duration-300
    "
  >
    <CheckCircle className="w-6 h-6 text-green-500 dark:text-purple-400 mt-1" />
    <p className="text-gray-700 dark:text-gray-300 font-medium">{title}</p>
  </motion.div>
);
