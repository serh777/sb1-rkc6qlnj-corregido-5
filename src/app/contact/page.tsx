'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconWrapper } from '@/components/ui/icon-wrapper';

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-lg w-full">
          <CardHeader className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <IconWrapper icon="success" className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>¡Mensaje Enviado!</CardTitle>
            <CardDescription>
              Gracias por contactarnos. Responderemos a tu mensaje lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button onClick={() => setSubmitted(false)}>Enviar otro mensaje</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestras herramientas SEO para Web3? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Apellido
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="general">Consulta general</option>
                    <option value="sales">Ventas</option>
                    <option value="support">Soporte técnico</option>
                    <option value="enterprise">Soluciones Enterprise</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <IconWrapper icon="spinner" className="mr-2 h-4 w-4" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Información de contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="email" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contacto@wowseoweb3.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="discord" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Discord</p>
                    <p className="text-sm text-muted-foreground">discord.gg/wowseoweb3</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconWrapper icon="twitter" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-sm text-muted-foreground">@wowseoweb3</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">¿Cómo funciona el análisis SEO Web3?</h3>
                  <p className="text-sm text-muted-foreground">
                    Nuestras herramientas analizan múltiples aspectos de tu proyecto blockchain, incluyendo metadatos,
                    smart contracts, contenido y presencia social para proporcionar recomendaciones específicas.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">¿Qué blockchains soportan?</h3>
                  <p className="text-sm text-muted-foreground">
                    Actualmente soportamos Ethereum, Polygon, BSC, Avalanche y otras cadenas principales. Estamos
                    constantemente añadiendo soporte para más blockchains.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">¿Ofrecen planes personalizados?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sí, ofrecemos planes Enterprise personalizados para proyectos grandes y DAOs. Contáctanos para
                    discutir tus necesidades específicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-primary/5 p-6">
              <h2 className="text-2xl font-bold mb-2">¿Necesitas ayuda inmediata?</h2>
              <p className="text-muted-foreground mb-4">
                Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier consulta técnica.
              </p>
              <Button variant="outline" className="w-full">
                <IconWrapper icon="support" className="mr-2 h-4 w-4" />
                Iniciar chat de soporte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}