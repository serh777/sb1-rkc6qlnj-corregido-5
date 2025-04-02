'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

interface WalletInfoProps {
  address: string;
}

export function WalletInfo({ address }: WalletInfoProps) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>(null);
  
  React.useEffect(() => {
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
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col items-center justify-center py-6">
            <Icons.spinner className="h-8 w-8 animate-spin" />
            <p className="mt-4 text-sm text-muted-foreground">Cargando datos de la wallet...</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardContent className="p-4">
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
      </CardContent>
    </Card>
  );
}