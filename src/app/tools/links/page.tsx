'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function LinksToolPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <div className="mx-auto h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <IconWrapper icon="links" className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Verificación de Enlaces</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analiza y optimiza la estructura de enlaces de tu proyecto blockchain para mejorar su visibilidad y autoridad
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">¿Qué analizamos?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Enlaces Blockchain</h3>
                  <p className="text-muted-foreground">Análisis de referencias y menciones en el ecosistema Web3</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Estructura de Enlaces</h3>
                  <p className="text-muted-foreground">Evaluación de la arquitectura de enlaces internos y externos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Autoridad y Confianza</h3>
                  <p className="text-muted-foreground">Medición de la autoridad del proyecto en el ecosistema blockchain</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/dashboard/links">
                <Button size="lg">
                  <IconWrapper icon="links" className="mr-2 h-4 w-4" />
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
                    <h3 className="font-medium">Análisis Completo</h3>
                    <p className="text-sm text-muted-foreground">Evaluación exhaustiva de todos los enlaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="ai" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">IA Especializada</h3>
                    <p className="text-sm text-muted-foreground">Recomendaciones personalizadas con IA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="blockchain" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Datos On-chain</h3>
                    <p className="text-sm text-muted-foreground">Análisis de referencias blockchain</p>
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
            <h3 className="text-xl font-bold">Monitoreo Continuo</h3>
            <p className="text-muted-foreground">
              Seguimiento en tiempo real de nuevos enlaces y menciones.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="content" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Calidad de Enlaces</h3>
            <p className="text-muted-foreground">
              Evaluación de la calidad y relevancia de cada enlace.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="blockchain" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Autoridad Web3</h3>
            <p className="text-muted-foreground">
              Medición de la autoridad en el ecosistema blockchain.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">¿Listo para mejorar tu estructura de enlaces?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Optimiza la red de enlaces de tu proyecto para aumentar su visibilidad y autoridad en Web3.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard/links">
              <Button size="lg">
                <IconWrapper icon="links" className="mr-2 h-4 w-4" />
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