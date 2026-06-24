import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Link href="/" className="brand">
          Fadi <span>Dahdouh</span>
        </Link>
        <div className="fnav">
          {nav.map((i) => (
            <Link key={i.href} href={i.href}>{i.label}</Link>
          ))}
          <Link href="/contact">Contact</Link>
        </div>
        <div className="socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
        <small>
          © {new Date().getFullYear()} {site.name} — Ostéopathe de la voix · Créateur de la méthode Vocalosteo®. Tous droits réservés.
        </small>
      </div>
    </footer>
  );
}
