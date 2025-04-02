'use client';

import React from 'react';
import { ToolLayout, InputForm, AnalysisResults, Visualization, ScoreCard } from '@/components/tools/tool-components';

export default function MetadataAnalysisPage() {
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<any>(null);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    
    // Simulación de análisis (en producción, esto llamaría a las APIs reales)
    setTimeout(() => {
      setResults({
        score: 72,
        title: {
          score: 85,
          value: data.title || "NFT Collection Example",
          recommendations: [
            'Incluye palabras clave específicas del nicho blockchain',
            'Mantén el título entre 50-60 caracteres para mejor visibilidad',
            'Asegúrate de que el título sea descriptivo y único'
          ]
        },
        description: {
          score: 65,
          value: data.description || "A collection of unique digital assets on the blockchain.",
          recommendations: [
            'Añade más detalles sobre la utilidad y características únicas',
            'Incluye información sobre la tecnología blockchain utilizada',
            'Menciona beneficios específicos para los usuarios'
          ]
        },
        keywords: {
          score: 70,
          value: data.keywords || "NFT, blockchain, digital assets, collection",
          recommendations: [
            'Incluye términos más específicos relacionados con tu nicho',
            'Añade palabras clave emergentes en el ecosistema Web3',
            'Evita la sobrecarga de palabras clave genéricas'
          ]
        },
        contractMetadata: {
          score: 60,
          recommendations: [
            'Añade metadatos más detallados en el contrato inteligente',
            'Incluye enlaces a recursos externos (documentación, sitio web)',
            'Optimiza los nombres de funciones y eventos para mejor indexación'
          ]
        },
        tokenMetadata: {
          score: 80,
          recommendations: [
            'Asegúrate de que cada token tenga atributos descriptivos',
            'Incluye imágenes de alta calidad en los metadatos',
            'Añade propiedades que destaquen la rareza y características únicas'
          ]
        }
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <ToolLayout 
      title="Análisis de Metadatos" 
      description="Evalúa y optimiza los metadatos de tus proyectos Web3"
      icon="metadata"
    >
      <InputForm onSubmit={handleSubmit} loading={loading}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="contractAddress" className="text-sm font-medium">Dirección del Contrato</label>
            <input 
              id="contractAddress"
              name="contractAddress"
              type="text" 
              placeholder="0x..." 
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Título del Proyecto</label>
            <input 
              id="title"
              name="title"
              type="text" 
              placeholder="Nombre de tu proyecto o colección" 
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Descripción</label>
            <textarea 
              id="description"
              name="description"
              placeholder="Descripción detallada de tu proyecto Web3" 
              className="w-full px-3 py-2 border rounded-md min-h-[100px]"
            ></textarea>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="keywords" className="text-sm font-medium">Palabras Clave</label>
            <input 
              id="keywords"
              name="keywords"
              type="text" 
              placeholder="Palabras clave separadas por comas" 
              className="w-full px-3 py-2 border rounded-md"
            />
            <p className="text-xs text-muted-foreground">Ejemplo: NFT, blockchain, DeFi, metaverso</p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="blockchain" className="text-sm font-medium">Blockchain</label>
            <select 
              id="blockchain"
              name="blockchain"
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="ethereum">Ethereum</option>
              <option value="polygon">Polygon</option>
              <option value="solana">Solana</option>
              <option value="binance">Binance Smart Chain</option>
              <option value="avalanche">Avalanche</option>
              <option value="other">Otra</option>
            </select>
          </div>
        </div>
      </InputForm>
      
      {results && (
        <>
          <AnalysisResults 
            results={
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Puntuación General: {results.score}/100</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${results.score}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tus metadatos tienen una calidad buena, pero hay áreas específicas que pueden mejorarse para optimizar la visibilidad de tu proyecto en el ecosistema Web3.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Análisis Detallado</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <ScoreCard 
                      title="Título" 
                      score={results.title.score} 
                      description={`"${results.title.value}"`} 
                      recommendations={results.title.recommendations}
                    />
                    <ScoreCard 
                      title="Descripción" 
                      score={results.description.score} 
                      description={`"${results.description.value}"`} 
                      recommendations={results.description.recommendations}
                    />
                    <ScoreCard 
                      title="Palabras Clave" 
                      score={results.keywords.score} 
                      description={`"${results.keywords.value}"`} 
                      recommendations={results.keywords.recommendations}
                    />
                    <ScoreCard 
                      title="Metadatos del Contrato" 
                      score={results.contractMetadata.score} 
                      description="Análisis de los metadatos del contrato inteligente" 
                      recommendations={results.contractMetadata.recommendations}
                    />
                    <ScoreCard 
                      title="Metadatos de Tokens" 
                      score={results.tokenMetadata.score} 
                      description="Análisis de los metadatos de tokens individuales" 
                      recommendations={results.tokenMetadata.recommendations}
                    />
                  </div>
                </div>
              </div>
            }
          />
          
          <Visualization 
            title="Visualización de Metadatos" 
            description="Representación visual de la calidad de tus metadatos"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium mb-4">Comparativa de Puntuaciones</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Título</span>
                      <span>{results.title.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${results.title.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Descripción</span>
                      <span>{results.description.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${results.description.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Palabras Clave</span>
                      <span>{results.keywords.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${results.keywords.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Metadatos del Contrato</span>
                      <span>{results.contractMetadata.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{ width: `${results.contractMetadata.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Metadatos de Tokens</span>
                      <span>{results.tokenMetadata.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{ width: `${results.tokenMetadata.score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t pt-4">
                <h4 className="text-sm font-medium mb-2">Recomendaciones Principales</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Mejora los metadatos del contrato para aumentar la visibilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Añade más detalles específicos en la descripción</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Utiliza palabras clave más específicas del ecosistema Web3</span>
                  </li>
                </ul>
              </div>
            </div>
          </Visualization>
        </>
      )}
    </ToolLayout>
  );
}