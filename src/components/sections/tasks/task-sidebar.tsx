import { filters, sidebar } from "@/content/tasks";
import { cn } from "@/lib/utils";
import type { TaskFilter } from "@/types/tasks";

type TaskSidebarProps = {
  total: number;
  done: number;
  filter: TaskFilter;
  onFilter: (filter: TaskFilter) => void;
};

export function TaskSidebar({ total, done, filter, onFilter }: TaskSidebarProps) {
  const counts: Record<TaskFilter, number> = { todas: total, abertas: total - done, resolvidas: done };
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <aside className="flex flex-col gap-7 bg-lamp-glow px-4 py-6 sm:px-8 sm:py-8 lg:w-[310px] lg:shrink-0 lg:pr-6">
      <section aria-live="polite" className="relative border-2 border-walnut bg-black/25 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.14em] text-dim">{sidebar.countLabel}</p>
        <p className="my-1.5 font-stencil text-[96px] font-bold leading-none text-lamp">{total}</p>
        <p className="text-[15px] text-cream">{total === 1 ? sidebar.countSingular : sidebar.countPlural}</p>
      </section>

      <nav aria-label={sidebar.filtersAria} className="flex flex-col gap-1.5">
        {filters.map((item) => {
          const active = filter === item.key;
          return (
            <button
              key={item.key}
              type="button"
              aria-pressed={active}
              onClick={() => onFilter(item.key)}
              className={cn(
                "flex min-h-[52px] w-full cursor-pointer items-center justify-between gap-3 rounded-l-md px-4 text-left text-base text-ink shadow-[0_3px_6px_rgba(0,0,0,0.4)] transition-transform hover:translate-x-1.5",
                active
                  ? "translate-x-4 border-l-8 border-lamp bg-manila font-bold hover:translate-x-4"
                  : "bg-manila-d",
              )}
            >
              <span>{item.label}</span>
              <span className="inline-flex h-[26px] min-w-[30px] items-center justify-center rounded-full bg-ink px-2 text-[13px] text-cream">
                {counts[item.key]}
              </span>
            </button>
          );
        })}
      </nav>

      <section className="flex flex-col gap-2.5">
        <p className="text-xs uppercase tracking-[0.14em] text-dim">{sidebar.progressLabel}</p>
        <progress
          value={done}
          max={Math.max(total, 1)}
          aria-label={sidebar.progressLabel}
          className="h-4 w-full appearance-none border-2 border-walnut bg-black/45 [&::-moz-progress-bar]:bg-lamp [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-meter-stripes [&::-webkit-progress-value]:transition-all"
        />
        <p className="text-sm text-cream">
          {done} de {total} resolvidos · {pct}%
        </p>
      </section>

      <p className="-rotate-[2.5deg] font-hand text-[26px] font-semibold leading-[1.1] text-lamp">
        {sidebar.note}
      </p>
    </aside>
  );
}
