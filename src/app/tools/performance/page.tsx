'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function PerformanceToolPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <div className="mx-auto h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <IconWrapper icon="performance" className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Análisis de Rendimiento</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Evalúa y optimiza el rendimiento de tus smart contracts y aplicaciones Web3 para una mejor experiencia de usuario
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">¿Qué analizamos?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Optimización de Gas</h3>
                  <p className="text-muted-foreground">Análisis y recomendaciones para reducir costos de gas en tus contratos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Eficiencia de Contratos</h3>
                  <p className="text-muted-foreground">Evaluación de la eficiencia y optimización del código de tus smart contracts</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Métricas de Rendimiento</h3>
                  <p className="text-muted-foreground">Monitoreo de tiempos de respuesta, costos y eficiencia en la blockchain</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/dashboard/performance">
                <Button size="lg">
                  <IconWrapper icon="performance" className="mr-2 h-4 w-4" />
                  Comenzar Análisis
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
                    <h3 className="font-medium">Análisis en Tiempo Real</h3>
                    <p className="text-sm text-muted-foreground">Monitoreo continuo del rendimiento</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="ai" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Optimización Automática</h3>
                    <p className="text-sm text-muted-foreground">Sugerencias de mejora basadas en IA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="blockchain" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Múltiples Blockchains</h3>
                    <p className="text-sm text-muted-foreground">Soporte para las principales redes</p>
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
            <h3 className="text-xl font-bold">Optimización de Gas</h3>
            <p className="text-muted-foreground">
              Reduce los costos de gas y mejora la eficiencia de tus transacciones.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="content" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Análisis de Código</h3>
            <p className="text-muted-foreground">
              Evaluación detallada del código de tus smart contracts.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="blockchain" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Métricas On-chain</h3>
            <p className="text-muted-foreground">
              Monitoreo de métricas clave en la blockchain.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">¿Listo para optimizar tu rendimiento?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mejora la eficiencia y reduce los costos de tus operaciones en la blockchain.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard/performance">
              <Button size="lg">
                <IconWrapper icon="performance" className="mr-2 h-4 w-4" />
                Comenzar Ahora
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