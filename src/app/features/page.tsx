'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Características</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre todas las herramientas y funcionalidades que WowSeoWeb3 ofrece para optimizar tu presencia en el ecosistema blockchain
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Análisis de Metadatos */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <IconWrapper icon="metadata" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Análisis de Metadatos</CardTitle>
              <CardDescription>
                Optimiza los metadatos de tus smart contracts y tokens para máxima visibilidad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Análisis completo de metadatos on-chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Recomendaciones de optimización</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Monitoreo de cambios</span>
                </li>
              </ul>
              <Link href="/dashboard/metadata">
                <Button className="w-full">Explorar</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Auditoría de Contenido */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <IconWrapper icon="content" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Auditoría de Contenido</CardTitle>
              <CardDescription>
                Analiza y mejora el contenido de tu proyecto blockchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Análisis de documentación técnica</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Evaluación de whitepapers</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Optimización de contenido Web3</span>
                </li>
              </ul>
              <Link href="/dashboard/content">
                <Button className="w-full">Explorar</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Análisis de Keywords */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <IconWrapper icon="keywords" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Análisis de Keywords</CardTitle>
              <CardDescription>
                Identifica las mejores palabras clave para tu proyecto Web3
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Investigación de keywords blockchain</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Análisis de competencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Tendencias del mercado</span>
                </li>
              </ul>
              <Link href="/dashboard/keywords">
                <Button className="w-full">Explorar</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Verificación de Enlaces */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <IconWrapper icon="links" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Verificación de Enlaces</CardTitle>
              <CardDescription>
                Analiza y optimiza los enlaces de tu proyecto blockchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Análisis de backlinks</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Monitoreo de menciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Oportunidades de enlaces</span>
                </li>
              </ul>
              <Link href="/dashboard/backlinks">
                <Button className="w-full">Explorar</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Análisis de Rendimiento */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <IconWrapper icon="performance" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Análisis de Rendimiento</CardTitle>
              <CardDescription>
                Evalúa y mejora el rendimiento de tus smart contracts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Optimización de gas</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Análisis de transacciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Métricas de rendimiento</span>
                </li>
              </ul>
              <Link href="/dashboard/performance">
                <Button className="w-full">Explorar</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Integración Web3 */}
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <IconWrapper icon="blockchain" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Integración Web3</CardTitle>
              <CardDescription>
                Conecta tu wallet y accede a funcionalidades avanzadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Conexión de wallet</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Análisis personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500 mt-1" />
                  <span>Gestión de proyectos</span>
                </li>
              </ul>
              <Link href="/dashboard/wallet">
                <Button className="w-full">Explorar</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold">¿Listo para empezar?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comienza a optimizar tu presencia Web3 hoy mismo con nuestras herramientas especializadas
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg">
                <IconWrapper icon="dashboard" className="mr-2 h-4 w-4" />
                Acceder al Panel
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">Ver Precios</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}