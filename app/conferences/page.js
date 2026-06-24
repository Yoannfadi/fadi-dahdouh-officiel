import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import SectionLine from "@/components/SectionLine";
import { conferences, ctas } from "@/lib/content";

export const metadata = {
  title: "Conférences & Masterclasses",
  description:
    "Conférences et masterclasses de Fadi Dahdouh sur la voix, le corps et la performance : leadership vocal, ostéopathie de la voix, biomarqueurs vocaux, team building musical.",
  alternates: { canonical: "/conferences" },
};

const formats = ["45 min — Keynote", "2 h — Workshop", "Journée — Formation Qualiopi"];

const publics = [
  { t: "Entreprises & dirigeants", d: "La voix comme outil de leadership, de présence et de cohésion d'équipe." },
  { t: "Institutions & écoles", d: "Conservatoires, écoles de chant, facultés : la science de la voix transmise avec rigueur." },
  { t: "Événements & festivals", d: "Une parole singulière à la croisée du soin, de l'art et de la scène." },
];

export default function Conferences() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Conférences &amp; Masterclasses</span>
            <h1>Faire entendre la <em>science de la voix.</em></h1>
            <p className="lead">
              Transformer une pratique clinique et artistique en pensée transmissible —
              pour les entreprises, les institutions et les écoles.
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <CTA href={ctas.conf.href}>Inviter Fadi à intervenir</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Thèmes</span>
            <h2 className="title">Six conférences, <em>une signature.</em></h2>
          </Reveal>
          <Reveal className="themes">
            {conferences.map((c) => (
              <div className="theme" key={c.t}>
                <h3>{c.t}</h3>
                <span className="meta">{c.m}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="chips">
            {formats.map((f) => <span key={f}>{f}</span>)}
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Pour quels publics</span>
            <h2 className="title">Une parole qui <em>rassemble.</em></h2>
          </Reveal>
          <Reveal className="grid-3">
            {publics.map((p) => (
              <div className="card" key={p.t}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <Placeholder slot="Fadi en conférence" hint="Au micro, scène, lumière dramatique" shape="wide" />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <h2>Un intervenant qui relie<br />le soin, la voix et la scène.</h2>
            <CTA href={ctas.conf.href}>Demander une intervention</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
