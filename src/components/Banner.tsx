import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh] overflow-hidden">
      <Image
        src="/images/img-15.png"
        alt="Finished concrete patio — PBM Construction"
        fill
        className="object-cover object-center"
        quality={95}
        priority={false}
        sizes="100vw"
      />
    </section>
  );
}
