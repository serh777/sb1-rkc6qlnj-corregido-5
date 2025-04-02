'use client';

import * as React from 'react';
import { ToolLayout, InputForm, AnalysisResults, Visualization, ScoreCard } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import ErrorBoundary from '@/components/error-boundary';
import type { AnalysisResult } from '@/types';

export default function CompetitionAnalysisPage() {
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<AnalysisResult | null>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Análisis de Competencia');

    try {
      // Validar datos de entrada
      if (!data.projectUrl || data.projectUrl.trim() === '') {
        throw new Error('La URL del proyecto es obligatoria');
      }

      // Generar datos simulados de análisis de competencia
      const competitionData = {
        projectName: data.projectName || 'Proyecto Web3',
        url: data.projectUrl,
        score: Math.floor(Math.random() * 30) + 60,
        competitors: [
          {
            name: "Competidor 1",
            url: "https://competidor1.com",
            score: Math.floor(Math.random() * 30) + 60,
            strengths: ["UX", "Contenido"],
            weaknesses: ["SEO", "Backlinks"]
          },
          {
            name: "Competidor 2",
            url: "https://competidor2.com",
            score: Math.floor(Math.random() * 30) + 60,
            strengths: ["SEO", "Backlinks"],
            weaknesses: ["UX", "Social"]
          }
        ],
        metrics: {
          visibility: Math.floor(Math.random() * 30) + 60,
          content: Math.floor(Math.random() * 25) + 65,
          technical: Math.floor(Math.random() * 20) + 70,
          social: Math.floor(Math.random() * 35) + 55
        },
        recommendations: [
          'Mejorar la optimización SEO para términos blockchain',
          'Aumentar presencia en redes sociales Web3',
          'Crear más contenido técnico de calidad',
          'Optimizar la experiencia de usuario móvil'
        ]
      };

      setResults({
        type: 'competition',
        data: competitionData,
        score: competitionData.score
      });

      notifyAnalysisCompleted('Análisis de Competencia', competitionData.score);
    } catch (error) {
      console.error('Error en análisis de competencia:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Análisis de Competencia', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <ToolLayout
        title="Análisis de Competencia"
        description="Compara tu proyecto con competidores en el ecosistema Web3"
        icon="📊"
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
              <label htmlFor="competitors" className="text-sm font-medium">Competidores</label>
              <textarea
                id="competitors"
                name="competitors"
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="URLs de competidores separadas por comas"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="niche" className="text-sm font-medium">Nicho</label>
              <select
                id="niche"
                name="niche"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="nft">NFT</option>
                <option value="defi">DeFi</option>
                <option value="gaming">Gaming</option>
                <option value="dao">DAO</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>
        </InputForm>

        {results && (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <ScoreCard
                title="Puntuación Competitiva"
                score={results.score}
                description="Evaluación general frente a competidores"
              />
              <div className="grid gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow p-4">
                  <h3 className="font-medium">Métricas Principales</h3>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Visibilidad</p>
                      <p className="text-2xl font-bold">{results.data.metrics.visibility}/100</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Contenido</p>
                      <p className="text-2xl font-bold">{results.data.metrics.content}/100</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Técnico</p>
                      <p className="text-2xl font-bold">{results.data.metrics.technical}/100</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Social</p>
                      <p className="text-2xl font-bold">{results.data.metrics.social}/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Visualization
              title="Análisis de Competidores"
              description="Comparativa con principales competidores"
            >
              <div className="space-y-4">
                {results.data.competitors.map((competitor: any, index: number) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{competitor.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        competitor.score >= 80 ? 'bg-green-100 text-green-800' :
                        competitor.score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {competitor.score}/100
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Fortalezas</p>
                        <ul className="space-y-1">
                          {competitor.strengths.map((strength: string, i: number) => (
                            <li key={i} className="text-sm text-green-600">{strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Debilidades</p>
                        <ul className="space-y-1">
                          {competitor.weaknesses.map((weakness: string, i: number) => (
                            <li key={i} className="text-sm text-red-600">{weakness}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Visualization>

            <AnalysisResults
              results={
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Recomendaciones para mejorar</h3>
                  <ul className="space-y-2">
                    {results.data.recommendations.map((rec: string, index: number) => (
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
              <SaveAnalysisButton analysisData={results} />
            </div>
          </>
        )}
      </ToolLayout>
    </ErrorBoundary>
  );
}