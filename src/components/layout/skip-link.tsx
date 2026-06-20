export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
    >
      Skip to main content
    </a>
  );
}
