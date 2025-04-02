'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

interface WalletConnectorProps {
  onConnect: (address: string) => void;
  onDisconnect: () => void;
  connected: boolean;
  address?: string;
}

export function WalletConnector({ onConnect, onDisconnect, connected, address }: WalletConnectorProps) {
  const [loading, setLoading] = React.useState(false);
  
  const handleConnect = async () => {
    setLoading(true);
    
    // Simulación de conexión (en producción, esto usaría Web3Modal o similar)
    setTimeout(() => {
      const mockAddress = '0x545d5eDfCafB5e43068991C2FA1Ea6f0F1E9B561';
      onConnect(mockAddress);
      setLoading(false);
    }, 1500);
  };
  
  const handleDisconnect = () => {
    onDisconnect();
  };
  
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Wallet Web3</h3>
        {connected && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Conectado
          </span>
        )}
      </div>
      
      {connected ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Icons.wallet className="h-4 w-4" />
            <span className="font-medium">Dirección:</span>
            <span className="text-muted-foreground">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          </div>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleDisconnect}
          >
            Desconectar Wallet
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Conecta tu wallet para acceder a funcionalidades personalizadas y realizar análisis de tus propios proyectos.
          </p>
          <Button 
            className="w-full flex items-center justify-center gap-2" 
            onClick={handleConnect}
            disabled={loading}
          >
            {loading ? (
              <>
                <Icons.spinner className="h-4 w-4" />
                <span>Conectando...</span>
              </>
            ) : (
              <>
                <Icons.wallet className="h-4 w-4" />
                <span>Conectar Wallet</span>
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

interface WalletInfoProps {
  address: string;
}

export function WalletInfo({ address }: WalletInfoProps) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>(null);
  
  React.useEffect(() => {
    // Simulación de carga de datos (en producción, esto llamaría a APIs blockchain)
    const timer = setTimeout(() => {
      setData({
        balance: '1.245 ETH',
        nfts: 12,
        tokens: 8,
        transactions: 156
      });
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [address]);
  
  if (loading) {
    return (
      <div className="rounded-lg border bg-card p-4">
        <div className="flex flex-col items-center justify-center py-6">
          <Icons.spinner className="h-8 w-8" />
          <p className="mt-4 text-sm text-muted-foreground">Cargando datos de la wallet...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="rounded-lg border bg-card p-4">
      <h3 className="text-lg font-medium mb-4">Información de la Wallet</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Balance</p>
          <p className="text-lg font-medium">{data.balance}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">NFTs</p>
          <p className="text-lg font-medium">{data.nfts}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Tokens</p>
          <p className="text-lg font-medium">{data.tokens}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Transacciones</p>
          <p className="text-lg font-medium">{data.transactions}</p>
        </div>
      </div>
    </div>
  );
}

interface ProjectsListProps {
  address: string;
}

export function ProjectsList({ address }: ProjectsListProps) {
  const [loading, setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    // Simulación de carga de proyectos (en producción, esto llamaría a APIs blockchain)
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
        },
        {
          id: '3',
          name: 'Governance Token',
          type: 'Token',
          address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
          blockchain: 'Polygon',
          lastAnalysis: 'Nunca'
        }
      ]);
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [address]);
  
  if (loading) {
    return (
      <div className="rounded-lg border bg-card p-4">
        <div className="flex flex-col items-center justify-center py-6">
          <Icons.spinner className="h-8 w-8" />
          <p className="mt-4 text-sm text-muted-foreground">Cargando proyectos...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Tus Proyectos</h3>
        <Button variant="outline" size="sm">
          Añadir Proyecto
        </Button>
      </div>
      
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
    </div>
  );
}