'use client';

import { useState } from 'react';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import type { SocialWeb3AnalysisResult } from './types';

export function useSocialWeb3Analysis() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SocialWeb3AnalysisResult | null>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Análisis Social Web3');
    
    try {
      const socialData = {
        metrics: {
          engagement: Math.floor(Math.random() * 30) + 60,
          reach: Math.floor(Math.random() * 25) + 65,
          influence: Math.floor(Math.random() * 20) + 70,
          consistency: Math.floor(Math.random() * 35) + 55
        },
        platforms: [
          {
            name: 'Mastodon',
            connected: !!data.mastodonHandle,
            followers: Math.floor(Math.random() * 1000) + 100,
            posts: Math.floor(Math.random() * 500) + 50,
            engagement: Math.floor(Math.random() * 20) + 5
          },
          {
            name: 'Hive',
            connected: !!data.hiveHandle,
            followers: Math.floor(Math.random() * 2000) + 200,
            posts: Math.floor(Math.random() * 300) + 30,
            engagement: Math.floor(Math.random() * 15) + 8
          },
          {
            name: 'Lens Protocol',
            connected: !!data.lensHandle,
            followers: Math.floor(Math.random() * 1500) + 150,
            posts: Math.floor(Math.random() * 200) + 20,
            engagement: Math.floor(Math.random() * 25) + 10
          },
          {
            name: 'Mirror.xyz',
            connected: !!data.mirrorHandle,
            followers: Math.floor(Math.random() * 800) + 80,
            posts: Math.floor(Math.random() * 100) + 10,
            engagement: Math.floor(Math.random() * 30) + 15
          }
        ],
        recommendations: [
          {
            platform: 'Mastodon',
            tips: [
              'Aumenta la frecuencia de publicación',
              'Interactúa más con otros usuarios',
              'Utiliza hashtags relevantes'
            ]
          },
          {
            platform: 'Hive',
            tips: [
              'Crea contenido más técnico',
              'Participa en comunidades activas',
              'Utiliza etiquetas específicas'
            ]
          },
          {
            platform: 'Lens Protocol',
            tips: [
              'Conecta con más perfiles Web3',
              'Comparte actualizaciones del proyecto',
              'Utiliza colecciones para organizar contenido'
            ]
          }
        ]
      };

      const score = Math.floor(
        Object.values(socialData.metrics).reduce((a, b) => a + b, 0) / 
        Object.values(socialData.metrics).length
      );

      setResults({
        type: 'social-web3',
        data: socialData,
        score
      });
      
      notifyAnalysisCompleted('Análisis Social Web3', score);
    } catch (error) {
      console.error('Error en análisis social Web3:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Análisis Social Web3', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    results,
    handleSubmit
  };
}