"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Pin } from "@/components/ui/pin";
import { form } from "@/content/tasks";

type NewTaskFormProps = {
  onAdd: (text: string) => void;
};

export function NewTaskForm({ onAdd }: NewTaskFormProps) {
  const [draft, setDraft] = useState("");
  const [warn, setWarn] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) {
      setWarn(true);
      return;
    }
    onAdd(text);
    setDraft("");
    setWarn(false);
  }

  return (
    <div className="mx-auto mb-11 max-w-[760px]">
      <form
        onSubmit={handleSubmit}
        className="relative flex -rotate-[0.7deg] flex-wrap items-end gap-3.5 bg-legal-pad px-6 pb-5 pt-5.5 shadow-[0_12px_20px_rgba(0,0,0,0.4)]"
      >
        <Pin className="-top-2.5" />
        <label htmlFor="novo-caso" className="basis-full font-stencil text-sm font-bold uppercase tracking-[0.12em] text-ink">
          {form.label}
        </label>
        <input
          id="novo-caso"
          type="text"
          autoComplete="off"
          placeholder={form.placeholder}
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            setWarn(false);
          }}
          className="min-h-12 flex-[1_1_240px] border-0 border-b-[3px] border-ink bg-transparent px-1.5 text-xl text-ink placeholder:text-[#5b5230] focus:border-stamp focus:bg-white/35 focus:outline-none"
        />
        <Button type="submit" variant="stamp" className="min-h-12 px-5 text-base">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
            <path d="M12 4v16M4 12h16" />
          </svg>
          {form.submit}
        </Button>
      </form>
      {warn && (
        <p role="alert" className="mt-3 bg-ink px-4 py-2.5 text-[15px] text-lamp">
          {form.warning}
        </p>
      )}
    </div>
  );
}
