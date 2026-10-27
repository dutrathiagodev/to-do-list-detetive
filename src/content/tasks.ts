import type { Task, TaskFilter } from "@/types/tasks";

export const brand = {
  title: "Caso Aberto",
  subtitle: "Divisão de tarefas · arquivo confidencial",
  tagline: "Toda pista conta.",
  footer: "Caso Aberto · projeto de To-Do List em Next.js",
};

export const sidebar = {
  countLabel: "Fichas no arquivo",
  countSingular: "caso no arquivo",
  countPlural: "casos no arquivo",
  filtersAria: "Filtrar casos por situação",
  progressLabel: "Taxa de resolução",
  note: "Nenhum caso fica sem solução.",
};

export const filters: { key: TaskFilter; label: string }[] = [
  { key: "todas", label: "Todos os casos" },
  { key: "abertas", label: "Em aberto" },
  { key: "resolvidas", label: "Resolvidos" },
];

export const form = {
  label: "Abrir novo caso",
  placeholder: "O que precisa ser investigado?",
  submit: "Abrir caso",
  warning: "Toda ficha precisa de um título, detetive.",
};

export const card = {
  file: "Ficha nº",
  resolve: "Resolver",
  reopen: "Reabrir",
  stamp: "Resolvido",
  discardAria: "Descartar ficha",
  confirmAria: "Confirmar descarte",
  confirmText: "Destruir esta ficha? Não há como recuperar.",
  keep: "Manter",
  destroy: "Destruir",
};

export const emptyStates: Record<"vazio" | TaskFilter, { title: string; text: string; note: string }> = {
  vazio: {
    title: "Arquivo vazio",
    text: "Nenhum caso registrado ainda. Abra a primeira ficha no bloco amarelo.",
    note: "Todo caso começa com uma pista.",
  },
  todas: {
    title: "Arquivo vazio",
    text: "Nenhum caso registrado ainda. Abra a primeira ficha no bloco amarelo.",
    note: "Todo caso começa com uma pista.",
  },
  abertas: {
    title: "Nada em aberto",
    text: "Todas as fichas foram resolvidas. Bom trabalho, detetive.",
    note: "Caso encerrado.",
  },
  resolvidas: {
    title: "Nenhum resolvido",
    text: "Ainda não há casos com carimbo. Mãos à obra.",
    note: "A verdade está lá fora.",
  },
};

/** Fichas de exemplo exibidas só na primeira visita (antes de qualquer gravação). */
export const seedTasks: Task[] = [
  { id: 1, text: "Pesquisar ideias de conteúdo", done: false, date: "20/10" },
  { id: 2, text: "Criar um banco de autores convidados", done: false, date: "21/10" },
  { id: 3, text: "Renovar a carteira de motorista", done: true, date: "22/10" },
  { id: 4, text: "Consultar o contador sobre as contas", done: false, date: "23/10" },
  { id: 5, text: "Imprimir cartões de visita", done: true, date: "24/10" },
];
