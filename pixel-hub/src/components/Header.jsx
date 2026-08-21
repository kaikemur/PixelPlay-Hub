import { FaFilm, FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
          <FaFilm />
          <span>CineReact</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-red-500 transition-colors">Início</a>
          <a href="#catalogo" className="hover:text-red-500 transition-colors">Catálogo</a>
          <a href="#contato" className="hover:text-red-500 transition-colors">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 p-4 flex flex-col gap-4 border-t border-gray-700">
          <a href="#home" className="block hover:text-red-500" onClick={toggleMenu}>Início</a>
          <a href="#catalogo" className="block hover:text-red-500" onClick={toggleMenu}>Catálogo</a>
          <a href="#contato" className="block hover:text-red-500" onClick={toggleMenu}>Contato</a>
        </nav>
      )}
    </header>
  );
};

export default Header;