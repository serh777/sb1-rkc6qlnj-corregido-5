'use client';

import React from 'react';
import { LogoWithText } from '@/components/ui/logo';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-4">
        <LogoWithText />
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              isActive('/dashboard') 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-primary/10'
            }`}
          >
            <IconWrapper icon="dashboard" className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          
          <div className="mt-6">
            <h4 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Herramientas SEO</h4>
            <div className="grid gap-1">
              <Link
                href="/dashboard/metadata"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/metadata') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="metadata" className="h-4 w-4" />
                <span>Análisis de Metadatos</span>
              </Link>
              <Link
                href="/dashboard/content"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/content') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="content" className="h-4 w-4" />
                <span>Auditoría de Contenido</span>
              </Link>
              <Link
                href="/dashboard/keywords"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/keywords') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="keywords" className="h-4 w-4" />
                <span>Análisis de Keywords</span>
              </Link>
              <Link
                href="/dashboard/links"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/links') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="links" className="h-4 w-4" />
                <span>Verificación de Enlaces</span>
              </Link>
              <Link
                href="/dashboard/performance"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/performance') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="performance" className="h-4 w-4" />
                <span>Análisis de Rendimiento</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Web3</h4>
            <div className="grid gap-1">
              <Link
                href="/dashboard/wallet"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/wallet') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="wallet" className="h-4 w-4" />
                <span>Conectar Wallet</span>
              </Link>
              <Link
                href="/dashboard/blockchain"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/blockchain') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="blockchain" className="h-4 w-4" />
                <span>Análisis Blockchain</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">IA</h4>
            <div className="grid gap-1">
              <Link
                href="/dashboard/ai-assistant"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive('/dashboard/ai-assistant') 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconWrapper icon="ai" className="h-4 w-4" />
                <span>Asistente IA</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
            isActive('/dashboard/settings') 
              ? 'bg-primary/10 text-primary' 
              : 'hover:bg-primary/10'
          }`}
        >
          <IconWrapper icon="settings" className="h-4 w-4" />
          <span>Configuración</span>
        </Link>
      </div>
    </div>
  );
}