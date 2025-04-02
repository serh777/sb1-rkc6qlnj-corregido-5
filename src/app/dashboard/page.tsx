'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardCard } from '@/components/dashboard/dashboard-card';
import { IconWrapper } from '@/components/ui/icon-wrapper';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <IconWrapper icon="wallet" className="h-4 w-4" />
            <span>Conectar Wallet</span>
          </Button>
          <Button className="flex items-center gap-2">
            <IconWrapper icon="ai" className="h-4 w-4" />
            <span>Análisis Completo</span>
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard 
          title="Puntuación SEO" 
          value="78/100" 
          description="Puntuación general de SEO Web3" 
          icon="analytics"
          trend="up"
          trendValue="12% desde el último análisis"
        />
        <DashboardCard 
          title="Metadatos" 
          value="85/100" 
          description="Calidad de metadatos blockchain" 
          icon="metadata"
          trend="up"
          trendValue="8% desde el último análisis"
        />
        <DashboardCard 
          title="Contenido" 
          value="72/100" 
          description="Calidad del contenido Web3" 
          icon="content"
          trend="neutral"
          trendValue="Sin cambios"
        />
        <DashboardCard 
          title="Rendimiento" 
          value="68/100" 
          description="Velocidad y rendimiento técnico" 
          icon="performance"
          trend="down"
          trendValue="5% desde el último análisis"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Análisis Híbrido</CardTitle>
            <CardDescription>
              Selecciona las herramientas para un análisis personalizado o ejecuta un análisis completo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="metadata" className="h-4 w-4 text-primary" defaultChecked />
                    <label htmlFor="metadata" className="text-sm font-medium">Análisis de Metadatos</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="content" className="h-4 w-4 text-primary" defaultChecked />
                    <label htmlFor="content" className="text-sm font-medium">Auditoría de Contenido</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="keywords" className="h-4 w-4 text-primary" defaultChecked />
                    <label htmlFor="keywords" className="text-sm font-medium">Análisis de Keywords</label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="links" className="h-4 w-4 text-primary" defaultChecked />
                    <label htmlFor="links" className="text-sm font-medium">Verificación de Enlaces</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="performance" className="h-4 w-4 text-primary" defaultChecked />
                    <label htmlFor="performance" className="text-sm font-medium">Análisis de Rendimiento</label>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <input 
                  type="text" 
                  placeholder="Dirección de contrato o wallet" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button>Analizar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Asistente IA</CardTitle>
            <CardDescription>
              Consulta con nuestro asistente especializado en SEO Web3
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm">¿Cómo puedo mejorar la visibilidad de mi proyecto NFT en los motores de búsqueda?</p>
              </div>
              <div className="flex items-center gap-4">
                <input 
                  type="text" 
                  placeholder="Escribe tu pregunta..." 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button variant="outline">
                  <IconWrapper icon="ai" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>
              Últimos análisis y actividades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <IconWrapper icon="metadata" className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Análisis de Metadatos</p>
                  <p className="text-xs text-muted-foreground">Contrato: 0x1a2...3b4c</p>
                  <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <IconWrapper icon="content" className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Auditoría de Contenido</p>
                  <p className="text-xs text-muted-foreground">Proyecto: DeFi Protocol</p>
                  <p className="text-xs text-muted-foreground">Ayer</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <IconWrapper icon="wallet" className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Wallet Conectada</p>
                  <p className="text-xs text-muted-foreground">0x545d5e...9B561</p>
                  <p className="text-xs text-muted-foreground">Hace 3 días</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recomendaciones</CardTitle>
            <CardDescription>
              Sugerencias de mejora basadas en IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <IconWrapper icon="metadata" className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Optimiza los metadatos de tu contrato</p>
                  <p className="text-xs text-muted-foreground">Añade descripciones más detalladas y palabras clave relevantes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <IconWrapper icon="links" className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Mejora los enlaces internos</p>
                  <p className="text-xs text-muted-foreground">Conecta mejor tus diferentes recursos y documentación.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <IconWrapper icon="performance" className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Optimiza el rendimiento del contrato</p>
                  <p className="text-xs text-muted-foreground">Reduce el consumo de gas para mejorar la experiencia de usuario.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}