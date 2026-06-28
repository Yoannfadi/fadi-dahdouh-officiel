import Link from "next/link";
import Reveal from "@/components/Reveal";
import { home } from "@/lib/content";

// Homepage — « Le Jardinier ». Vraies photos (séance N&B, recadrées pour exclure le filigrane).
// Voir PHOTO-USAGE.md. Photos finales HD à substituer quand fichiers propres dispo.
export default function Home() {
  const { hero, voix, chemins, transformation, invitation } = home;
  const cheminImg = {
    Soin: "/images/chemins/soin.jpg",
    "Création": "/images/chemins/creation.jpg",
    Transmission: "/images/chemins/transmission.jpg",
  };
  return (
    <>
      {/* ===== BLOC 1 — HERO ===== */}
      <header className="jard-hero">
        <div className="jard-hero-text">
          <h1 className="jard-h1">
            {hero.phrase[0]}
            <br />
            {hero.phrase[1]}
          </h1>
          <p className="jard-name">{hero.name}</p>
        </div>
        <figure className="jard-portrait">
          <img src="/images/hero/hero-007.jpg" alt="Fadi Dahdouh, portrait" />
        </figure>
      </header>

      {/* ===== BLOC 2 — LE SILENCE (aucun texte) ===== */}
      <section className="jard-silence" aria-label="Silence">
        <img src="/images/silence/silence.jpg" alt="" aria-hidden="true" />
      </section>

      {/* ===== BLOC 3 — LA VOIX DU FONDATEUR (texte provisoire) ===== */}
      <section className="jard-voix">
        <Reveal className="jard-voix-text">
          <p className="jard-reflection">
            {voix.reflection[0]}
            <br />
            {voix.reflection[1]}
          </p>
          <p className="jard-signature">{voix.signature}</p>
        </Reveal>
        <figure className="jard-voix-portrait">
          <img src="/images/fondateur/fondateur.jpg" alt="Fadi Dahdouh" />
        </figure>
      </section>

      {/* ===== BLOC 4 — LES TROIS CHEMINS ===== */}
      <div className="jard-chemins">
        {chemins.map((c) => (
          <Reveal key={c.name} className="jard-chemin">
            <figure className="jard-chemin-img">
              <img src={cheminImg[c.name]} alt={c.name} />
            </figure>
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
