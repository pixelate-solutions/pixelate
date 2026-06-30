import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: 'Case Study | Pixelate Solutions',
    };
  }

  return {
    title: `${study.title} | Pixelate Solutions`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_10%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(60%_60%_at_85%_15%,rgba(16,185,129,0.14),transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-6">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to case studies
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {study.label}
                </p>
                <h1 className="mt-4 font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-6xl">
                  {study.title}
                </h1>
                <p className="mt-4 text-base font-semibold text-cyan-700 dark:text-cyan-300">
                  {study.industry}
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {study.summary}
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-xl backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-900/70">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950">
                  {study.image ? (
                    <Image
                      src={study.image}
                      alt={`${study.title} visual`}
                      fill
                      sizes="(min-width: 1024px) 540px, 90vw"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="max-w-sm p-8 text-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        Visual placeholder
                      </p>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                        Add an approved real screenshot, mockup, or client visual before publishing.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                The Challenge
              </p>
              <h2 className="mt-4 font-display text-3xl text-slate-900 dark:text-white">
                What was broken or missing
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {study.challenge.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/35" />
          <div className="container relative z-10 mx-auto grid gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                The Solution
              </p>
              <h2 className="mt-4 font-display text-3xl text-slate-900 dark:text-white">
                What Pixelate built
              </h2>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/75 p-7 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/50">
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {study.solution}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                The Process
              </p>
              <h2 className="mt-4 font-display text-3xl text-slate-900 dark:text-white">
                Phased delivery
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {study.process.map((phase, index) => (
                <article
                  key={`${phase.phase}-${index}`}
                  className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-md backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {index + 1}
                    </span>
                    {phase.phase}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {phase.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(55%_55%_at_85%_20%,rgba(14,165,233,0.14),transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                The Outcome
              </p>
              <h2 className="mt-4 font-display text-3xl text-slate-900 dark:text-white">
                Proof to update after launch
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {study.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-3xl border border-white/70 bg-white/75 p-5 text-sm leading-relaxed text-slate-700 shadow-md backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/75 dark:text-slate-200"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-900 p-8 text-center shadow-xl dark:border-slate-800 dark:bg-white">
              <h2 className="font-display text-3xl text-white dark:text-slate-900">
                Have a similar challenge?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 dark:text-slate-600">
                If spreadsheets, phone calls, or disconnected systems are slowing down your
                operation, Pixelate can scope the first practical version with you.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
