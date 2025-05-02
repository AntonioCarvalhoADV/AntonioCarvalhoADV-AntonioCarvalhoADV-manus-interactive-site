import React from 'react';

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Sobre Manus IA</h1>
      <p className="mb-4">
        Manus é um agente de IA avançado, projetado para auxiliar em uma ampla gama de tarefas que envolvem processamento de informações, análise de dados, desenvolvimento de software e interação com o ambiente digital. Sua arquitetura é baseada em modelos de linguagem grandes (LLMs) e integra diversas ferramentas para executar tarefas complexas de forma autônoma.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Capacidades Principais</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Coleta e Análise de Informações:</strong> Pesquisar na web, verificar fatos, analisar documentos e extrair dados relevantes.</li>
        <li><strong>Processamento de Dados:</strong> Analisar dados estruturados e não estruturados, gerar visualizações e relatórios.</li>
        <li><strong>Desenvolvimento e Programação:</strong> Escrever e executar código em várias linguagens, criar websites, aplicações e ferramentas.</li>
        <li><strong>Redação e Documentação:</strong> Produzir textos longos e detalhados, artigos, relatórios de pesquisa e documentação técnica.</li>
        <li><strong>Automação de Tarefas:</strong> Colaborar com usuários para automatizar processos como agendamentos, compras ou outras interações online.</li>
        <li><strong>Interação Multimodal:</strong> Processar e gerar imagens, visualizar dados e interagir com interfaces gráficas.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Arquitetura</h2>
      <p className="mb-4">
        Manus opera em um ciclo de agente (agent loop), analisando eventos, selecionando ferramentas apropriadas, executando ações e iterando até completar a tarefa. Ele utiliza módulos de planejamento, conhecimento e acesso a fontes de dados para tomar decisões informadas. A interação com o ambiente é feita através de um sandbox seguro com acesso à internet e diversas ferramentas (shell, navegador, editor de arquivos, etc.).
      </p>
      <p>
        Este site demonstra como Manus foi concebido e como suas capacidades foram aplicadas no contexto do projeto Dr. Antonio AI, mostrando o potencial da IA para otimizar operações e estratégias em diversos domínios.
      </p>
    </div>
  );
}

