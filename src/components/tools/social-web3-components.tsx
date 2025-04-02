import React from 'react';
import { Icons } from '@/components/ui/icons';

// Componente para integración con plataformas sociales Web3
export function SocialWeb3Integration() {
  const platforms = [
    {
      name: 'Mastodon',
      icon: 'blockchain',
      description: 'Red social descentralizada',
      connected: false
    },
    {
      name: 'Hive',
      icon: 'blockchain',
      description: 'Blockchain social con sistema de recompensas',
      connected: false
    },
    {
      name: 'Lens Protocol',
      icon: 'blockchain',
      description: 'Protocolo social basado en Web3',
      connected: false
    },
    {
      name: 'Mirror.xyz',
      icon: 'content',
      description: 'Plataforma de publicación descentralizada',
      connected: false
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Plataformas Sociales Web3</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <PlatformCard 
            key={platform.name}
            name={platform.name}
            icon={platform.icon as keyof typeof Icons}
            description={platform.description}
            connected={platform.connected}
          />
        ))}
      </div>
    </div>
  );
}

interface PlatformCardProps {
  name: string;
  icon: keyof typeof Icons;
  description: string;
  connected: boolean;
}

function PlatformCard({ name, icon, description, connected }: PlatformCardProps) {
  const Icon = Icons[icon];
  
  return (
    <div className="rounded-lg border p-4 flex items-start gap-4">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {Icon && <Icon />}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{name}</h4>
          <span className={`text-xs px-2 py-1 rounded-full ${connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            {connected ? 'Conectado' : 'No conectado'}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <button className="mt-3 text-sm text-primary hover:underline">
          {connected ? 'Ver análisis' : 'Conectar cuenta'}
        </button>
      </div>
    </div>
  );
}

// Componente para análisis de métricas sociales Web3
export function SocialWeb3Metrics() {
  const metrics = [
    {
      platform: 'Mastodon',
      followers: '0',
      engagement: '0%',
      posts: '0',
      score: 0
    },
    {
      platform: 'Hive',
      followers: '0',
      engagement: '0%',
      posts: '0',
      score: 0
    },
    {
      platform: 'Lens Protocol',
      followers: '0',
      engagement: '0%',
      posts: '0',
      score: 0
    },
    {
      platform: 'Mirror.xyz',
      followers: '0',
      engagement: '0%',
      posts: '0',
      score: 0
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Métricas Sociales Web3</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left text-sm font-medium">Plataforma</th>
              <th className="py-2 px-4 text-left text-sm font-medium">Seguidores</th>
              <th className="py-2 px-4 text-left text-sm font-medium">Engagement</th>
              <th className="py-2 px-4 text-left text-sm font-medium">Publicaciones</th>
              <th className="py-2 px-4 text-left text-sm font-medium">Puntuación</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric.platform} className="border-b">
                <td className="py-2 px-4 text-sm">{metric.platform}</td>
                <td className="py-2 px-4 text-sm">{metric.followers}</td>
                <td className="py-2 px-4 text-sm">{metric.engagement}</td>
                <td className="py-2 px-4 text-sm">{metric.posts}</td>
                <td className="py-2 px-4 text-sm">{metric.score}/100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Componente para recomendaciones de optimización social Web3
export function SocialWeb3Recommendations() {
  const recommendations = [
    {
      platform: 'Mastodon',
      tips: [
        'Conecta tu cuenta para comenzar a recibir recomendaciones',
        'Optimiza tu perfil con palabras clave relevantes',
        'Publica contenido regularmente para aumentar visibilidad'
      ]
    },
    {
      platform: 'Hive',
      tips: [
        'Conecta tu cuenta para comenzar a recibir recomendaciones',
        'Participa en comunidades relevantes para tu nicho',
        'Utiliza etiquetas específicas para aumentar descubrimiento'
      ]
    },
    {
      platform: 'Lens Protocol',
      tips: [
        'Conecta tu cuenta para comenzar a recibir recomendaciones',
        'Interactúa con otros perfiles para aumentar visibilidad',
        'Crea contenido que genere valor para tu audiencia'
      ]
    },
    {
      platform: 'Mirror.xyz',
      tips: [
        'Conecta tu cuenta para comenzar a recibir recomendaciones',
        'Publica artículos detallados sobre tu proyecto',
        'Utiliza la tokenización para incentivar la participación'
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Recomendaciones de Optimización</h3>
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.platform} className="rounded-lg border p-4">
            <h4 className="font-medium mb-2">{rec.platform}</h4>
            <ul className="space-y-1">
              {rec.tips.map((tip, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
