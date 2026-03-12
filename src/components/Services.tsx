const services = [
  "CONCRETE",
  "HAULING",
  "SITE WORK",
  "FINISHING",
  "CONCRETE RESURFACE",
  "TRAILER RENTALS",
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-28 bg-[var(--bg-paper)]">
      <div className="absolute inset-0 texture-paper" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] mb-10 sm:mb-12">
          What we do
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 sm:gap-y-8">
          {services.map((service) => (
            <div key={service} className="border-b-2 border-stone-400 pb-4 sm:pb-4">
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl text-[var(--text-dark)] tracking-wide">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
