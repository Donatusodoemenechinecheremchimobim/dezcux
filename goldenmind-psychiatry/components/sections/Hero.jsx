export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/*
        max-md: scrim behind the headline. On mobile the Canvas sits full-bleed
        behind everything (see Experience.jsx + page.jsx), so without this the
        pill could pass directly behind light-colored letters and wash out
        legibility. On desktop the pill is positioned well clear of the type
        (see useScrollChoreography's Act 1), so no scrim is needed there.
      */}
      <div className="max-md:rounded-[2rem] max-md:bg-ink/55 max-md:px-6 max-md:py-10 max-md:backdrop-blur-md">
        <p className="mb-5 font-sans text-xs uppercase tracking-[0.35em] text-gold-300">
          Goldenmind Psychiatry
        </p>
        <h1 className="glow-text font-display text-[13vw] font-light italic leading-[0.95] tracking-tightest text-cream md:text-[7vw]">
          Where every
          <br />
          mind is golden
        </h1>
        <p className="mx-auto mt-6 max-w-md font-sans text-sm font-light text-muted md:text-base">
          Modern psychiatric evaluation, medication management, and
          telehealth — care that feels as considered as it looks.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-muted">
        Scroll
      </div>
    </section>
  );
}
