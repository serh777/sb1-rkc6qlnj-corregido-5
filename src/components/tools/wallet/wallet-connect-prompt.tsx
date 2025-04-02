'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function WalletConnectPrompt() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conecta tu Wallet</CardTitle>
        <CardDescription>
          Conecta tu wallet para acceder a funcionalidades personalizadas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Al conectar tu wallet podrás:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5">•</span>
              <span>Analizar tus propios proyectos y contratos</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5">•</span>
              <span>Recibir recomendaciones personalizadas</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5">•</span>
              <span>Guardar y comparar resultados de análisis</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5">•</span>
              <span>Acceder a herramientas premium</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}