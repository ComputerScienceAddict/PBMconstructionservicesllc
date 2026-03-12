import Image from "next/image";

const gallery = [
  { src: "/images/img-6.png", alt: "Equipment" },
  { src: "/images/img-8.png", alt: "Concrete pour" },
  { src: "/images/img-10.png", alt: "Truck and trailer" },
  { src: "/images/img-14.png", alt: "Mixer truck" },
  { src: "/images/img-16.png", alt: "Skid steer" },
  { src: "/images/img-7.png", alt: "Backyard" },
  { src: "/images/img-9.png", alt: "Finishing" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-24 bg-[var(--bg-warm)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-0 sm:px-6">
        <div className="px-5 sm:px-0 mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Work
          </p>
        </div>

        {/* Mobile: single column full-bleed */}
        <div className="flex flex-col gap-1 sm:hidden">
          {gallery.map((img) => (
            <div
              key={img.src}
              className="relative w-full aspect-[4/3] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
              />
            </div>
          ))}
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 grid-rows-[repeat(4,minmax(0,220px))] grid-flow-dense">
          <div className="relative col-span-2 row-span-2 overflow-hidden">
            <Image src="/images/img-6.png" alt="Equipment" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative col-span-1 row-span-2 overflow-hidden">
            <Image src="/images/img-8.png" alt="Concrete pour" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative col-span-2 row-span-1 overflow-hidden">
            <Image src="/images/img-10.png" alt="Truck and trailer" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative col-span-1 row-span-1 overflow-hidden">
            <Image src="/images/img-14.png" alt="Mixer truck" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative col-span-1 row-span-1 overflow-hidden">
            <Image src="/images/img-16.png" alt="Skid steer" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative col-span-2 row-span-2 overflow-hidden">
            <Image src="/images/img-7.png" alt="Backyard" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative col-span-2 row-span-1 overflow-hidden">
            <Image src="/images/img-9.png" alt="Finishing" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
