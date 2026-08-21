import { FaTimes, FaStar } from 'react-icons/fa';

const MovieDetailsModal = ({ movie, allMovies, onClose }) => {
  if (!movie) return null;

  const ranking = [...allMovies]
    .sort((a, b) => b.nota - a.nota)
    .findIndex((item) => item.id === movie.id) + 1;

  const sameGenreCount = allMovies.filter((item) => item.genero === movie.genero).length;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-800 p-2 text-slate-200 transition hover:bg-slate-700"
          aria-label="Fechar detalhes"
        >
          <FaTimes />
        </button>

        <div className="grid gap-6 p-6 md:grid-cols-[300px_1fr] md:p-8">
          <img
            src={movie.imagem}
            alt={`Poster do filme ${movie.titulo}`}
            className="h-[420px] w-full rounded-2xl object-cover"
            onError={(event) => {
              event.currentTarget.src = '/fallback-poster.svg';
            }}
          />

          <div>
            <p className="mb-2 inline-block rounded-full border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Detalhes do filme
            </p>
            <h3 className="text-3xl font-bold text-white">{movie.titulo}</h3>
            <p className="mt-2 text-slate-300">{movie.ano} • {movie.genero}</p>

            <div className="mt-4 flex items-center gap-2 text-amber-300">
              <FaStar />
              <span className="text-lg font-bold">{movie.nota}</span>
              <span className="text-sm text-slate-400">avaliacao media</span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-200">{movie.descricao}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-slate-800/60 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Genero</p>
                <p className="font-semibold text-white">{movie.genero}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/60 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Ano de lancamento</p>
                <p className="font-semibold text-white">{movie.ano}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/60 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Posicao no ranking</p>
                <p className="font-semibold text-white">#{ranking}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/60 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-400">Filmes no mesmo genero</p>
                <p className="font-semibold text-white">{sameGenreCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
