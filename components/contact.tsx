// components/Contact.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, User, MessageSquare } from 'lucide-react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setEmail(''); setMessage('');
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_10%_20%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(70%_70%_at_90%_20%,rgba(251,191,36,0.18),transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-2xl backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-900/70 md:grid-cols-2"
        >
          {/* LEFT PANEL */}
          <div className="px-10 pt-10 md:p-12 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Contact
            </p>
            <h2 className="font-display text-4xl text-slate-900 dark:text-white">
              Tell us about your next release.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Share your goals and timelines. We will respond within two business days with a clear
              plan, scope, and next steps.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center text-slate-900 dark:text-slate-100">
                <Mail className="w-5 h-5 text-cyan-500 mr-3" />
                <span>admin@pixelate.solutions</span>
              </div>
              {/* <div className="flex items-center text-slate-900 dark:text-slate-100">
                <MessageSquare className="w-5 h-5 text-amber-500 mr-3" />
                <span>+1 (616) 320-1776</span>
              </div> */}
              <div className="flex items-center text-slate-900 dark:text-slate-100">
                <User className="w-5 h-5 text-emerald-500 mr-3" />
                <span>Average response time: 1-2 business days</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (FORM) */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
            onSubmit={handleSubmit}
            className="p-10 md:p-12 bg-white/80 dark:bg-slate-950/70"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="relative"
              >
                <User className="absolute left-3 top-1/2 -mt-2 w-5 h-5 text-slate-400" />
                <Input
                  className="pl-10 h-12 rounded-xl border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="relative"
              >
                <Mail className="absolute left-3 top-1/2 -mt-2 w-5 h-5 text-slate-400" />
                <Input
                  className="pl-10 h-12 rounded-xl border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="relative mb-6"
            >
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <Textarea
                className="pl-10 pt-3 h-32 rounded-xl border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900"
                placeholder="Briefly describe what you want to build"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-center"
            >
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full h-12 rounded-full font-semibold"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </motion.div>

            {/* Feedback */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-center text-emerald-600"
              >
                Thank you! We will be in touch soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-center text-rose-600"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
