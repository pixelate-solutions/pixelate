// components/navbar.tsx
'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <Link href="/">
        <span className="text-2xl font-bold">Pixelate Solutions</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="#features" className="hover:underline">Features</Link>
        <Link href="#pricing" className="hover:underline">Pricing</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
        <ThemeToggle />
        <Button asChild>
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </nav>
  );
}
