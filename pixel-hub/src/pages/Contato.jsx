import { useState } from "react"
import { z } from "zod"
import { FaUser, FaEnvelope, FaPhone, FaComment, FaCheckCircle } from "react-icons/fa"
import Formulario from "../components/Formulario"
import Button from "../components/Button"

// Schema de validação com Zod
const schema = z.object({
  nome: z
    .string()
    .min(3, "Digite um nome com pelo menos 3 caracteres.")
    .max(60, "O nome deve ter no máximo 60 caracteres."),
  email: z.string().email("Informe um e-mail válido."),
  telefone: z
    .string()
    .min(10, "O telefone deve ter pelo menos 10 dígitos.")
    .regex(/^\d+$/, "O telefone deve conter apenas números."),
  assunto: z
    .string()
    .min(3, "O assunto deve ter pelo menos 3 caracteres.")
    .max(100, "O assunto deve ter no máximo 100 caracteres."),
  mensagem: z
    .string()
    .min(10, "Escreva uma mensagem com pelo menos 10 caracteres.")
    .max(500, "A mensagem deve ter no máximo 500 caracteres."),
})

const Contato = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleChange = (campo) => (e) => {
    setDados((prev) => ({ ...prev, [campo]: e.target.value }))
    // Limpa o erro do campo ao digitar
    if (erros[campo]) {
      setErros((prev) => ({ ...prev, [campo]: null }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      schema.parse(dados)
      setErros({})
      setEnviado(true)
      setDados({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" })
      setTimeout(() => setEnviado(false), 4000)
    } catch (err) {
      if (err instanceof z.ZodError) {
        const novosErros = {}
        err.errors.forEach((e) => {
          const campo = e.path[0]
          if (!novosErros[campo]) novosErros[campo] = e.message
        })
        setErros(novosErros)
      }
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* INFORMAÇÕES */}
        <section>
          <span className="inline-block bg-amber-400/10 text-amber-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Contato
          </span>
          <h1 className="text-4xl font-bold mb-4">Vamos conversar?</h1>
          <p className="text-zinc-400 mb-8">
            Envie sua mensagem e nossa equipe retornará em até 24 horas.
          </p>

          <div className="space-y-4">
            {[
              { icone: <FaEnvelope />, label: "contato@cinemax.com.br" },
              { icone: <FaPhone />, label: "(11) 4002-8922" },
              { icone: <FaUser />, label: "Segunda a sexta, das 9h às 18h" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4"
              >
                <div className="text-amber-400 text-xl">{item.icone}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
          {enviado && (
            <div className="mb-6 flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg">
              <FaCheckCircle />
              <span>Mensagem enviada com sucesso! Retornaremos em breve.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Formulario
              label="Nome"
              icone={<FaUser />}
              erro={erros.nome}
            >
              <input
                type="text"
                value={dados.nome}
                onChange={handleChange("nome")}
                placeholder="Seu nome completo"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-400 transition"
              />
            </Formulario>

            <Formulario
              label="E-mail"
              icone={<FaEnvelope />}
              erro={erros.email}
            >
              <input
                type="email"
                value={dados.email}
                onChange={handleChange("email")}
                placeholder="seu@email.com"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-400 transition"
              />
            </Formulario>

            <Formulario
              label="Telefone"
              icone={<FaPhone />}
              erro={erros.telefone}
            >
              <input
                type="tel"
                value={dados.telefone}
                onChange={handleChange("telefone")}
                placeholder="11999998888"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-400 transition"
              />
            </Formulario>

            <Formulario
              label="Assunto"
              icone={<FaComment />}
              erro={erros.assunto}
            >
              <input
                type="text"
                value={dados.assunto}
                onChange={handleChange("assunto")}
                placeholder="Sobre o que você quer falar?"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-400 transition"
              />
            </Formulario>

            <Formulario
              label="Mensagem"
              erro={erros.mensagem}
            >
              <textarea
                value={dados.mensagem}
                onChange={handleChange("mensagem")}
                placeholder="Escreva sua mensagem..."
                rows={5}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-400 transition resize-none"
              />
            </Formulario>

            <Button type="submit" className="w-full">
              Enviar mensagem
            </Button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Contato