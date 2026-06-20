export function HeroGrid() {
  return (
    <div
      aria-hidden
      className="engineering-grid pointer-events-none absolute inset-0 opacity-60"
      style={{
        maskImage:
          "radial-gradient(ellipse 90% 80% at 50% 40%, black 10%, transparent 80%)",
      }}
    />
  );
}
