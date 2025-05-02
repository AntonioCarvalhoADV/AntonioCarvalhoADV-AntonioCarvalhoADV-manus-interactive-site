
'use client'; // Necessário pois InteractiveDemo usa hooks (useState)

import React from 'react';
import InteractiveDemo from '@/components/demo/InteractiveDemo'; // Importa o componente

export default function DemoPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Demonstração Interativa de Manus</h1>
      <p className="mb-4">
        Bem-vindo à demonstração interativa! Aqui, você poderá simular a interação com Manus, fornecendo tarefas e observando uma representação simplificada de como ele processaria a solicitação, selecionaria ferramentas e executaria ações.
      </p>
      {/* O componente interativo é renderizado abaixo */}
      <InteractiveDemo />
    </div>
  );
}

