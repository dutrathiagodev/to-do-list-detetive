export type TaskFilter = "todas" | "abertas" | "resolvidas";

export type ChecklistItem = {
  id: number;
  text: string;
  done: boolean;
};

export type Task = {
  id: number;
  text: string;
  done: boolean;
  date: string;
  checklist?: ChecklistItem[];
};
