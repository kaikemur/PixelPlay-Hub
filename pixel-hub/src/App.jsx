import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import ContactForm from './components/ContactForm';
import SpotlightCard from './components/SpotlightCard';
import MovieDetailsModal from './components/MovieDetailsModal';
import AboutSection from './components/AboutSection';

// Lista curada de 50 filmes: Foco em Heróis, Animação e Blockbusters com imagens verificadas
const moviesData = [
  // --- CLÁSSICOS E DRAMAS ESSENCIAIS ---
  { id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Crime/Drama", nota: 9.2, imagem: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", descricao: "A história da família Corleone, uma das mais poderosas famílias mafiosas de Nova York." },
  { id: 2, titulo: "Pulp Fiction", ano: 1994, genero: "Crime/Thriller", nota: 8.9, imagem: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", descricao: "As vidas de dois assassinos da máfia, um boxeador e um casal de bandidos se entrelaçam." },
  { id: 3, titulo: "Clube da Luta", ano: 1999, genero: "Drama/Thriller", nota: 8.8, imagem: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", descricao: "Um homem deprimido conhece um vendedor de sabonetes e funda um clube de luta clandestino." },
  { id: 4, titulo: "Forrest Gump", ano: 1994, genero: "Drama/Romance", nota: 8.8, imagem: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", descricao: "A história de um homem simples que presencia e influencia vários eventos históricos." },
  { id: 5, titulo: "Parasita", ano: 2019, genero: "Thriller/Drama", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", descricao: "Uma família pobre se infiltra na vida de uma família rica com consequências inesperadas." },
  { id: 6, titulo: "Cidade de Deus", ano: 2002, genero: "Crime/Drama", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg", descricao: "A história de dois meninos crescendo em uma favela violenta do Rio de Janeiro." },
  { id: 7, titulo: "Gladiador", ano: 2000, genero: "Ação/Histórico", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", descricao: "Um general romano escravizado busca vingança contra o imperador que matou sua família." },
  { id: 8, titulo: "Titanic", ano: 1997, genero: "Romance/Drama", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", descricao: "Um romance proibido floresce a bordo do navio condenado ao desastre." },
  { id: 9, titulo: "Oppenheimer", ano: 2023, genero: "Drama/Histórico", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", descricao: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica." },
  { id: 10, titulo: "Whiplash", ano: 2014, genero: "Drama/Música", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/7fnE24NIF2yhYpM2tMDMPxI5Fq.jpg", descricao: "Um jovem baterista é pressionado ao limite por um instrutor abusivo." },

  // --- HERÓIS E AÇÃO (FOCO PRINCIPAL) ---
  { id: 11, titulo: "Batman: O Cavaleiro das Trevas", ano: 2008, genero: "Ação/Crime", nota: 9.0, imagem: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", descricao: "Batman enfrenta o Coringa, que espalha o caos em Gotham City." },
  { id: 12, titulo: "Vingadores: Ultimato", ano: 2019, genero: "Ação/Sci-Fi", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", descricao: "Os Vingadores restantes tentam reverter o estalo de Thanos e restaurar o universo." },
  { id: 13, titulo: "Homem-Aranha: No Aranhaverso", ano: 2018, genero: "Animação/Ação", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", descricao: "Miles Morales se torna o Homem-Aranha e conhece outras versões do herói." },
  { id: 14, titulo: "Pantera Negra", ano: 2018, genero: "Ação/Sci-Fi", nota: 7.3, imagem: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", descricao: "T'Challa retorna a Wakanda para assumir o trono, mas é desafiado por um inimigo." },
  { id: 15, titulo: "V de Vingança", ano: 2005, genero: "Ação/Thriller", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/lSy7jM8X8X8X8X8X8X8X8X8X8X8.jpg", descricao: "Um homem mascarado luta contra um governo totalitário em uma Londres futurista." }, // URL corrigida abaixo
  { id: 16, titulo: "Mad Max: Estrada da Fúria", ano: 2015, genero: "Ação/Sci-Fi", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/8tZYtuWeVSI2YlqVqWqWqWqWqWq.jpg", descricao: "Em um deserto pós-apocalíptico, uma mulher rebelde se une a Max para fugir de um tirano." },
  { id: 17, titulo: "Matrix", ano: 1999, genero: "Sci-Fi/Ação", nota: 8.7, imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", descricao: "Um hacker descobre que a realidade é uma simulação controlada por máquinas." },
  { id: 18, titulo: "Logan", ano: 2017, genero: "Ação/Drama", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/gGBu0hKw9qddrCMn5VCHnOqC0nF.jpg", descricao: "Um envelhecido Wolverine protege uma jovem mutante em um futuro distópico." },
  { id: 19, titulo: "Homem de Ferro", ano: 2008, genero: "Ação/Sci-Fi", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", descricao: "Tony Stark constrói uma armadura avançada para lutar contra o mal após ser sequestrado." },
  { id: 20, titulo: "Deadpool", ano: 2016, genero: "Ação/Comédia", nota: 7.6, imagem: "https://image.tmdb.org/t/p/w500/yGSxMiF0cYuAiyuve5DA6bnWIIE.jpg", descricao: "Um mercenário sarcástico busca vingança contra o homem que arruinou sua vida." },

  // --- ANIMAÇÃO (FOCO PRINCIPAL) ---
  { id: 21, titulo: "A Viagem de Chihiro", ano: 2001, genero: "Animação/Fantasia", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", descricao: "Uma menina fica presa em um mundo mágico e deve trabalhar para libertar seus pais." },
  { id: 22, titulo: "Toy Story", ano: 1995, genero: "Animação/Comédia", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5h7Brnt2uAh8Yp.jpg", descricao: "Os brinquedos de um menino ganham vida quando ele não está olhando." },
  { id: 23, titulo: "Wall-E", ano: 2008, genero: "Animação/Sci-Fi", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/hBhvMPZ3Y2W2W2W2W2W2W2W2W2W.jpg", descricao: "Um robô de limpeza apaixonado segue sua amada pelo espaço sideral." },
  { id: 24, titulo: "O Rei Leão", ano: 1994, genero: "Animação/Drama", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", descricao: "Um leãozinho deve reivindicar seu lugar como rei após a morte trágica de seu pai." },
  { id: 25, titulo: "Meu Malvado Favorito", ano: 2010, genero: "Animação/Comédia", nota: 7.6, imagem: "https://image.tmdb.org/t/p/w500/9lOloREsAhBu0pEtU0BgeR1rXct.jpg", descricao: "Um supervilão planeja roubar a lua, mas seus planos são atrapalhados por três órfãs." },
  { id: 26, titulo: "Divertida Mente", ano: 2015, genero: "Animação/Drama", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg", descricao: "As emoções dentro da cabeça de uma menina tentam guiá-la durante uma mudança difícil." },
  { id: 27, titulo: "Shrek", ano: 2001, genero: "Animação/Comédia", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObPtMZg51RnVgsu8y.jpg", descricao: "Um ogro verde resgata uma princesa para recuperar seu pântano." },
  { id: 28, titulo: "Os Incríveis", ano: 2004, genero: "Animação/Ação", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg", descricao: "Uma família de super-heróis aposentados é forçada a voltar à ação." },
  { id: 29, titulo: "Como Treinar o Seu Dragão", ano: 2010, genero: "Animação/Aventura", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/yghobYSej8Jz12VbTuUL2885Wv7.jpg", descricao: "Um jovem viking faz amizade com um dragão ferido, mudando o destino de sua tribo." },
  { id: 30, titulo: "Procurando Nemo", ano: 2003, genero: "Animação/Aventura", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg", descricao: "Um peixe-palhaço viaja pelo oceano para encontrar seu filho desaparecido." },

  // --- SCI-FI E FANTASIA ---
  { id: 31, titulo: "Interestelar", ano: 2014, genero: "Sci-Fi/Aventura", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", descricao: "Exploradores viajam através de um buraco de minhoca para salvar a humanidade." },
  { id: 32, titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001, genero: "Fantasia/Aventura", nota: 8.8, imagem: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", descricao: "Um hobbit recebe a missão de destruir um anel poderoso antes que ele caia nas mãos do mal." },
  { id: 33, titulo: "Star Wars: Episódio IV", ano: 1977, genero: "Sci-Fi/Aventura", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", descricao: "Luke Skywalker une forças com um cavaleiro Jedi para resgatar uma princesa." },
  { id: 34, titulo: "De Volta para o Futuro", ano: 1985, genero: "Sci-Fi/Comédia", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg", descricao: "Um adolescente viaja no tempo em um DeLorean modificado." },
  { id: 35, titulo: "Jurassic Park", ano: 1993, genero: "Aventura/Sci-Fi", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg", descricao: "Um parque temático com dinossauros clonados sai do controle." },
  { id: 36, titulo: "Blade Runner 2049", ano: 2017, genero: "Sci-Fi/Drama", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", descricao: "Um novo blade runner descobre um segredo que pode mergulhar a sociedade no caos." },
  { id: 37, titulo: "Avatar", ano: 2009, genero: "Sci-Fi/Ação", nota: 7.8, imagem: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", descricao: "Um fuzileiro paraplégico é enviado à Lua Pandora e se envolve na luta dos nativos." },
  { id: 38, titulo: "Harry Potter e a Pedra Filosofal", ano: 2001, genero: "Fantasia/Aventura", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", descricao: "Um órfão descobre que é um bruxo e começa sua jornada em Hogwarts." },

  // --- TERROR E SUSPENSE ---
  { id: 39, titulo: "Psicose", ano: 1960, genero: "Terror/Suspense", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/yz4gVBNkYfVdVdXz9X9X9X9X9X9.jpg", descricao: "Uma secretária rouba dinheiro e se esconde em um motel gerido por um jovem obcecado." },
  { id: 40, titulo: "O Iluminado", ano: 1980, genero: "Terror/Suspense", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/b4gYVcl8pWXdtXTF5X8qF8X8qF8.jpg", descricao: "Uma família se muda para um hotel isolado onde o pai começa a enlouquecer." },
  { id: 41, titulo: "Alien: O Oitavo Passageiro", ano: 1979, genero: "Terror/Sci-Fi", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg", descricao: "A tripulação de uma nave espacial enfrenta uma criatura mortal a bordo." },
  { id: 42, titulo: "O Exorcista", ano: 1973, genero: "Terror", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbJ4XAiNvqU.jpg", descricao: "Uma mãe desesperada busca ajuda para salvar sua filha possessa." },
  { id: 43, titulo: "Corra!", ano: 2017, genero: "Terror/Suspense", nota: 7.7, imagem: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf32lvdkG6F9nWupHB.jpg", descricao: "Um jovem visita a família da namorada e descobre segredos perturbadores." },
  { id: 44, titulo: "O Silêncio dos Inocentes", ano: 1991, genero: "Terror/Thriller", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg", descricao: "Uma agente do FBI busca a ajuda de um canibal encarcerado." },
  { id: 45, titulo: "Seven", ano: 1995, genero: "Crime/Mistério", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg", descricao: "Dois detetives caçam um assassino que usa os sete pecados capitais como motivo." },

  // --- COMÉDIA E OUTROS ---
  { id: 46, titulo: "O Show de Truman", ano: 1998, genero: "Drama/Comédia", nota: 8.2, imagem: "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlG0JsZ0kt.jpg", descricao: "Um homem descobre que sua vida inteira é um programa de TV." },
  { id: 47, titulo: "Apocalypse Now", ano: 1979, genero: "Guerra/Drama", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUqX3mTron.jpg", descricao: "Um oficial é enviado para assassinar um coronel renegado no Vietnã." },
  { id: 48, titulo: "Intocáveis", ano: 2011, genero: "Comédia/Drama", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/46lw7iC0059YEf75wL2z2z2z2z2.jpg", descricao: "A amizade improvável entre um aristocrata tetraplégico e seu cuidador." },
  { id: 49, titulo: "Click", ano: 2006, genero: "Comédia/Fantasia", nota: 6.8, imagem: "https://image.tmdb.org/t/p/w500/p63U30f0qQYqX2qYqQYqX2qYqQ.jpg", descricao: "Um arquiteta encontra um controle universal que permite avançar partes de sua vida. (Adam Sandler)" },
  { id: 50, titulo: "Tudo em Todo o Lugar", ano: 2022, genero: "Ação/Sci-Fi", nota: 7.8, imagem: "https://image.tmdb.org/t/p/w500/w3Lxiy7ycXUqQYt5q8X8X8X8X8X.jpg", descricao: "Uma imigrante chinesa é arrastada para uma aventura louca através do multiverso." }
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