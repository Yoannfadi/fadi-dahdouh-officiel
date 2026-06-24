import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import SectionLine from "@/components/SectionLine";
import { editorial, ctas } from "@/lib/content";

export const metadata = {
  title: "Médias & Stratégie éditoriale",
  description:
    "Apparitions presse, podcasts et contenus de Fadi Dahdouh, et la ligne éditoriale qui installe la référence française de l'ostéopathie de la voix : livre, guides, newsletter, articles, vidéos, masterclass.",
  alternates: { canonical: "/medias" },
};

export default function Medias() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Médias &amp; Presse</span>
            <h1>La référence française de l'<em>ostéopathie de la voix.</em></h1>
            <p className="lead">
              Apparitions presse, podcasts et interventions. Un dossier de presse premium —
              bio, photo HD, thèmes de conférences — disponible sur demande.
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <CTA href={ctas.press.href}>Télécharger le dossier de presse</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Présence média</span>
            <h2 className="title">Une autorité <em>construite progressivement.</em></h2>
            <div className="media-grid">
              <span>Presse</span><span>Podcast</span><span>Radio</span><span>TV</span><span>Conférences</span>
            </div>
            <p className="pull">
              « Votre voix est votre empreinte la plus unique. <span className="mark">Il est temps de la laisser s'exprimer.</span> »
            </p>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      {/* Editorial strategy — Partie 8 finalisée */}
      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Stratégie éditoriale</span>
            <h2 className="title">La ligne de contenu qui <em>installe la référence.</em></h2>
            <p className="lead">
              Le modèle « docteur influent » : une expertise inattaquable, une niche claire, un nom
              qui devient une marque, et un écosystème de contenus qui se renforcent.
            </p>
          </Reveal>
          <Reveal className="ed-list">
            {editorial.map((e) => (
              <div className="ed-row" key={e.t}>
                <div className="k">{e.k}</div>
                <div className="v">
                  <h3>{e.t}</h3>
                  <p>{e.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <h2>Journaliste, podcasteur ou partenaire ?<br />Parlons-en.</h2>
            <CTA href={ctas.press.href}>Contacter pour la presse</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
