import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-stone-400 border-t-2 border-[var(--accent)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-12">
          <div>
            <Image
              src="/images/pbm-logo.png"
              alt="PBM Construction Services LLC"
              width={200}
              height={80}
              className="h-14 sm:h-16 w-auto object-contain object-left"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-600 mb-4">Quick links</p>
            <nav className="flex flex-col gap-2">
              <Link href="#services" className="text-stone-400 hover:text-white transition-colors py-2">
                Services
              </Link>
              <Link href="#gallery" className="text-stone-400 hover:text-white transition-colors py-2">
                Gallery
              </Link>
              <Link href="#about" className="text-stone-400 hover:text-white transition-colors py-2">
                About
              </Link>
              <Link href="#contact" className="text-stone-400 hover:text-white transition-colors py-2">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-600 mb-4">Contact</p>
            <a
              href="tel:469-370-1920"
              className="block font-[family-name:var(--font-display)] text-xl sm:text-2xl text-red-500 hover:text-red-400 py-2"
            >
              469-370-1920
            </a>
            <a
              href="mailto:PBMCONSTRUCTIONSERVICES@GMAIL.COM"
              className="block text-sm text-stone-400 hover:text-white mt-2 transition-colors break-all py-1"
            >
              PBMCONSTRUCTIONSERVICES@GMAIL.COM
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-stone-600 text-sm">
            Chris Wallace · Owner
          </p>
          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} PBM Construction Services LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
