'use client';

import * as React from 'react';
import { ScoreCard } from '@/components/tools/tool-components';

interface ContentMetricsProps {
  metrics: {
    readability: number;
    relevance: number;
    technical: number;
    engagement: number;
    seo: number;
  };
}

export function ContentMetrics({ metrics }: ContentMetricsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <ScoreCard 
        title="Legibilidad" 
        score={metrics.readability} 
        description="Facilidad de lectura y comprensión" 
      />
      <ScoreCard 
        title="Relevancia" 
        score={metrics.relevance} 
        description="Alineación con intereses del público" 
      />
      <ScoreCard 
        title="Precisión Técnica" 
        score={metrics.technical} 
        description="Exactitud de la información técnica" 
      />
      <ScoreCard 
        title="Engagement" 
        score={metrics.engagement} 
        description="Capacidad para mantener el interés" 
      />
      <ScoreCard 
        title="Optimización SEO" 
        score={metrics.seo} 
        description="Adaptación para motores de búsqueda" 
      />
    </div>
  );
}