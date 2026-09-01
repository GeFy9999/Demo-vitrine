"use client";

import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ReservationContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 pb-20">
      {/* Header - dark */}
      <div className="text-center mb-16 pt-8 px-6">
        <p className="text-amber text-sm tracking-[0.15em] mb-3">Réservation</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-cream mb-4">
          Réserver une table
        </h1>
        <p className="text-cream-muted text-lg max-w-lg mx-auto leading-relaxed">
          Remplissez le formulaire et nous confirmerons votre réservation dans
          les plus brefs délais.
        </p>
      </div>

      {/* Form - warm */}
      <section className="bg-bg-warm py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white border border-sage/20 p-10 text-center animate-scale-in shadow-sm">
                <p className="font-[family-name:var(--font-display)] text-2xl text-charcoal mb-3">
                  Merci!
                </p>
                <p className="text-charcoal/60 leading-relaxed">
                  Votre demande de réservation a été envoyée. Nous vous
                  confirmerons par courriel ou téléphone dans les prochaines
                  heures.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal text-sm mb-2 font-medium">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      placeholder="Jean Tremblay"
                      className="w-full bg-white border border-charcoal/10 px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:border-amber-dark focus:outline-none transition-colors duration-300 text-sm shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal text-sm mb-2 font-medium">
                      Courriel
                    </label>
                    <input
                      type="email"
                      placeholder="jean@exemple.com"
                      className="w-full bg-white border border-charcoal/10 px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:border-amber-dark focus:outline-none transition-colors duration-300 text-sm shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal text-sm mb-2 font-medium">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="(819) 555-0000"
                    className="w-full bg-white border border-charcoal/10 px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:border-amber-dark focus:outline-none transition-colors duration-300 text-sm shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-charcoal text-sm mb-2 font-medium">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-white border border-charcoal/10 px-4 py-3 text-charcoal focus:border-amber-dark focus:outline-none transition-colors duration-300 text-sm shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal text-sm mb-2 font-medium">
                      Heure
                    </label>
                    <select className="w-full bg-white border border-charcoal/10 px-4 py-3 text-charcoal focus:border-amber-dark focus:outline-none transition-colors duration-300 text-sm appearance-none shadow-sm">
                      <option value="">Choisir</option>
                      {[
                        "11:00",
                        "11:30",
                        "12:00",
                        "12:30",
                        "13:00",
                        "17:00",
                        "17:30",
                        "18:00",
                        "18:30",
                        "19:00",
                        "19:30",
                        "20:00",
                        "20:30",
                        "21:00",
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-charcoal text-sm mb-2 font-medium">
                      Personnes
                    </label>
                    <select className="w-full bg-white border border-charcoal/10 px-4 py-3 text-charcoal focus:border-amber-dark focus:outline-none transition-colors duration-300 text-sm appearance-none shadow-sm">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                      <option value="9+">9+ (nous contacter)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal text-sm mb-2 font-medium">
                    Message (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, occasion spéciale, demandes particulières..."
                    className="w-full bg-white border border-charcoal/10 px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:border-amber-dark focus:outline-none transition-colors duration-300 text-sm resize-none shadow-sm"
                  />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="btn-primary w-full sm:w-auto px-8 py-3.5 bg-charcoal text-cream font-medium tracking-wide hover:bg-bg-dark transition-colors"
                >
                  Envoyer la demande
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-charcoal/5 p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-charcoal mb-6">
                Informations pratiques
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin
                    size={18}
                    className="text-amber-dark shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-charcoal text-sm font-medium">Adresse</p>
                    <p className="text-charcoal/50 text-sm">
                      247 rue Fictive, Gatineau, QC J8T 0A1
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone
                    size={18}
                    className="text-amber-dark shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-charcoal text-sm font-medium">
                      Téléphone
                    </p>
                    <p className="text-charcoal/50 text-sm">(819) 555-0142</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock
                    size={18}
                    className="text-amber-dark shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-charcoal text-sm font-medium">
                      Heures d&apos;ouverture
                    </p>
                    <p className="text-charcoal/50 text-sm">
                      Mar–Dim : 11h – 22h
                    </p>
                    <p className="text-charcoal/50 text-sm">Fermé le lundi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sage-light border border-sage/15 p-8">
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Pour les groupes de 9 personnes et plus, veuillez nous contacter
                directement par téléphone. Nous serons heureux de vous
                accommoder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
