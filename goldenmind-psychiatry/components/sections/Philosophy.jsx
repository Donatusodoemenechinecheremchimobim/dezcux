export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative z-10 flex min-h-screen items-center px-6 md:px-20"
    >
      {/*
        Desktop: text sits in the LEFT half of the viewport while
        useScrollChoreography sends the pill to x ≈ +2.4 (right side) during
        this act, so the two never overlap — the "weave between text"
        requirement. Mobile: pill stays pinned at x = 0 behind this block,
        so the block gets the same scrim treatment as the hero.
      */}
      <div className="max-w-xl max-md:rounded-[2rem] max-md:bg-ink/55 max-md:px-6 max-md:py-10 max-md:backdrop-blur-md md:max-w-md">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-gold-300">
          Our philosophy
        </p>
        <h2 className="font-display text-4xl font-light italic text-cream md:text-5xl">
          Psychiatry, re-imagined
          <br />
          as care — not a clinic.
        </h2>
        <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
          Mental health deserves the same warmth, privacy, and precision as
          any other part of your life. We pair board-certified clinical
          expertise with an experience that feels unhurried, personal, and
          entirely judgment-free — in person or from anywhere, by telehealth.
        </p>
      </div>
    </section>
  );
}
