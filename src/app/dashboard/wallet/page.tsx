'use client';

import * as React from 'react';
import { WalletAnalysisTool } from '@/components/tools/wallet/wallet-analysis-tool';
import ErrorBoundary from '@/components/error-boundary';

export default function WalletPage() {
  return (
    <ErrorBoundary>
      <WalletAnalysisTool />
    </ErrorBoundary>
  );
}