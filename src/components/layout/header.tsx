'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoWithText } from '@/components/ui/logo';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <LogoWithText />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium hover:text-primary">
            Características
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary">
            Precios
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            Nosotros
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="ghost" size="sm">Iniciar Sesión</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="sm">Acceder al Panel</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}