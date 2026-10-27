"use client";

import { useState, type FormEvent } from "react";
import { checklist as copy } from "@/content/tasks";
import { cn } from "@/lib/utils";
import type { ChecklistItem } from "@/types/tasks";

type TaskChecklistProps = {
  taskId: number;
  items: ChecklistItem[];
  onAdd: (text: string) => void;
  onToggle: (itemId: number) => void;
  onRemove: (itemId: number) => void;
};

export function TaskChecklist({ taskId, items, onAdd, onToggle, onRemove }: TaskChecklistProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const done = items.filter((item) => item.done).length;
  const panelId = `checklist-${taskId}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onAdd(text);
    setDraft("");
  }

  return (
    <div className="border-t-2 border-dashed border-ink/45 pt-3">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="flex min-h-11 w-full cursor-pointer items-center gap-2 text-left text-[13px] uppercase tracking-widest text-ink"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          aria-hidden="true"
          className={cn("shrink-0 transition-transform", open && "rotate-90")}
        >
          <path d="M9 4l8 8-8 8" />
        </svg>
        <span className="flex-1">{copy.title}</span>
        {items.length > 0 && (
          <span className="rounded-full bg-ink px-2 py-0.5 text-xs text-cream">
            {done}/{items.length}
          </span>
        )}
      </button>

      {items.length > 0 && (
        <progress
          value={done}
          max={items.length}
          aria-label={copy.progressAria}
          className="mb-1 h-2 w-full appearance-none border border-ink/60 bg-black/15 [&::-moz-progress-bar]:bg-stamp [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-stamp [&::-webkit-progress-value]:transition-all"
        />
      )}

      {open && (
        <div id={panelId} className="mt-2 flex flex-col gap-2">
          {items.length === 0 && <p className="text-sm text-smoke">{copy.empty}</p>}

          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-1">
                <label className="flex min-h-11 flex-1 cursor-pointer items-center gap-2.5 text-[15px]">
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => onToggle(item.id)}
                    className="size-5 shrink-0 cursor-pointer accent-stamp"
                  />
                  <span className={cn("wrap-anywhere", item.done ? "text-smoke line-through" : "text-ink")}>
                    {item.text}
                  </span>
                </label>
                <button
                  type="button"
                  aria-label={`${copy.removeAria}: ${item.text}`}
                  onClick={() => onRemove(item.id)}
                  className="flex size-11 shrink-0 cursor-pointer items-center justify-center text-smoke hover:text-stamp"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
                    <path d="M5 5l14 14M19 5L5 19" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              autoComplete="off"
              placeholder={copy.placeholder}
              aria-label={copy.addAria}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              className="min-h-11 min-w-0 flex-1 border-0 border-b-2 border-ink bg-transparent px-1 text-[15px] text-ink placeholder:text-[#5b4a28] focus:border-stamp focus:bg-white/35 focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-11 cursor-pointer bg-ink px-3 text-xs uppercase tracking-widest text-cream hover:bg-stamp"
            >
              {copy.add}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
