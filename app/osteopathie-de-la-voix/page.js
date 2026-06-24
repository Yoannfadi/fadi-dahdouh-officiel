import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import SectionLine from "@/components/SectionLine";
import { ctas, site } from "@/lib/content";

export const metadata = {
  title: "Ostéopathie de la voix",
  description:
    "L'ostéopathie de la voix : comprendre comment le corps conditionne la voix. Indications, déroulé d'une consultation et prise de rendez-vous à Paris, Troyes ou en visio.",
  alternates: { canonical: "/osteopathie-de-la-voix" },
};

const indications = [
  { t: "Dysphonie & voix qui coince", d: "Une voix qui se ferme, se fatigue vite ou perd en projection malgré le travail technique." },
  { t: "Fatigue & surmenage vocal", d: "Enseignants, orateurs, dirigeants, comédiens : la voix s'épuise avant la fin de la journée." },
  { t: "Préparation & récupération scénique", d: "Chanteurs et performers : libérer le corps pour soutenir la voix avant et après la scène." },
  { t: "Tensions cervicales & mandibulaires", d: "Mâchoire serrée, nuque bloquée, respiration haute : le corps étouffe l'expression vocale." },
];

const steps = [
  { n: "01", t: "Anamnèse & écoute", d: "Histoire de la voix, usage, contraintes scéniques ou professionnelles." },
  { n: "02", t: "Examen ostéopathique", d: "Lecture de la posture, du diaphragme, du larynx et de la sphère crânio-mandibulaire." },
  { n: "03", t: "Traitement manuel", d: "Libération douce des tensions qui contraignent le souffle et la résonance." },
  { n: "04", t: "Conseils & intégration", d: "Exercices et repères pour ancrer le bénéfice dans la voix du quotidien." },
];

export default function OsteoVoix() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">La consultation</span>
            <h1>Quand votre voix résiste, c'est souvent votre <em>corps qui parle.</em></h1>
            <p className="lead">
              L'ostéopathie de la voix s'adresse à celles et ceux dont la voix se bloque, se fatigue
              ou se bride — sans qu'aucun travail technique ne suffise à la libérer.
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <CTA href={ctas.rdv.href}>Prendre rendez-vous</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Indications</span>
            <h2 className="title">Pour quels <em>motifs consulter ?</em></h2>
          </Reveal>
          <Reveal className="grid-2">
            {indications.map((i) => (
              <div className="card" key={i.t}>
                <h3>{i.t}</h3>
                <p>{i.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap story">
          <Reveal>
            <span className="eyebrow">Déroulé d'une séance</span>
            <h2 className="title">Une heure pour <em>rendre la voix au corps.</em></h2>
            <div className="themes" style={{ marginTop: 30 }}>
              {steps.map((s) => (
                <div className="theme" key={s.n} style={{ alignItems: "flex-start" }}>
                  <h3 style={{ fontStyle: "normal", fontSize: 19 }}>
                    <span style={{ color: "var(--gold)" }}>{s.n}</span> &nbsp; {s.t}
                  </h3>
                  <span className="meta" style={{ maxWidth: 280, whiteSpace: "normal", textAlign: "right" }}>{s.d}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <Placeholder slot="Cabinet — Paris" hint="Salle de consultation, ambiance feutrée" shape="portrait" />
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Lieux de consultation</span>
            <h2 className="title">Paris · Troyes · <em>Visio.</em></h2>
            <p className="lead">Sur rendez-vous. La première consultation pose le diagnostic corporel complet.</p>
          </Reveal>
          <Reveal className="grid-2">
            <Placeholder slot="Cabinet — Paris" hint="Photo extérieur / intérieur du cabinet parisien" shape="wide" />
            <Placeholder slot="Cabinet — Troyes" hint="Photo extérieur / intérieur du cabinet de Troyes" shape="wide" />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <h2>Votre voix est votre empreinte la plus unique.</h2>
            <CTA href={ctas.rdv.href}>Prendre rendez-vous</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
