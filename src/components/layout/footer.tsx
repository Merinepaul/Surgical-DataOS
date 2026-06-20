import { PAGE_MAX_WIDTH } from "@/lib/constants";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border" aria-label="Site footer">
      <div
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className="mx-auto flex flex-col gap-3 px-6 py-10 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10"
      >
        <p className="tracking-[0.18em] text-foreground/80">
          {siteConfig.name.toUpperCase()}
        </p>
        <p className="normal-case tracking-normal">
          &copy; {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
