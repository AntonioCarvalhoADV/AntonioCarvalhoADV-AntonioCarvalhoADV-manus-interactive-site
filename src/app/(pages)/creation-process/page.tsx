import React from 'react';
import Link from 'next/link';

export default function CreationProcessPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Processo de Criação de Manus</h1>
      <p className="mb-4">
        A criação de Manus, especialmente no contexto do projeto Dr. Antonio AI, seguiu um processo iterativo focado em definir capacidades, integrar dados e refinar o comportamento da IA para atender a necessidades específicas. Este site interativo é, em si, um produto desse processo.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Fases do Desenvolvimento (Exemplo: Dr. Antonio AI)</h2>

      <div className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Fase 1: Definição e Estruturação Inicial</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Definição da persona e missão (Dr. Antonio AI).</li>
          <li>Configuração do ambiente e ativação da identidade.</li>
          <li>Integração inicial de dados (processos, financeiros).</li>
          <li>Desenvolvimento dos primeiros comandos de teste.</li>
        </ul>
      </div>

      <div className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Fase 2: Implementação de Funcionalidades Essenciais</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Integração de dados da equipe.</li>
          <li>Desenvolvimento da distribuição de tarefas.</li>
          <li>Geração de planos de ação semanais.</li>
          <li>Implementação da simulação de audiência.</li>
          <li>Criação da análise de perfil de cliente (inicial).</li>
        </ul>
      </div>

      <div className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Fase 3: Consolidação e Expansão</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Planejamento da integração financeira completa.</li>
          <li>Desenvolvimento da análise de documentos PDF.</li>
          <li>Implementação do monitoramento de tribunais (via API).</li>
          <li>Criação da estrutura básica do CRM.</li>
          <li>Pesquisa e planejamento da gestão comercial.</li>
          <li>Preparação para ativação da voz personalizada.</li>
        </ul>
      </div>

       <div className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Fase Atual: Criação do Site Interativo</h3>
        <p>Esta fase foca em compartilhar o processo e as capacidades de Manus através deste site, incluindo:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Estruturação do conteúdo e design.</li>
          <li>Desenvolvimento frontend com Next.js.</li>
          <li>Implementação de uma demonstração interativa (próximo passo).</li>
          <li>Testes e implantação.</li>
        </ul>
      </div>

      <p className="mt-6">
        Cada fase envolveu planejamento, desenvolvimento de código (Python, scripts), interação com ferramentas (shell, navegador), análise de dados e comunicação constante para garantir o alinhamento com os objetivos. A abordagem modular permitiu construir funcionalidades complexas de forma incremental.
      </p>
      <div className="mt-8 text-center">
         <Link href="/demo" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ver a Demonstração Interativa
        </Link>
      </div>
    </div>
  );
}

