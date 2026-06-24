import Link from "next/link";

export const metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <section className="page-hero" style={{ textAlign: "center", minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <span className="eyebrow" style={{ display: "block" }}>Erreur 404</span>
        <h1 className="serif-display" style={{ fontSize: "clamp(40px,6vw,80px)", fontStyle: "italic", color: "var(--gold)" }}>
          Cette voix s'est tue.
        </h1>
        <p className="lead" style={{ margin: "20px auto 36px" }}>La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <Link href="/" className="btn btn-gold">Retour à l'accueil</Link>
      </div>
    </section>
  );
}
