import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Manus IA</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Início</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">Sobre</Link></li>
          <li><Link href="/creation-process" className="hover:text-gray-300">Processo de Criação</Link></li>
          <li><Link href="/demo" className="hover:text-gray-300">Demonstração</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

