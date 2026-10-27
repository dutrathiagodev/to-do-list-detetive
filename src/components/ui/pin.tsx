import { cn } from "@/lib/utils";

type PinProps = {
  muted?: boolean;
  className?: string;
};

export function Pin({ muted = false, className }: PinProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute -top-[9px] left-1/2 z-10 -ml-2.5 size-5 rounded-full shadow-[0_5px_5px_rgba(0,0,0,0.45)]",
        muted ? "bg-pin-muted" : "bg-pin",
        className,
      )}
    />
  );
}
