import Link from "next/link";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import SectionLine from "@/components/SectionLine";
import { facets, pillars, proof, badges, audiences, ecosystem, conferences, ctas } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Ostéopathe de la voix · Créateur de Vocalosteo®</span>
          <h1>
            L'ostéopathe qui écoute
            <br />
            ce que votre voix <em>dit vraiment.</em>
          </h1>
          <p className="sub">
            Ostéopathe D.O. spécialisé voix. Créateur de la méthode Vocalosteo®.
            Fondateur d'Art Vox &amp; CMC Studio.
          </p>
          <div className="cta-row">
            <CTA href={ctas.rdv.href}>{ctas.rdv.label}</CTA>
            <CTA href={ctas.method.href} variant="ghost">{ctas.method.label}</CTA>
          </div>
        </div>
        <Placeholder slot="Portrait officiel — Fadi Dahdouh" hint="Hero · lumière Rembrandt, fond sombre" />
      </header>

      <SectionLine />

      {/* ===== TRANSVERSAL POSITIONING ===== */}
      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Une figure transversale</span>
            <h2 className="title">
              Fadi Dahdouh n'est pas seulement ostéopathe.
              <br />
              Il est une <em>référence transversale.</em>
            </h2>
            <p className="lead">
              Six territoires, une seule obsession : la voix comme empreinte de l'être.
            </p>
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
        </div>
      </section>

      <SectionLine />

      {/* ===== ORIGIN STORY ===== */}
      <section>
        <div className="wrap story">
          <Reveal>
            <span className="eyebrow">Qui est Fadi ?</span>
            <h2 className="title">
              Voix. Corps.
              <br />
              <em>Artiste.</em>
            </h2>
            <p className="lead">
              Depuis plus de 20 ans, j'accompagne des artistes, des professionnels de la voix
              et des êtres humains qui veulent retrouver leur expression. Pas pour devenir
              quelqu'un d'autre — pour devenir pleinement qui ils sont.
            </p>
            <Link href="/a-propos" className="arrow-link">Lire la biographie complète <span>→</span></Link>
          </Reveal>
          <Reveal>
            <p className="quote">
              « Tout a commencé par une intuition : la voix n'est pas seulement dans la gorge.
              Elle traverse tout le corps. Elle porte l'histoire de celui qui parle. »
            </p>
            <p>
              En explorant la jonction entre ostéopathie et art vocal, j'ai développé une
              approche que personne n'avait encore formalisée :{" "}
              <strong style={{ color: "var(--white)", fontWeight: 500 }}>Vocalosteo®</strong>.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      {/* ===== METHOD ===== */}
      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">La méthode Vocalosteo®</span>
            <h2 className="title">
              Une méthode. Un seul objectif :
              <br />
              <em>libérer votre voix.</em>
            </h2>
            <p className="lead">
              La première approche ostéopathique globale de la voix — à la croisée de la science
              du corps et de l'art vocal.
            </p>
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
          <Reveal style={{ marginTop: 48 }}>
            <CTA href={ctas.method.href} variant="ghost">Découvrir Vocalosteo®</CTA>
          </Reveal>
        </div>
      </section>

      <SectionLine />

      {/* ===== PROOF ===== */}
      <section>
        <div className="wrap proof">
          <Reveal>
            <span className="eyebrow">Preuves d'expertise</span>
            <h2 className="title" style={{ margin: "0 auto" }}>
              Une expertise <em>incopiable.</em>
            </h2>
          </Reveal>
          <Reveal className="counters">
            {proof.map((c) => (
              <div className="counter" key={c.l}>
                <div className="n">{c.n}{c.small && <small>{c.small}</small>}</div>
                <div className="l">{c.l}</div>
              </div>
            ))}
          </Reveal>
          <Reveal className="badges">
            {badges.map((b) => <span key={b}>{b}</span>)}
          </Reveal>
        </div>
      </section>

      <SectionLine />

      {/* ===== AUDIENCES ===== */}
      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Pour qui ?</span>
            <h2 className="title">
              Trois mondes,
              <br />
              une même <em>quête d'expression.</em>
            </h2>
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

      <SectionLine />

      {/* ===== ECOSYSTEM ===== */}
      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">L'écosystème Fadi Dahdouh</span>
            <h2 className="title">Un homme, <em>un univers.</em></h2>
            <p className="lead">Trois entités, une même obsession : la voix, le corps et l'artiste.</p>
          </Reveal>
          <Reveal className="grid-3">
            {ecosystem.map((e) => (
              <div className="eco-card" key={e.name.join("")}>
                <div className="name">{e.name[0]}<b>{e.name[1]}</b></div>
                <p>{e.d}</p>
                <Link href="/ecosysteme" className="go">Découvrir →</Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <SectionLine />

      {/* ===== CONFERENCES PREVIEW ===== */}
      <section>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Conférences &amp; Masterclasses</span>
            <h2 className="title">Faire entendre la <em>science de la voix.</em></h2>
          </Reveal>
          <Reveal className="themes">
            {conferences.slice(0, 4).map((c) => (
              <div className="theme" key={c.t}>
                <h3>{c.t}</h3>
                <span className="meta">{c.m}</span>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: 40 }}>
            <CTA href={ctas.conf.href} variant="ghost">{ctas.conf.label}</CTA>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="band">
        <div className="wrap">
          <Reveal>
            <h2>Votre voix mérite d'être entendue.<br />Pleinement.</h2>
            <CTA href={ctas.rdv.href}>{ctas.rdv.label}</CTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
