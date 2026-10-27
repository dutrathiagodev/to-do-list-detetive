"use client";

import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, saveTasks, subscribe } from "@/lib/tasks-store";
import { shortDate } from "@/lib/utils";

const noopSubscribe = () => () => {};

export function useTasks() {
  const tasks = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // false no servidor e na hidratação; true já no navegador (evita piscar o estado vazio)
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);

  function addTask(text: string) {
    const id = tasks.reduce((max, task) => Math.max(max, task.id), 0) + 1;
    saveTasks([...tasks, { id, text, done: false, date: shortDate() }]);
  }

  function toggleTask(id: number) {
    saveTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  }

  function removeTask(id: number) {
    saveTasks(tasks.filter((task) => task.id !== id));
  }

  return { tasks, ready, addTask, toggleTask, removeTask };
}
