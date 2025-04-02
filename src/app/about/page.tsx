'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Sobre Nosotros</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Optimizando la visibilidad y el alcance de proyectos blockchain a través de herramientas SEO especializadas
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground">
              En WowSeoWeb3, nos dedicamos a hacer que los proyectos blockchain sean más accesibles y visibles para todos. 
              Creemos que la tecnología blockchain tiene el poder de transformar industrias enteras, pero solo si las 
              personas pueden encontrar y entender estos proyectos fácilmente.
            </p>
            <div className="flex gap-4">
              <Link href="/dashboard">
                <Button size="lg">
                  <IconWrapper icon="dashboard" className="mr-2 h-4 w-4" />
                  Comenzar Ahora
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contactar</Button>
              </Link>
            </div>
          </div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Proyectos Analizados</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Smart Contracts</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Soporte Técnico</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="blockchain" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Experiencia Blockchain</h3>
            <p className="text-muted-foreground">
              Nuestro equipo cuenta con años de experiencia en el ecosistema blockchain y comprende las necesidades 
              específicas de los proyectos Web3.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="analytics" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Análisis Avanzado</h3>
            <p className="text-muted-foreground">
              Utilizamos tecnología de punta y algoritmos especializados para proporcionar análisis detallados y 
              recomendaciones accionables.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="ai" className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Inteligencia Artificial</h3>
            <p className="text-muted-foreground">
              Nuestras herramientas incorporan IA para proporcionar insights más precisos y personalizados para cada 
              proyecto.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos un equipo diverso de expertos en blockchain, SEO y desarrollo de software, unidos por la pasión 
            de hacer que Web3 sea más accesible para todos.
          </p>
          <div className="grid gap-8 md:grid-cols-4 mt-8">
            {[
              {
                name: "Ana García",
                role: "CEO & Fundadora",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
              },
              {
                name: "Carlos Ruiz",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
              },
              {
                name: "Laura Martínez",
                role: "Directora de Producto",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
              },
              {
                name: "David Torres",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center space-y-6">
          <h2 className="text-3xl font-bold">¿Listo para optimizar tu proyecto Web3?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete a cientos de proyectos blockchain que ya han mejorado su visibilidad y alcance con nuestras herramientas.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg">
                <IconWrapper icon="dashboard" className="mr-2 h-4 w-4" />
                Comenzar Ahora
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <IconWrapper icon="ai" className="mr-2 h-4 w-4" />
                Hablar con un Experto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}