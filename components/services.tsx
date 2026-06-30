'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Activity,
  Bot,
  BriefcaseBusiness,
  ClipboardList,
  Code2,
  DatabaseZap,
  Factory,
  FileSpreadsheet,
  Gauge,
  Layers,
  MessageSquare,
  MousePointer2,
  PlugZap,
  Rocket,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductVisual } from '@/components/product-visuals';

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
    title: 'Customer & Team Portals',
    description:
      'Mobile and web portals giving customers and teams visibility into projects, files, status, and history.',
    icon: Factory,
    color: 'text-cyan-600 dark:text-cyan-300',
  },
  {
    title: 'AI Support & Knowledge Systems',
    description:
      'Chat-based support trained on your manuals, documentation, and FAQs, available around the clock.',
    icon: Bot,
    color: 'text-amber-600 dark:text-amber-300',
  },
  {
    title: 'Reporting & Operations Dashboards',
    description:
      'Live business data, alerts, metrics, and historical trends surfaced in a clean, usable interface.',
    icon: Activity,
    color: 'text-emerald-600 dark:text-emerald-300',
  },
  {
    title: 'Internal Operations Tools',
    description:
      'Admin panels and internal systems that replace spreadsheets and manual tracking with something your team can actually use.',
    icon: ClipboardList,
    color: 'text-sky-600 dark:text-sky-300',
  },
  {
    title: 'Custom Integrations',
    description:
      'Connecting your CRM, ERP, or other systems so data flows automatically instead of being re-entered by hand.',
    icon: PlugZap,
    color: 'text-blue-600 dark:text-blue-300',
  },
  {
    title: 'Full-Stack Engineering',
    description:
      'Flutter mobile apps, Next.js web platforms, and Node.js/Python backends built to scale with your business.',
    icon: Code2,
    color: 'text-rose-600 dark:text-rose-300',
  },
];

const processSteps = [
  {
    title: 'Discover',
    eyebrow: 'Map the real workflow',
    description:
      'We identify what is manual, duplicated, unclear, or blocking growth, then turn that into a focused product scope.',
    icon: MousePointer2,
    visual: 'workflow' as const,
  },
  {
    title: 'Design',
    eyebrow: 'Prototype the experience',
    description:
      'Key screens, data flows, roles, and launch priorities become a clickable product plan before engineering starts.',
    icon: Layers,
    visual: 'portal' as const,
  },
  {
    title: 'Build',
    eyebrow: 'Ship in phases',
    description:
      'We build the frontend, backend, integrations, admin tools, and AI workflows in reviewable milestones.',
    icon: Code2,
    visual: 'dashboard' as const,
  },
  {
    title: 'Launch',
    eyebrow: 'Support what goes live',
    description:
      'Launch includes testing, analytics, handoff, support, and a practical roadmap for what to improve next.',
    icon: Rocket,
    visual: 'mobile' as const,
  },
];

const engagements = [
  {
    title: 'Feasibility Prototype',
    description:
      'A focused prototype for the highest-risk workflow before you commit to a full custom software build.',
  },
  {
    title: 'Phased Build',
    description:
      'Clear deliverables for portals, apps, AI systems, and admin tools, billed as each agreed milestone is completed.',
  },
  {
    title: 'Post-Launch Support',
    description:
      'Ongoing maintenance, monitoring, and improvements for systems your team and customers rely on.',
  },
];

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Flutter',
  'Node.js',
  'Python',
  'Supabase',
  'Postgres',
  'Render',
  'AWS',
  'Vercel',
  'HTML',
  'CSS',
  'Figma',
  'OpenAI',
  'Clerk',
  'Pinecone',
  'Stripe',
  'Plaid',
  'Railway',
  'Tailwind',
  'MongoDB',
  'Docker',
];

export const Services = () => {
  return (
    <>
      <OriginalServicesSection />
      <ProcessStory />
      <StudioTrust />
      <EngagementsAndStack />
    </>
  );
};

function OriginalServicesSection() {
  return (
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
            Software for the gaps your current tools cannot cover.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            Customer portals, mobile apps, AI support systems, dashboards, and integrations built
            around the way your team and customers actually work.
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
  );
}

function ProcessStory() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" ref={ref} className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Process</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              From rough idea to launch-ready software.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The process is visual on purpose. You see the workflow, screens, tradeoffs, and build
              phases before the project gets expensive.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-8 h-12 rounded-full border-white/20 bg-white/10 px-7 text-white hover:bg-white/15 hover:text-white"
            >
              <a href="#contact">
                Book a build call
                <Rocket className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-5 top-10 hidden w-px bg-white/10 md:block">
              <motion.div className="w-px bg-gradient-to-b from-cyan-300 via-emerald-300 to-amber-300" style={{ height: progressHeight }} />
            </div>
            <div className="space-y-8 md:pl-14">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl md:p-6"
                >
                  <span className="absolute left-[-2.85rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950 text-sm font-semibold text-cyan-200 md:flex">
                    {index + 1}
                  </span>
                  <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                          <step.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">{step.eyebrow}</p>
                          <h3 className="mt-1 text-2xl font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                    </div>
                    <ProductVisual variant={step.visual} compact className="border-white/10 bg-white/95 shadow-none dark:bg-slate-950" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioTrust() {
  return (
    <section id="about" className="relative bg-white py-24 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionIntro
            align="left"
            eyebrow="Why Pixelate"
            title="A software partner for teams that need clarity, not more complexity."
            description="Pixelate is built for founders and business owners who know the workflow problem but need a technical partner to turn it into a real product."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              [BriefcaseBusiness, 'Product strategy', 'Translate business goals into realistic software scope.'],
              [Gauge, 'Modern delivery', 'Move in reviewable milestones with clear launch priorities.'],
              [PlugZap, 'Integration thinking', 'Connect the tools, data, and systems already in the business.'],
              [MessageSquare, 'Plain communication', 'No black-box development or unnecessary technical theater.'],
            ].map(([Icon, title, description]) => (
              <motion.div key={title as string} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                <h3 className="mt-4 font-semibold text-slate-950 dark:text-white">{title as string}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description as string}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EngagementsAndStack() {
  return (
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
              Engagements built around real deliverables.
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Start small, prove the riskiest workflow, then build in phases your team can review
              and budget around.
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
              Modern tooling, built for dependable business workflows.
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              We use proven platforms for mobile apps, portals, APIs, data workflows, and AI
              systems that need to stay usable after launch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
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
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'center' | 'left';
}) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} className="mt-4 font-display text-4xl leading-tight text-slate-950 dark:text-white md:text-5xl">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </motion.p>
    </motion.div>
  );
}
