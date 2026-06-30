'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BadgeCheck, Clock3, ReceiptText, ShieldCheck } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
};

const plans = [
  {
    name: 'Free Feasibility Prototype',
    price: '$0',
    cadence: 'one-time',
    icon: BadgeCheck,
    accent: 'text-emerald-600 dark:text-emerald-300',
    points: [
      'Small, focused prototype proving out your highest-risk business workflow',
      'Clear recommendation before you commit to a full build',
      'No commitment required to continue into paid development',
    ],
  },
  {
    name: 'Flat-Rate Delivery',
    price: '$100',
    cadence: '/hour',
    icon: Clock3,
    accent: 'text-cyan-600 dark:text-cyan-300',
    featured: true,
    points: [
      'Flat hourly rate for scoped custom software builds',
      'Billed per completed deliverable with no deposit required',
      'Clear phase-by-phase estimates before work begins',
    ],
  },
  {
    name: 'No-Markup Delivery Costs',
    price: '$0',
    cadence: 'markup',
    icon: ReceiptText,
    accent: 'text-amber-600 dark:text-amber-300',
    points: [
      'Third-party tools, hosting, and services passed through at cost',
      'Bug fixes within agreed scope are never billed separately',
      'Transparent recommendations when outside services are needed',
    ],
  },
  {
    name: 'Post-Launch Support Plans',
    price: '[PLACEHOLDER]',
    cadence: '/month',
    annual: 'Basic / Standard / Priority',
    savings: '[PLACEHOLDER] Confirm hours per month and monthly price tiers.',
    icon: ShieldCheck,
    accent: 'text-blue-600 dark:text-blue-300',
    points: [
      'Basic: [PLACEHOLDER] hours/month for monitoring and small fixes',
      'Standard: [PLACEHOLDER] hours/month for support and improvements',
      'Priority: [PLACEHOLDER] hours/month with faster response windows',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_15%_15%,rgba(20,184,166,0.16),transparent_60%),radial-gradient(60%_60%_at_85%_10%,rgba(59,130,246,0.14),transparent_60%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            Pricing
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl"
          >
            Clear pricing tied to completed deliverables.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            A flat hourly rate, no deposit, no markup on third-party costs, and optional support
            plans after launch.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              className={`rounded-2xl border p-7 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl ${
                plan.featured
                  ? 'border-blue-300/70 bg-blue-50/70 dark:border-blue-600/40 dark:bg-blue-950/30'
                  : 'border-white/70 bg-white/70 dark:border-slate-800/70 dark:bg-slate-900/70'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                <plan.icon className={`h-6 w-6 ${plan.accent}`} />
              </div>

              <div className="mt-4 flex items-end gap-2">
                <p className="font-display text-4xl text-slate-900 dark:text-white">{plan.price}</p>
                <p className="pb-1 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {plan.cadence}
                </p>
              </div>

              {plan.annual ? (
                <div className="mt-2 rounded-lg border border-blue-200/80 bg-blue-100/70 p-3 dark:border-blue-700/50 dark:bg-blue-900/30">
                  <p className="text-sm font-semibold text-slate-800 dark:text-blue-100">{plan.annual}</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-blue-200">{plan.savings}</p>
                </div>
              ) : null}

              <ul className="mt-5 space-y-2">
                {plan.points.map((point) => (
                  <li key={point} className="text-sm text-slate-600 dark:text-slate-300">
                    {point}
                  </li>
                ))}
              </ul>

              {plan.name === 'Free Feasibility Prototype' ? (
                <Link
                  href="/prototype-program"
                  className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View Program Details
                </Link>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
