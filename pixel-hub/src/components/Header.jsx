import { FaFilm, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 text-white backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3 text-2xl font-bold text-amber-400">
          <FaFilm />
          <span className="font-display text-3xl tracking-[0.16em]">PIXELPLAY</span>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-wider md:flex">
          <a href="#home" className="transition-colors hover:text-amber-300">Início</a>
          <a href="#catalogo" className="transition-colors hover:text-amber-300">Catálogo</a>
          <a href="#contato" className="transition-colors hover:text-amber-300">Contato</a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#catalogo"
            className="rounded-full border border-amber-400/60 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-400 hover:text-slate-900"
          >
            Explorar agora
          </a>
        </div>

        <button
          className="text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-slate-900/95 p-4 md:hidden">
          <div className="flex flex-col gap-4 font-semibold uppercase tracking-wide">
            <a href="#home" className="hover:text-amber-300" onClick={toggleMenu}>Início</a>
            <a href="#catalogo" className="hover:text-amber-300" onClick={toggleMenu}>Catálogo</a>
            <a href="#contato" className="hover:text-amber-300" onClick={toggleMenu}>Contato</a>
            <a
              href="#catalogo"
              className="mt-2 rounded-full bg-amber-400 px-4 py-2 text-center text-slate-900"
              onClick={toggleMenu}
            >
              Explorar agora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;