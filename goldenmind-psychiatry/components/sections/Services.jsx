const SERVICES = [
  {
    title: "Psychiatric Evaluation",
    copy: "A thorough, unhurried diagnostic assessment to build a clear, accurate picture of what you're experiencing.",
  },
  {
    title: "Medication Management",
    copy: "Ongoing, precisely-tuned prescribing and monitoring — adjusted with you, not just for you.",
  },
  {
    title: "Telehealth Sessions",
    copy: "Full psychiatric care from wherever you are, with the same depth and privacy as an in-person visit.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 flex min-h-screen items-center justify-end px-6 md:px-20"
    >
      {/*
        Desktop: text sits in the RIGHT half; useScrollChoreography sends
        the pill to x ≈ -2.4 (left side) for this act — mirroring
        Philosophy.jsx so the pill reads as having crossed the screen.
        This is also the act where pillState.materialMix animates 0→1,
        visibly shifting the pill from glass to a warmer, translucent tint
        as these services are read.
      */}
      <div className="max-w-xl max-md:rounded-[2rem] max-md:bg-ink/55 max-md:px-6 max-md:py-10 max-md:backdrop-blur-md md:max-w-md">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-gold-300">
          Services
        </p>
        <h2 className="mb-10 font-display text-4xl font-light italic text-cream md:text-5xl">
          Care that adapts
          <br />
          to you.
        </h2>

        <div className="space-y-8 border-t border-ink-line pt-8">
          {SERVICES.map((service) => (
            <div key={service.title}>
              <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-gold-400">
                {service.title}
              </h3>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted">
                {service.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
