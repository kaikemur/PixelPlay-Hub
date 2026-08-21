import { useState } from 'react';
import { z } from 'zod';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const contactSchema = z.object({
  nome: z.string().min(3, 'Digite um nome com pelo menos 3 letras.'),
  email: z.string().email('Informe um e-mail valido.'),
  mensagem: z.string().min(10, 'A mensagem precisa ter ao menos 10 caracteres.'),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      const nextErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSent(true);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
      <h3 className="mb-2 text-center font-display text-4xl tracking-[0.12em] text-amber-300">Contato</h3>
      <p className="mb-6 text-center text-sm text-slate-300">Sugira filmes, series e listas para a comunidade PixelPlay.</p>

      {isSent && (
        <div className="mb-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          Mensagem enviada com sucesso. Obrigado pelo contato.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className="mb-1 block text-sm text-slate-300" htmlFor="nome">
            <FaUser className="inline mr-2" /> Nome
          </label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={handleChange('nome')}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
            placeholder="Seu nome completo"
          />
          {errors.nome && <p className="mt-1 text-xs text-rose-400">{errors.nome}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-slate-300" htmlFor="email">
            <FaEnvelope className="inline mr-2" /> E-mail
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange('email')}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
            placeholder="seu@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-slate-300" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            value={formData.mensagem}
            onChange={handleChange('mensagem')}
            rows="4"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
            placeholder="Sua sugestão de filme..."
          />
          {errors.mensagem && <p className="mt-1 text-xs text-rose-400">{errors.mensagem}</p>}
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-2 font-bold text-slate-900 transition hover:bg-amber-300"
        >
          <FaPaperPlane />
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;