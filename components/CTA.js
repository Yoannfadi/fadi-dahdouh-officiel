import Link from "next/link";

// Single gold/ghost button that works for internal and external links.
export default function CTA({ href = "/contact", children, variant = "gold" }) {
  const cls = `btn ${variant === "gold" ? "btn-gold" : "btn-ghost"}`;
  const external = href.startsWith("http");
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
