import { createClient } from '@/utils/supabase/client';
import { cookies } from 'next/headers';

export class AnalysisStorageService {
  // Cliente para operaciones del lado del cliente
  static async saveAnalysisClient(analysisData: any) {
    try {
      const supabase = createClient();
      
      // Asegurarse de que el usuario está autenticado
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('Usuario no autenticado');
      }
      
      const { data, error } = await supabase
        .from('analyses')
        .insert({
          user_id: session.user.id,
          analysis_type: analysisData.type,
          data: analysisData.data,
          score: analysisData.score,
          created_at: new Date().toISOString()
        })
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al guardar análisis:', error);
      throw error;
    }
  }
  
  // Cliente para operaciones del lado del servidor
  static async saveAnalysisServer(analysisData: any, cookieStore: ReturnType<typeof cookies>) {
    try {
      const supabase = createClient();
      
      const { data, error } = await supabase
        .from('analyses')
        .insert({
          analysis_type: analysisData.type,
          data: analysisData.data,
          score: analysisData.score,
          created_at: new Date().toISOString()
        })
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al guardar análisis en el servidor:', error);
      throw error;
    }
  }
  
  // Obtener análisis del usuario (cliente)
  static async getUserAnalysesClient() {
    try {
      const supabase = createClient();
      
      // Asegurarse de que el usuario está autenticado
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('Usuario no autenticado');
      }
      
      const { data, error } = await supabase
        .from('analyses')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al obtener análisis del usuario:', error);
      throw error;
    }
  }
  
  // Obtener análisis del usuario (servidor)
  static async getUserAnalysesServer(cookieStore: ReturnType<typeof cookies>) {
    try {
      const supabase = createClient();
      
      const { data, error } = await supabase
        .from('analyses')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al obtener análisis del usuario en el servidor:', error);
      throw error;
    }
  }
  
  // Obtener un análisis específico por ID (cliente)
  static async getAnalysisByIdClient(analysisId: string) {
    try {
      const supabase = createClient();
      
      const { data, error } = await supabase
        .from('analyses')
        .select('*')
        .eq('id', analysisId)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al obtener análisis por ID:', error);
      throw error;
    }
  }
  
  // Obtener un análisis específico por ID (servidor)
  static async getAnalysisByIdServer(analysisId: string, cookieStore: ReturnType<typeof cookies>) {
    try {
      const supabase = createClient();
      
      const { data, error } = await supabase
        .from('analyses')
        .select('*')
        .eq('id', analysisId)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al obtener análisis por ID en el servidor:', error);
      throw error;
    }
  }
  
  // Eliminar un análisis (cliente)
  static async deleteAnalysisClient(analysisId: string) {
    try {
      const supabase = createClient();
      
      const { error } = await supabase
        .from('analyses')
        .delete()
        .eq('id', analysisId);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error al eliminar análisis:', error);
      throw error;
    }
  }
  
  // Comparar dos análisis (cliente)
  static async compareAnalysesClient(analysisId1: string, analysisId2: string) {
    try {
      const analysis1 = await this.getAnalysisByIdClient(analysisId1);
      const analysis2 = await this.getAnalysisByIdClient(analysisId2);
      
      if (!analysis1 || !analysis2) {
        throw new Error('No se encontraron los análisis para comparar');
      }
      
      return {
        analysis1,
        analysis2,
        comparison: {
          scoreDifference: analysis2.score - analysis1.score,
          improvementAreas: [],
          declineAreas: []
        }
      };
    } catch (error) {
      console.error('Error al comparar análisis:', error);
      throw error;
    }
  }
}

export interface AnalysisData {
  id?: string;
  type: string;
  data: any;
  score: number;
  userId?: string;
  createdAt?: string;
}