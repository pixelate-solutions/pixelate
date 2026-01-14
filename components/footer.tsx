// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60 py-10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
      <div className="container mx-auto px-6 text-center text-sm text-slate-600 dark:text-slate-300">
        <p>&copy; {new Date().getFullYear()} Pixelate Solutions LLC. All rights reserved.</p>
        <div className="mt-3 flex justify-center space-x-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          <Link href="/privacy" className="hover:text-slate-800 dark:hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-800 dark:hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
