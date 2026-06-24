import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import SectionLine from "@/components/SectionLine";
import { ctas } from "@/lib/content";

export const metadata = {
  title: "L'écosystème",
  description:
    "L'écosystème Fadi Dahdouh : Art Vox (académie artistique), CMC Studio (studio d'enregistrement) et Polymnivox (analyse vocale par IA). Un homme, un univers autour de la voix.",
  alternates: { canonical: "/ecosysteme" },
};

const entities = [
  {
    name: ["Art ", "Vox"],
    tag: "L'académie · la transformation",
    d: "Le programme d'accompagnement artistique qui révèle et structure une carrière de chanteur — de la technique à la scène.",
    slot: "Photo scène / chant",
    hint: "Fadi ou artiste sur scène, lumière de spectacle",
  },
  {
    name: ["CMC ", "Studio"],
    tag: "Le lieu · le son",
    d: "Le studio d'enregistrement haut de gamme — l'expérience sensorielle de la voix captée dans les meilleures conditions.",
    slot: "Photo studio",
    hint: "Casque aux oreilles, console en arrière-plan",
  },
  {
    name: ["", "Polymnivox"],
    tag: "La donnée · l'IA vocale",
    d: "L'analyse vocale par intelligence artificielle — ce que les biomarqueurs de la voix révèlent de la santé et de l'émotion.",
    slot: "Photo IA vocale / Polymnivox",
    hint: "Interface d'analyse, visualisation de la voix, ambiance tech",
  },
];

export default function Ecosysteme() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">L'écosystème Fadi Dahdouh</span>
            <h1>Un homme, <em>un univers.</em></h1>
            <p className="lead">
              Trois structures complémentaires, une seule obsession : la voix comme empreinte
              de l'être — soignée, révélée, analysée.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      {entities.map((e, idx) => (
        <section key={e.name.join("")}>
          <div className="wrap story" style={idx % 2 ? { direction: "rtl" } : undefined}>
            <Reveal style={{ direction: "ltr" }}>
              <span className="eyebrow">{e.tag}</span>
              <h2 className="title">
                {e.name[0]}<em>{e.name[1]}</em>
              </h2>
              <p style={{ color: "var(--platinum)", marginTop: 14 }}>{e.d}</p>
              <div style={{ marginTop: 28 }}>
                <CTA href="#" variant="ghost">Découvrir {e.name.join("")}</CTA>
              </div>
            </Reveal>
            <Reveal style={{ direction: "ltr" }}>
              <Placeholder slot={e.slot} hint={e.hint} shape="wide" />
            </Reveal>
          </div>
          {idx < entities.length - 1 && <SectionLine />}
        </section>
      ))}

      <section className="band">
        <div className="wrap">
          <Reveal>
            <h2>Trois portes d'entrée.<br />Une même voix.</h2>
            <CTA href={ctas.contact.href}>Nous contacter</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
