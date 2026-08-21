import { useState } from "react"
import { FaFilm, FaStar, FaPlay, FaArrowRight } from "react-icons/fa"
import Card from "../components/Card"
import Button from "../components/Button"

// Dados fictícios dos filmes em destaque
const filmesDestaque = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção Científica",
    nota: 9.2,
    ano: 2014,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    destaque: true,
  },
  {
    id: 2,
    titulo: "Clube da Luta",
    genero: "Drama",
    nota: 8.8,
    ano: 1999,
    poster: "https://image.tmdb.org/t/p/w500/wRRSbnR2hqqcbjZfIiA1b3rlqBy.jpg",
    destaque: true,
  },
  {
    id: 3,
    titulo: "O Poderoso Chefão",
    genero: "Crime",
    nota: 9.5,
    ano: 1972,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZJAja.jpg",
    destaque: true,
  },
]

const Home = ({ onNavigate }) => {
  const [filmeAtivo, setFilmeAtivo] = useState(filmesDestaque[0])

  // Calcula a média das notas dos filmes em destaque
  const mediaNotas = filmesDestaque
    .reduce((total, filme) => total + filme.nota, 0) / filmesDestaque.length

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-amber-400 font-semibold mb-4">
              <FaFilm /> Catálogo CineMax
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Descubra os melhores <span className="text-amber-400">filmes</span> de todos os tempos
            </h1>
            <p className="text-zinc-400 text-lg mb-8">
              Explore nosso acervo com milhares de títulos, avaliações e recomendações personalizadas.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => onNavigate("catalogo")}>
                <FaPlay className="mr-2" /> Ver catálogo
              </Button>
              <Button variant="outline" onClick={() => onNavigate("sobre")}>
                Saiba mais <FaArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-amber-400">+1.200</p>
                <p className="text-sm text-zinc-400">Filmes disponíveis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">{mediaNotas.toFixed(1)}</p>
                <p className="text-sm text-zinc-400">Nota média</p>
              </div>
            </div>
          </div>

          {/* Card do filme ativo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
            <img
              src={filmeAtivo.poster}
              alt={filmeAtivo.titulo}
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-2xl font-bold">{filmeAtivo.titulo}</h3>
              <p className="text-zinc-300 text-sm">
                {filmeAtivo.genero} • {filmeAtivo.ano}
              </p>
              <div className="flex items-center gap-1 mt-2 text-amber-400">
                <FaStar />
                <span className="font-semibold">{filmeAtivo.nota}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seletor de destaque */}
        <div className="max-w-6xl mx-auto mt-8 flex flex-wrap gap-3">
          {filmesDestaque.map((filme) => (
            <button
              key={filme.id}
              onClick={() => setFilmeAtivo(filme)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filmeAtivo.id === filme.id
                  ? "bg-amber-400 text-zinc-900"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {filme.titulo}
            </button>
          ))}
        </div>
      </section>

      {/* FILMES EM DESTAQUE */}
      <section className="px-6 py-16 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">🔥 Em alta esta semana</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmesDestaque.map((filme) => (
              <Card
                key={filme.id}
                titulo={filme.titulo}
                genero={filme.genero}
                nota={filme.nota}
                ano={filme.ano}
                poster={filme.poster}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home