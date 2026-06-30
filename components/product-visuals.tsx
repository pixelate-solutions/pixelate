'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Gauge,
  MessageSquare,
  PackageCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductVisualProps = {
  variant?: 'dashboard' | 'portal' | 'ai' | 'mobile' | 'workflow';
  className?: string;
  compact?: boolean;
};

const rows = [
  ['Acme Supply', 'Quote approved', '$18.4k', 'bg-emerald-500'],
  ['Northline', 'Portal invite sent', '$7.2k', 'bg-cyan-500'],
  ['Bright Metal', 'Needs review', '$42.1k', 'bg-amber-500'],
];

export function ProductVisual({ variant = 'dashboard', className, compact = false }: ProductVisualProps) {
  if (variant === 'mobile') {
    return <MobilePortalMockup className={className} compact={compact} />;
  }

  if (variant === 'ai') {
    return <AiSupportMockup className={className} compact={compact} />;
  }

  if (variant === 'workflow') {
    return <WorkflowMockup className={className} compact={compact} />;
  }

  if (variant === 'portal') {
    return <PortalMockup className={className} compact={compact} />;
  }

  return <DashboardMockup className={className} compact={compact} />;
}

export function DashboardMockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-700/70 dark:bg-slate-950', className)}>
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs font-semibold text-slate-400">operations.pixelate.app</span>
      </div>
      <div className={cn('grid gap-4 p-5', compact ? 'p-4' : 'md:grid-cols-[0.95fr_1.05fr] md:p-6')}>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Live command center</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Workflow visibility</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['94%', 'On time', 'text-emerald-600'],
              ['312', 'Orders', 'text-cyan-600'],
              ['18', 'Alerts', 'text-amber-600'],
            ].map(([value, label, color]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                <p className={cn('text-xl font-semibold', color)}>{value}</p>
                <p className="mt-1 text-[0.68rem] font-medium text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-end gap-2">
              {[58, 74, 43, 88, 66, 91, 79, 96].map((height, index) => (
                <div key={index} className="flex h-28 flex-1 items-end rounded-full bg-white dark:bg-slate-950">
                  <motion.span
                    className={cn('w-full rounded-full', index % 3 === 0 ? 'bg-cyan-500' : index % 3 === 1 ? 'bg-emerald-500' : 'bg-amber-400')}
                    initial={{ height: '20%' }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {rows.map(([customer, status, value, color]) => (
            <div key={customer} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <span className={cn('h-9 w-9 rounded-xl', color)} />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{customer}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{status}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{value}</span>
            </div>
          ))}
          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800/60 dark:bg-cyan-950/30">
            <div className="flex items-center gap-2 text-sm font-semibold text-cyan-800 dark:text-cyan-200">
              <Sparkles className="h-4 w-4" />
              AI summary ready
            </div>
            <p className="mt-2 text-xs leading-relaxed text-cyan-900/80 dark:text-cyan-100/80">
              Three quotes need follow-up. One customer is blocked by missing approval data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalMockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950', className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Customer portal</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">Order #4821</h3>
        </div>
        <PackageCheck className="h-8 w-8 text-emerald-500" />
      </div>
      <div className="mt-5 grid gap-3">
        {['Scope approved', 'Design review', 'Build in progress', 'Launch window'].map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-900">
            <span className={cn('flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold', index < 2 ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300')}>
              {index < 2 ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="mt-4 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Next update</p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">Prototype walkthrough scheduled for Thursday.</p>
        </div>
      ) : null}
    </div>
  );
}

function AiSupportMockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('rounded-[1.5rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-xl shadow-slate-900/20', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-200">
            <Bot className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold">AI support assistant</p>
            <p className="text-xs text-slate-400">Trained on your docs</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">Online</span>
      </div>
      <div className="mt-5 space-y-3">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-cyan-500 p-3 text-sm">
          Which setup guide applies to model X-240?
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/10 p-3 text-sm text-slate-200">
          Use revision 4.2. I found the install checklist, calibration notes, and escalation path.
        </div>
        {!compact ? (
          <div className="grid grid-cols-2 gap-2 text-xs">
            <span className="rounded-xl bg-white/10 px-3 py-2 text-slate-300">Manuals indexed</span>
            <span className="rounded-xl bg-white/10 px-3 py-2 text-slate-300">Ticket drafted</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MobilePortalMockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('mx-auto w-full max-w-[260px] rounded-[2.2rem] border-[10px] border-slate-950 bg-white p-4 shadow-2xl dark:bg-slate-950', className)}>
      <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-200 dark:bg-slate-800" />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400">Today</p>
          <p className="text-lg font-semibold text-slate-950 dark:text-white">Field app</p>
        </div>
        <Smartphone className="h-6 w-6 text-cyan-500" />
      </div>
      <div className="mt-5 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-4 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">Active jobs</p>
        <p className="mt-2 text-3xl font-semibold">12</p>
      </div>
      <div className="mt-4 space-y-3">
        {[
          [Gauge, 'Inspection', '8:30 AM'],
          [MessageSquare, 'Client note', 'New'],
          [FileText, 'Report', 'Ready'],
        ].slice(0, compact ? 2 : 3).map(([Icon, label, meta]) => (
          <div key={label as string} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label as string}</span>
            </div>
            <span className="text-xs text-slate-400">{meta as string}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowMockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950', className)}>
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
        <Activity className="h-4 w-4 text-emerald-500" />
        Workflow automation
      </div>
      <div className="mt-5 grid gap-3">
        {[
          [Users, 'Lead captured'],
          [CircleDollarSign, 'Quote generated'],
          [BarChart3, 'Forecast updated'],
        ].slice(0, compact ? 2 : 3).map(([Icon, label], index) => (
          <div key={label as string} className="relative flex items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-900">
            {index < 2 ? <span className="absolute left-7 top-full h-3 w-px bg-slate-300 dark:bg-slate-700" /> : null}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-cyan-600 shadow-sm dark:bg-slate-950 dark:text-cyan-300">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label as string}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FloatingProductStack() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[520px] lg:min-h-[610px]">
      <motion.div
        className="absolute left-0 top-16 w-[88%] max-w-[680px]"
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <DashboardMockup />
      </motion.div>
      <motion.div
        className="absolute right-0 top-0 hidden w-[42%] max-w-[280px] md:block"
        animate={reduceMotion ? undefined : { y: [0, 14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <MobilePortalMockup />
      </motion.div>
      <motion.div
        className="absolute bottom-5 right-0 w-[74%] max-w-[440px]"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
      >
        <AiSupportMockup />
      </motion.div>
    </div>
  );
}
