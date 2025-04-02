import React from 'react';

export interface ScoreCardProps {
  title: string;
  score: number;
  description: string;
  recommendations?: string[];
}

export function ScoreCard({ title, score, description, recommendations }: ScoreCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="mt-2 text-3xl font-bold">{score}/100</div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {recommendations && recommendations.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Recomendaciones:</h4>
          <ul className="text-sm space-y-1">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function ToolLayout({ 
  title, 
  description, 
  icon, 
  children 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  children: React.ReactNode 
}) {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary">{icon}</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

export function InputForm({ 
  onSubmit, 
  loading, 
  children 
}: { 
  onSubmit: (data: any) => void; 
  loading: boolean; 
  children: React.ReactNode 
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-6">
        <h3 className="text-lg font-medium">Ingresa los detalles para el análisis</h3>
        <p className="text-sm text-muted-foreground">Completa la información requerida para comenzar</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-6 pt-0">
          {children}
        </div>
        <div className="flex items-center justify-end p-6 pt-0">
          <button 
            type="submit" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Analizando...' : 'Analizar'}
          </button>
        </div>
      </form>
    </div>
  );
}

export function AnalysisResults({ 
  results 
}: { 
  results: React.ReactNode 
}) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-6">
        <h3 className="text-lg font-medium">Resultados del Análisis</h3>
        <p className="text-sm text-muted-foreground">Análisis detallado basado en los datos proporcionados</p>
      </div>
      <div className="p-6 pt-0">
        {results}
      </div>
    </div>
  );
}

export function Visualization({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode 
}) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 pt-0">
        {children}
      </div>
    </div>
  );
}