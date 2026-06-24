import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLine from "@/components/SectionLine";
import ContactForm from "@/components/ContactForm";
import { site, ctas } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Contacter Fadi Dahdouh : prise de rendez-vous (ostéopathie de la voix), demande de conférence, presse / média ou contact professionnel. Paris, Troyes et visio.",
  alternates: { canonical: "/contact" },
};

const tiles = [
  { h: "Prendre rendez-vous", p: "Consultation Vocalosteo® / ostéopathie de la voix.", href: ctas.rdv.href },
  { h: "Inviter Fadi à intervenir", p: "Conférence, masterclass ou formation.", href: ctas.conf.href },
  { h: "Presse & média", p: "Interview, podcast, dossier de presse.", href: ctas.press.href },
  { h: "Explorer l'écosystème", p: "Art Vox · CMC Studio · Polymnivox.", href: ctas.eco.href },
];

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>Échangeons.</h1>
            <p className="lead">
              Choisissez votre demande ci-dessous, ou écrivez directement via le formulaire.
            </p>
          </Reveal>
          <Reveal className="cta-grid">
            {tiles.map((t) => (
              <Link className="cta-tile" href={t.href} key={t.h}>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
                <span className="go">→</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <SectionLine />

      <section>
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal className="contact-info">
              <p><span className="lab">Consultations</span>{site.locations}</p>
              <p><span className="lab">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><span className="lab">Conférences &amp; presse</span>Sur demande — dossier de presse disponible</p>
              <p><span className="lab">Réseaux</span>{site.handle}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
