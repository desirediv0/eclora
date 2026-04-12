"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => (
  <footer
    id="footer"
    style={{
      background: "#1C1F17",
      borderTop: "1px solid #2A2E22",
      fontFamily: "'Jost', system-ui, sans-serif",
    }}
  >
    <style dangerouslySetInnerHTML={{
      __html: `
      .footer-link {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.4);
        letter-spacing: 0.04em;
        transition: color 0.3s ease;
        display: inline-block;
        padding: 0.25rem 0;
        text-decoration: none;
      }
      .footer-link:hover { color: #C9A97A; }
      .footer-label {
        font-size: 0.62rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #C9A97A;
        margin-bottom: 1.25rem;
        display: block;
      }
      .footer-social {
        width: 36px; height: 36px;
        display: flex; align-items: center; justify-content: center;
        border: 1px solid rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.4);
        transition: border-color 0.3s, color 0.3s;
      }
      .footer-social:hover { border-color: #C9A97A; color: #C9A97A; }
    `}} />

    {/* ── Top band — brand statement ──────────────────────────── */}
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "3.5rem 2rem",
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "0.1em",
            lineHeight: 1,
          }}
        >
          ÉCLORA
        </div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", letterSpacing: "0.2em", marginTop: "0.5rem" }}>
          AESTHETICS &amp; LASER CLINIC · NEW DELHI
        </div>
      </div>

      <Link
        href="/book"
        style={{
          fontFamily: "'Jost', system-ui, sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "0.85rem 2.25rem",
          border: "1px solid rgba(201,169,122,0.5)",
          color: "#C9A97A",
          display: "inline-block",
          transition: "background 0.3s, color 0.3s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A97A"; e.currentTarget.style.color = "#1C1F17"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A97A"; }}
      >
        Book a Consultation
      </Link>
    </div>

    {/* ── Main grid ───────────────────────────────────────────── */}
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "3.5rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "3rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* About */}
      <div>
        <span className="footer-label">About</span>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", lineHeight: 1.85 }}>
          Where the science of dermatology meets the art of personalised care. Every treatment, thoughtfully tailored.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <span className="footer-label">Navigate</span>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
          {[
            { l: "Home", p: "/" },
            { l: "Services", p: "/services" },
            { l: "Facials", p: "/facials" },
            { l: "About", p: "/about" },
            { l: "Contact", p: "/contact" },
            { l: "Book Appointment", p: "/book" },
          ].map((item) => (
            <li key={item.l}>
              <Link href={item.p} className="footer-link">{item.l}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <span className="footer-label">Contact</span>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
            <Phone size={13} style={{ color: "#C9A97A", flexShrink: 0 }} />
            <a href="tel:+919876543210" className="footer-link" style={{ padding: 0 }}>+91 98765 43210</a>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
            <Mail size={13} style={{ color: "#C9A97A", flexShrink: 0 }} />
            <a href="mailto:info@ecloraaesthetics.com" className="footer-link" style={{ padding: 0 }}>info@ecloraaesthetics.com</a>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", lineHeight: 1.6 }}>
            <MapPin size={13} style={{ color: "#C9A97A", flexShrink: 0, marginTop: "3px" }} />
            <span>123 Aesthetic Lane,<br />New Delhi</span>
          </li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <span className="footer-label">Follow Us</span>
        <div style={{ display: "flex", gap: "0.6rem", marginBottom: "2rem" }}>
          <a href="#" className="footer-social" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" className="footer-social" aria-label="Facebook"><FacebookIcon /></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp">
            <MessageCircle size={17} />
          </a>
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", lineHeight: 1.7 }}>
          Mon – Sat: 10am – 7pm<br />Sunday: By appointment
        </p>
      </div>
    </div>

    {/* ── Bottom bar ──────────────────────────────────────────── */}
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "1.5rem 2rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
        © {new Date().getFullYear()} Éclora Aesthetics &amp; Laser Clinic. All rights reserved.
      </p>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {["Privacy Policy", "Terms of Use"].map((t) => (
          <Link key={t} href="#" style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", letterSpacing: "0.08em", textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A97A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.2)"; }}
          >
            {t}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;