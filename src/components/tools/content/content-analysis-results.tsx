'use client';

import * as React from 'react';
import { AnalysisResults, Visualization, ScoreCard } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import type { AnalysisResult } from '@/types';
import { ContentMetrics } from './content-metrics';
import { ContentIssues } from './content-issues';
import { ContentRecommendations } from './content-recommendations';

interface ContentAnalysisResultsProps {
  results: AnalysisResult;
}

export function ContentAnalysisResults({ results }: ContentAnalysisResultsProps) {
  return (
    <>
      <div className="flex justify-end mb-4">
        <SaveAnalysisButton analysisData={results} />
      </div>

      <ContentMetrics metrics={results.data.metrics} />
      
      <AnalysisResults 
        results={
          <div className="space-y-6">
            <ContentIssues issues={results.data.issues} />
            <ContentRecommendations recommendations={results.data.recommendations} />
          </div>
        }
      />
      
      <Visualization 
        title="Visualización de Métricas" 
        description="Representación visual de la calidad del contenido"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-medium mb-4">Puntuaciones por Métrica</h4>
            <div className="space-y-4">
              {Object.entries(results.data.metrics).map(([key, value]: [string, any]) => (
                <div key={key}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{key}</span>
                    <span>{value}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Visualization>
    </>
  );
}