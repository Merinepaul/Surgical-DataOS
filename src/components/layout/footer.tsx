import { NAV_LINKS, PAGE_MAX_WIDTH } from "@/lib/constants";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border" aria-label="Site footer">
      <div
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className="mx-auto px-6 py-12 lg:px-10"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-foreground">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12px] text-muted transition-colors hover:text-foreground/90"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p className="normal-case tracking-normal">
            Structured surgical knowledge for AI, robotics, simulation and
            research.
          </p>
        </div>
      </div>
    </footer>
  );
}
