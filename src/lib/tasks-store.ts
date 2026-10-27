import { seedTasks } from "@/content/tasks";
import type { Task } from "@/types/tasks";

const STORAGE_KEY = "caso-aberto:tarefas";
const EMPTY: Task[] = [];

const listeners = new Set<() => void>();
let cache: { raw: string | null | undefined; tasks: Task[] } = { raw: undefined, tasks: EMPTY };

function readRaw() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): Task[] {
  if (raw === null) return seedTasks;
  try {
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) ? (data as Task[]) : EMPTY;
  } catch {
    return EMPTY;
  }
}

/** Lê as tarefas do localStorage mantendo a mesma referência enquanto nada muda. */
export function getSnapshot(): Task[] {
  const raw = readRaw();
  if (raw !== cache.raw) cache = { raw, tasks: parse(raw) };
  return cache.tasks;
}

export function getServerSnapshot(): Task[] {
  return EMPTY;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function saveTasks(tasks: Task[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // armazenamento indisponível: o app segue funcionando sem persistir
  }
  listeners.forEach((listener) => listener());
}
