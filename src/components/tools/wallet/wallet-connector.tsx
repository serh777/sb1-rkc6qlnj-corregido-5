'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    try {
      const mockAddress = '0x545d5eDfCafB5e43068991C2FA1Ea6f0F1E9B561';
      onConnect(mockAddress);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Card>
      <CardContent className="p-4">
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
              onClick={onDisconnect}
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
      </CardContent>
    </Card>
  );
}