import Link from "next/link";
import Image from "next/image";
import { popularDishes } from "@/lib/data";
import Gallery from "@/components/gallery";
import { Flame, Wine, Users, Clock } from "lucide-react";

const highlights = [
  {
    icon: Flame,
    title: "Four à bois",
    text: "Cuisson à 900°F pour une croûte parfaite en 90 secondes",
  },
  {
    icon: Wine,
    title: "Bar à vin",
    text: "Sélection de vins italiens et d'importation privée",
  },
  {
    icon: Users,
    title: "Ambiance chaleureuse",
    text: "Cadre intime pour vos soirées entre amis ou en famille",
  },
  {
    icon: Clock,
    title: "Produits frais",
    text: "Pâte fermentée 72h, ingrédients importés d'Italie",
  },
];

export default function HomeContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop"
          alt="Intérieur du restaurant Fornello"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/50 via-bg-dark/70 to-bg-dark" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-16">
          <p className="animate-fade-up text-amber text-sm tracking-[0.25em] mb-6 font-medium uppercase">
            Pizzeria artisanale · Gatineau
          </p>
          <h1 className="animate-fade-up delay-200 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6">
            Le goût de Naples,
            <br />
            <em className="text-amber">ici.</em>
          </h1>
          <p className="animate-fade-up delay-400 text-cream-muted text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            Pâte fermentée 72 heures, mozzarella di bufala, tomates San Marzano.
            Chaque pizza cuite 90 secondes dans notre four à bois à 900°F.
          </p>
          <div className="animate-fade-up delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reserver"
              className="btn-primary px-8 py-3.5 bg-amber text-bg-dark font-medium tracking-wide hover:bg-amber-light"
            >
              Réserver une table
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3.5 border border-cream/20 text-cream font-medium tracking-wide hover:border-cream/50 hover:bg-white/5 transition-all duration-300"
            >
              Voir le menu
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights — Light section */}
      <section className="py-20 px-6 bg-bg-warm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((h) => (
            <div key={h.title} className="text-center group cursor-default">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-amber-dark/30 mb-4 group-hover:bg-amber group-hover:border-amber transition-all duration-300">
                <h.icon
                  size={22}
                  className="text-amber-dark group-hover:text-bg-dark transition-colors duration-300"
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg text-charcoal mb-2">
                {h.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular dishes — Dark section */}
      <section className="py-24 px-6 bg-bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-amber text-sm tracking-[0.15em] mb-3">
              Nos incontournables
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-cream">
              Les plus demandées
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish) => (
              <div
                key={dish.name}
                className="card-hover group bg-bg-card border border-white/5 hover:border-amber/20 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full img-zoom"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-cream group-hover:text-amber transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <span className="text-amber font-medium text-sm shrink-0 ml-2">
                      {dish.price}$
                    </span>
                  </div>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber/30 text-amber text-sm tracking-wide hover:bg-amber hover:text-bg-dark transition-all duration-300"
            >
              Voir le menu complet
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* CTA — Warm section */}
      <section className="py-24 px-6 bg-bg-warm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-charcoal mb-5">
            Une table vous attend
          </h2>
          <p className="text-charcoal/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Réservez en ligne ou appelez-nous directement au (819) 555-0142.
            Ouvert du mardi au dimanche, de 11h à 22h.
          </p>
          <Link
            href="/reserver"
            className="btn-primary px-8 py-3.5 bg-charcoal text-cream font-medium tracking-wide hover:bg-bg-dark transition-colors inline-block"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
