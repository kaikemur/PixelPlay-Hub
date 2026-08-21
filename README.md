# 🎬 PixelPlay-Hub

O **PixelPlay-Hub** é uma aplicação web moderna, responsiva e interativa dedicada à exibição de um catálogo de filmes. Desenvolvido com foco em performance e experiência do usuário (UX), o projeto permite explorar títulos, filtrar por gêneros, buscar por nomes e visualizar detalhes de cada obra de forma dinâmica e elegante.

---

## 🚀 Funcionalidades

- 📚 **Catálogo de Filmes:** Visualização completa de títulos com pôster, nota de avaliação, ano de lançamento e gênero.
- 🔍 **Busca e Filtros:** Pesquisa em tempo real por nome do filme e filtragem dinâmica por categoria.
- 🎯 **Detalhes do Filme:** Modal interativo com informações expandidas sobre cada título selecionado.
- 📱 **Design Responsivo:** Interface adaptável e otimizada para dispositivos móveis, tablets e desktops.
- 📬 **Página de Contato:** Formulário com validação para envio de mensagens e feedback dos usuários.
- 🧩 **Arquitetura Componentizada:** Código modular, reutilizável e de fácil manutenção.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com um stack moderno e eficiente:

- **[React](https://react.dev/)** (v19) - Biblioteca para construção de interfaces de usuário declarativas.
- **[Vite](https://vitejs.dev/)** - Build tool extremamente rápida para desenvolvimento e produção.
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Framework CSS utilitário para estilização ágil, consistente e responsiva.
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones otimizados e leves para React.
- **[Zod](https://zod.dev/)** - Validação de esquemas e formulários com TypeScript/JavaScript.
- **JavaScript (ES6+)** - Linguagem principal com suporte a módulos (ESM).

---

## 📂 Estrutura do Projeto

```text
pixel-hub/
├── public/              # Arquivos estáticos públicos (ícones, fontes, etc.)
├── src/
│   ├── assets/          # Imagens e recursos estáticos do projeto
│   ├── components/      # Componentes reutilizáveis (Header, Footer, Card, MovieCard, Modal, Form, etc.)
│   ├── pages/           # Páginas da aplicação (Home, Catalogo, Sobre, Contato)
│   ├── App.jsx          # Componente principal e estrutura de rotas da aplicação
│   ├── main.jsx         # Ponto de entrada (entry point) da aplicação React
│   ├── index.css        # Estilos globais e diretivas do Tailwind CSS
│   └── App.css          # Estilos específicos do componente App
├── .gitignore           # Arquivos e pastas ignorados pelo controle de versão
├── eslint.config.js     # Configuração do linter para padronização e qualidade de código
├── package.json         # Dependências, metadados e scripts do projeto
├── vite.config.js       # Configuração do Vite e plugins (ex: integração com Tailwind)
└── README.md            # Documentação principal do projeto
