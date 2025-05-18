// components/Contact.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

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
    <section id="contact" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>
        {status === 'success' && (
          <p className="text-green-600">Thank you! We’ll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600">Oops! Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
