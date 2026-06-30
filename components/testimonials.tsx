'use client';

import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Quote, ShieldCheck, UsersRound } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const trustCards = [
  {
    icon: Building2,
    title: 'Built for SMB workflows',
    description:
      'Ideal for teams outgrowing spreadsheets, generic CRMs, shared inboxes, and disconnected software.',
  },
  {
    icon: UsersRound,
    title: 'Clear for non-technical buyers',
    description:
      'Scope, prototypes, milestones, and plain-language tradeoffs before anyone commits to a large build.',
  },
  {
    icon: ShieldCheck,
    title: 'Designed for launch',
    description:
      'The work includes real UX, backend structure, integrations, QA, deployment, and post-launch planning.',
  },
];

const useCases = [
  'Founder MVPs',
  'Customer portals',
  'Internal tools',
  'Reporting dashboards',
  'AI support',
  'Booking and quote systems',
  'Workflow automation',
  'Modern business websites',
];

export function Testimonials() {
  return (
    <section id="trust" className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
          >
            Trust
          </motion.p>
          <motion.h2
            variants={item}
            className="mt-4 font-display text-4xl leading-tight text-slate-950 dark:text-white md:text-5xl"
          >
            Built to feel understandable before it feels technical.
          </motion.h2>
          <motion.p variants={item} className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            The best custom software projects start with clarity: what the business needs, what
            users need to do, what should launch first, and what proof matters after launch.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {trustCards.map((card) => (
            <motion.article
              key={card.title}
              variants={item}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900"
            >
              <card.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                <Quote className="h-4 w-4 text-amber-500" />
                Client proof ready
              </div>
              <p className="mt-4 text-2xl font-semibold leading-snug text-slate-950 dark:text-white">
                Add approved client quotes, logos, or metrics here as they become available.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Until then, the section avoids fabricated testimonials and focuses on the concrete
                project types Pixelate can support.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
