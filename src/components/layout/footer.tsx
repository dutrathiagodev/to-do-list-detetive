import { brand } from "@/content/tasks";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-double border-walnut px-4 py-5 text-center text-sm text-dim sm:px-8">
      {brand.footer}
    </footer>
  );
}
