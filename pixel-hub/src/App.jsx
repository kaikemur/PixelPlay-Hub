import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import ContactForm from './components/ContactForm';

// Lista diversificada de 50 filmes clássicos e modernos
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
  { id: 16, titulo: "Psicose", ano: 1960, genero: "Terror/Suspense", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/yz4gVBNkYfVdVdXz9X9X9X9X9X9.jpg", descricao: "Uma secretária rouba dinheiro e se esconde em um motel gerido por um jovem obcecado pela mãe." },
  { id: 17, titulo: "Cidade de Deus", ano: 2002, genero: "Crime/Drama", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg", descricao: "A história de dois meninos crescendo em uma favela violenta do Rio de Janeiro." },
  { id: 18, titulo: "Spirited Away", ano: 2001, genero: "Animação/Fantasia", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", descricao: "Chihiro entra em um mundo de espíritos e bruxas para salvar seus pais." },
  { id: 19, titulo: "O Iluminado", ano: 1980, genero: "Terror/Suspense", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/b4gYVcl8pWXdtXTF5X8qF8X8qF8.jpg", descricao: "Uma família se muda para um hotel isolado onde o pai começa a enlouquecer." },
  { id: 20, titulo: "Wall-E", ano: 2008, genero: "Animação/Sci-Fi", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/hBhvMPZ3Y2W2W2W2W2W2W2W2W2W.jpg", descricao: "Um robô de limpeza apaixonado segue sua amada pelo espaço sideral." },
  { id: 21, titulo: "Vingadores: Ultimato", ano: 2019, genero: "Ação/Sci-Fi", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", descricao: "Os Vingadores restantes tentam reverter o estalo de Thanos e restaurar o universo." },
  { id: 22, titulo: "Jurassic Park", ano: 1993, genero: "Aventura/Sci-Fi", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg", descricao: "Um parque temático com dinossauros clonados sai do controle durante uma visita VIP." },
  { id: 23, titulo: "Titanic", ano: 1997, genero: "Romance/Drama", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", descricao: "Um romance proibido floresce a bordo do navio condenado ao desastre." },
  { id: 24, titulo: "O Rei Leão", ano: 1994, genero: "Animação/Drama", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", descricao: "Um leãozinho deve reivindicar seu lugar como rei após a morte trágica de seu pai." },
  { id: 25, titulo: "Star Wars: Episódio IV - Uma Nova Esperança", ano: 1977, genero: "Sci-Fi/Aventura", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", descricao: "Luke Skywalker une forças com um cavaleiro Jedi para resgatar uma princesa do Império." },
  { id: 26, titulo: "O Silêncio dos Inocentes", ano: 1991, genero: "Terror/Thriller", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg", descricao: "Uma agente do FBI busca a ajuda de um canibal encarcerado para pegar outro serial killer." },
  { id: 27, titulo: "Seven: Os Sete Crimes Capitais", ano: 1995, genero: "Crime/Mistério", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg", descricao: "Dois detetives caçam um assassino que usa os sete pecados capitais como motivo." },
  { id: 28, titulo: "À Espera de um Milagre", ano: 1999, genero: "Drama/Fantasia", nota: 8.6, imagem: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", descricao: "Um guarda de prisão descobre que um dos condenados possui um dom divino." },
  { id: 29, titulo: "V de Vingança", ano: 2005, genero: "Ação/Thriller", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/lSy7jM8X8X8X8X8X8X8X8X8X8X8.jpg", descricao: "Um homem mascarado luta contra um governo totalitário em uma Londres futurista." },
  { id: 30, titulo: "Amnésia", ano: 2000, genero: "Mistério/Thriller", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg", descricao: "Um homem com perda de memória recente tenta encontrar o assassino de sua esposa." },
  { id: 31, titulo: "O Grande Truque", ano: 2006, genero: "Drama/Mistério", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg", descricao: "Dois magos rivais travam uma batalha perigosa para criar o melhor truque de ilusionismo." },
  { id: 32, titulo: "Whiplash", ano: 2014, genero: "Drama/Música", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/7fnE2X8X8X8X8X8X8X8X8X8X8X8.jpg", descricao: "Um jovem baterista é pressionado ao limite por um instrutor abusivo." },
  { id: 33, titulo: "Intocáveis", ano: 2011, genero: "Comédia/Drama", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/46lw7iC0059YEf75wL2z2z2z2z2.jpg", descricao: "A amizade improvável entre um aristocrata tetraplégico e seu cuidador vindo da periferia." },
  { id: 34, titulo: "Mad Max: Estrada da Fúria", ano: 2015, genero: "Ação/Sci-Fi", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/8tZYtuWeVSI2YlqVqWqWqWqWqWq.jpg", descricao: "Em um deserto pós-apocalíptico, uma mulher rebelde se une a Max para fugir de um tirano." },
  { id: 35, titulo: "Blade Runner 2049", ano: 2017, genero: "Sci-Fi/Drama", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", descricao: "Um novo blade runner descobre um segredo que pode mergulhar a sociedade no caos." },
  { id: 36, titulo: "La La Land", ano: 2016, genero: "Musical/Romance", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", descricao: "Um pianista de jazz e uma atriz aspirante se apaixonam enquanto perseguem seus sonhos." },
  { id: 37, titulo: "Corra!", ano: 2017, genero: "Terror/Suspense", nota: 7.7, imagem: "https://image.tmdb.org/t/p/w500/1D1D1D1D1D1D1D1D1D1D1D1D1D1.jpg", descricao: "Um jovem afro-americano visita a família de sua namorada branca e descobre segredos perturbadores." },
  { id: 38, titulo: "Pantera Negra", ano: 2018, genero: "Ação/Sci-Fi", nota: 7.3, imagem: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", descricao: "T'Challa retorna a Wakanda para assumir o trono, mas é desafiado por um inimigo do passado." },
  { id: 39, titulo: "Meu Malvado Favorito", ano: 2010, genero: "Animação/Comédia", nota: 7.6, imagem: "https://image.tmdb.org/t/p/w500/9lOloREsAhBu0pEtU0BgeR1rXct.jpg", descricao: "Um supervilão planeja roubar a lua, mas seus planos são atrapalhados por três órfãs." },
  { id: 40, titulo: "Divertida Mente", ano: 2015, genero: "Animação/Drama", nota: 8.1, imagem: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg", descricao: "As emoções dentro da cabeça de uma menina tentam guiá-la durante uma mudança difícil." },
  { id: 41, titulo: "Homem-Aranha: No Aranhaverso", ano: 2018, genero: "Animação/Ação", nota: 8.4, imagem: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", descricao: "Miles Morales se torna o Homem-Aranha e conhece outras versões do herói de dimensões paralelas." },
  { id: 42, titulo: "O Exorcista", ano: 1973, genero: "Terror", nota: 8.0, imagem: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbJ4XAiNvqU.jpg", descricao: "Uma mãe desesperada busca ajuda para salvar sua filha possessa por uma entidade demoníaca." },
  { id: 43, titulo: "Laranja Mecânica", ano: 1971, genero: "Sci-Fi/Crime", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/4sHeTAp65WrSSuc05nPGKjiz3iK.jpg", descricao: "Um líder de gangue juvenil passa por um tratamento experimental de aversão à violência." },
  { id: 44, titulo: "2001: Uma Odisséia no Espaço", ano: 1968, genero: "Sci-Fi/Mistério", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg", descricao: "Humanidade encontra um monólito misterioso que influencia a evolução e a exploração espacial." },
  { id: 45, titulo: "O Pianista", ano: 2002, genero: "Drama/Guerra", nota: 8.5, imagem: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg", descricao: "Um pianista polonês judeu luta para sobreviver à destruição do gueto de Varsóvia." },
  { id: 46, titulo: "História de Casamento", ano: 2019, genero: "Drama/Romance", nota: 7.9, imagem: "https://image.tmdb.org/t/p/w500/pZekG6xabTmZxjmYRa10qPlCdG2.jpg", descricao: "Um casal em processo de divórcio lida com as disputas legais e emocionais." },
  { id: 47, titulo: "Moonlight", ano: 2016, genero: "Drama", nota: 7.4, imagem: "https://image.tmdb.org/t/p/w500/4911T5FbJ9e72vQ9zZ2X2X2X2X2.jpg", descricao: "A jornada de um homem negro gay descobrindo sua identidade em três fases da vida." },
  { id: 48, titulo: "Nomadland", ano: 2020, genero: "Drama", nota: 7.3, imagem: "https://image.tmdb.org/t/p/w500/66GUmWpTHgAjyp4aBSXy63TITZt.jpg", descricao: "Uma mulher viaja pelos EUA vivendo em uma van após perder tudo na grande recessão." },
  { id: 49, titulo: "Tudo em Todo o Lugar ao Mesmo Tempo", ano: 2022, genero: "Ação/Sci-Fi", nota: 7.8, imagem: "https://image.tmdb.org/t/p/w500/w3Lxiy7ycXUqQYt5q8X8X8X8X8X.jpg", descricao: "Uma imigrante chinesa é arrastada para uma aventura louca através do multiverso." },
  { id: 50, titulo: "Oppenheimer", ano: 2023, genero: "Drama/Histórico", nota: 8.3, imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", descricao: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtragem dos filmes
  const filteredMovies = moviesData.filter(movie => 
    movie.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genero.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 space-y-16">
        
        {/* Seção Hero */}
        <section id="home" className="text-center py-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Bem-vindo ao <span className="text-red-600">CineReact</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore nossa coleção com 50 dos melhores filmes da história do cinema.
          </p>
        </section>

        {/* Seção Catálogo */}
        <section id="catalogo" className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-700 pb-4">
            <h2 className="text-3xl font-bold text-white border-l-4 border-red-600 pl-4">
              Catálogo Completo
            </h2>
            
            <input 
              type="text" 
              placeholder="Buscar filme ou gênero..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none w-full md:w-64 shadow-inner"
            />
          </div>

          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard 
                  key={movie.id}
                  {...movie}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-2xl text-gray-500">Nenhum filme encontrado para "{searchTerm}".</p>
            </div>
          )}
        </section>

        {/* Seção Contato */}
        <section id="contato" className="py-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 md:p-10 shadow-2xl border border-gray-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Fale com a Equipe</h2>
            <p className="text-gray-400 mt-2">Sugira novos títulos para nossa coleção.</p>
          </div>
          <ContactForm />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;