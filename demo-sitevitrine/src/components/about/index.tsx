import Link from "next/link";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="pt-24 pb-20">
      {/* Header - dark */}
      <div className="text-center mb-20 pt-8 px-6">
        <p className="text-amber text-sm tracking-[0.15em] mb-3">
          Notre histoire
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-cream mb-4">
          À propos
        </h1>
      </div>

      {/* Story - warm */}
      <section className="bg-bg-warm py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=750&fit=crop"
              alt="Notre pizzaiolo"
              fill
              className="object-cover img-zoom"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-charcoal mb-6 leading-snug">
              La passion de la vraie pizza napolitaine
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Fornello est né d&apos;un rêve simple : offrir à Gatineau une
                pizza authentique, préparée comme à Naples. Notre four à bois,
                importé directement de la région de Campanie, atteint 900°F pour
                cuire chaque pizza en 90 secondes.
              </p>
              <p>
                Notre pâte fermente pendant 72 heures, développant une texture
                aérienne et un goût complexe impossible à reproduire autrement.
                Les tomates San Marzano, la mozzarella di bufala, le basilic
                frais — chaque ingrédient est sélectionné pour sa qualité.
              </p>
              <p>
                Au-delà de la pizza, Fornello est un lieu de rassemblement. Un
                endroit où prendre le temps de bien manger, de découvrir un
                nouveau vin, de passer une soirée sans se presser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - dark */}
      <section className="py-20 px-6 bg-bg-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream">
              Nos valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ingrédients authentiques",
                text: "Nos produits sont importés directement d'Italie. Farine Caputo, tomates San Marzano DOP, huile d'olive extra vierge de Calabre.",
              },
              {
                title: "Savoir-faire artisanal",
                text: "Pas de raccourcis. Notre pâte est pétrie à la main et fermentée lentement. Chaque pizza est façonnée au moment de la commande.",
              },
              {
                title: "Communauté locale",
                text: "Nos légumes viennent de fermes locales quand la saison le permet. Nos vins incluent une sélection de vignobles québécois.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="card-hover bg-bg-card border border-white/5 p-8 hover:border-amber/15"
              >
                <div className="w-10 h-0.5 bg-amber mb-6" />
                <h3 className="font-[family-name:var(--font-display)] text-xl text-cream mb-3">
                  {v.title}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - sage */}
      <section className="py-20 px-6 bg-sage-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-charcoal mb-5">
            Venez nous rencontrer
          </h2>
          <p className="text-charcoal/60 mb-8 max-w-md mx-auto leading-relaxed">
            247 rue Fictive, Gatineau. Ouvert du mardi au dimanche, 11h à 22h.
          </p>
          <Link
            href="/reserver"
            className="btn-primary px-8 py-3.5 bg-charcoal text-cream font-medium tracking-wide hover:bg-bg-dark transition-colors inline-block"
          >
            Réserver une table
          </Link>
        </div>
      </section>
    </div>
  );
}
