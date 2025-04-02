'use client';

import React from 'react';
import { Visualization } from '@/components/tools/tool-components';
import type { HistoricalMetrics } from '../types';

interface HistoricalVisualizationProps {
  metrics: HistoricalMetrics;
}

export function HistoricalVisualization({ metrics }: HistoricalVisualizationProps) {
  return (
    <Visualization 
      title="Tendencias Históricas" 
      description="Evolución de métricas clave a lo largo del tiempo"
    >
      <div className="h-[400px] relative">
        {Object.entries(metrics).map(([key, data]: [string, Array<{ date: string; value: number }>]) => {
          const dataArray = Array.isArray(data) ? data : [];
          const lastValue = dataArray.length > 0 ? dataArray[dataArray.length - 1].value : 0;
          
          return (
            <div key={key} className="absolute inset-0">
              <div className="h-full w-full">
                <div className="text-center p-4">
                  <p className="font-medium">{key}</p>
                  <p className="text-sm text-muted-foreground">
                    Último valor: {lastValue}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Visualization>
  );
}