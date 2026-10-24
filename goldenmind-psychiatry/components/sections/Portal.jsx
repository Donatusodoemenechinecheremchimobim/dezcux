export default function Portal() {
  return (
    <section
      id="portal"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/*
        Pill returns to x = 0 on both breakpoints for this act (see
        useScrollChoreography's Act 4) and sits just above this block,
        gently bobbing — so the CTA reads as "what the pill was leading to"
        on desktop AND mobile alike.
      */}
      <div className="max-md:rounded-[2rem] max-md:bg-ink/55 max-md:px-6 max-md:py-10 max-md:backdrop-blur-md">
        <p className="mb-5 font-sans text-xs uppercase tracking-[0.35em] text-gold-300">
          Patient Portal
        </p>
        <h2 className="font-display text-4xl font-light italic text-cream md:text-6xl">
          Begin your care,
          <br />
          today.
        </h2>
        <p className="mx-auto mt-6 max-w-sm font-sans text-sm font-light text-muted">
          Book a consultation or sign in to your patient portal — both take
          less than two minutes.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#book"
            className="group relative overflow-hidden rounded-full bg-gold-400 px-8 py-4 font-sans text-sm font-medium tracking-wide text-ink transition-transform duration-500 ease-soft-out hover:scale-[1.03]"
          >
            Book Consultation
          </a>
          <a
            href="#patient-portal"
            className="rounded-full border border-gold-700 px-8 py-4 font-sans text-sm font-medium tracking-wide text-cream transition-colors duration-500 ease-soft-out hover:border-gold-400 hover:text-gold-300"
          >
            Patient Portal Sign In
          </a>
        </div>
      </div>
    </section>
  );
}
