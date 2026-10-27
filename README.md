# To-Do List Detetive

Lista de tarefas com tema de investigação policial. Cada tarefa é um **caso**: uma ficha presa num quadro de cortiça com pino vermelho. Ao resolver, a ficha ganha um carimbo e o pino fica cinza.

Atividade de Next.js: aplicação de lista de tarefas com `useState`, `map()`, `filter()` e componentes reutilizáveis.

- Repositório: https://github.com/dutrathiagodev/to-do-list-detetive
- Quadro de tarefas (Trello): https://trello.com/b/rmZWN3fj/to-do-list-detetive

## Funcionalidades

- Abrir novo caso por formulário (com aviso quando o título está vazio)
- Resolver ou reabrir uma ficha
- Descartar uma ficha, com confirmação
- Filtrar por **Todos**, **Em aberto** e **Resolvidos**
- Contador de fichas, resolvidos e barra de taxa de resolução
- Estados vazios diferentes para cada filtro
- Persistência em `localStorage` (as fichas continuam após recarregar a página)
- Layout responsivo e navegação por teclado com foco visível

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 e ESLint.

## Como rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Estrutura

A organização segue a arquitetura descrita em [`docs/architecture`](docs/architecture/feature.spec.md).

```text
src/app/                      rotas, layout, metadata e tokens (globals.css)
src/components/layout/        header e footer
src/components/sections/tasks quadro de tarefas (estado, ficha, formulário, filtros)
src/components/ui/            Button e Pin (genéricos, sem texto de negócio)
src/content/tasks.ts          textos e fichas de exemplo
src/types/tasks.ts            tipos
src/lib/                      utilitários, store do localStorage e hook useTasks
```

## Fluxo de trabalho

O trabalho foi dividido em cards no Trello, um por Pull Request, com commits convencionais (`feat`, `docs`, `chore`).
