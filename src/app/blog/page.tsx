'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Optimizando Smart Contracts para SEO",
      description: "Guía completa sobre cómo mejorar la visibilidad de tus contratos inteligentes en exploradores blockchain.",
      date: "2024-03-15",
      category: "Técnico",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Mejores Prácticas SEO para DeFi",
      description: "Estrategias efectivas para aumentar la visibilidad de proyectos DeFi en el ecosistema Web3.",
      date: "2024-03-10",
      category: "DeFi",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "SEO para Colecciones NFT",
      description: "Cómo optimizar tus colecciones NFT para máxima visibilidad y alcance.",
      date: "2024-03-05",
      category: "NFTs",
      image: "https://images.unsplash.com/photo-1639322537133-18c2514dc374?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Análisis de Keywords Web3",
      description: "Guía definitiva sobre investigación de palabras clave para proyectos blockchain.",
      date: "2024-03-01",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1639322537964-3edb1b5f5e6a?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Optimización Social para DAOs",
      description: "Estrategias de optimización social para organizaciones autónomas descentralizadas.",
      date: "2024-02-25",
      category: "Social",
      image: "https://images.unsplash.com/photo-1639322537778-5e6f0e6b0c8a?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Métricas SEO en Blockchain",
      description: "Cómo medir y analizar el rendimiento SEO de proyectos blockchain.",
      date: "2024-02-20",
      category: "Análisis",
      image: "https://images.unsplash.com/photo-1639322537428-8f5b4e2f2b3e?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Últimas noticias, guías y mejores prácticas sobre SEO para Web3
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="outline" className="w-full">
                    Leer más
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">¿Quieres más contenido?</h2>
          <p className="text-muted-foreground">
            Suscríbete a nuestro newsletter para recibir las últimas actualizaciones
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 rounded-md border"
              />
              <Button>
                <IconWrapper icon="email" className="mr-2 h-4 w-4" />
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}