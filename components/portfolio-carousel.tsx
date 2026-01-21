'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'MetrIQs',
    src: '/Websites/1.png',
    summary:
      'Unified analytics dashboards that translate multi-channel data into actionable KPIs for product and growth teams.',
    metrics: ['+28% insights adoption', '-22% reporting time', '+18% campaign lift'],
  },
  {
    title: 'Link',
    src: '/Websites/2.png',
    summary:
      'A personal finance platform with smart categorization, budget guardrails, and AI-driven spending insights.',
    metrics: ['+31% budget adherence', '-26% manual tagging', '+19% monthly savings'],
  },
  {
    title: 'Playoff Fantasy',
    src: '/Websites/3.png',
    summary:
      'Postseason fantasy experience focused on fast drafts, live scoring, and playoff-only leaderboards.',
    metrics: ['+24% weekly engagement', '+17% return plays', '2x faster draft flow'],
  },
  {
    title: 'AR Repairs',
    src: '/Websites/4.png',
    summary:
      'Local appliance repair service site optimized for quick booking, clear service coverage, and trust signals.',
    metrics: ['+35% form submissions', '+21% call clicks', '-18% time-to-book'],
  },
  {
    title: 'Riverstone Painting Co.',
    src: '/Websites/5.png',
    summary:
      'Residential and commercial painting showcase with project galleries, service clarity, and quote capture.',
    metrics: ['+27% quote requests', '+16% gallery views', '+14% repeat visits'],
  },
  {
    title: 'LocalPulse',
    src: '/Websites/6.png',
    summary:
      'Local news pulse platform surfacing real-time stories and events through automated discovery feeds.',
    metrics: ['+29% content depth', '+20% session time', '-15% bounce rate'],
  },
];

const ease = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
};

export function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-card]');
    if (!card) return;
    const offset = card.getBoundingClientRect().width + 24;
    track.scrollBy({ left: direction === 'next' ? offset : -offset, behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_10%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(55%_55%_at_85%_15%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(50%_50%_at_35%_90%,rgba(16,185,129,0.12),transparent_60%)]" />
      <motion.div
        className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-cyan-400/25 blur-3xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-6 right-10 h-52 w-52 rounded-[36px] bg-amber-300/20 blur-3xl"
        animate={{ x: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            Latest case studies
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl"
          >
            Launch-ready sites, captured in motion.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            Explore the visuals and results behind our most recent builds.
          </motion.p>
        </motion.div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
              Featured projects
            </p>
            <p className="flex justify-center align-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 dark:text-slate-500 sm:hidden">
              Scroll <ChevronRight className='h-4' />
            </p>
            <div className="flex items-center gap-3 hidden sm:flex">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full border-white/60 bg-white/70 text-slate-700 shadow-md backdrop-blur-md hover:bg-white/90 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
                onClick={() => scrollByCard('prev')}
                aria-label="Scroll portfolio left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full border-white/60 bg-white/70 text-slate-700 shadow-md backdrop-blur-md hover:bg-white/90 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
                onClick={() => scrollByCard('next')}
                aria-label="Scroll portfolio right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-6 overflow-visible">
            <motion.div
              ref={trackRef}
              className="scrollbar-hide flex gap-0 overflow-x-auto scroll-smooth pt-6 pb-30 sm:-mb-20 -mb-40 snap-x snap-mandatory"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  data-card
                  variants={fadeUp}
                  className="group relative flex-shrink-0 w-full snap-center px-4 sm:px-6"
                >
                  <div className="relative mx-auto max-w-6xl rounded-[36px] border border-white/60 bg-[linear-gradient(120deg,rgba(108,99,163,0.85),rgba(174,122,171,0.78),rgba(245,151,114,0.82))] shadow-[0_30px_80px_-50px_rgba(15,23,42,0.7)] backdrop-blur-2xl transition">
                  <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_0%_0%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(60%_60%_at_100%_0%,rgba(255,255,255,0.12),transparent_55%)] rounded-[36px]" />
                  {index === 0 && (
                    <span className="absolute right-6 -top-4 z-20 rounded-full bg-orange-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                      Latest case study
                    </span>
                  )}
                  <div className="relative z-10 grid gap-8 px-7 py-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-12">
                    <div className="order-2 space-y-4 text-white/95 md:order-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                        Case study
                      </p>
                      <h3 className="font-display text-3xl leading-tight md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80 md:text-base">{project.summary}</p>
                      <div className="grid gap-3 pt-2 text-sm text-white/85 sm:grid-cols-3">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric}
                            className="rounded-2xl border border-white/20 bg-white/10 px-3 py-3 text-center font-semibold shadow-inner"
                          >
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="rounded-[28px] border border-white/30 bg-white/15 p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.6)] backdrop-blur-xl">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                          <Image
                            src={project.src}
                            alt={`${project.title} landing page`}
                            fill
                            sizes="(min-width: 1024px) 520px, (min-width: 640px) 70vw, 90vw"
                            className="object-cover transition duration-700"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
