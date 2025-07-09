// components/hero.tsx

'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <Image
          src="/digital-world.jpg"
          alt="Digital peace and purpose graphic"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80 dark:from-black/80 dark:via-transparent dark:to-black/80" />

      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-10 left-8 w-24 h-24 bg-green-400 opacity-30 rounded-full filter blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500 opacity-20 rounded-2xl filter blur-3xl"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Hero content */}
      <motion.div
              className="relative z-10 px-6 py-20 max-w-2xl md:max-w-3xl mx-auto"
              initial="hidden"
              animate="show"
            >
        <motion.h1
          variants={textVariant}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-outline"
        >
          Peace & Purpose, Digitally Delivered
        </motion.h1>

        <motion.p
          variants={fadeInVariant}
          className="mt-6 text-xl md:text-2xl text-gray-100 rounded-4xl p-4 max-w-xl mx-auto backdrop-blur-xl"
        >
          AI Integration & Web Development
        </motion.p>

        {/* <motion.div variants={fadeInVariant} className="mt-8">
          <Button
            variant="gradient"
            size="lg"
            className="shadow-xl duration-500 hover:cursor-pointer font-bold text-md lg:text-lg from-green-500 to-purple-600"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Let’s Build Your Solution
          </Button>
        </motion.div> */}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        onClick={() => {
          const next = document.getElementById('ai')
          if (next) {
            next.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-200 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
