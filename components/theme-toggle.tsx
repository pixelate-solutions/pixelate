// components/theme-toggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 hover:cursor-pointer hover:scale-[105%]"
    >
      {mounted ? (
        theme === 'dark' ? (
          <Sun className="w-5 h-5" aria-label="Switch to light mode" />
        ) : (
          <Moon className="w-5 h-5" aria-label="Switch to dark mode" />
        )
      ) : (
        // While waiting for client hydration, render a visually hidden placeholder
        <span className="w-5 h-5 block" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
