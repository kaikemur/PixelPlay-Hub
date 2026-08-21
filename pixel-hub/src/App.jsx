import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import ContactForm from './components/ContactForm';
import SpotlightCard from './components/SpotlightCard';
import MovieDetailsModal from './components/MovieDetailsModal';
import AboutSection from './components/AboutSection';

// Lista diversificada de 50 filmes classicos e modernos
const moviesData = [
  { id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Crime/Drama", nota: 9.2, imagem: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", descricao: "A história da família Corleone, uma das mais poderosas famílias mafiosas de Nova York." },
  { id: 2, titulo: "Pulp Fiction", ano: 1994, genero: "Crime/Thriller", nota: 8.9, imagem: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", descricao: "As vidas de dois assassinos da máfia, um boxeador e um casal de bandidos se entrelaçam." },
  { id: 3, titulo: "Interestelar", ano: 2014, genero: "Sci-Fi/Aventura", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", descricao: "Exploradores viajam através de um buraco de minhoca para salvar a humanidade." },
  { id: 4, titulo: "Parasita", ano: 2019, genero: "Thriller/Drama", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", descricao: "Uma família pobre se infiltra na vida de uma família rica com consequências inesperadas." },
  { id: 5, titulo: "Batman: O Cavaleiro das Trevas", ano: 2008, genero: "Ação/Crime", nota: 9.0, imagem: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", descricao: "Batman enfrenta o Coringa, que espalha o caos em Gotham City." },
  { id: 6, titulo: "Clube da Luta", ano: 1999, genero: "Drama/Thriller", nota: 8.8, imagem: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", descricao: "Um homem deprimido conhece um vendedor de sabonetes e funda um clube de luta clandestino." },
  { id: 7, titulo: "A Viagem de Chihiro", ano: 2001, genero: "Animação/Fantasia", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", descricao: "Uma menina fica presa em um mundo mágico e deve trabalhar para libertar seus pais." },
  { id: 8, titulo: "Gladiador", ano: 2000, genero: "Ação/Histórico", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", descricao: "Um general romano escravizado busca vingança contra o imperador que matou sua família." },
  { id: 9, titulo: "Matrix", ano: 1999, genero: "Sci-Fi/Ação", nota: 8.7, imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", descricao: "Um hacker descobre que a realidade é uma simulação controlada por máquinas." },
  { id: 10, titulo: "Forrest Gump", ano: 1994, genero: "Drama/Romance", nota: 8.8, imagem: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", descricao: "A história de um homem simples que presencia e influencia vários eventos históricos." },
  { id: 11, titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001, genero: "Fantasia/Aventura", nota: 8.8, imagem: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", descricao: "Um hobbit recebe a missão de destruir um anel poderoso antes que ele caia nas mãos do mal." },
  { id: 12, titulo: "De Volta para o Futuro", ano: 1985, genero: "Sci-Fi/Comédia", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg", descricao: "Um adolescente viaja no tempo em um DeLorean modificado e precisa consertar a história." },
  { id: 13, titulo: "Alien: O Oitavo Passageiro", ano: 1979, genero: "Terror/Sci-Fi", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg", descricao: "A tripulação de uma nave espacial enfrenta uma criatura mortal a bordo." },
  { id: 14, titulo: "Apocalypse Now", ano: 1979, genero: "Guerra/Drama", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUqX3mTron.jpg", descricao: "Um oficial do exército americano é enviado para assassinar um coronel renegado no Vietnã." },
  { id: 15, titulo: "Toy Story", ano: 1995, genero: "Animação/Comédia", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5h7Brnt2uAh8Yp.jpg", descricao: "Os brinquedos de um menino ganham vida quando ele não está olhando." },
  { id: 16, titulo: "Psicose", ano: 1960, genero: "Terror/Suspense", nota: 8.5, imagem: "https://placehold.co/600x900/111827/f8fafc?text=Psicose", descricao: "Uma secretária rouba dinheiro e se esconde em um motel gerido por um jovem obcecado pela mãe." },
  { id: 17, titulo: "Cidade de Deus", ano: 2002, genero: "Crime/Drama", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg", descricao: "A história de dois meninos crescendo em uma favela violenta do Rio de Janeiro." },
  { id: 18, titulo: "O Show de Truman", ano: 1998, genero: "Drama/Comédia", nota: 8.2, imagem: "https://placehold.co/600x900/0b1324/22d3ee?text=O+Show+de+Truman", descricao: "Um homem descobre que sua vida inteira e um programa de TV transmitido para o mundo todo." },
  { id: 19, titulo: "O Iluminado", ano: 1980, genero: "Terror/Suspense", nota: 8.4, imagem: "https://placehold.co/600x900/1f2937/fef08a?text=O+Iluminado", descricao: "Uma família se muda para um hotel isolado onde o pai começa a enlouquecer." },
  { id: 20, titulo: "Wall-E", ano: 2008, genero: "Animação/Sci-Fi", nota: 8.4, imagem: "https://placehold.co/600x900/0f172a/86efac?text=Wall-E", descricao: "Um robô de limpeza apaixonado segue sua amada pelo espaço sideral." },
  { id: 21, titulo: "Vingadores: Ultimato", ano: 2019, genero: "Ação/Sci-Fi", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", descricao: "Os Vingadores restantes tentam reverter o estalo de Thanos e restaurar o universo." },
  { id: 22, titulo: "Jurassic Park", ano: 1993, genero: "Aventura/Sci-Fi", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg", descricao: "Um parque temático com dinossauros clonados sai do controle durante uma visita VIP." },
  { id: 23, titulo: "Titanic", ano: 1997, genero: "Romance/Drama", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", descricao: "Um romance proibido floresce a bordo do navio condenado ao desastre." },
  { id: 24, titulo: "O Rei Leão", ano: 1994, genero: "Animação/Drama", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", descricao: "Um leãozinho deve reivindicar seu lugar como rei após a morte trágica de seu pai." },
  { id: 25, titulo: "Star Wars: Episódio IV - Uma Nova Esperança", ano: 1977, genero: "Sci-Fi/Aventura", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", descricao: "Luke Skywalker une forças com um cavaleiro Jedi para resgatar uma princesa do Império." },
  { id: 26, titulo: "O Silêncio dos Inocentes", ano: 1991, genero: "Terror/Thriller", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg", descricao: "Uma agente do FBI busca a ajuda de um canibal encarcerado para pegar outro serial killer." },
  { id: 27, titulo: "Seven: Os Sete Crimes Capitais", ano: 1995, genero: "Crime/Mistério", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg", descricao: "Dois detetives caçam um assassino que usa os sete pecados capitais como motivo." },
  { id: 28, titulo: "À Espera de um Milagre", ano: 1999, genero: "Drama/Fantasia", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", descricao: "Um guarda de prisão descobre que um dos condenados possui um dom divino." },
  { id: 29, titulo: "V de Vingança", ano: 2005, genero: "Ação/Thriller", nota: 8.1, imagem: "https://placehold.co/600x900/172554/f8fafc?text=V+de+Vinganca", descricao: "Um homem mascarado luta contra um governo totalitário em uma Londres futurista." },
  { id: 30, titulo: "Amnésia", ano: 2000, genero: "Mistério/Thriller", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg", descricao: "Um homem com perda de memória recente tenta encontrar o assassino de sua esposa." },
  { id: 31, titulo: "O Grande Truque", ano: 2006, genero: "Drama/Mistério", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg", descricao: "Dois magos rivais travam uma batalha perigosa para criar o melhor truque de ilusionismo." },
  { id: 32, titulo: "Whiplash", ano: 2014, genero: "Drama/Música", nota: 8.5, imagem: "https://placehold.co/600x900/1e1b4b/f8fafc?text=Whiplash", descricao: "Um jovem baterista é pressionado ao limite por um instrutor abusivo." },
  { id: 33, titulo: "Intocáveis", ano: 2011, genero: "Comédia/Drama", nota: 8.5, imagem: "https://placehold.co/600x900/0f172a/fde68a?text=Intocaveis", descricao: "A amizade improvável entre um aristocrata tetraplégico e seu cuidador vindo da periferia." },
  { id: 34, titulo: "Mad Max: Estrada da Fúria", ano: 2015, genero: "Ação/Sci-Fi", nota: 8.1, imagem: "https://placehold.co/600x900/451a03/f8fafc?text=Mad+Max", descricao: "Em um deserto pós-apocalíptico, uma mulher rebelde se une a Max para fugir de um tirano." },
  { id: 35, titulo: "Blade Runner 2049", ano: 2017, genero: "Sci-Fi/Drama", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", descricao: "Um novo blade runner descobre um segredo que pode mergulhar a sociedade no caos." },
  { id: 36, titulo: "La La Land", ano: 2016, genero: "Musical/Romance", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", descricao: "Um pianista de jazz e uma atriz aspirante se apaixonam enquanto perseguem seus sonhos." },
  { id: 37, titulo: "Corra!", ano: 2017, genero: "Terror/Suspense", nota: 7.7, imagem: "https://placehold.co/600x900/111827/f8fafc?text=Corra", descricao: "Um jovem afro-americano visita a família de sua namorada branca e descobre segredos perturbadores." },
  { id: 38, titulo: "Pantera Negra", ano: 2018, genero: "Ação/Sci-Fi", nota: 7.3, imagem: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", descricao: "T'Challa retorna a Wakanda para assumir o trono, mas é desafiado por um inimigo do passado." },
  { id: 39, titulo: "Meu Malvado Favorito", ano: 2010, genero: "Animação/Comédia", nota: 7.6, imagem: "https://image.tmdb.org/t/p/w500/9lOloREsAhBu0pEtU0BgeR1rXct.jpg", descricao: "Um supervilão planeja roubar a lua, mas seus planos são atrapalhados por três órfãs." },
  { id: 40, titulo: "Divertida Mente", ano: 2015, genero: "Animação/Drama", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg", descricao: "As emoções dentro da cabeça de uma menina tentam guiá-la durante uma mudança difícil." },
  { id: 41, titulo: "Homem-Aranha: No Aranhaverso", ano: 2018, genero: "Animação/Ação", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", descricao: "Miles Morales se torna o Homem-Aranha e conhece outras versões do herói de dimensões paralelas." },
  { id: 42, titulo: "O Exorcista", ano: 1973, genero: "Terror", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbJ4XAiNvqU.jpg", descricao: "Uma mãe desesperada busca ajuda para salvar sua filha possessa por uma entidade demoníaca." },
  { id: 43, titulo: "Laranja Mecânica", ano: 1971, genero: "Sci-Fi/Crime", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/4sHeTAp65WrSSuc05nPGKjiz3iK.jpg", descricao: "Um líder de gangue juvenil passa por um tratamento experimental de aversão à violência." },
  { id: 44, titulo: "2001: Uma Odisséia no Espaço", ano: 1968, genero: "Sci-Fi/Mistério", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg", descricao: "Humanidade encontra um monólito misterioso que influencia a evolução e a exploração espacial." },
  { id: 45, titulo: "O Pianista", ano: 2002, genero: "Drama/Guerra", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg", descricao: "Um pianista polonês judeu luta para sobreviver à destruição do gueto de Varsóvia." },
  { id: 46, titulo: "História de Casamento", ano: 2019, genero: "Drama/Romance", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/pZekG6xabTmZxjmYRa10qPlCdG2.jpg", descricao: "Um casal em processo de divórcio lida com as disputas legais e emocionais." },
  { id: 47, titulo: "Moonlight", ano: 2016, genero: "Drama", nota: 7.4, imagem: "https://placehold.co/600x900/0c4a6e/e0f2fe?text=Moonlight", descricao: "A jornada de um homem negro gay descobrindo sua identidade em três fases da vida." },
  { id: 48, titulo: "Nomadland", ano: 2020, genero: "Drama", nota: 7.3, imagem: "https://image.tmdb.org/t/p/w500/66GUmWpTHgAjyp4aBSXy63TITZt.jpg", descricao: "Uma mulher viaja pelos EUA vivendo em uma van após perder tudo na grande recessão." },
  { id: 49, titulo: "Tudo em Todo o Lugar ao Mesmo Tempo", ano: 2022, genero: "Ação/Sci-Fi", nota: 7.8, imagem: "https://placehold.co/600x900/14532d/d1fae5?text=Tudo+Em+Todo+Lugar", descricao: "Uma imigrante chinesa é arrastada para uma aventura louca através do multiverso." },
  { id: 50, titulo: "Oppenheimer", ano: 2023, genero: "Drama/Histórico", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", descricao: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const genres = ['Todos', ...new Set(moviesData.map((movie) => movie.genero))];

  const filteredMovies = moviesData.filter((movie) => {
    const normalizedTerm = searchTerm.toLowerCase();
    const matchesTerm =
      movie.titulo.toLowerCase().includes(normalizedTerm) ||
      movie.genero.toLowerCase().includes(normalizedTerm);
    const matchesGenre = selectedGenre === 'Todos' || movie.genero === selectedGenre;

    return matchesTerm && matchesGenre;
  });

  const spotlightMovie = [...filteredMovies].sort((a, b) => b.nota - a.nota)[0] || moviesData[0];

  const averageRating = (
    moviesData.reduce((acc, movie) => acc + movie.nota, 0) / moviesData.length
  ).toFixed(1);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 text-gray-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl animate-pulse-glow" />
        <div className="absolute -right-24 top-56 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.3),_rgba(2,6,23,0.95)_65%)]" />
      </div>

      <Header />

      <main className="container mx-auto flex-grow space-y-16 px-4 py-8 md:py-10">
        <section id="home" className="animate-rise-up rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-4 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Curadoria Premium
              </p>
              <h1 className="mb-4 font-display text-5xl leading-[0.92] tracking-[0.07em] text-white md:text-7xl">
                PIXELPLAY HUB
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
                Um catalogo moderno para descobrir classicos, buscar por genero e encontrar sua proxima sessao de cinema.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-2xl font-bold text-amber-300">{moviesData.length}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Titulos</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-2xl font-bold text-cyan-300">{averageRating}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Nota media</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-2xl font-bold text-emerald-300">{genres.length - 1}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Generos</p>
                </div>
              </div>
            </div>

            <SpotlightCard movie={spotlightMovie} />
          </div>
        </section>

        <section id="catalogo" className="space-y-7">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/75 p-4 md:flex-row md:items-center md:justify-between">
            <h2 className="border-l-4 border-amber-400 pl-4 text-3xl font-bold text-white">
              Catálogo Completo
            </h2>

            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
              <input
                type="text"
                placeholder="Buscar filme ou genero..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white focus:border-amber-400 focus:outline-none md:w-64"
              />

              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  {...movie}
                  onViewDetails={() => setSelectedMovie(movie)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-16 text-center">
              <p className="text-xl text-slate-400">
                Nenhum filme encontrado para "{searchTerm}" em "{selectedGenre}".
              </p>
            </div>
          )}
        </section>

        <section id="contato" className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/35 p-4 shadow-2xl shadow-black/30 md:p-10">
          <div className="mb-10 text-center">
            <h2 className="font-display text-5xl tracking-[0.1em] text-amber-300">Fale Com a Equipe</h2>
            <p className="mt-2 text-slate-300">Sugira novos titulos e compartilhe ideias para a plataforma.</p>
          </div>
          <ContactForm />
        </section>

        <AboutSection />

        <MovieDetailsModal
          movie={selectedMovie}
          allMovies={moviesData}
          onClose={() => setSelectedMovie(null)}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;