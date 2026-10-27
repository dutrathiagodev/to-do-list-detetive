"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pin } from "@/components/ui/pin";
import { card } from "@/content/tasks";
import { cn } from "@/lib/utils";
import type { Task } from "@/types/tasks";

// Classes completas (e não montadas) para o Tailwind conseguir gerá-las.
const rotations = [
  "-rotate-[2.2deg]",
  "rotate-[1.4deg]",
  "-rotate-[0.8deg]",
  "rotate-2",
  "-rotate-[1.6deg]",
  "rotate-[0.9deg]",
];

type TaskCardProps = {
  task: Task;
  index: number;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export function TaskCard({ task, index, onToggle, onRemove }: TaskCardProps) {
  const [asking, setAsking] = useState(false);
  const num = String(task.id).padStart(3, "0");

  return (
    <li
      className={cn(
        "relative flex min-h-[230px] flex-col gap-3 px-5 pb-4 pt-7.5 shadow-[0_12px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] transition-transform hover:-translate-y-1 hover:rotate-0",
        task.done ? "bg-ficha-done" : "bg-ficha",
        rotations[index % rotations.length],
      )}
    >
      <Pin muted={task.done} />

      <div className="flex justify-between gap-2 border-b-2 border-dashed border-ink/45 pb-2 text-xs uppercase tracking-widest text-smoke">
        <span>
          {card.file} {num}
        </span>
        <span>{task.date}</span>
      </div>

      <p
        className={cn(
          "flex-1 wrap-anywhere text-[19px] leading-[1.35]",
          task.done ? "text-smoke line-through decoration-2" : "text-ink",
        )}
      >
        {task.text}
      </p>

      {task.done && (
        <span className="pointer-events-none absolute right-3 top-[42%] -rotate-[14deg] rounded border-4 border-double border-stamp bg-paper/60 px-3 py-1 font-stencil text-[26px] font-bold uppercase tracking-[0.08em] text-stamp">
          {card.stamp}
        </span>
      )}

      <div className="flex gap-2">
        <Button variant="dark" className="flex-1 text-[13px]" aria-pressed={task.done} onClick={() => onToggle(task.id)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
            <path d="M4 12l6 6L20 6" />
          </svg>
          {task.done ? card.reopen : card.resolve}
        </Button>
        <Button variant="outline" icon aria-label={`${card.discardAria} ${num}`} onClick={() => setAsking(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" aria-hidden="true">
            <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" />
          </svg>
        </Button>
      </div>

      {asking && (
        <div
          role="alertdialog"
          aria-label={card.confirmAria}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3.5 bg-ink/95 p-5 text-center text-cream"
        >
          <p className="text-lg">{card.confirmText}</p>
          <div className="flex gap-2.5">
            <Button variant="light" className="text-[13px]" onClick={() => setAsking(false)}>
              {card.keep}
            </Button>
            <Button variant="danger" className="text-[13px]" onClick={() => onRemove(task.id)}>
              {card.destroy}
            </Button>
          </div>
        </div>
      )}
    </li>
  );
}
