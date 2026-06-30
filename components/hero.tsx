'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Code2 } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
};

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/digital-world.jpg"
          alt="Digital landscape"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(14,165,233,0.35),transparent_65%),radial-gradient(70%_80%_at_80%_20%,rgba(16,185,129,0.25),transparent_60%),linear-gradient(160deg,rgba(255,255,255,0.9),rgba(248,250,252,0.6),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(80%_60%_at_50%_0%,rgba(14,165,233,0.2),transparent_65%),radial-gradient(70%_80%_at_80%_20%,rgba(16,185,129,0.2),transparent_60%),linear-gradient(160deg,rgba(2,6,23,0.92),rgba(15,23,42,0.86),rgba(2,6,23,0.95))]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200"
            >
              <Code2 className="h-4 w-4 text-cyan-500" />
              Custom Software for Growing Businesses
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              We build the software your business actually needs.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
            >
              Pixelate Solutions designs and builds custom websites, mobile apps, customer portals, and
              AI-powered support platforms for teams that have outgrown spreadsheets, manual
              workarounds, and off-the-shelf tools. From dashboards to internal tools to customer
              portals, everything is built around how your business actually runs.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
            >
              <span>Built for:</span>
              <span>Founders</span>
              <span>Service Businesses</span>
              <span>Growing Teams</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="gradient"
                size="lg"
                className="rounded-full px-8"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-slate-300 bg-white/60 text-slate-700 shadow-sm backdrop-blur-lg hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Services
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/60 bg-white/60 p-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/60"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                What we deliver
              </p>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                Quick launches
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl text-slate-900 dark:text-white">
              Practical systems for teams that need visibility.
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                Customer portals that give your clients real-time visibility into orders,
                projects, files, and next steps with less back-and-forth.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Mobile-friendly tools your team and customers actually use: status tracking,
                service history, approvals, notifications, and reporting in one place.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                AI-powered technical support trained on your documentation, handling Tier 1
                questions 24/7 and escalating the rest to your team.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => {
          const next = document.getElementById('services');
          if (next) {
            next.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll</span>
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
    </section>
  );
}
