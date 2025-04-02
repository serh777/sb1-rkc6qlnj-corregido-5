'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection, FeaturesSection, HybridAnalysisSection, CTASection } from '@/components/home/sections';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HybridAnalysisSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}