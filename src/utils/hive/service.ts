// Servicio para integración con Hive
import axios from 'axios';

// Clase para manejar la integración con Hive
export class HiveService {
  private apiKey: string;
  private userId: string;
  private workspaceId: string;
  private baseUrl: string = 'https://api.hive.blog';

  constructor(apiKey: string, userId: string, workspaceId: string) {
    this.apiKey = apiKey;
    this.userId = userId;
    this.workspaceId = workspaceId;
  }

  // Método para obtener el perfil del usuario
  async getUserProfile(username: string) {
    try {
      const response = await axios.post(this.baseUrl, {
        jsonrpc: '2.0',
        method: 'condenser_api.get_accounts',
        params: [[username]],
        id: 1
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      
      if (response.data.result && response.data.result.length > 0) {
        return response.data.result[0];
      }
      
      throw new Error('Usuario no encontrado');
    } catch (error) {
      console.error('Error al obtener perfil de Hive:', error);
      throw error;
    }
  }

  // Método para obtener las publicaciones del usuario
  async getUserPosts(username: string, limit: number = 20) {
    try {
      const response = await axios.post(this.baseUrl, {
        jsonrpc: '2.0',
        method: 'condenser_api.get_discussions_by_blog',
        params: [{tag: username, limit}],
        id: 1
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      
      return response.data.result || [];
    } catch (error) {
      console.error('Error al obtener publicaciones de Hive:', error);
      throw error;
    }
  }

  // Método para obtener los seguidores del usuario
  async getFollowers(username: string, limit: number = 100) {
    try {
      const response = await axios.post(this.baseUrl, {
        jsonrpc: '2.0',
        method: 'condenser_api.get_followers',
        params: [username, null, 'blog', limit],
        id: 1
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      
      return response.data.result || [];
    } catch (error) {
      console.error('Error al obtener seguidores de Hive:', error);
      throw error;
    }
  }

  // Método para obtener las recompensas del usuario
  async getUserRewards(username: string) {
    try {
      const response = await axios.post(this.baseUrl, {
        jsonrpc: '2.0',
        method: 'condenser_api.get_accounts',
        params: [[username]],
        id: 1
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      
      if (response.data.result && response.data.result.length > 0) {
        const account = response.data.result[0];
        
        // Calcular recompensas totales
        const hbdBalance = parseFloat(account.hbd_balance.split(' ')[0]) || 0;
        const hiveBalance = parseFloat(account.balance.split(' ')[0]) || 0;
        const vestingShares = parseFloat(account.vesting_shares.split(' ')[0]) || 0;
        
        return {
          hbdBalance,
          hiveBalance,
          vestingShares,
          totalEstimatedValue: hbdBalance + (hiveBalance * 0.5) // Estimación simple
        };
      }
      
      throw new Error('Usuario no encontrado');
    } catch (error) {
      console.error('Error al obtener recompensas de Hive:', error);
      throw error;
    }
  }

  // Método para calcular estadísticas de engagement
  async getEngagementStats(username: string) {
    try {
      // Obtener las últimas publicaciones
      const posts = await this.getUserPosts(username, 50);
      
      // Calcular estadísticas de engagement
      let totalVotes = 0;
      let totalComments = 0;
      let totalPayout = 0;
      
      posts.forEach((post: any) => {
        totalVotes += post.net_votes || 0;
        totalComments += post.children || 0;
        
        // Sumar pagos
        const pendingPayout = parseFloat(post.pending_payout_value.split(' ')[0]) || 0;
        const totalPayoutValue = parseFloat(post.total_payout_value.split(' ')[0]) || 0;
        const curatorPayoutValue = parseFloat(post.curator_payout_value.split(' ')[0]) || 0;
        
        totalPayout += pendingPayout + totalPayoutValue + curatorPayoutValue;
      });
      
      return {
        totalPosts: posts.length,
        totalVotes,
        totalComments,
        totalPayout,
        averageVotes: posts.length > 0 ? totalVotes / posts.length : 0,
        averageComments: posts.length > 0 ? totalComments / posts.length : 0,
        averagePayout: posts.length > 0 ? totalPayout / posts.length : 0,
        engagementRate: posts.length > 0 ? 
          ((totalVotes + totalComments) / posts.length) : 0
      };
    } catch (error) {
      console.error('Error al calcular estadísticas de engagement de Hive:', error);
      throw error;
    }
  }

  // Método para obtener tendencias en Hive
  async getTrendingTags(limit: number = 10) {
    try {
      const response = await axios.post(this.baseUrl, {
        jsonrpc: '2.0',
        method: 'condenser_api.get_trending_tags',
        params: [null, limit],
        id: 1
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      
      return response.data.result || [];
    } catch (error) {
      console.error('Error al obtener tags populares en Hive:', error);
      throw error;
    }
  }

  // Método para obtener recomendaciones de contenido
  async getContentRecommendations(username: string) {
    try {
      // Obtener tags populares
      const trendingTags = await this.getTrendingTags(20);
      
      // Obtener publicaciones del usuario para analizar su contenido
      const userPosts = await this.getUserPosts(username, 20);
      
      // Extraer tags utilizados por el usuario
      const userTags = new Set<string>();
      userPosts.forEach((post: any) => {
        if (post.json_metadata) {
          try {
            const metadata = JSON.parse(post.json_metadata);
            if (metadata.tags && Array.isArray(metadata.tags)) {
              metadata.tags.forEach((tag: string) => userTags.add(tag));
            }
          } catch (e) {
            // Ignorar errores de parsing
          }
        }
      });
      
      // Encontrar tags populares que el usuario no está utilizando
      const recommendedTags = trendingTags
        .filter((tag: any) => !userTags.has(tag.name))
        .slice(0, 5);
      
      // Generar recomendaciones basadas en tendencias
      const recommendations = recommendedTags.map((tag: any) => ({
        tag: tag.name,
        posts: tag.top_posts,
        comments: tag.comments,
        recommendedFormat: tag.top_posts > 1000 ? 'Publicación detallada con imágenes' : 'Publicación corta informativa',
        potentialRewards: tag.total_payouts > 1000 ? 'Alto' : 'Medio'
      }));
      
      return {
        trendingTags,
        userTags: Array.from(userTags),
        contentRecommendations: recommendations,
        bestTimeToPost: this._calculateBestTimeToPost(),
        recommendedFrequency: this._calculateRecommendedFrequency()
      };
    } catch (error) {
      console.error('Error al obtener recomendaciones de contenido para Hive:', error);
      throw error;
    }
  }

  // Método auxiliar para calcular el mejor momento para publicar
  private _calculateBestTimeToPost() {
    // En una implementación real, esto analizaría patrones de engagement
    // Para esta demo, devolvemos valores predeterminados
    return [
      { day: 'Martes', time: '09:00 - 11:00' },
      { day: 'Jueves', time: '14:00 - 16:00' },
      { day: 'Domingo', time: '19:00 - 21:00' }
    ];
  }

  // Método auxiliar para calcular la frecuencia recomendada de publicación
  private _calculateRecommendedFrequency() {
    // En una implementación real, esto analizaría patrones de engagement
    // Para esta demo, devolvemos valores predeterminados
    return {
      postsPerWeek: 3,
      optimalDaysBetweenPosts: 2,
      recommendation: 'Publicar 3 veces por semana, con contenido de alta calidad'
    };
  }
}

// Crear una instancia del servicio con las credenciales proporcionadas
// Nota: En producción, estas credenciales deberían venir de variables de entorno
export const hiveService = new HiveService(
  '03bc412ddc45d9b5c225104b3903ac60',
  'fRY9gCEtisiGRtnmE',
  'KwRbDnEYnuSrpBx7L'
);

// Exportar funciones de utilidad para usar en componentes
export const getHiveProfile = async (username: string) => {
  try {
    return await hiveService.getUserProfile(username);
  } catch (error) {
    console.error('Error en getHiveProfile:', error);
    return null;
  }
};

export const getHiveAnalytics = async (username: string) => {
  try {
    const profile = await hiveService.getUserProfile(username);
    const posts = await hiveService.getUserPosts(username, 50);
    const followers = await hiveService.getFollowers(username);
    const rewards = await hiveService.getUserRewards(username);
    const engagementStats = await hiveService.getEngagementStats(username);
    const contentRecommendations = await hiveService.getContentRecommendations(username);
    
    return {
      profile,
      posts,
      followers,
      rewards,
      engagementStats,
      contentRecommendations
    };
  } catch (error) {
    console.error('Error en getHiveAnalytics:', error);
    return null;
  }
};
