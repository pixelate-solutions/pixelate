'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  Cloud,
  Code2,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Zap,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
};

const capabilities = [
  {
    title: 'Product Strategy',
    description: 'Roadmaps, MVP planning, and measurable outcomes aligned to your goals.',
    icon: Compass,
    color: 'text-cyan-600 dark:text-cyan-300',
  },
  {
    title: 'Experience Design',
    description: 'UI and UX systems crafted for clarity, accessibility, and brand momentum.',
    icon: Sparkles,
    color: 'text-amber-600 dark:text-amber-300',
  },
  {
    title: 'Full-Stack Engineering',
    description: 'Web apps, APIs, and internal tools engineered for speed and reliability.',
    icon: Code2,
    color: 'text-emerald-600 dark:text-emerald-300',
  },
  {
    title: 'AI and Automation',
    description: 'Agent workflows, LLM integrations, and intelligent automation at scale.',
    icon: Bot,
    color: 'text-sky-600 dark:text-sky-300',
  },
  {
    title: 'Cloud and DevOps',
    description: 'Secure infrastructure, CI/CD, and monitoring that keeps teams shipping.',
    icon: Cloud,
    color: 'text-blue-600 dark:text-blue-300',
  },
  {
    title: 'Data and Growth',
    description: 'Analytics, experimentation, and dashboards that turn insight into action.',
    icon: LineChart,
    color: 'text-rose-600 dark:text-rose-300',
  },
];

const processSteps = [
  {
    title: 'Discover',
    description: 'Align on goals, users, and success metrics in focused strategy sessions.',
  },
  {
    title: 'Design',
    description: 'Prototype flows, systems, and UI that feel premium on every device.',
  },
  {
    title: 'Build',
    description: 'Ship iteratively with rigorous QA, performance tuning, and clear comms.',
  },
  {
    title: 'Scale',
    description: 'Optimize, automate, and evolve with ongoing support and growth sprints.',
  },
];

const engagements = [
  {
    title: 'Launch Sprint',
    description: 'A focused 4-6 week build to validate ideas and ship an MVP fast.',
  },
  {
    title: 'Product Partner',
    description: 'A dedicated squad that owns design and engineering from concept to launch.',
  },
  {
    title: 'Growth Retainer',
    description: 'Ongoing improvements, experiments, and feature delivery every month.',
  },
];

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Postgres',
  'Supabase',
  'AWS',
  'Vercel',
  'Figma',
  'Stripe',
  'OpenAI',
];

export const Services = () => {
  return (
    <>
      <section id="services" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(16,185,129,0.15),transparent_60%)]" />
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
              Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl"
            >
              Full-stack delivery with a studio-level finish.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-slate-600 dark:text-slate-300"
            >
              We blend product strategy, design, engineering, and AI to deliver modern experiences that
              feel premium and perform flawlessly.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilities.map((capability) => (
              <motion.div
                key={capability.title}
                variants={fadeUp}
                className="group rounded-2xl border border-white/70 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800/70 dark:bg-slate-900/70"
              >
                <capability.icon className={`h-6 w-6 ${capability.color}`} />
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
            >
              Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl"
            >
              A calm, transparent build cadence.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-slate-600 dark:text-slate-300"
            >
              Every engagement comes with professional oversight, regular cadence meetings, and a clear path to launch.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-md backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {index + 1}
                  </span>
                  {step.title}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_10%_20%,rgba(251,191,36,0.18),transparent_60%),radial-gradient(60%_60%_at_90%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-xl backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Engagements
                <Zap className="h-4 w-4 text-amber-500" />
              </div>
              <h3 className="mt-4 font-display text-3xl text-slate-900 dark:text-white">
                Flexible models, experienced team.
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Choose the rhythm that fits your team, from focused sprints to ongoing growth support.
              </p>
              <div className="mt-6 space-y-4">
                {engagements.map((engagement) => (
                  <div
                    key={engagement.title}
                    className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                  >
                    <p className="font-semibold text-slate-900 dark:text-white">{engagement.title}</p>
                    <p className="mt-1">{engagement.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Stack
                <Layers className="h-4 w-4 text-cyan-500" />
              </div>
              <h3 className="mt-4 font-display text-3xl text-slate-900 dark:text-white">
                Modern tooling, built for velocity.
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                We use proven platforms that keep experiences fast, secure, and future-proof.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
