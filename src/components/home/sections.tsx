import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Optimiza tu presencia Web3 con herramientas SEO avanzadas
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Analiza, mejora y monitoriza tus proyectos blockchain con nuestras herramientas especializadas en SEO para Web3.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard">
              <Button size="lg">Acceder al Panel</Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg">Explorar Características</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      title: "Análisis de Metadatos",
      description: "Evalúa y optimiza los metadatos de tus proyectos Web3 para mejorar su visibilidad en buscadores.",
      icon: "📊",
      link: "/tools/metadata"
    },
    {
      title: "Auditoría de Contenido",
      description: "Analiza la estructura y calidad del contenido de tus proyectos blockchain para maximizar su impacto.",
      icon: "📝",
      link: "/tools/content"
    },
    {
      title: "Análisis de Keywords",
      description: "Identifica las palabras clave más relevantes para tu proyecto Web3 y optimiza tu estrategia.",
      icon: "🔍",
      link: "/tools/keywords"
    },
    {
      title: "Verificación de Enlaces",
      description: "Detecta y corrige problemas en la estructura de enlaces de tu proyecto blockchain.",
      icon: "🔗",
      link: "/tools/links"
    },
    {
      title: "Análisis de Rendimiento",
      description: "Evalúa y mejora el rendimiento técnico de tus aplicaciones Web3 para una mejor experiencia de usuario.",
      icon: "⚡",
      link: "/tools/performance"
    },
    {
      title: "Integración con Wallets",
      description: "Conecta tu wallet para realizar auditorías personalizadas y acceder a funcionalidades premium.",
      icon: "👛",
      link: "/tools/wallet"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Herramientas SEO especializadas para Web3</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Nuestras herramientas están diseñadas específicamente para optimizar proyectos en el ecosistema blockchain.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={feature.link}>
                  <Button variant="ghost">Saber más</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HybridAnalysisSection() {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Análisis flexible a tu medida</h2>
            <p className="text-muted-foreground md:text-lg">
              Nuestro enfoque híbrido te permite elegir entre herramientas individuales o un análisis completo unificado.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Herramientas individuales con funcionalidad independiente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Modo de análisis completo para una visión integral</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Análisis personalizado seleccionando herramientas específicas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Datos reales de múltiples fuentes blockchain</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/dashboard">
                <Button>Probar ahora</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-background p-6 shadow-lg border">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Análisis Completo</h3>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">Recomendado</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="h-4 w-4 text-primary" />
                  <span>Análisis de Metadatos</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="h-4 w-4 text-primary" />
                  <span>Auditoría de Contenido</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="h-4 w-4 text-primary" />
                  <span>Análisis de Keywords</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="h-4 w-4 text-primary" />
                  <span>Verificación de Enlaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="h-4 w-4 text-primary" />
                  <span>Análisis de Rendimiento</span>
                </div>
              </div>
              <div className="pt-2">
                <Button className="w-full">Iniciar Análisis Completo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Listo para optimizar tu proyecto Web3?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Comienza a utilizar nuestras herramientas SEO especializadas y lleva tu presencia blockchain al siguiente nivel.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard">
              <Button size="lg">Acceder al Panel</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contactar con Ventas</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}