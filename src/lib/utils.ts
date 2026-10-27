import type { Task, TaskFilter } from "@/types/tasks";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function shortDate(date = new Date()) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}`;
}

export function matchesFilter(task: Task, filter: TaskFilter) {
  if (filter === "abertas") return !task.done;
  if (filter === "resolvidas") return task.done;
  return true;
}
