'use client';

import * as React from 'react';
import { AnalysisResults, Visualization } from '@/components/tools/tool-components';
import { SaveAnalysisButton } from '@/components/notifications/notification-integration';
import type { SocialWeb3AnalysisResult, SocialWeb3Platform } from './types';

interface SocialWeb3AnalysisResultsProps {
  results: SocialWeb3AnalysisResult;
}

export function SocialWeb3AnalysisResults({ results }: SocialWeb3AnalysisResultsProps) {
  return (
    <>
      <div className="flex justify-end mb-4">
        <SaveAnalysisButton analysisData={results} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow p-4">
          <h3 className="font-medium">Engagement</h3>
          <p className="text-2xl font-bold mt-2">{results.data.metrics.engagement}/100</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow p-4">
          <h3 className="font-medium">Alcance</h3>
          <p className="text-2xl font-bold mt-2">{results.data.metrics.reach}/100</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow p-4">
          <h3 className="font-medium">Influencia</h3>
          <p className="text-2xl font-bold mt-2">{results.data.metrics.influence}/100</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow p-4">
          <h3 className="font-medium">Consistencia</h3>
          <p className="text-2xl font-bold mt-2">{results.data.metrics.consistency}/100</p>
        </div>
      </div>
      
      <AnalysisResults 
        results={
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Plataformas Sociales Web3</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.data.platforms.map((platform: SocialWeb3Platform) => (
                  <div key={platform.name} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{platform.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        platform.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {platform.connected ? 'Conectado' : 'No conectado'}
                      </span>
                    </div>
                    {platform.connected && (
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Seguidores</p>
                          <p className="text-sm font-medium">{platform.followers}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Posts</p>
                          <p className="text-sm font-medium">{platform.posts}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Engagement</p>
                          <p className="text-sm font-medium">{platform.engagement}%</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Recomendaciones por Plataforma</h3>
              <div className="space-y-4">
                {results.data.recommendations.map((rec, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">{rec.platform}</h4>
                    <ul className="space-y-1">
                      {rec.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
      
      <Visualization 
        title="Visualización de Métricas Sociales" 
        description="Representación visual de tu presencia en plataformas Web3"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1">
            <h4 className="text-sm font-medium mb-4">Engagement por Plataforma</h4>
            <div className="space-y-4">
              {results.data.platforms.map((platform: SocialWeb3Platform) => (
                <div key={platform.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{platform.name}</span>
                    <span>{platform.engagement}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${platform.engagement}%` }}
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