'use client';

import { useState } from 'react';
import { useAnalysisNotifications } from '@/components/notifications/notification-system';

export function useWalletAnalysis() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const { notifyAnalysisStarted, notifyAnalysisCompleted } = useAnalysisNotifications();
  
  const handleConnect = (walletAddress: string) => {
    setAddress(walletAddress);
    setConnected(true);
    notifyAnalysisStarted('Conexión de Wallet');
    notifyAnalysisCompleted('Conexión de Wallet', 100);
  };
  
  const handleDisconnect = () => {
    setAddress(undefined);
    setConnected(false);
  };
  
  return {
    connected,
    address,
    handleConnect,
    handleDisconnect
  };
}