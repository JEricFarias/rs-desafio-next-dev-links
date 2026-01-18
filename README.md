# Linking - Meu Portfólio de Links

Este projeto é uma resposta ao desafio proposto na trilha de nextjs, onde foi criado uma aplicação em Next.js com TypeScript para exibir um portfólio de links pessoais. A aplicação integra com o CMS Prismic para gerenciamento de conteúdo e inclui alternância de temas (claro/escuro).

[Desafio](https://app.rocketseat.com.br/projects/dev-links?module_slug=desafio-dev-links)

## 🚀 Funcionalidades

### Obrigatórias

- **Exibição de Avatar**: Componente para mostrar a imagem do perfil.
- **Lista de Links**: Exibição de uma lista de links personalizáveis.
- **Redes Sociais**: Ícones e links para redes sociais.
- **Integração com CMS**: Uso do Prismic para edição e consumo dos dados de avatar, links e redes sociais.

### Opcionais

- **Alternância de Tema**: Switch para alternar entre temas claro e escuro, implementado com contexto custom e CSS variables.

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário.
- **Prismic**: CMS headless para gerenciamento de conteúdo.
- **Shadcn/ui**: Biblioteca de componentes UI (usado para o switch de tema).
- **Biome**: Ferramenta de linting e formatação de código.
- **PostCSS**: Processador CSS.

## 📦 Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm/yarn

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/JEricFarias/rs-desafio-next-dev-links.git
   cd linking
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   # ou
   npm install
   ```

3. Configure o Prismic:
   - Crie uma conta no [Prismic](https://prismic.io/).
   - Configure os tipos de conteúdo (Custom Types) conforme os arquivos em `customtypes/`.
   - Atualize o `slicemachine.config.json` com suas credenciais.

4. Execute o servidor de desenvolvimento:

   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Estrutura do Projeto

```
linking/
├── customtypes/          # Definições dos tipos de conteúdo no Prismic
├── public/               # Arquivos estáticos
├── src/
│   ├── app/              # Páginas e layouts do Next.js App Router
│   │   ├── api/          # Rotas de API (preview, revalidate, etc.)
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── contexts/     # Contextos React (tema)
│   │   ├── lib/          # Utilitários
│   │   └── slices/       # Slices do Prismic
│   └── prismicio.ts      # Configuração do Prismic
├── biome.json            # Configuração do Biome
├── next.config.ts        # Configuração do Next.js
├── package.json          # Dependências e scripts
├── postcss.config.mjs    # Configuração do PostCSS
├── slicemachine.config.json # Configuração do Slice Machine
├── tailwind.config.ts    # Configuração do Tailwind
└── tsconfig.json         # Configuração do TypeScript
```

## 🔗 Integração com Prismic

O projeto utiliza o Prismic como CMS para gerenciar:

- Avatar
- Lista de links
- Redes sociais

### Configuração

1. Instale o Slice Machine: `npx @slicemachine/init`
2. Configure os Custom Types em `customtypes/`
3. Use o Slice Simulator para testar os slices: `/slice-simulator`

Para mais detalhes, consulte a [documentação do Prismic](https://prismic.io/docs).

## 🌙 Alternância de Tema

A aplicação suporta temas claro e escuro. O tema é controlado por um contexto React e aplicado via CSS variables no `globals.css`. O switch utiliza o componente `Switch` do Shadcn/ui.

- O tema é salvo no localStorage e detecta preferências do navegador.
- Para alternar, use o switch na interface.

## 📋 Desafio

Este projeto foi desenvolvido como resposta ao desafio da trilha de Nextjs, que inclui:

- Criação de projeto Next.js com TypeScript.
- Estrutura com avatar, links e redes sociais.
- Integração com CMS (Prismic sugerido).
- Funcionalidade opcional de theme switcher.

Para mais detalhes sobre o desafio, consulte a descrição original.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com 💜 por JEricFarias. Segue [LinkedIn](https://www.linkedin.com/in/eric-farias-a4a95174/)!
