import { emptyStates } from "@/content/tasks";
import type { TaskFilter } from "@/types/tasks";

type EmptyStateProps = {
  variant: "vazio" | TaskFilter;
};

export function EmptyState({ variant }: EmptyStateProps) {
  const copy = emptyStates[variant];

  return (
    <div className="mx-auto mt-8 flex max-w-[520px] rotate-1 flex-col items-center gap-3 bg-paper px-8 pb-7 pt-8 text-center shadow-[0_14px_22px_rgba(0,0,0,0.45)]">
      <svg width="64" height="64" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="23" cy="23" r="12" className="fill-none stroke-ink" strokeWidth="4" />
        <line x1="32" y1="32" x2="46" y2="46" className="stroke-ink" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <h2 className="font-stencil text-3xl font-bold uppercase tracking-wider text-ink">{copy.title}</h2>
      <p className="text-[17px] leading-snug text-smoke">{copy.text}</p>
      <p className="font-hand text-[28px] font-semibold text-stamp">{copy.note}</p>
    </div>
  );
}
