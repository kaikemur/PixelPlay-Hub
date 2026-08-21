import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ titulo, genero, nota, ano, poster }) => {
  const [posterSrc, setPosterSrc] = useState(poster);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-amber-300/70">
      <img
        src={posterSrc}
        alt={`Poster de ${titulo}`}
        className="h-64 w-full object-cover"
        loading="lazy"
        onError={() => setPosterSrc('/fallback-poster.svg')}
      />

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-lg font-bold text-white">{titulo}</h3>
        <p className="text-sm text-slate-300">{genero} • {ano}</p>
        <p className="inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
          <FaStar /> {nota}
        </p>
      </div>
    </article>
  );
};

export default Card;
