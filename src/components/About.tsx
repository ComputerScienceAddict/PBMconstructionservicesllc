import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-28 bg-[var(--bg-warm)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
          <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/img-8.png"
              alt="PBM crew"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] mb-5 sm:mb-6">
              About
            </p>
            <p className="text-[var(--text-dark)] text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              We pour concrete. We haul. We grade. No answering service. Call the
              number, you get Chris.
            </p>
            <p className="text-[var(--text-dark)] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Driveways, patios, slabs. Dirt work, trailers, resurface. Equipment
              on site when we say it&apos;ll be there.
            </p>
            <div className="border-l-4 border-[var(--accent)] pl-5">
              <p className="font-bold text-[var(--text-dark)] text-lg">Chris Wallace</p>
              <p className="text-[var(--text-muted)] text-sm">Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
