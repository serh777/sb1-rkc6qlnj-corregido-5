'use client';

import React from 'react';
import { ToolLayout } from '@/components/tools/tool-components';
import { WalletConnector } from './wallet-connector';
import { WalletInfo } from './wallet-info';
import { WalletProjects } from './wallet-projects';
import { useWalletAnalysis } from './use-wallet-analysis';
import { WalletConnectPrompt } from './wallet-connect-prompt';
import { WalletFeatures } from './wallet-features';

export function WalletAnalysisTool() {
  const { connected, address, handleConnect, handleDisconnect } = useWalletAnalysis();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Wallet Web3</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <WalletConnector 
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            connected={connected}
            address={address}
          />
          
          {connected && address && (
            <WalletInfo address={address} />
          )}
        </div>
        
        <div>
          {connected && address ? (
            <WalletProjects address={address} />
          ) : (
            <WalletConnectPrompt />
          )}
        </div>
      </div>
      
      <WalletFeatures connected={connected} />
    </div>
  );
}