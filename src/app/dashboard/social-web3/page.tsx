'use client';

import * as React from 'react';
import { SocialWeb3AnalysisTool } from '@/components/tools/social-web3/social-web3-analysis-tool';
import ErrorBoundary from '@/components/error-boundary';

export default function SocialWeb3AnalysisPage() {
  return (
    <ErrorBoundary>
      <SocialWeb3AnalysisTool />
    </ErrorBoundary>
  );
}