'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface PrototypeLeadBody {
  name: string;
  email: string;
  company: string;
  buildGoal: string;
  capabilityDemo: string;
  timeline: string;
  nextStepPreference: string;
}

const initialForm: PrototypeLeadBody = {
  name: '',
  email: '',
  company: '',
  buildGoal: '',
  capabilityDemo: '',
  timeline: 'Within 30 days',
  nextStepPreference: 'Use $150 credit toward a full project',
};

export function PrototypeProgramForm() {
  const [form, setForm] = useState<PrototypeLeadBody>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const setField = <K extends keyof PrototypeLeadBody>(key: K, value: PrototypeLeadBody[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/prototype-program', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80"
    >
      <h2 className="font-display text-3xl text-slate-900 dark:text-white">Apply for the Program</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
        Share a few details and we will follow up with a scheduling link for your kickoff call.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setField('name', e.target.value)}
          className="h-11 rounded-xl border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-950"
          required
        />
        <Input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setField('email', e.target.value)}
          className="h-11 rounded-xl border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-950"
          required
        />
      </div>

      <Input
        placeholder="Company (optional)"
        value={form.company}
        onChange={(e) => setField('company', e.target.value)}
        className="mt-4 h-11 rounded-xl border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-950"
      />

      <Textarea
        placeholder="What are you looking to build?"
        value={form.buildGoal}
        onChange={(e) => setField('buildGoal', e.target.value)}
        className="mt-4 min-h-28 rounded-xl border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-950"
        required
      />

      <Textarea
        placeholder="What basic software deliverable should the prototype demonstrate?"
        value={form.capabilityDemo}
        onChange={(e) => setField('capabilityDemo', e.target.value)}
        className="mt-4 min-h-24 rounded-xl border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-950"
        required
      />

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-700 dark:text-slate-200">
          Preferred timeline
          <select
            value={form.timeline}
            onChange={(e) => setField('timeline', e.target.value)}
            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          >
            <option>Within 30 days</option>
            <option>Within 60 days</option>
            <option>Within 90 days</option>
            <option>Exploring options</option>
          </select>
        </label>

        <label className="text-sm text-slate-700 dark:text-slate-200">
          Preferred next step
          <select
            value={form.nextStepPreference}
            onChange={(e) => setField('nextStepPreference', e.target.value)}
            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          >
            <option>Use $150 credit toward a full project</option>
            <option>Buy the prototype as-is for $150</option>
            <option>Decide after prototype review</option>
          </select>
        </label>
      </div>

      <Button type="submit" variant="gradient" size="lg" className="mt-6 h-11 w-full rounded-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Submit Program Application'}
      </Button>

      {status === 'success' ? (
        <p className="mt-4 text-center text-sm text-emerald-600">Thanks. We received your request and will follow up shortly.</p>
      ) : null}
      {status === 'error' ? (
        <p className="mt-4 text-center text-sm text-rose-600">Submission failed. Please try again.</p>
      ) : null}
    </motion.form>
  );
}
