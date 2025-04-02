'use client';

import React from 'react';
import { ToolLayout } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import ErrorBoundary from '@/components/error-boundary';
import { KeywordsForm } from './components/keywords-form';
import { KeywordsAnalysis } from './components/keywords-analysis';
import { KeywordsVisualization } from './components/keywords-visualization';
import type { KeywordData, KeywordAnalysisResult } from './types';

export default function KeywordsAnalysisPage() {
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<KeywordAnalysisResult | null>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Análisis de Keywords');
    
    try {
      const keywordsList = data.keywords?.split(',').map((k: string) => k.trim()).filter((k: string) => k) || [];
      
      if (keywordsList.length === 0) {
        throw new Error('Debes ingresar al menos una palabra clave para analizar');
      }
      
      const keywordsResults = keywordsList.map((keyword: string) => ({
        keyword,
        score: Math.floor(Math.random() * 40) + 60,
        volume: Math.floor(Math.random() * 5000) + 100,
        competition: Math.floor(Math.random() * 100),
        recommendations: [
          'Incluye esta palabra clave en los metadatos del contrato',
          'Utiliza variaciones semánticas en la descripción',
          'Crea contenido específico relacionado con esta palabra clave'
        ]
      }));
      
      const suggestedKeywords = [
        'web3 optimization',
        'blockchain visibility',
        'NFT discovery',
        'DeFi marketing',
        'crypto SEO',
        'token indexing',
        'smart contract optimization',
        'decentralized search'
      ];
      
      const overallScore = Math.floor(
        keywordsResults.reduce((acc: number, curr: KeywordData) => acc + curr.score, 0) / keywordsResults.length
      );

      setResults({
        type: 'keywords',
        data: {
          keywords: keywordsResults,
          suggestedKeywords,
          niche: data.niche || 'Web3 General'
        },
        score: overallScore
      });
      
      notifyAnalysisCompleted('Análisis de Keywords', overallScore);
    } catch (error) {
      console.error('Error en análisis de keywords:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Análisis de Keywords', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <ToolLayout 
        title="Análisis de Keywords" 
        description="Evalúa y optimiza las palabras clave de tus proyectos Web3"
        icon="keywords"
      >
        <KeywordsForm onSubmit={handleSubmit} loading={loading} />
        
        {results && (
          <>
            <div className="flex justify-end mb-4">
              <SaveAnalysisButton analysisData={results} />
            </div>
            
            <KeywordsAnalysis data={results.data} />
            <KeywordsVisualization keywords={results.data.keywords} />
          </>
        )}
      </ToolLayout>
    </ErrorBoundary>
  );
}