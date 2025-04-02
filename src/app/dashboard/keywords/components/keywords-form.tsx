'use client';

import React from 'react';
import { InputForm } from '@/components/tools/tool-components';

interface KeywordsFormProps {
  onSubmit: (data: any) => Promise<void>;
  loading: boolean;
}

export function KeywordsForm({ onSubmit, loading }: KeywordsFormProps) {
  return (
    <InputForm onSubmit={onSubmit} loading={loading}>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="keywords" className="text-sm font-medium">Palabras Clave</label>
          <textarea 
            id="keywords"
            name="keywords"
            placeholder="Ingresa palabras clave separadas por comas (ej: blockchain, NFT, DeFi)" 
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
            required
          />
          <p className="text-xs text-muted-foreground">
            Ingresa las palabras clave que deseas analizar para tu proyecto Web3
          </p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="niche" className="text-sm font-medium">Nicho o Categoría</label>
          <select 
            id="niche"
            name="niche"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            required
          >
            <option value="NFT">NFT</option>
            <option value="DeFi">DeFi</option>
            <option value="Gaming">Gaming</option>
            <option value="Metaverse">Metaverso</option>
            <option value="DAO">DAO</option>
            <option value="Web3 General">Web3 General</option>
            <option value="Other">Otro</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="contractAddress" className="text-sm font-medium">
            Dirección del Contrato (opcional)
          </label>
          <input 
            id="contractAddress"
            name="contractAddress"
            type="text" 
            placeholder="0x..." 
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Proporciona la dirección del contrato para un análisis más preciso
          </p>
        </div>
      </div>
    </InputForm>
  );
}