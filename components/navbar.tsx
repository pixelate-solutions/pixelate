'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40">
      <div className="container mx-auto min-w-screen lg:px-36 md:px-24 sm:px-12 px-6 py-4 flex items-center justify-between bg-white/30 dark:bg-gray-900/30 backdrop-blur-md">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Pixelate Solutions Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-gray-700 dark:text-gray-200">Pixelate Solutions</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#features" className="hover:text-gray-500 font-bold">Features</Link>
          <Link href="#services" className="hover:text-gray-500 font-bold">Services</Link>
          <Link href="#contact" className="hover:text-gray-500 font-bold">Contact</Link>
          <ThemeToggle />
          {/* <Button
            asChild
            className="
              bg-gradient-to-br from-green-500 to-purple-600
              text-white
              px-6 py-3
              rounded-lg
              shadow-lg
              hover:scale-105
              duration-300
            "
          >
          <a href="#contact" className='font-bold'>Get Started</a>
        </Button> */}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-900 dark:text-gray-100 hover:cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
          {/* Close Button (overlay) */}
          <button
            className="absolute top-5 right-5 focus:outline-none text-gray-900 dark:text-gray-100 hover:cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link
              href="#features"
              className="text-xl font-medium hover:scale-[105%] border-y border-gray-300 transition-all w-full text-center py-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#services"
              className="text-xl font-medium hover:scale-[105%] border-b border-gray-300 transition-all w-full text-center pb-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-xl font-medium hover:scale-[105%] border-b border-gray-300 transition-all w-full text-center pb-6 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <ThemeToggle />
            {/* <Button asChild className='hover:scale-105'>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Get Started
              </a>
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
