import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-white mb-4">CineReact</h3>
        <p className="mb-4">Os melhores filmes e séries em um só lugar.</p>
        
        <div className="flex justify-center gap-6 mb-6 text-2xl">
          <a href="#" className="hover:text-red-500 transition-colors"><FaFacebook /></a>
          <a href="#" className="hover:text-red-500 transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
        </div>
        
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CineReact. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;