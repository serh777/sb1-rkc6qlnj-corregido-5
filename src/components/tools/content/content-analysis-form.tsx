'use client';

import * as React from 'react';
import { InputForm } from '@/components/tools/tool-components';

interface ContentAnalysisFormProps {
  onSubmit: (data: any) => Promise<void>;
  loading: boolean;
}

export function ContentAnalysisForm({ onSubmit, loading }: ContentAnalysisFormProps) {
  return (
    <InputForm onSubmit={onSubmit} loading={loading}>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="url" className="text-sm font-medium">URL del Proyecto</label>
          <input 
            id="url"
            name="url"
            type="text" 
            placeholder="https://tuproyecto.com" 
            className="w-full px-3 py-2 border rounded-md"
          />
          <p className="text-xs text-muted-foreground">Ingresa la URL principal de tu proyecto Web3</p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="contentType" className="text-sm font-medium">Tipo de Contenido</label>
          <select 
            id="contentType"
            name="contentType"
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="all">Todo el contenido</option>
            <option value="documentation">Documentación técnica</option>
            <option value="marketing">Contenido de marketing</option>
            <option value="blog">Blog/Noticias</option>
            <option value="whitepaper">Whitepaper/Litepaper</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="audience" className="text-sm font-medium">Audiencia Principal</label>
          <select 
            id="audience"
            name="audience"
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="general">General (todos los niveles)</option>
            <option value="beginners">Principiantes en Web3</option>
            <option value="intermediate">Usuarios intermedios</option>
            <option value="technical">Audiencia técnica/desarrolladores</option>
            <option value="investors">Inversores/holders</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="focusAreas" className="text-sm font-medium">Áreas de enfoque</label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="readability" name="focusAreas" value="readability" defaultChecked />
              <label htmlFor="readability" className="text-sm">Legibilidad</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="seo" name="focusAreas" value="seo" defaultChecked />
              <label htmlFor="seo" className="text-sm">Optimización SEO</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="technical" name="focusAreas" value="technical" defaultChecked />
              <label htmlFor="technical" className="text-sm">Precisión técnica</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="engagement" name="focusAreas" value="engagement" defaultChecked />
              <label htmlFor="engagement" className="text-sm">Engagement</label>
            </div>
          </div>
        </div>
      </div>
    </InputForm>
  );
}