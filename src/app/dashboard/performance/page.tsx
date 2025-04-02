'use client';

import * as React from 'react';
import { PerformanceAnalysisTool } from '@/components/tools/performance/performance-analysis-tool';
import ErrorBoundary from '@/components/error-boundary';

export default function BlockchainPerformancePage() {
  return (
    <ErrorBoundary>
      <PerformanceAnalysisTool />
    </ErrorBoundary>
  );
}