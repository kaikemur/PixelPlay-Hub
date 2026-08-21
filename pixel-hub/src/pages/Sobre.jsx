import { FaFilm, FaUsers, FaTrophy, FaHeart } from "react-icons/fa"
import Button from "../components/Button"

const equipe = [
  {
    nome: "Ana Souza",
    cargo: "Diretora de Curadoria",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    nome: "Carlos Mendes",
    cargo: "Crítico de Cinema",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    nome: "Juliana Lima",
    cargo: "Product Designer",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
]

const Sobre = ({ onNavigate }) => {
  const estatisticas = [
    { icone: <FaFilm />, valor: "+1.200", label: "Filmes catalogados" },
    { icone: <FaUsers />, valor: "50k", label: "Usuários ativos" },
    { icone: <FaTrophy />, valor: "98%", label: "Avaliações positivas" },
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* INTRO */}
        <section className="text-center mb-16">
          <span className="inline-block bg-amber-400/10 text-amber-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Sobre nós
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Apaixonados por <span className="text-amber-400">cinema</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            O CineMax nasceu da vontade de reunir, em um só lugar, os melhores filmes de todos os tempos,
            com avaliações honestas e recomendações que fazem sentido para você.
          </p>
        </section>

        {/* MISSÃO / VISÃO / VALORES */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { titulo: "Missão", texto: "Democratizar o acesso a curadoria cinematográfica de qualidade." },
            { titulo: "Visão", texto: "Ser a principal referência em recomendação de filmes no Brasil." },
            { titulo: "Valores", texto: "Paixão, transparência e respeito pela sétima arte." },
          ].map((item) => (
            <div
              key={item.titulo}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-amber-400 transition"
            >
              <h3 className="text-xl font-bold mb-2 text-amber-400">{item.titulo}</h3>
              <p className="text-zinc-400">{item.texto}</p>
            </div>
          ))}
        </section>

        {/* ESTATÍSTICAS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {estatisticas.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 rounded-xl p-6 text-center"
            >
              <div className="text-amber-400 text-3xl mb-3 flex justify-center">{stat.icone}</div>
              <p className="text-3xl font-bold">{stat.valor}</p>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* EQUIPE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {equipe.map((pessoa) => (
              <div
                key={pessoa.nome}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition"
              >
                <img
                  src={pessoa.avatar}
                  alt={pessoa.nome}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-amber-400"
                />
                <h4 className="font-bold text-lg">{pessoa.nome}</h4>
                <p className="text-zinc-400 text-sm">{pessoa.cargo}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-10 text-center text-zinc-900">
          <FaHeart className="text-4xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Faça parte dessa jornada</h2>
          <p className="mb-6">Entre em contato e conheça nossas oportunidades.</p>
          <Button variant="dark" onClick={() => onNavigate("contato")}>
            Fale conosco
          </Button>
        </section>
      </div>
    </main>
  )
}

export default Sobre