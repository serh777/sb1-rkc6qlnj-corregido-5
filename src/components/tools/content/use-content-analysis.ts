'use client';

import { useState } from 'react';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import type { AnalysisResult } from '@/types';

export function useContentAnalysis() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Auditoría de Contenido');
    
    try {
      // Validar datos de entrada
      if (!data.url || data.url.trim() === '') {
        throw new Error('La URL del proyecto es obligatoria');
      }
      
      // Generar datos simulados de auditoría de contenido
      const contentData = {
        url: data.url,
        metrics: {
          readability: Math.floor(Math.random() * 30) + 60,
          relevance: Math.floor(Math.random() * 25) + 65,
          technical: Math.floor(Math.random() * 20) + 70,
          engagement: Math.floor(Math.random() * 35) + 55,
          seo: Math.floor(Math.random() * 30) + 60
        },
        issues: [
          {
            type: 'readability',
            severity: 'medium',
            description: 'Oraciones demasiado largas en la sección de tokenomics',
            recommendation: 'Divide las oraciones largas en frases más cortas y directas'
          },
          {
            type: 'technical',
            severity: 'high',
            description: 'Terminología blockchain inconsistente',
            recommendation: 'Estandariza los términos técnicos en todo el contenido'
          }
        ],
        recommendations: [
          'Mejora la legibilidad utilizando oraciones más cortas',
          'Actualiza regularmente el contenido técnico',
          'Añade más ejemplos de casos de uso reales'
        ]
      };

      const score = Math.floor(
        Object.values(contentData.metrics).reduce((a, b) => a + b, 0) / 
        Object.values(contentData.metrics).length
      );
      
      setResults({
        type: 'content',
        data: contentData,
        score
      });
      
      notifyAnalysisCompleted('Auditoría de Contenido', score);
    } catch (error) {
      console.error('Error en auditoría de contenido:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Auditoría de Contenido', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    results,
    handleSubmit
  };
}