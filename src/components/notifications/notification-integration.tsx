'use client';

import React from 'react';
import { NotificationProvider, NotificationCenter, useNotifications, useAnalysisNotifications } from '@/components/notifications/notification-system';
import { AnalysisStorageService } from '@/utils/supabase/analysis-storage';

// Componente para integrar el sistema de notificaciones en la aplicación
export function AppNotificationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      <NotificationWrapper>
        {children}
      </NotificationWrapper>
    </NotificationProvider>
  );
}

// Componente interno para manejar la lógica de notificaciones
function NotificationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <NotificationCenter />
      </div>
      {children}
    </>
  );
}

// Hook para integrar notificaciones con el guardado de análisis
export function useSaveAnalysisWithNotifications() {
  const { notifyAnalysisStarted, notifyAnalysisCompleted, notifyAnalysisError, notifyAnalysisSaved } = useAnalysisNotifications();
  
  const saveAnalysis = async (analysisData: any) => {
    try {
      notifyAnalysisStarted(analysisData.type);
      
      // Guardar el análisis en Supabase
      const savedAnalysis = await AnalysisStorageService.saveAnalysisClient(analysisData);
      
      // Notificar que el análisis se ha completado y guardado
      notifyAnalysisCompleted(
        analysisData.type, 
        analysisData.score,
        `/dashboard/history/${savedAnalysis[0]?.id}`
      );
      
      notifyAnalysisSaved(
        analysisData.type,
        `/dashboard/history/${savedAnalysis[0]?.id}`
      );
      
      return savedAnalysis;
    } catch (error) {
      console.error('Error al guardar análisis:', error);
      notifyAnalysisError(analysisData.type, error instanceof Error ? error.message : 'Error desconocido');
      throw error;
    }
  };
  
  return { saveAnalysis };
}

// Componente para mostrar un botón de guardar análisis
export function SaveAnalysisButton({ 
  analysisData, 
  onSaveSuccess 
}: { 
  analysisData: any; 
  onSaveSuccess?: (savedData: any) => void;
}) {
  const [loading, setLoading] = React.useState(false);
  const { saveAnalysis } = useSaveAnalysisWithNotifications();
  
  const handleSave = async () => {
    setLoading(true);
    try {
      const savedData = await saveAnalysis(analysisData);
      if (onSaveSuccess) {
        onSaveSuccess(savedData);
      }
    } catch (error) {
      console.error('Error al guardar:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <button
      onClick={handleSave}
      disabled={loading}
      className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
    >
      {loading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
          <span>Guardando...</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          <span>Guardar Análisis</span>
        </>
      )}
    </button>
  );
}

// Basic implementation of analysis storage utility
export interface AnalysisData {
  id?: string;
  type: string;
  data: any;
  score: number;
  userId?: string;
  createdAt?: string;
}

// Mock implementation for development
export async function saveAnalysis(analysisData: AnalysisData): Promise<AnalysisData> {
  console.log('Saving analysis:', analysisData);
  // In a real implementation, this would save to Supabase
  return {
    ...analysisData,
    id: `analysis_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
}

export async function getAnalyses(userId: string): Promise<AnalysisData[]> {
  // In a real implementation, this would fetch from Supabase
  return [];
}

export async function deleteAnalysis(id: string): Promise<void> {
  console.log('Deleting analysis:', id);
  // In a real implementation, this would delete from Supabase
}