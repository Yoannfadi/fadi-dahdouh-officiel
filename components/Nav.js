"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        FADI DAHDOUH
      </Link>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {nav.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
          Prendre rendez-vous
        </Link>
      </div>
      <div className="burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
        <span /><span /><span />
      </div>
    </nav>
  );
}
