import { FaStar, FaPlayCircle } from 'react-icons/fa';
import { useState } from 'react';

const MovieCard = ({ titulo, ano, genero, nota, imagem, descricao, onViewDetails }) => {
  const [posterSrc, setPosterSrc] = useState(imagem);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-amber-300/70">
      <div className="relative h-64 overflow-hidden">
        <img
          src={posterSrc}
          alt={`Poster do filme ${titulo}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={() => setPosterSrc('/fallback-poster.svg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-amber-300">
          <FaStar />
          <span className="font-bold">{nota}</span>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-1 text-xl font-bold text-white">{titulo}</h3>
        <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
          <span>{ano}</span>
          <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">{genero}</span>
        </div>

        <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-300 line-clamp-3">
          {descricao}
        </p>

        <button
          onClick={onViewDetails}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-2 font-bold text-slate-900 transition hover:bg-amber-300"
        >
          <FaPlayCircle />
          Ver Detalhes
        </button>
      </div>
    </article>
  );
};

export default MovieCard;