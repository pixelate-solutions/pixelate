'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/case-studies';

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
            Case studies
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl"
          >
            Custom software work, with honest proof.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            Real client work comes first. Owned products are labeled clearly, and missing outcomes
            stay marked as placeholders until the data exists.
          </motion.p>
        </motion.div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
              Featured work
            </p>
            <p className="flex justify-center align-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 dark:text-slate-500 sm:hidden">
              Scroll <ChevronRight className="h-4" />
            </p>
            <div className="hidden items-center gap-3 sm:flex">
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
              className="scrollbar-hide flex gap-0 overflow-x-auto scroll-smooth pb-8 pt-6 snap-x snap-mandatory"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {caseStudies.map((project) => (
                <motion.article
                  key={project.slug}
                  data-card
                  variants={fadeUp}
                  className="group relative flex-shrink-0 w-full snap-center px-4 sm:px-6"
                >
                  <div
                    className={`relative mx-auto max-w-6xl rounded-3xl border p-7 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.7)] backdrop-blur-2xl transition md:p-10 ${
                      project.featured
                        ? 'border-cyan-200/80 bg-cyan-50/75 dark:border-cyan-700/50 dark:bg-cyan-950/30'
                        : 'border-white/70 bg-white/75 dark:border-slate-800/70 dark:bg-slate-900/75'
                    }`}
                  >
                    {project.featured ? (
                      <span className="absolute right-6 -top-4 z-20 rounded-full bg-cyan-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                        Flagship project
                      </span>
                    ) : null}

                    <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                      <div className="order-2 space-y-5 md:order-1">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                            {project.label}
                          </p>
                          <h3 className="mt-3 font-display text-3xl leading-tight text-slate-900 dark:text-white md:text-4xl">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                            {project.industry}
                          </p>
                        </div>

                        <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          <p>
                            <span className="font-semibold text-slate-900 dark:text-white">
                              Problem:
                            </span>{' '}
                            {project.problem}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900 dark:text-white">
                              Solution:
                            </span>{' '}
                            {project.solution}
                          </p>
                        </div>

                        <ul className="grid gap-3 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-3">
                          {project.outcomes.slice(0, 3).map((outcome) => (
                            <li
                              key={outcome}
                              className="rounded-2xl border border-slate-200 bg-white/70 px-3 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-950/50"
                            >
                              {outcome}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/case-studies/${project.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
                        >
                          Read full case study
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className="order-1 md:order-2">
                        <div className="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/50">
                          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={`${project.title} visual`}
                                fill
                                sizes="(min-width: 1024px) 520px, (min-width: 640px) 70vw, 90vw"
                                className="object-cover"
                              />
                            ) : (
                              <div className="max-w-sm p-8 text-center">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                                  Visual placeholder
                                </p>
                                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                                  Add a real screenshot, product mockup, or approved client visual
                                  before publishing.
                                </p>
                              </div>
                            )}
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
