'use client';

import * as React from 'react';
import { ToolLayout } from '@/components/tools/tool-components';
import { ContentAnalysisForm } from './content-analysis-form';
import { ContentAnalysisResults } from './content-analysis-results';
import { useContentAnalysis } from './use-content-analysis';

export function ContentAnalysisTool() {
  const { loading, results, handleSubmit } = useContentAnalysis();

  return (
    <ToolLayout 
      title="Auditoría de Contenido" 
      description="Evalúa y optimiza el contenido de tu proyecto Web3"
      icon="content"
    >
      <ContentAnalysisForm onSubmit={handleSubmit} loading={loading} />
      {results && <ContentAnalysisResults results={results} />}
    </ToolLayout>
  );
}