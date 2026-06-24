import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import SectionLine from "@/components/SectionLine";
import { pillars, audiences, ctas } from "@/lib/content";

export const metadata = {
  title: "Vocalosteo® — La méthode",
  description:
    "Vocalosteo® : la première approche ostéopathique globale de la voix. Diagnostic corporel, traitement ostéopathique et intégration artistique pour libérer durablement votre voix.",
  alternates: { canonical: "/vocalosteo" },
};

export default function Vocalosteo() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">La méthode</span>
            <h1>Vocalosteo® — la première approche <em>ostéopathique globale</em> de la voix.</h1>
            <p className="lead">
              Une méthode déposée, à la croisée de la science du corps et de l'art vocal.
              Elle ne corrige pas un symptôme : elle libère un système.
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <CTA href={ctas.rdv.href}>Réserver une consultation</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap story">
          <Reveal>
            <span className="eyebrow">L'origine de la méthode</span>
            <h2 className="title">Née d'une <em>double expérience.</em></h2>
            <p style={{ color: "var(--platinum)", marginTop: 20 }}>
              Praticien d'un côté, artiste de l'autre, j'ai vu les mêmes blocages réapparaître
              sous deux angles : la tension qui éteint une voix en cabinet est la même qui bride
              un chanteur sur scène. Vocalosteo® formalise ce que personne n'avait relié — la
              voix comme prolongement du corps tout entier.
            </p>
            <p style={{ color: "var(--platinum)", marginTop: 18 }}>
              Posture, diaphragme, mâchoire, larynx, résonateurs : chaque maillon de la chaîne
              vocale est lu, libéré, puis réintégré dans le geste artistique. Le résultat n'est pas
              une voix « réparée », mais une voix rendue à elle-même.
            </p>
          </Reveal>
          <Reveal>
            <Placeholder slot="Fadi en consultation" hint="Mains sur la zone cervicale / mandibulaire — sans visage patient" shape="portrait" />
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Les trois étapes</span>
            <h2 className="title">Analyse → Traitement → <em>Intégration.</em></h2>
          </Reveal>
          <Reveal className="grid-3">
            {pillars.map((p) => (
              <div className="card" key={p.n}>
                <div className="num">{p.n}</div>
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
            <span className="eyebrow">Pour qui ?</span>
            <h2 className="title">Une méthode pour <em>chaque voix.</em></h2>
          </Reveal>
          <Reveal className="grid-3">
            {audiences.map((a) => (
              <div className="aud" key={a.t}>
                <div className="ic">{a.ic}</div>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <h2>Et si votre voix n'avait jamais été<br />vraiment libre ?</h2>
            <CTA href={ctas.rdv.href}>Réserver une consultation Vocalosteo®</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
