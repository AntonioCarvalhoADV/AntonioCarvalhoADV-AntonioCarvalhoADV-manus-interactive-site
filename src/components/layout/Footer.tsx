const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Manus IA. Todos os direitos reservados.</p>
        <p>Desenvolvido como parte do projeto Dr. Antonio AI.</p>
      </div>
    </footer>
  );
};

export default Footer;

