import { brand } from "@/content/tasks";

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-double border-walnut bg-topbar px-4 py-4 sm:px-8">
      <div className="flex items-center gap-3.5">
        <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
          <circle cx="26" cy="26" r="24" className="fill-lamp stroke-ink" strokeWidth="3" />
          <circle cx="23" cy="23" r="9" className="fill-none stroke-ink" strokeWidth="4" />
          <line x1="30" y1="30" x2="40" y2="40" className="stroke-ink" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <div>
          <h1 className="font-stencil text-2xl font-bold uppercase leading-none tracking-wider text-cream sm:text-3xl">
            {brand.title}
          </h1>
          <p className="mt-1 text-xs tracking-wide text-dim sm:text-[13px]">{brand.subtitle}</p>
        </div>
      </div>
      <p className="-rotate-2 font-hand text-2xl font-semibold text-lamp">{brand.tagline}</p>
    </header>
  );
}
