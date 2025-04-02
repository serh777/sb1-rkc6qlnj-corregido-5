'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function ContentToolPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <div className="mx-auto h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <IconWrapper icon="content" className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Auditoría de Contenido</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analiza y optimiza el contenido de tu proyecto blockchain para máximo impacto y visibilidad
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">¿Qué analizamos?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Documentación Técnica</h3>
                  <p className="text-muted-foreground">Análisis de whitepapers, documentación técnica y guías de usuario</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Contenido Web3</h3>
                  <p className="text-muted-foreground">Evaluación de contenido en plataformas blockchain y redes sociales descentralizadas</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Optimización SEO</h3>
                  <p className="text-muted-foreground">Recomendaciones para mejorar el posicionamiento y alcance del contenido</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/dashboard/content">
                <Button size="lg">
                  <IconWrapper icon="content" className="mr-2 h-4 w-4" />
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
                    <h3 className="font-medium">Análisis Profundo</h3>
                    <p className="text-sm text-muted-foreground">Evaluación detallada de todo tu contenido Web3</p>
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
                    <h3 className="font-medium">Ecosistema Web3</h3>
                    <p className="text-sm text-muted-foreground">Optimización para plataformas blockchain</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="keywords" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Keywords Web3</h3>
            <p className="text-muted-foreground">
              Identificación y optimización de palabras clave específicas del ecosistema blockchain.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="links" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Estructura de Enlaces</h3>
            <p className="text-muted-foreground">
              Análisis y optimización de la estructura de enlaces internos y externos.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="performance" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Rendimiento</h3>
            <p className="text-muted-foreground">
              Evaluación del rendimiento y accesibilidad del contenido.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">¿Listo para mejorar tu contenido?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Optimiza tu contenido Web3 para alcanzar una mayor audiencia y mejorar el engagement.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard/content">
              <Button size="lg">
                <IconWrapper icon="content" className="mr-2 h-4 w-4" />
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