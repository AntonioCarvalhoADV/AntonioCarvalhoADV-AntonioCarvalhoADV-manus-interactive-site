import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Manus IA</h1>
      <p className="text-lg mb-6">
        Explore como a inteligência artificial Manus foi desenvolvida e como ela pode auxiliar em diversas tarefas complexas.
      </p>
      <div className="space-x-4">
        <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Saiba Mais Sobre Manus
        </Link>
        <Link href="/demo" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Veja a Demonstração
        </Link>
      </div>
      <div className="mt-10 p-6 border rounded-lg shadow-md bg-gray-50">
        <h2 className="text-2xl font-semibold mb-3">O Projeto Dr. Antonio AI</h2>
        <p className="mb-4">
          Este site interativo foi criado como parte do desenvolvimento da Dr. Antonio AI, uma inteligência jurídica e estratégica para o escritório Antonio Carvalho Advocacia. A criação de Manus demonstra as capacidades de IA que podem ser aplicadas em contextos específicos como o jurídico.
        </p>
        <Link href="/creation-process" className="text-blue-600 hover:underline">
          Conheça o Processo de Criação
        </Link>
      </div>
    </div>
  );
}

