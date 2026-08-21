const SpotlightCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/25 via-cyan-500/10 to-slate-900 p-4 shadow-xl shadow-black/40">
      <img
        src={movie.imagem}
        alt={`Poster do filme ${movie.titulo}`}
        className="h-[410px] w-full rounded-2xl object-cover"
        onError={(event) => {
          event.currentTarget.src = '/fallback-poster.svg';
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <p className="mb-2 inline-block rounded-full border border-amber-300/60 bg-amber-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200">
          No Holofote
        </p>
        <h2 className="text-3xl font-bold text-white">{movie.titulo}</h2>
        <p className="mt-1 text-sm text-slate-300">{movie.ano} • {movie.genero} • Nota {movie.nota}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-200">{movie.descricao}</p>
      </div>
    </div>
  );
};

export default SpotlightCard;
