'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Planes y Precios</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades de optimización Web3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <Card>
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <CardDescription>Para proyectos pequeños y startups</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Análisis básico de metadatos</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Auditoría de contenido limitada</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>1 proyecto</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Soporte por email</span>
                </li>
              </ul>
              <Button className="w-full">Empezar Gratis</Button>
            </CardContent>
          </Card>

          {/* Plan Pro */}
          <Card className="relative border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Más Popular
            </div>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Para proyectos en crecimiento</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$149</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Todo lo del plan Básico</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Análisis avanzado de smart contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>5 proyectos</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Soporte prioritario</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Análisis de competencia</span>
                </li>
              </ul>
              <Button className="w-full">Comenzar con Pro</Button>
            </CardContent>
          </Card>

          {/* Plan Enterprise */}
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Para grandes proyectos y DAOs</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$499</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Todo lo del plan Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Proyectos ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>API personalizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Soporte 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconWrapper icon="success" className="h-4 w-4 text-green-500" />
                  <span>Consultoría personalizada</span>
                </li>
              </ul>
              <Button className="w-full">Contactar Ventas</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold">¿Necesitas algo diferente?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contáctanos para discutir tus necesidades específicas y crear un plan personalizado para tu proyecto.
          </p>
          <Button variant="outline" size="lg">
            <IconWrapper icon="ai" className="mr-2 h-4 w-4" />
            Hablar con un Experto
          </Button>
        </div>
      </div>
    </div>
  );
}