'use client';

import * as React from 'react';
import { AnalysisResults, Visualization, ScoreCard } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import type { AnalysisResult } from '@/types';
import { PerformanceMetrics } from './performance-metrics';
import { PerformanceIssues } from './performance-issues';
import { PerformanceOptimizations } from './performance-optimizations';
import { PerformanceComparison } from './performance-comparison';

interface PerformanceAnalysisResultsProps {
  results: AnalysisResult;
}

export function PerformanceAnalysisResults({ results }: PerformanceAnalysisResultsProps) {
  return (
    <>
      <div className="flex justify-end mb-4">
        <SaveAnalysisButton analysisData={results} />
      </div>

      <PerformanceMetrics metrics={results.data.metrics} />
      
      <AnalysisResults 
        results={
          <div className="space-y-6">
            <PerformanceIssues issues={results.data.issues} />
            <PerformanceOptimizations optimizations={results.data.optimizations} />
            <PerformanceComparison comparison={results.data.networkComparison} />
          </div>
        }
      />
      
      <Visualization 
        title="Visualización de Rendimiento" 
        description="Representación visual del rendimiento en blockchain"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-medium mb-4">Tendencias de Uso de Gas</h4>
            <div className="space-y-4">
              {Object.entries(results.data.historicalData).map(([key, data]: [string, any]) => (
                <div key={key}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{key}</span>
                    <span>{data[data.length - 1].value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(data[data.length - 1].value / data[0].value) * 100}%` }}
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