'use client';

import { useState } from 'react';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';
import type { AnalysisResult } from '@/types';

export function useSmartContractAnalysis() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError } = useAnalysisNotifications();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    notifyAnalysisStarted('Análisis de Smart Contract');
    
    try {
      if (!data.contractAddress || data.contractAddress.trim() === '') {
        throw new Error('La dirección del contrato es obligatoria');
      }

      const contractData = {
        contractAddress: data.contractAddress,
        blockchain: data.blockchain || 'ethereum',
        metrics: {
          namingScore: Math.floor(Math.random() * 30) + 60,
          documentationScore: Math.floor(Math.random() * 25) + 65,
          metadataScore: Math.floor(Math.random() * 20) + 70,
          eventsScore: Math.floor(Math.random() * 35) + 55,
          interfaceScore: Math.floor(Math.random() * 30) + 60
        },
        issues: [
          {
            type: 'naming',
            severity: 'medium',
            description: 'Nombres de funciones poco descriptivos',
            recommendation: 'Utiliza nombres que describan claramente la acción que realiza la función'
          },
          {
            type: 'documentation',
            severity: 'high',
            description: 'Falta de documentación NatSpec en funciones principales',
            recommendation: 'Añade comentarios NatSpec a todas las funciones públicas y externas'
          },
          {
            type: 'metadata',
            severity: 'medium',
            description: 'Metadatos incompletos en el contrato',
            recommendation: 'Completa los metadatos con nombre, versión, autor y descripción'
          }
        ],
        recommendations: [
          'Mejorar la nomenclatura de funciones y variables',
          'Añadir documentación NatSpec completa',
          'Optimizar eventos para mejor indexación',
          'Implementar interfaces estándar'
        ]
      };

      const score = Math.floor(
        Object.values(contractData.metrics).reduce((a, b) => a + b, 0) / 
        Object.values(contractData.metrics).length
      );

      setResults({
        type: 'smart-contract',
        data: contractData,
        score
      });
      
      notifyAnalysisCompleted('Análisis de Smart Contract', score);
    } catch (error) {
      console.error('Error en análisis de smart contract:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      notifyAnalysisError('Análisis de Smart Contract', errorMessage);
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