"use client";

import { useState } from "react";
import Image from "next/image";
import { menuCategories } from "@/lib/data";

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-24 pb-20 px-6 bg-bg-warm min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 pt-8">
          <p className="text-amber-dark text-sm tracking-[0.15em] mb-3">
            Nos plats
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-charcoal mb-4">
            Le menu
          </h1>
          <p className="text-charcoal/60 text-lg max-w-lg mx-auto leading-relaxed">
            Tous nos plats sont préparés avec des ingrédients frais et de
            première qualité, importés directement d&apos;Italie.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 text-sm tracking-wide transition-all duration-300 ${
                activeTab === i
                  ? "bg-charcoal text-cream font-medium shadow-lg"
                  : "border border-charcoal/15 text-charcoal/60 hover:text-charcoal hover:border-charcoal/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Photo du plat vedette */}
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] overflow-hidden sticky top-24">
              <Image
                src={menuCategories[activeTab].image}
                alt={menuCategories[activeTab].name}
                fill
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-[family-name:var(--font-display)] text-2xl text-cream">
                  {menuCategories[activeTab].name}
                </p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="md:col-span-2 bg-white/80 backdrop-blur-sm border border-charcoal/5 shadow-sm">
            {menuCategories[activeTab].items.map((item, i) => (
              <div
                key={item.name}
                className={`flex justify-between items-start py-6 px-8 gap-4 group hover:bg-amber/5 transition-colors duration-300 ${
                  i !== 0 ? "border-t border-charcoal/5" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-charcoal group-hover:text-amber-dark transition-colors duration-300 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-charcoal/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-amber-dark font-medium text-lg shrink-0 pt-0.5">
                  {item.price}$
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
