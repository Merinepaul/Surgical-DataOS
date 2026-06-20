import { PAGE_MAX_WIDTH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className="mx-auto flex flex-col items-start justify-between gap-4 px-6 py-10 text-[11px] tracking-[0.18em] text-muted sm:flex-row sm:items-center lg:px-10"
      >
        <p>SURGICALDATAOS</p>
        <p className="normal-case tracking-normal text-muted/80">
          A framework for structured representation of cataract surgical
          knowledge.
        </p>
      </div>
    </footer>
  );
}
