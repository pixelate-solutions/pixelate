// components/background.tsx
'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <>
      {/* Big top-left blob */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 opacity-30 blur-3xl rounded-full dark:bg-purple-600"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Big bottom-right blob */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] bg-purple-400 opacity-20 blur-4xl rounded-full dark:bg-green-700"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Optional smaller accent blobs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-200 opacity-20 blur-2xl rounded-full dark:bg-purple-500"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-purple-200 opacity-20 blur-2xl rounded-full dark:bg-green-500"
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
}
