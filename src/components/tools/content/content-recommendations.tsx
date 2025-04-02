'use client';

import * as React from 'react';

interface ContentRecommendationsProps {
  recommendations: string[];
}

export function ContentRecommendations({ recommendations }: ContentRecommendationsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Recomendaciones Generales</h3>
      <ul className="space-y-2">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{recommendation}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}