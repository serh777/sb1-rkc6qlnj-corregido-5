'use client';

import React from 'react';
import { Visualization } from '@/components/tools/tool-components';
import type { KeywordData } from '../types';

interface KeywordsVisualizationProps {
  keywords: KeywordData[];
}

export function KeywordsVisualization({ keywords }: KeywordsVisualizationProps) {
  return (
    <Visualization 
      title="Visualización de Keywords" 
      description="Análisis visual de tus palabras clave"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex-1">
          <h4 className="text-sm font-medium mb-4">Comparativa de Puntuaciones</h4>
          <div className="space-y-4">
            {keywords.map((keyword, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{keyword.keyword}</span>
                  <span>{keyword.score}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      keyword.score >= 80 ? 'bg-green-500' : 
                      keyword.score >= 60 ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`}
                    style={{ width: `${keyword.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Visualization>
  );
}