'use client';

import React from 'react';
import { ToolLayout } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import ErrorBoundary from '@/components/error-boundary';
import type { AnalysisResult } from '@/types';
import { HistoricalForm } from './components/historical-form';
import { HistoricalMetrics } from './components/historical-metrics';
import { HistoricalRecommendations } from './components/historical-recommendations';
import { HistoricalVisualization } from './components/historical-visualization';
import type { HistoricalData } from './types';

export default function HistoricalAnalysisPage() {
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<AnalysisResult | null>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const generateTimeSeriesData = (days: number, min: number, max: number) => {
    const data = [];
    let currentValue = min + Math.random() * (max - min);
    
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (days - i));
      
      const change = (Math.random() - 0.5) * 10;
      currentValue = Math.max(min, Math.min(max, currentValue + change));
      
      data.push({
        date: date.toISOString().split('T')[0],
        value: Math.round(currentValue)
      });
    }
    
    return data;
  };

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Análisis Histórico');
    
    try {
      // Validar datos de entrada
      if (!data.projectName || data.projectName.trim() === '') {
        throw new Error('El nombre del proyecto es obligatorio');
      }
      
      if (!data.projectUrl || data.projectUrl.trim() === '') {
        throw new Error('La URL del proyecto es obligatoria');
      }
      
      // Generar datos simulados de análisis histórico
      const historicalData: HistoricalData = {
        projectName: data.projectName,
        url: data.projectUrl,
        score: Math.floor(Math.random() * 30) + 60,
        metrics: {
          seo: generateTimeSeriesData(30, 50, 100),
          performance: generateTimeSeriesData(30, 40, 90),
          accessibility: generateTimeSeriesData(30, 60, 95),
          bestPractices: generateTimeSeriesData(30, 55, 85)
        },
        trends: [
          {
            metric: 'SEO',
            trend: 'up',
            change: '+15%',
            description: 'Mejora constante en optimización'
          },
          {
            metric: 'Performance',
            trend: 'neutral',
            change: '0%',
            description: 'Rendimiento estable'
          },
          {
            metric: 'Accessibility',
            trend: 'up',
            change: '+8%',
            description: 'Mejoras en accesibilidad'
          }
        ],
        recommendations: [
          'Optimizar metadatos para mejor visibilidad',
          'Mejorar tiempos de carga en mobile',
          'Implementar más características de accesibilidad',
          'Actualizar contenido regularmente'
        ]
      };
      
      setResults({
        type: 'historical',
        data: historicalData,
        score: historicalData.score
      });

      notifyAnalysisCompleted('Análisis Histórico', historicalData.score);
    } catch (error) {
      console.error('Error en análisis histórico:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Análisis Histórico', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <ToolLayout 
        title="Análisis Histórico" 
        description="Analiza la evolución de tu proyecto Web3 a lo largo del tiempo"
        icon="history"
      >
        <HistoricalForm onSubmit={handleSubmit} loading={loading} />

        {results && (
          <>
            <div className="flex justify-end mb-4">
              <SaveAnalysisButton analysisData={results} />
            </div>
            
            <HistoricalMetrics data={results.data} score={results.score} />
            <HistoricalRecommendations recommendations={results.data.recommendations} />
            <HistoricalVisualization metrics={results.data.metrics} />
          </>
        )}
      </ToolLayout>
    </ErrorBoundary>
  );
}