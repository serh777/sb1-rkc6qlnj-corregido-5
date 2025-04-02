'use client';

import * as React from 'react';
import { ContentAnalysisTool } from '@/components/tools/content/content-analysis-tool';
import ErrorBoundary from '@/components/error-boundary';

export default function ContentAuditPage() {
  return (
    <ErrorBoundary>
      <ContentAnalysisTool />
    </ErrorBoundary>
  );
}