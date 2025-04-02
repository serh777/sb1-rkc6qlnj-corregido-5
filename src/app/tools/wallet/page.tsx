'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function WalletToolPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <div className="mx-auto h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <IconWrapper icon="wallet" className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Integración con Wallets</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecta tu wallet para acceder a funcionalidades avanzadas y análisis personalizados de tus proyectos Web3
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">¿Qué ofrecemos?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Análisis Personalizado</h3>
                  <p className="text-muted-foreground">Evaluación detallada de tus propios contratos y tokens</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Gestión de Proyectos</h3>
                  <p className="text-muted-foreground">Administra y monitorea todos tus proyectos desde un solo lugar</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Funciones Premium</h3>
                  <p className="text-muted-foreground">Acceso a herramientas y análisis avanzados</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/dashboard/wallet">
                <Button size="lg">
                  <IconWrapper icon="wallet" className="mr-2 h-4 w-4" />
                  Conectar Wallet
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">Ver Precios</Button>
              </Link>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="analytics" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Análisis Avanzado</h3>
                    <p className="text-sm text-muted-foreground">Métricas detalladas de tus activos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="ai" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Recomendaciones IA</h3>
                    <p className="text-sm text-muted-foreground">Sugerencias personalizadas para tus proyectos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="blockchain" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Multi-chain</h3>
                    <p className="text-sm text-muted-foreground">Soporte para múltiples blockchains</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="performance" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Conexión Segura</h3>
            <p className="text-muted-foreground">
              Integración segura con las principales wallets Web3.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="content" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Dashboard Personal</h3>
            <p className="text-muted-foreground">
              Panel de control personalizado para tus proyectos.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="blockchain" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Análisis On-chain</h3>
            <p className="text-muted-foreground">
              Datos y métricas directamente de la blockchain.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">¿Listo para empezar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conecta tu wallet y accede a todas las funcionalidades premium de nuestra plataforma.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard/wallet">
              <Button size="lg">
                <IconWrapper icon="wallet" className="mr-2 h-4 w-4" />
                Conectar Ahora
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <IconWrapper icon="support" className="mr-2 h-4 w-4" />
                Contactar Soporte
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}