// components/theme-toggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 hover:cursor-pointer hover:scale-[105%]"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
