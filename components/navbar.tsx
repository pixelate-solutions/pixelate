'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40">
      <div className="container mx-auto min-w-screen lg:px-20 md:px-12 px-6 py-4 flex items-center justify-between bg-white/70 dark:bg-slate-950/60 backdrop-blur-xl border-b border-white/40 dark:border-slate-800/60">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Pixelate Solutions Logo" className="h-8 w-8" />
          <span className="font-display text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Pixelate Solutions
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="#services" className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-500">
            Services
          </Link>
          <Link href="#process" className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-500">
            Process
          </Link>
          <Link href="#pricing" className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-500">
            Pricing</Link>
          <Link href="#portfolio" className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-500">
            Portfolio
          </Link>
          <Link href="#contact" className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-500">
            Contact
          </Link>
          <Button asChild variant="gradient" size="sm" className="rounded-full px-5">
            <a href="#contact">Start a Project</a>
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none text-slate-900 dark:text-slate-100 hover:cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl">
          {/* Close Button (overlay) */}
          <button
            className="absolute top-5 right-5 focus:outline-none text-slate-900 dark:text-slate-100 hover:cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link
              href="#services"
              className="text-xl font-semibold hover:scale-[105%] border-y border-slate-200 dark:border-slate-800 transition-all w-full text-center py-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-xl font-semibold hover:scale-[105%] border-y border-slate-200 dark:border-slate-800 transition-all w-full text-center py-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#pricing"
              className="text-xl font-semibold hover:scale-[105%] border-y border-slate-200 dark:border-slate-800 transition-all w-full text-center py-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Pricing</Link>
            <Link
              href="#portfolio"
              className="text-xl font-semibold hover:scale-[105%] border-y border-slate-200 dark:border-slate-800 transition-all w-full text-center py-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-xl font-semibold hover:scale-[105%] border-b border-slate-200 dark:border-slate-800 transition-all w-full text-center pb-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Button asChild variant="gradient" className="rounded-full px-6">
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Start a Project
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
