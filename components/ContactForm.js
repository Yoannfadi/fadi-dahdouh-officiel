"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const SUBJECTS = {
  consultation: "Consultation Vocalosteo® / Ostéopathie de la voix",
  conference: "Conférence / Masterclass",
  presse: "Presse / Partenariat média",
  pro: "Contact professionnel",
  autre: "Autre",
};

export default function ContactForm() {
  const [type, setType] = useState(SUBJECTS.consultation);
  const [sent, setSent] = useState(false);

  // Preselect request type from ?sujet= without needing Suspense.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("sujet");
    if (s && SUBJECTS[s]) setType(SUBJECTS[s]);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = f.name.value.trim();
    const email = f.email.value.trim();
    const msg = f.message.value.trim();
    const subject = encodeURIComponent(`${type} — ${name}`);
    const body = encodeURIComponent(`${msg}\n\n—\n${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Nom complet</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="type">Votre demande</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          {Object.values(SUBJECTS).map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} />
      </div>
      <button type="submit" className="btn btn-gold" style={{ border: "none" }}>
        Envoyer
      </button>
      <p className="form-note">{sent ? "Votre messagerie s'ouvre… Merci !" : ""}</p>
    </form>
  );
}
