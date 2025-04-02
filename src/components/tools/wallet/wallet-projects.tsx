'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

interface WalletProjectsProps {
  address: string;
}

export function WalletProjects({ address }: WalletProjectsProps) {
  const [loading, setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProjects([
        {
          id: '1',
          name: 'CryptoKitties Collection',
          type: 'NFT',
          address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
          blockchain: 'Ethereum',
          lastAnalysis: '2 días atrás'
        },
        {
          id: '2',
          name: 'DeFi Yield Aggregator',
          type: 'DeFi',
          address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
          blockchain: 'Ethereum',
          lastAnalysis: '1 semana atrás'
        }
      ]);
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [address]);
  
  if (loading) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col items-center justify-center py-6">
            <Icons.spinner className="h-8 w-8 animate-spin" />
            <p className="mt-4 text-sm text-muted-foreground">Cargando proyectos...</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="text-lg">Tus Proyectos</CardTitle>
        <Button variant="outline" size="sm">
          Añadir Proyecto
        </Button>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        {projects.length === 0 ? (
          <div className="py-6 text-center">
            <p className="text-sm text-muted-foreground">No se encontraron proyectos asociados a esta wallet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="rounded-lg border p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">
                        {project.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.blockchain}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {project.address.slice(0, 8)}...{project.address.slice(-6)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Último análisis</p>
                    <p className="text-sm">{project.lastAnalysis}</p>
                    <Button variant="link" size="sm" className="h-6 p-0 mt-1">
                      Analizar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}