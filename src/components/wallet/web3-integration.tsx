import React from 'react';
import { WalletConnector } from '@/components/wallet/wallet-components';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

export function Web3Integration() {
  const [connected, setConnected] = React.useState(false);
  const [address, setAddress] = React.useState<string | undefined>(undefined);
  
  const handleConnect = (walletAddress: string) => {
    setAddress(walletAddress);
    setConnected(true);
  };
  
  const handleDisconnect = () => {
    setAddress(undefined);
    setConnected(false);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {connected ? (
        <div className="bg-card rounded-lg border shadow-lg p-4 w-64">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Wallet Conectada</h3>
            <button 
              onClick={() => setConnected(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm mb-3">
            <Icons.wallet />
            <span className="text-muted-foreground">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full"
            onClick={handleDisconnect}
          >
            Desconectar
          </Button>
        </div>
      ) : (
        <Button 
          className="flex items-center gap-2 shadow-lg" 
          onClick={() => setConnected(true)}
        >
          <Icons.wallet />
          <span>Conectar Wallet</span>
        </Button>
      )}
    </div>
  );
}
