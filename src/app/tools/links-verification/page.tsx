'use client';

import React from 'react';
import { ToolLayout, InputForm, AnalysisResults, Visualization, ScoreCard } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import ErrorBoundary from '@/components/error-boundary';

export default function LinksVerificationPage() {
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<any>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Verificación de Enlaces');
    
    try {
      // Validar datos de entrada
      if (!data.projectUrl || data.projectUrl.trim() === '') {
        throw new Error('La URL del proyecto es obligatoria');
      }
      
      // Generar datos simulados de verificación de enlaces
      const linksData = {
        projectName: data.projectName || 'Proyecto Web3',
        url: data.projectUrl,
        score: Math.floor(Math.random() * 30) + 60,
        totalLinks: Math.floor(Math.random() * 500) + 100,
        brokenLinks: Math.floor(Math.random() * 20),
        internalLinks: Math.floor(Math.random() * 200) + 50,
        externalLinks: Math.floor(Math.random() * 300) + 50,
        topSources: [
          { domain: 'ethereum.org', authority: 95, count: Math.floor(Math.random() * 10) + 1 },
          { domain: 'coindesk.com', authority: 92, count: Math.floor(Math.random() * 8) + 1 },
          { domain: 'cointelegraph.com', authority: 90, count: Math.floor(Math.random() * 7) + 1 },
          { domain: 'defipulse.com', authority: 87, count: Math.floor(Math.random() * 6) + 1 },
          { domain: 'decrypt.co', authority: 85, count: Math.floor(Math.random() * 5) + 1 }
        ],
        recommendations: [
          'Corregir enlaces rotos detectados',
          'Mejorar la estructura de enlaces internos',
          'Optimizar textos de anclaje para SEO',
          'Añadir enlaces a recursos blockchain relevantes'
        ]
      };
      
      setResults(linksData);
      notifyAnalysisCompleted('Verificación de Enlaces', linksData.score);
    } catch (error) {
      console.error('Error en verificación de enlaces:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Verificación de Enlaces', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <ToolLayout
        title="Verificación de Enlaces Web3"
        description="Analiza y optimiza la estructura de enlaces de tu proyecto blockchain"
        icon="🔗"
      >
        <InputForm onSubmit={handleSubmit} loading={loading}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="projectName" className="text-sm font-medium">Nombre del Proyecto</label>
              <input
                id="projectName"
                name="projectName"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Mi Proyecto Web3"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="projectUrl" className="text-sm font-medium">URL del Proyecto</label>
              <input
                id="projectUrl"
                name="projectUrl"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="https://miproyecto.eth"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="scanDepth" className="text-sm font-medium">Profundidad de Escaneo</label>
              <select
                id="scanDepth"
                name="scanDepth"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="1">Nivel 1 (Solo página principal)</option>
                <option value="2">Nivel 2 (Enlaces directos)</option>
                <option value="3">Nivel 3 (Análisis profundo)</option>
              </select>
            </div>
          </div>
        </InputForm>

        {results && (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <ScoreCard
                title="Puntuación de Enlaces"
                score={results.score}
                description="Evaluación general de la estructura de enlaces"
              />
              <div className="grid gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow p-4">
                  <h3 className="font-medium">Estadísticas Clave</h3>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Enlaces</p>
                      <p className="text-2xl font-bold">{results.totalLinks}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Enlaces Rotos</p>
                      <p className="text-2xl font-bold text-red-500">{results.brokenLinks}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Enlaces Internos</p>
                      <p className="text-2xl font-bold">{results.internalLinks}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Enlaces Externos</p>
                      <p className="text-2xl font-bold">{results.externalLinks}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Visualization
              title="Principales Fuentes de Enlaces"
              description="Dominios más relevantes que enlazan a tu proyecto"
            >
              <div className="space-y-4">
                {results.topSources.map((source: any, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{source.domain}</p>
                      <p className="text-sm text-muted-foreground">Autoridad: {source.authority}/100</p>
                    </div>
                    <div className="text-lg font-bold">{source.count} enlaces</div>
                  </div>
                ))}
              </div>
            </Visualization>

            <AnalysisResults
              results={
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Recomendaciones para mejorar</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />

            <div className="flex justify-end">
              <SaveAnalysisButton analysisData={{
                type: 'links',
                data: results,
                score: results.score
              }} />
            </div>
          </>
        )}
      </ToolLayout>
    </ErrorBoundary>
  );
}