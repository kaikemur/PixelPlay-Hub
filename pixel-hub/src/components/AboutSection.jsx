import { FaFilm, FaUsers, FaTrophy } from 'react-icons/fa';

const stats = [
  { icon: <FaFilm />, value: '+1.200', label: 'Filmes catalogados' },
  { icon: <FaUsers />, value: '50k', label: 'Usuarios ativos' },
  { icon: <FaTrophy />, value: '98%', label: 'Avaliacoes positivas' },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30 md:p-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-display text-5xl tracking-[0.1em] text-amber-300">Sobre</h2>
        <p className="mb-8 max-w-3xl text-slate-300">
          O PixelPlay Hub nasceu para conectar apaixonados por cinema em uma experiencia moderna de descoberta, curadoria e recomendacoes.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
              <div className="mb-2 text-2xl text-amber-300">{item.icon}</div>
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
