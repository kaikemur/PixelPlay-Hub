import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactForm = ({ onSubmit, errors, register }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Entre em Contato</h2>
      
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Campo Nome */}
        <div>
          <label className="block text-gray-300 mb-1 text-sm" htmlFor="nome">
            <FaUser className="inline mr-2" /> Nome
          </label>
          <input
            type="text"
            id="nome"
            {...register('nome')}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:outline-none"
            placeholder="Seu nome completo"
          />
          {errors.nome && (
            <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label className="block text-gray-300 mb-1 text-sm" htmlFor="email">
            <FaEnvelope className="inline mr-2" /> E-mail
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:outline-none"
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Campo Mensagem */}
        <div>
          <label className="block text-gray-300 mb-1 text-sm" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            {...register('mensagem')}
            rows="4"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:outline-none"
            placeholder="Sua sugestão de filme..."
          ></textarea>
          {errors.mensagem && (
            <p className="text-red-500 text-xs mt-1">{errors.mensagem.message}</p>
          )}
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
        >
          <FaPaperPlane />
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;