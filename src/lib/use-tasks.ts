"use client";

import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, saveTasks, subscribe } from "@/lib/tasks-store";
import { shortDate } from "@/lib/utils";
import type { ChecklistItem } from "@/types/tasks";

const noopSubscribe = () => () => {};

export function useTasks() {
  const tasks = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // false no servidor e na hidratação; true já no navegador (evita piscar o estado vazio)
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);

  function addTask(text: string) {
    const id = tasks.reduce((max, task) => Math.max(max, task.id), 0) + 1;
    saveTasks([...tasks, { id, text, done: false, date: shortDate(), checklist: [] }]);
  }

  function toggleTask(id: number) {
    saveTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  }

  function removeTask(id: number) {
    saveTasks(tasks.filter((task) => task.id !== id));
  }

  function changeChecklist(taskId: number, change: (items: ChecklistItem[]) => ChecklistItem[]) {
    saveTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, checklist: change(task.checklist ?? []) } : task,
      ),
    );
  }

  function addChecklistItem(taskId: number, text: string) {
    changeChecklist(taskId, (items) => {
      const id = items.reduce((max, item) => Math.max(max, item.id), 0) + 1;
      return [...items, { id, text, done: false }];
    });
  }

  function toggleChecklistItem(taskId: number, itemId: number) {
    changeChecklist(taskId, (items) =>
      items.map((item) => (item.id === itemId ? { ...item, done: !item.done } : item)),
    );
  }

  function removeChecklistItem(taskId: number, itemId: number) {
    changeChecklist(taskId, (items) => items.filter((item) => item.id !== itemId));
  }

  return {
    tasks,
    ready,
    addTask,
    toggleTask,
    removeTask,
    addChecklistItem,
    toggleChecklistItem,
    removeChecklistItem,
  };
}
