'use client';

import React, { useState } from 'react';

interface Step {
  type: 'thought' | 'tool_code' | 'observation' | 'result';
  content: string;
}

const InteractiveDemo = () => {
  const [input, setInput] = useState('');
  const [outputSteps, setOutputSteps] = useState<Step[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setOutputSteps([]); // Clear previous output

    // Simulate Manus's process
    const steps: Step[] = [];
    steps.push({ type: 'thought', content: `Analisando a solicitação: "${input}"` });
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
    setOutputSteps([...steps]);

    steps.push({ type: 'thought', content: 'Planejando a execução...' });
    await new Promise(resolve => setTimeout(resolve, 700));
    setOutputSteps([...steps]);

    // Simulate tool selection based on input (very basic)
    let tool = 'info_search_web';
    if (input.toLowerCase().includes('criar') || input.toLowerCase().includes('escrever')) {
      tool = 'file_write';
    } else if (input.toLowerCase().includes('calcular') || input.toLowerCase().includes('analisar')) {
      tool = 'shell_exec (python)';
    }
    steps.push({ type: 'tool_code', content: `Ferramenta selecionada: ${tool}` });
    await new Promise(resolve => setTimeout(resolve, 800));
    setOutputSteps([...steps]);

    steps.push({ type: 'observation', content: 'Executando a ferramenta... (Simulado)' });
    await new Promise(resolve => setTimeout(resolve, 1000));
    setOutputSteps([...steps]);

    steps.push({ type: 'result', content: `Resultado simulado para "${input}" obtido com sucesso.` });
    setOutputSteps([...steps]);

    setIsLoading(false);
    setInput(''); // Clear input after simulation
  };

  const renderStep = (step: Step, index: number) => {
    let bgColor = 'bg-gray-100';
    let textColor = 'text-gray-800';
    let icon = 'ℹ️';

    switch (step.type) {
      case 'thought':
        bgColor = 'bg-blue-100';
        textColor = 'text-blue-800';
        icon = '🧠';
        break;
      case 'tool_code':
        bgColor = 'bg-purple-100';
        textColor = 'text-purple-800';
        icon = '🛠️';
        break;
      case 'observation':
        bgColor = 'bg-yellow-100';
        textColor = 'text-yellow-800';
        icon = '👀';
        break;
      case 'result':
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        icon = '✅';
        break;
    }

    return (
      <div key={index} className={`p-3 rounded-md mb-2 ${bgColor} ${textColor} shadow-sm`}>
        <span className="mr-2">{icon}</span>
        <span className="font-mono text-sm">{step.content}</span>
      </div>
    );
  };

  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white mt-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="taskInput" className="block text-lg font-semibold mb-2">Digite uma tarefa para Manus (Ex: &quot;Pesquisar sobre IA generativa&quot;):</label>
        <input
          id="taskInput"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Digite sua tarefa aqui..."
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
        <button
          type="submit"
          className={`mt-3 w-full px-4 py-2 rounded-md text-white font-semibold ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                 >
          {isLoading ? 'Processando...' : 'Enviar Tarefa'}
        </button>
      </form>

      {outputSteps.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3">Processo Simulado:</h3>
          <div className="max-h-96 overflow-y-auto p-4 bg-gray-50 rounded-md border">
            {outputSteps.map(renderStep)}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;

