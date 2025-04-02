'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

interface WalletFeaturesProps {
  connected: boolean;
}

export function WalletFeatures({ connected }: WalletFeaturesProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Análisis de Metadatos</CardTitle>
          <CardDescription>
            Evalúa y optimiza los metadatos de tus proyectos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Icons.metadata className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              Mejora la visibilidad de tus proyectos Web3 con metadatos optimizados para motores de búsqueda y marketplaces.
            </p>
            <Button variant="outline" className="w-full" disabled={!connected}>
              Iniciar Análisis
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Análisis Social Web3</CardTitle>
          <CardDescription>
            Evalúa tu presencia en plataformas descentralizadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Icons.blockchain className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              Analiza y optimiza tu presencia en Mastodon, Hive, Lens Protocol y Mirror.xyz para aumentar tu visibilidad.
            </p>
            <Button variant="outline" className="w-full" disabled={!connected}>
              Iniciar Análisis
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Análisis Completo</CardTitle>
          <CardDescription>
            Evaluación integral de todos los aspectos SEO Web3
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Icons.analytics className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              Realiza un análisis completo que incluye todas las herramientas disponibles para una optimización integral.
            </p>
            <Button className="w-full" disabled={!connected}>
              Iniciar Análisis Completo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}