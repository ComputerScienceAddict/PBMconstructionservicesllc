import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] sm:min-h-[85vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img-6.png"
          alt="PBM Construction"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-dark)]/75" aria-hidden />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-6 pb-8 sm:pb-20 pt-24 sm:pt-28">
        <div className="max-w-2xl">
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight">
            PBM
          </h1>
          <p
            className="mt-2 font-[family-name:var(--font-display)] text-base sm:text-xl md:text-2xl text-red-500 tracking-wide leading-snug"
            style={{ textShadow: "0 0 2px rgba(0,0,0,1), 0 0 8px rgba(239,68,68,0.6)" }}
          >
            CONCRETE · HAULING · SITE WORK ·<br className="sm:hidden" />
            <span className="sm:inline"> FINISHING · RESURFACE · TRAILERS</span>
          </p>
          <a
            href="tel:469-370-1920"
            className="mt-6 sm:mt-8 inline-block font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-red-500 hover:text-red-400 active:text-red-400 transition-colors tracking-wide min-h-[44px] flex items-center"
            style={{ textShadow: "0 0 2px rgba(0,0,0,1), 0 0 10px rgba(239,68,68,0.7)" }}
          >
            469-370-1920
          </a>
          <p className="mt-1 text-white text-base sm:text-lg font-medium">Chris Wallace · Owner</p>
          <div className="mt-8 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-6">
            <a
              href="tel:469-370-1920"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 sm:py-2.5 bg-[var(--accent)] text-white font-[family-name:var(--font-display)] text-lg tracking-[0.15em] hover:bg-red-600 active:bg-red-700 border-l-4 border-red-900/80"
            >
              469-370-1920
            </a>
            <Link
              href="#gallery"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 sm:py-2.5 text-stone-400 hover:text-white active:text-white font-[family-name:var(--font-display)] text-lg tracking-[0.15em] uppercase underline underline-offset-4 decoration-stone-500 hover:decoration-white transition-colors"
            >
              See Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
