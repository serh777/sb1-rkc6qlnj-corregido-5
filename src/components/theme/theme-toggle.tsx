'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { IconWrapper } from '@/components/ui/icon-wrapper';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <IconWrapper
        icon={theme === 'light' ? 'moon' : 'sun'}
        className="h-5 w-5 transition-all"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}