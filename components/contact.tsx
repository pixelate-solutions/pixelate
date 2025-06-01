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
    <section id="contact" className="relative py-20 bg-gray-100 dark:bg-gray-700">
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            {/* LEFT PANEL */}
            <div className="p-12 space-y-6">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                Let’s Talk About Your Project
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Have an idea, a question, or just want to say hello? We’re all ears. Fill out the form and we’ll get back to you shortly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-900 dark:text-gray-100">
                  <Mail className="w-6 h-6 text-green-500 mr-3" />
                  <span>admin@pixelate.solutions</span>
                </div>
                <div className="flex items-center text-gray-900 dark:text-gray-100">
                  <MessageSquare className="w-6 h-6 text-purple-500 mr-3" />
                  <span>+1 (616) 320-1776</span>
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
              className="p-12 bg-white/80 dark:bg-gray-900/80"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="relative"
                >
                  <User className="absolute left-3 top-1/2 -mt-2 w-5 h-5 text-gray-400" />
                  <Input
                    className="pl-10 h-12"
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
                  <Mail className="absolute left-3 top-1/2 -mt-2 w-5 h-5 text-gray-400" />
                  <Input
                    className="pl-10 h-12"
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
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Textarea
                  className="pl-10 pt-3 h-32"
                  placeholder="Your Message"
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
                  className="w-full h-12 font-bold duration-500 hover:cursor-pointer"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </Button>
              </motion.div>

              {/* Feedback */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mt-6 text-center text-green-600"
                >
                  Thank you! We’ll be in touch soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mt-6 text-center text-red-600"
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
    </section>
  );
}
