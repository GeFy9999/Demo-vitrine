import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-sage-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sage text-sm tracking-[0.15em] mb-3 font-medium">
            Notre univers
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-charcoal">
            L&apos;expérience Fornello
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.alt}
              className={`overflow-hidden group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${i === 0 ? "aspect-square" : "aspect-[4/3]"} overflow-hidden`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end justify-start p-4">
                  <span className="text-cream text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
