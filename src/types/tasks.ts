export type TaskFilter = "todas" | "abertas" | "resolvidas";

export type Task = {
  id: number;
  text: string;
  done: boolean;
  date: string;
};
