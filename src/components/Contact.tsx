export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-28 bg-[var(--bg-dark)] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <a
          href="tel:469-370-1920"
          className="block font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-500 hover:text-red-400 active:text-red-400 mb-2 py-2 -my-2 min-h-[48px] flex items-center"
        >
          469-370-1920
        </a>
        <p className="text-stone-500 mb-6 text-base sm:text-lg">Chris Wallace · Owner</p>
        <a
          href="mailto:PBMCONSTRUCTIONSERVICES@GMAIL.COM"
          className="block text-stone-400 hover:text-white active:text-white text-base sm:text-lg py-2 -my-2 break-all"
        >
          PBMCONSTRUCTIONSERVICES@GMAIL.COM
        </a>
      </div>
    </section>
  );
}
