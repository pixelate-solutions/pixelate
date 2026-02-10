import Link from 'next/link';
import { ArrowLeftToLine, CheckCircle2, MessageSquareText, Rocket, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { PrototypeProgramForm } from '@/components/prototype-program-form';

const programSteps = [
  {
    title: 'Kickoff Call',
    description:
      'A focused call to understand your business, users, and what the first prototype needs to prove.',
    icon: MessageSquareText,
  },
  {
    title: 'Prototype Build',
    description:
      'We deliver a basic working software deliverable that demonstrates the core capability you need.',
    icon: Sparkles,
  },
  {
    title: 'Review + Product Discussion',
    description:
      'We walk through results, identify the product roadmap, and align on what a full build would require.',
    icon: Rocket,
  },
];

export default function PrototypeProgramPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-slate-50 pb-24 pt-32 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_10%,rgba(14,165,233,0.16),transparent_60%),radial-gradient(70%_70%_at_80%_10%,rgba(34,197,94,0.12),transparent_60%)]" />

        <section className="relative z-10 container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            <ArrowLeftToLine /> Home
          </Link>

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Free Pixelate AI Prototype Program
          </p>
          <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-6xl">
            Validate your product idea with a working prototype.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            This program is designed for ad leads who want to move fast: quick discovery, a tangible prototype,
            and a clear path to production.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {programSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <step.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 dark:border-emerald-800/50 dark:bg-emerald-950/30">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Program Terms</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
              Free prototype engagement includes discovery, a basic software deliverable, and a review session.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
              After delivery, you can buy the prototype as-is for <strong>$150</strong>.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
              Or start a full project with Pixelate and receive a <strong>$150 credit</strong> toward your build.
            </li>
          </ul>
        </div>
        </section>

        <section className="relative z-10 container mx-auto mt-14 px-6">
          <div className="mx-auto max-w-5xl">
            <PrototypeProgramForm />
          </div>
        </section>
      </main>
    </>
  );
}
