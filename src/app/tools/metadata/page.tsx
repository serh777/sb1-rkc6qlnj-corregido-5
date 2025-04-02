'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function MetadataToolPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <div className="mx-auto h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <IconWrapper icon="metadata" className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Análisis de Metadatos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Optimiza los metadatos de tus smart contracts y tokens para máxima visibilidad en el ecosistema Web3
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">¿Qué analizamos?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Metadatos de Smart Contracts</h3>
                  <p className="text-muted-foreground">Análisis completo de nombres, símbolos, descripciones y otros metadatos on-chain</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Tokens y NFTs</h3>
                  <p className="text-muted-foreground">Evaluación de metadatos de tokens y colecciones NFT para mejor descubrimiento</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconWrapper icon="success" className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Optimización SEO</h3>
                  <p className="text-muted-foreground">Recomendaciones para mejorar la visibilidad en exploradores blockchain y motores de búsqueda</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/dashboard/metadata">
                <Button size="lg">
                  <IconWrapper icon="metadata" className="mr-2 h-4 w-4" />
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
                    <h3 className="font-medium">Análisis Detallado</h3>
                    <p className="text-sm text-muted-foreground">Evaluación completa de todos los metadatos relevantes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="ai" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Recomendaciones IA</h3>
                    <p className="text-sm text-muted-foreground">Sugerencias personalizadas basadas en IA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="blockchain" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Múltiples Blockchains</h3>
                    <p className="text-sm text-muted-foreground">Soporte para las principales redes blockchain</p>
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
            <h3 className="text-xl font-bold">Análisis en Tiempo Real</h3>
            <p className="text-muted-foreground">
              Obtén resultados instantáneos y monitorea los cambios en tus metadatos a lo largo del tiempo.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="content" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Mejores Prácticas</h3>
            <p className="text-muted-foreground">
              Recomendaciones basadas en las mejores prácticas del ecosistema Web3 y SEO tradicional.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="blockchain" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Integración Web3</h3>
            <p className="text-muted-foreground">
              Conecta tu wallet para un análisis más detallado y personalizado de tus proyectos.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">¿Listo para optimizar tus metadatos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comienza a mejorar la visibilidad de tus smart contracts y tokens con nuestras herramientas especializadas.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard/metadata">
              <Button size="lg">
                <IconWrapper icon="metadata" className="mr-2 h-4 w-4" />
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