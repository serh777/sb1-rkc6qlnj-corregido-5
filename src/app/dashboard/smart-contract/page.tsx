'use client';

import * as React from 'react';
import { SmartContractAnalysisTool } from '@/components/tools/smart-contract/smart-contract-analysis-tool';
import ErrorBoundary from '@/components/error-boundary';

export default function SmartContractSEOPage() {
  return (
    <ErrorBoundary>
      <SmartContractAnalysisTool />
    </ErrorBoundary>
  );
}