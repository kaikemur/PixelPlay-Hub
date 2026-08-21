import { useState, useMemo } from "react"
import { FaSearch, FaFilter, FaStar } from "react-icons/fa"
import Card from "../components/Card"

// Base de filmes (em produção real viria de uma API)
const filmes = [
  { id: 1, titulo: "Interestelar", genero: "Ficção Científica", nota: 9.2, ano: 2014, poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 2, titulo: "Clube da Luta", genero: "Drama", nota: 8.8, ano: 1999, poster: "https://image.tmdb.org/t/p/w500/wRRSbnR2hqqcbjZfIiA1b3rlqBy.jpg" },
  { id: 3, titulo: "O Poderoso Chefão", genero: "Crime", nota: 9.5, ano: 1972, poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZJAja.jpg" },
  { id: 4, titulo: "Matrix", genero: "Ficção Científica", nota: 8.7, ano: 1999, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 5, titulo: "Pulp Fiction", genero: "Crime", nota: 8.9, ano: 1994, poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" },
  { id: 6, titulo: "Forrest Gump", genero: "Drama", nota: 8.8, ano: 1994, poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg" },
  { id: 7, titulo: "O Senhor dos Anéis", genero: "Fantasia", nota: 9.0, ano: 2001, poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },
  { id: 8, titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação", nota: 9.0, ano: 2008, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
]

const Catalogo = () => {
  const [busca, setBusca] = useState("")
  const [generoSelecionado, setGeneroSelecionado] = useState("Todos")
  const [ordenacao, setOrdenacao] = useState("nota")

  // Extrai gêneros únicos usando Set + spread
  const generos = ["Todos", ...new Set(filmes.map((f) => f.genero))]

  // Filtragem + ordenação com useMemo (performance)
  const filmesFiltrados = useMemo(() => {
    return filmes
      .filter((filme) => {
        const matchBusca = filme.titulo.toLowerCase().includes(busca.toLowerCase())
        const matchGenero = generoSelecionado === "Todos" || filme.genero === generoSelecionado
        return matchBusca && matchGenero
      })
      .sort((a, b) => {
        if (ordenacao === "nota") return b.nota - a.nota
        if (ordenacao === "ano") return b.ano - a.ano
        return a.titulo.localeCompare(b.titulo)
      })
  }, [busca, generoSelecionado, ordenacao])

  // Estatísticas do catálogo
  const totalFilmes = filmes.length
  const notaMedia = filmes.reduce((acc, f) => acc + f.nota, 0) / filmes.length

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* CABEÇALHO */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Catálogo de filmes</h1>
          <p className="text-zinc-400">
            {totalFilmes} títulos disponíveis • Nota média:{" "}
            <span className="text-amber-400 font-semibold">{notaMedia.toFixed(1)}</span>
          </p>
        </header>

        {/* CONTROLES DE BUSCA E FILTRO */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar filme..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-lg border border-zinc-700">
              <FaFilter className="text-zinc-400" />
              <select
                value={generoSelecionado}
                onChange={(e) => setGeneroSelecionado(e.target.value)}
                className="bg-transparent focus:outline-none"
              >
                {generos.map((g) => (
                  <option key={g} value={g} className="bg-zinc-800">
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-400"
            >
              <option value="nota">Melhor avaliados</option>
              <option value="ano">Mais recentes</option>
              <option value="titulo">A — Z</option>
            </select>
          </div>
        </div>

        {/* LISTA DE FILMES */}
        {filmesFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filmesFiltrados.map((filme) => (
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
        ) : (
          <div className="text-center py-20 bg-zinc-900 rounded-xl border border-zinc-800">
            <p className="text-zinc-400 text-lg">
              Nenhum filme encontrado para <strong className="text-amber-400">"{busca}"</strong>
            </p>
            <button
              onClick={() => {
                setBusca("")
                setGeneroSelecionado("Todos")
              }}
              className="mt-4 text-amber-400 hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Catalogo