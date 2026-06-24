import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fadi Dahdouh — Ostéopathe de la voix · Créateur de Vocalosteo®",
    template: "%s · Fadi Dahdouh",
  },
  description:
    "Fadi Dahdouh, Ostéopathe D.O. spécialisé voix et créateur de la méthode Vocalosteo®. À la croisée du soin, de la voix, de l'art, de la scène, de l'entrepreneuriat et de l'IA vocale. Consultations, conférences et masterclasses.",
  keywords: [
    "ostéopathe voix",
    "ostéopathie de la voix",
    "Vocalosteo",
    "Fadi Dahdouh",
    "dysphonie",
    "fatigue vocale",
    "coach vocal",
    "conférence voix",
    "biomarqueurs vocaux",
  ],
  authors: [{ name: "Fadi Dahdouh" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: "Fadi Dahdouh",
    title: "Fadi Dahdouh — Ostéopathe de la voix · Créateur de Vocalosteo®",
    description:
      "À la croisée du soin, de la voix, de l'art et de l'entrepreneuriat. La référence française de l'ostéopathie de la voix.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadi Dahdouh — Ostéopathe de la voix",
    description: "Créateur de la méthode Vocalosteo®. Soin · Voix · Art · Scène · IA vocale.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
