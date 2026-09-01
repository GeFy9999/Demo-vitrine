import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl text-cream mb-4">
              Fornello
            </p>
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs">
              Pizza napolitaine au four à bois depuis 2019. Pâte fermentée 72
              heures, ingrédients importés d'Italie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-cream text-sm font-medium mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream-muted text-sm hover:text-cream transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-cream text-sm font-medium mb-4">Nous trouver</p>
            <div className="text-cream-muted text-sm leading-relaxed space-y-1">
              <p>247 rue Fictive</p>
              <p>Gatineau, QC J8T 0A1</p>
              <p className="mt-3">(819) 555-0142</p>
              <p>info@fornello.ca</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-muted/60 text-xs">
            © 2026 Fornello — Site démo réalisé par Zachary Bhérer
          </p>
          <div className="flex gap-6">
            <span className="text-cream-muted/60 text-xs">Mar–Dim 11h–22h</span>
            <span className="text-cream-muted/60 text-xs">Fermé le lundi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
