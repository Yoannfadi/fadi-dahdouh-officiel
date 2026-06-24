import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import SectionLine from "@/components/SectionLine";
import { facets, badges, ctas } from "@/lib/content";

export const metadata = {
  title: "À propos",
  description:
    "Fadi Dahdouh : ostéopathe D.O., créateur de la méthode Vocalosteo®, artiste (FENICE), producteur et entrepreneur. Le parcours d'une figure transversale de la voix.",
  alternates: { canonical: "/a-propos" },
};

export default function APropos() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap story" style={{ alignItems: "center" }}>
          <Reveal>
            <span className="eyebrow">À propos</span>
            <h1>L'homme derrière <em>la méthode.</em></h1>
            <p className="lead">
              Ostéopathe et artiste, soignant et créateur — Fadi Dahdouh occupe une place que
              personne d'autre ne tient dans le monde francophone de la voix.
            </p>
          </Reveal>
          <Reveal>
            <Placeholder slot="Portrait décontracté" hint="Sourire, lumière naturelle — accessibilité" shape="portrait" />
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal style={{ maxWidth: 760 }}>
            <p className="quote" style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.5, borderLeft: "1px solid var(--gold)", paddingLeft: 30 }}>
              « La voix est la partie la plus intime d'un être humain. Elle porte ce que les mots
              ne peuvent pas toujours dire. »
            </p>
            <p style={{ color: "var(--platinum)", marginTop: 28 }}>
              En tant qu'ostéopathe, j'ai appris à écouter ce que le corps dit à travers la voix.
              En tant qu'artiste, j'ai compris ce qu'elle peut révéler quand elle est libre.
              Depuis plus de 20 ans, j'accompagne des artistes, des professionnels de la voix et
              des êtres humains qui veulent retrouver leur expression. Pas pour devenir quelqu'un
              d'autre — pour devenir pleinement qui ils sont.
            </p>
            <p style={{ color: "var(--platinum)", marginTop: 18 }}>
              Cette double appartenance — le cabinet et la scène, la clinique et le studio — a donné
              naissance à Vocalosteo®, puis à tout un écosystème : Art Vox, CMC Studio, Polymnivox.
              Une même conviction les relie : la voix se soigne, se révèle et s'analyse comme un système vivant.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Six territoires</span>
            <h2 className="title">Une combinaison <em>incopiable.</em></h2>
          </Reveal>
          <Reveal className="facets">
            {facets.map((f) => (
              <div className="facet" key={f.t}>
                <div className="fi">{f.i}</div>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="badges" style={{ justifyContent: "flex-start", marginTop: 48 }}>
            {badges.map((b) => <span key={b}>{b}</span>)}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <h2>Travaillons ensemble.</h2>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <CTA href={ctas.rdv.href}>Prendre rendez-vous</CTA>
              <CTA href={ctas.conf.href} variant="ghost">Inviter Fadi à intervenir</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
