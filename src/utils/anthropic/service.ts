import Anthropic from '@anthropic-ai/sdk';

export class AnthropicService {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
    });
  }

  async generateAnalysis(prompt: string, options = {}) {
    try {
      const message = await this.client.messages.create({
        model: 'claude-3-opus-20240229',
        max_tokens: 4000,
        temperature: 0.7,
        system: `Eres un asistente especializado en SEO para Web3 y blockchain. 
        Tu objetivo es proporcionar análisis detallados, recomendaciones prácticas y explicaciones claras 
        sobre optimización para proyectos blockchain, NFTs y aplicaciones descentralizadas.
        
        Debes considerar:
        1. Las particularidades del ecosistema Web3 (contratos inteligentes, tokens, NFTs, DeFi)
        2. Las plataformas sociales descentralizadas (Mastodon, Hive, Lens Protocol, Mirror.xyz)
        3. Las mejores prácticas de SEO adaptadas al contexto blockchain
        4. Las tendencias emergentes en el espacio Web3
        
        Tus recomendaciones deben ser:
        - Específicas y accionables
        - Basadas en datos cuando sea posible
        - Adaptadas al nicho particular del proyecto
        - Priorizadas por impacto potencial
        
        Incluye siempre una puntuación numérica (0-100) para cada aspecto analizado y una puntuación general.`,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        ...options,
      });

      return message.content;
    } catch (error) {
      console.error('Error al generar análisis con Anthropic:', error);
      throw new Error('No se pudo generar el análisis. Por favor, inténtalo de nuevo más tarde.');
    }
  }

  async analyzeMetadata(metadata: any) {
    const prompt = `Analiza los siguientes metadatos de un proyecto Web3 y proporciona recomendaciones para optimizarlos:
    
    ${JSON.stringify(metadata, null, 2)}
    
    Por favor, incluye:
    1. Evaluación de la calidad de los metadatos actuales
    2. Recomendaciones específicas para mejorar cada campo
    3. Ejemplos de metadatos optimizados
    4. Puntuación general de SEO (de 0 a 100)
    5. Puntuaciones individuales para cada componente (título, descripción, palabras clave, etc.)
    
    Formatea tu respuesta con secciones claras y utiliza ejemplos concretos del ecosistema Web3.`;

    return this.generateAnalysis(prompt);
  }

  async analyzeKeywords(keywords: string[], niche: string) {
    const prompt = `Analiza las siguientes palabras clave para un proyecto Web3 en el nicho de "${niche}" y proporciona recomendaciones detalladas:
    
    ${JSON.stringify(keywords, null, 2)}
    
    Por favor, incluye:
    1. Evaluación de la relevancia de cada palabra clave para el nicho específico
    2. Análisis de volumen potencial y competencia (estimado)
    3. Identificación de palabras clave emergentes relacionadas con este nicho en Web3
    4. Recomendaciones para optimizar el uso de estas palabras clave en:
       - Metadatos de contratos inteligentes
       - Contenido en plataformas sociales Web3 (Mastodon, Hive, Lens Protocol, Mirror.xyz)
       - Documentación técnica y whitepapers
    5. Sugerencias de palabras clave adicionales específicas de Web3 con alto potencial
    6. Puntuación de efectividad para cada palabra clave (de 0 a 100)
    7. Estrategia de contenido basada en estas palabras clave
    
    Proporciona ejemplos concretos y específicos para el nicho ${niche}.`;

    return this.generateAnalysis(prompt);
  }

  async analyzeSocialPresence(profiles: any) {
    const prompt = `Analiza la presencia en plataformas sociales Web3 de estos perfiles y proporciona recomendaciones detalladas:
    
    ${JSON.stringify(profiles, null, 2)}
    
    Por favor, incluye:
    1. Evaluación de la efectividad de cada perfil en su plataforma respectiva
    2. Análisis comparativo entre plataformas (Mastodon, Hive, Lens Protocol, Mirror.xyz)
    3. Recomendaciones específicas para mejorar cada perfil
    4. Estrategias de contenido adaptadas a cada plataforma
    5. Tácticas para aumentar engagement y visibilidad
    6. Puntuación para cada perfil (de 0 a 100)
    7. Plan de acción priorizado para optimización
    
    Considera las particularidades de cada plataforma y cómo aprovechar sus características únicas.`;

    return this.generateAnalysis(prompt);
  }

  async analyzeSmartContract(contractAddress: string, blockchain: string) {
    const prompt = `Analiza el contrato inteligente con dirección ${contractAddress} en la blockchain ${blockchain} desde una perspectiva de SEO Web3:
    
    Por favor, incluye:
    1. Evaluación de los metadatos del contrato
    2. Análisis de la estructura y nomenclatura de funciones
    3. Evaluación de eventos y su utilidad para indexación
    4. Recomendaciones para mejorar la visibilidad del contrato
    5. Estrategias para optimizar la interacción con el contrato
    6. Puntuación de optimización SEO (de 0 a 100)
    7. Plan de mejora priorizado
    
    Considera aspectos específicos de la blockchain ${blockchain} y las mejores prácticas para ese ecosistema.`;

    return this.generateAnalysis(prompt);
  }

  async generateComprehensiveReport(projectData: any) {
    const prompt = `Genera un informe completo de SEO Web3 para el siguiente proyecto:
    
    ${JSON.stringify(projectData, null, 2)}
    
    El informe debe incluir:
    1. Resumen ejecutivo con puntuación general
    2. Análisis detallado de:
       - Metadatos y estructura técnica
       - Palabras clave y contenido
       - Presencia en plataformas sociales Web3
       - Optimización de contratos inteligentes
       - Experiencia de usuario y accesibilidad
    3. Comparativa con competidores (si se proporcionan)
    4. Recomendaciones priorizadas por:
       - Impacto potencial
       - Facilidad de implementación
       - Urgencia
    5. Plan de acción a 30, 60 y 90 días
    6. Métricas clave a monitorear
    
    Formatea el informe de manera profesional con secciones claras y puntuaciones numéricas para cada aspecto.`;

    return this.generateAnalysis(prompt);
  }

  async getPersonalizedAssistance(question: string, projectContext: any = null) {
    let contextInfo = '';
    
    if (projectContext) {
      contextInfo = `
      Contexto del proyecto:
      ${JSON.stringify(projectContext, null, 2)}
      
      Basándote en este contexto específico, `;
    }
    
    const prompt = `${contextInfo}responde a la siguiente consulta sobre SEO Web3:
    
    ${question}
    
    Proporciona una respuesta detallada, informativa y útil basada en las mejores prácticas de SEO para proyectos blockchain.
    Incluye ejemplos concretos y recomendaciones accionables cuando sea posible.`;

    return this.generateAnalysis(prompt);
  }
}