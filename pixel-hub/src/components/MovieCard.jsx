import { FaStar, FaPlayCircle } from 'react-icons/fa';

const MovieCard = ({ titulo, ano, genero, nota, imagem, descricao }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      {/* Imagem do Filme */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imagem} 
          alt={`Poster do filme ${titulo}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 px-2 py-1 rounded flex items-center gap-1">
          <FaStar />
          <span className="font-bold">{nota}</span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-1">{titulo}</h3>
        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span>{ano}</span>
          <span className="bg-red-900 text-red-100 px-2 py-0.5 rounded text-xs">{genero}</span>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
          {descricao}
        </p>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
          <FaPlayCircle />
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default MovieCard;