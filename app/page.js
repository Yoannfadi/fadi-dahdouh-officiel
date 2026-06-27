import Link from "next/link";
import Reveal from "@/components/Reveal";
import { home } from "@/lib/content";

// Homepage — « Le Jardinier ». Le code converge vers la maquette Figma V3 (6 blocs).
// Les blocs émergent du même noir ; le vide est une matière. Textes/photos provisoires.
export default function Home() {
  const { hero, voix, chemins, transformation, invitation } = home;
  return (
    <>
      {/* ===== BLOC 1 — HERO (V3) ===== */}
      <header className="jard-hero">
        <div className="jard-hero-text">
          <h1 className="jard-h1">
            {hero.phrase[0]}
            <br />
            {hero.phrase[1]}
          </h1>
          <p className="jard-name">{hero.name}</p>
        </div>
        <div
          className="jard-portrait"
          role="img"
          aria-label="Portrait de Fadi Dahdouh — à venir"
        >
          <span className="jard-portrait-cap">Portrait — à venir (licence)</span>
        </div>
      </header>

      {/* ===== BLOC 2 — LE SILENCE (respiration, aucun texte) ===== */}
      <section className="jard-silence" aria-hidden="true">
        <div className="jard-silence-light" />
      </section>

      {/* ===== BLOC 3 — LA VOIX DU FONDATEUR (texte provisoire) ===== */}
      <section className="jard-voix">
        <Reveal>
          <p className="jard-reflection">
            {voix.reflection[0]}
            <br />
            {voix.reflection[1]}
          </p>
          <p className="jard-signature">{voix.signature}</p>
        </Reveal>
      </section>

      {/* ===== BLOC 4 — LES TROIS CHEMINS ===== */}
      <div className="jard-chemins">
        {chemins.map((c) => (
          <Reveal key={c.name} className="jard-chemin">
            <div className="jard-chemin-light" aria-hidden="true" />
            <div className="jard-chemin-text">
              <span className="jard-chemin-name">{c.name}</span>
              <p className="jard-chemin-phrase">{c.phrase}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ===== BLOC 5 — UNE TRANSFORMATION (récit à venir) ===== */}
      <section className="jard-transformation">
        <Reveal>
          <p className="jard-story">{transformation.text}</p>
        </Reveal>
      </section>

      {/* ===== BLOC 6 — L'INVITATION ===== */}
      <section className="jard-invitation">
        <Reveal>
          <p className="jard-invite-line">{invitation.line}</p>
          <Link href={invitation.href} className="jard-door">
            {invitation.cta}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
