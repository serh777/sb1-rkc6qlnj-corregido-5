// Servicio para integración con Mastodon
import axios from 'axios';

// Clase para manejar la integración con Mastodon
export class MastodonService {
  private clientKey: string;
  private clientSecret: string;
  private accessToken: string;
  private baseUrl: string;

  constructor(baseUrl: string, clientKey: string, clientSecret: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.clientKey = clientKey;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken;
  }

  // Método para obtener el perfil del usuario
  async getUserProfile() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/v1/accounts/verify_credentials`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener perfil de Mastodon:', error);
      throw error;
    }
  }

  // Método para obtener los seguidores del usuario
  async getFollowers(accountId: string, limit: number = 40) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/v1/accounts/${accountId}/followers`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        },
        params: {
          limit
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener seguidores de Mastodon:', error);
      throw error;
    }
  }

  // Método para obtener las publicaciones del usuario
  async getUserStatuses(accountId: string, limit: number = 40) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/v1/accounts/${accountId}/statuses`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        },
        params: {
          limit,
          exclude_replies: false,
          exclude_reblogs: false
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener publicaciones de Mastodon:', error);
      throw error;
    }
  }

  // Método para obtener estadísticas de engagement
  async getEngagementStats(accountId: string) {
    try {
      // Obtener las últimas publicaciones
      const statuses = await this.getUserStatuses(accountId, 100);
      
      // Calcular estadísticas de engagement
      let totalFavorites = 0;
      let totalReblogs = 0;
      let totalReplies = 0;
      
      statuses.forEach((status: any) => {
        totalFavorites += status.favourites_count || 0;
        totalReblogs += status.reblogs_count || 0;
        totalReplies += status.replies_count || 0;
      });
      
      return {
        totalPosts: statuses.length,
        totalFavorites,
        totalReblogs,
        totalReplies,
        averageFavorites: statuses.length > 0 ? totalFavorites / statuses.length : 0,
        averageReblogs: statuses.length > 0 ? totalReblogs / statuses.length : 0,
        averageReplies: statuses.length > 0 ? totalReplies / statuses.length : 0,
        engagementRate: statuses.length > 0 ? 
          ((totalFavorites + totalReblogs + totalReplies) / statuses.length) : 0
      };
    } catch (error) {
      console.error('Error al calcular estadísticas de engagement de Mastodon:', error);
      throw error;
    }
  }

  // Método para buscar hashtags populares
  async searchTrendingHashtags() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/v1/trends/tags`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al buscar hashtags populares en Mastodon:', error);
      throw error;
    }
  }

  // Método para analizar el alcance potencial
  async analyzeReach(accountId: string) {
    try {
      // Obtener seguidores
      const followers = await this.getFollowers(accountId);
      
      // Obtener publicaciones recientes
      const statuses = await this.getUserStatuses(accountId, 20);
      
      // Calcular alcance potencial basado en seguidores y engagement
      let totalReach = 0;
      
      statuses.forEach((status: any) => {
        // Alcance directo (seguidores)
        let directReach = followers.length;
        
        // Alcance indirecto (reblogs)
        let indirectReach = status.reblogs_count * 50; // Estimación de alcance por reblog
        
        totalReach += directReach + indirectReach;
      });
      
      // Calcular alcance promedio por publicación
      const averageReach = statuses.length > 0 ? totalReach / statuses.length : 0;
      
      return {
        totalReach,
        averageReach,
        followerCount: followers.length,
        potentialViralReach: averageReach * 3 // Estimación de alcance viral potencial
      };
    } catch (error) {
      console.error('Error al analizar alcance en Mastodon:', error);
      throw error;
    }
  }

  // Método para obtener recomendaciones de contenido
  async getContentRecommendations() {
    try {
      // Obtener hashtags populares
      const trendingTags = await this.searchTrendingHashtags();
      
      // Generar recomendaciones basadas en tendencias
      const recommendations = trendingTags.slice(0, 5).map((tag: any) => ({
        hashtag: tag.name,
        uses: tag.history[0].uses,
        accounts: tag.history[0].accounts,
        recommendedFormat: tag.history[0].uses > 1000 ? 'Publicación con imagen' : 'Hilo de texto',
        potentialEngagement: tag.history[0].accounts > 500 ? 'Alto' : 'Medio'
      }));
      
      return {
        trendingTopics: trendingTags,
        contentRecommendations: recommendations,
        bestTimeToPost: this._calculateBestTimeToPost(),
        recommendedFrequency: this._calculateRecommendedFrequency()
      };
    } catch (error) {
      console.error('Error al obtener recomendaciones de contenido para Mastodon:', error);
      throw error;
    }
  }

  // Método auxiliar para calcular el mejor momento para publicar
  private _calculateBestTimeToPost() {
    // En una implementación real, esto analizaría patrones de engagement
    // Para esta demo, devolvemos valores predeterminados
    return [
      { day: 'Lunes', time: '10:00 - 12:00' },
      { day: 'Miércoles', time: '15:00 - 17:00' },
      { day: 'Viernes', time: '18:00 - 20:00' }
    ];
  }

  // Método auxiliar para calcular la frecuencia recomendada de publicación
  private _calculateRecommendedFrequency() {
    // En una implementación real, esto analizaría patrones de engagement
    // Para esta demo, devolvemos valores predeterminados
    return {
      postsPerWeek: 5,
      optimalDaysBetweenPosts: 1.5,
      recommendation: 'Publicar 5 veces por semana, alternando días'
    };
  }
}

// Crear una instancia del servicio con las credenciales proporcionadas
// Nota: En producción, estas credenciales deberían venir de variables de entorno
export const mastodonService = new MastodonService(
  'https://mastodon.social', // Reemplazar con la instancia correcta
  'IV1V9q1HrVwgcM84MzSM5RPTi68E7uNH0h1x7OyCqK4',
  'oqJMt5K36b0Z3mDynYsBMSHSHLiy77NcNuYCNZ6toMA',
  'T1SrwzNySYSPjEZ1fmERsI6GMWSj9ixi8R7_lGALRn0'
);

// Exportar funciones de utilidad para usar en componentes
export const getMastodonProfile = async () => {
  try {
    return await mastodonService.getUserProfile();
  } catch (error) {
    console.error('Error en getMastodonProfile:', error);
    return null;
  }
};

export const getMastodonAnalytics = async (accountId: string) => {
  try {
    const profile = await mastodonService.getUserProfile();
    const engagementStats = await mastodonService.getEngagementStats(accountId || profile.id);
    const reachAnalysis = await mastodonService.analyzeReach(accountId || profile.id);
    const contentRecommendations = await mastodonService.getContentRecommendations();
    
    return {
      profile,
      engagementStats,
      reachAnalysis,
      contentRecommendations
    };
  } catch (error) {
    console.error('Error en getMastodonAnalytics:', error);
    return null;
  }
};
