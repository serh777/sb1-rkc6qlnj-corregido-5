import React from 'react';
import { ToolLayout, InputForm, AnalysisResults, Visualization, ScoreCard } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import ErrorBoundary from '@/components/error-boundary';

export function ContentAuditTool() {
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<any>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Auditoría de Contenido');
    
    try {
      // Validar datos de entrada
      if (!data.projectUrl || data.projectUrl.trim() === '') {
        throw new Error('La URL del proyecto es obligatoria');
      }
      
      // Generar datos simulados de auditoría de contenido
      const contentData = {
        projectName: data.projectName || 'Proyecto Web3',
        url: data.projectUrl,
        score: Math.floor(Math.random() * 30) + 60,
        metrics: {
          readability: Math.floor(Math.random() * 20) + 70,
          relevance: Math.floor(Math.random() * 25) + 65,
          technical: Math.floor(Math.random() * 30) + 60
        },
        issues: [
          {
            type: 'readability',
            severity: 'medium',
            description: 'Contenido técnico demasiado complejo',
            recommendation: 'Simplificar explicaciones técnicas para mejor comprensión'
          },
          {
            type: 'relevance',
            severity: 'high',
            description: 'Falta de ejemplos prácticos',
            recommendation: 'Añadir casos de uso y ejemplos del mundo real'
          }
        ],
        recommendations: [
          'Mejorar la estructura del contenido',
          'Añadir más ejemplos prácticos',
          'Optimizar para términos clave de Web3'
        ]
      };
      
      setResults(contentData);
      notifyAnalysisCompleted('Auditoría de Contenido', contentData.score);
    } catch (error) {
      console.error('Error en auditoría de contenido:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Auditoría de Contenido', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <ToolLayout
        title="Auditoría de Contenido Web3"
        description="Analiza y optimiza el contenido de tu proyecto blockchain"
        icon="📝"
      >
        <InputForm onSubmit={handleSubmit} loading={loading}>
          <div className="grid gap-4">
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
              <label htmlFor="contentType" className="text-sm font-medium">Tipo de Contenido</label>
              <select
                id="contentType"
                name="contentType"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="documentation">Documentación</option>
                <option value="whitepaper">Whitepaper</option>
                <option value="blog">Blog</option>
              </select>
            </div>
          </div>
        </InputForm>

        {results && (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <ScoreCard
                title="Puntuación de Contenido"
                score={results.score}
                description="Evaluación general de la calidad del contenido"
              />
              <div className="grid gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow p-4">
                  <h3 className="font-medium">Métricas Principales</h3>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Legibilidad</p>
                      <p className="text-2xl font-bold">{results.metrics.readability}/100</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Relevancia</p>
                      <p className="text-2xl font-bold">{results.metrics.relevance}/100</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Técnico</p>
                      <p className="text-2xl font-bold">{results.metrics.technical}/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnalysisResults
              results={
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Problemas Detectados</h3>
                  <div className="space-y-3">
                    {results.issues.map((issue: any, index: number) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-start gap-3">
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                            issue.severity === 'high' ? 'bg-red-100 text-red-800' :
                            issue.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {issue.severity === 'high' ? 'A' :
                             issue.severity === 'medium' ? 'B' : 'C'}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{issue.description}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                issue.type === 'readability' ? 'bg-purple-100 text-purple-800' :
                                issue.type === 'relevance' ? 'bg-blue-100 text-blue-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {issue.type}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{issue.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />

            <div className="flex justify-end">
              <SaveAnalysisButton analysisData={{
                type: 'content',
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