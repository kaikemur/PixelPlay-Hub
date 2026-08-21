import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-10 text-center">
        <h3 className="mb-3 font-display text-3xl tracking-[0.16em] text-amber-300">PIXELPLAY</h3>
        <p className="mb-6 text-sm text-slate-400">Cinema, series e comunidade em um hub feito para maratonar.</p>

        <div className="mb-6 flex justify-center gap-6 text-2xl">
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-cyan-300"><FaFacebook /></a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-cyan-300"><FaInstagram /></a>
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-cyan-300"><FaTwitter /></a>
        </div>

        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} PixelPlay Hub. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;