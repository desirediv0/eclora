"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const navLinks = [
  { l: "Home",             p: "/" },
  { l: "Services",         p: "/services" },
  { l: "Facials",          p: "/facials" },
  { l: "About",            p: "/about" },
  { l: "Contact",          p: "/contact" },
  { l: "Book Appointment", p: "/book" },
];

const Footer = () => (
  <footer id="footer" className="border-t" style={{ background: "#1C1F17", borderColor: "#2A2E22", fontFamily: "'Jost', system-ui, sans-serif" }}>
    <style dangerouslySetInnerHTML={{ __html: `
      .fl { font-size:0.78rem; color:rgba(255,255,255,0.4); letter-spacing:0.04em; text-decoration:none; display:inline-block; padding:0.2rem 0; transition:color 0.3s; }
      .fl:hover { color:#C9A97A; }
      .flabel { font-size:0.6rem; letter-spacing:0.25em; text-transform:uppercase; color:#C9A97A; display:block; margin-bottom:1.1rem; }
      .fsoc { width:34px; height:34px; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.4); text-decoration:none; transition:border-color 0.3s,color 0.3s; flex-shrink:0; }
      .fsoc:hover { border-color:#C9A97A; color:#C9A97A; }
      .fbook { font-family:'Jost',system-ui,sans-serif; font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase; padding:0.8rem 1.75rem; border:1px solid rgba(201,169,122,0.5); color:#C9A97A; text-decoration:none; display:inline-block; transition:background 0.3s,color 0.3s; white-space:nowrap; }
      .fbook:hover { background:#C9A97A; color:#1C1F17; }
      .fpol { font-size:0.68rem; letter-spacing:0.08em; color:rgba(255,255,255,0.2); text-decoration:none; transition:color 0.3s; }
      .fpol:hover { color:#C9A97A; }
    `}} />

    {/* ── TOP BAND ─────────────────────────────────────────── */}
    <div className="border-b max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Brand name */}
      <div>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 300, color: "#fff", letterSpacing: "0.1em", lineHeight: 1 }}>
          ÉCLORA
        </div>
        <div className="mt-1.5" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem", letterSpacing: "0.2em" }}>
          AESTHETICS &amp; LASER CLINIC · NEW DELHI
        </div>
      </div>

      {/* CTA button */}
      <Link href="/book" className="fbook self-start sm:self-auto">
        Book a Consultation
      </Link>
    </div>

    {/* ── MAIN GRID ────────────────────────────────────────── */}
    {/*  Mobile: 2×2 grid  |  sm: 2 col  |  lg: 4 col  */}
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10 border-b"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >

      {/* About */}
      <div className="col-span-2 sm:col-span-1 lg:col-span-1">
        <span className="flabel">About</span>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", lineHeight: 1.85 }}>
          Where the science of dermatology meets the art of personalised care. Every treatment, thoughtfully tailored.
        </p>
      </div>

      {/* Navigate */}
      <div>
        <span className="flabel">Navigate</span>
        <ul className="flex flex-col gap-0.5 p-0 m-0 list-none">
          {navLinks.map((item) => (
            <li key={item.l}>
              <Link href={item.p} className="fl">{item.l}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <span className="flabel">Contact</span>
        <ul className="flex flex-col gap-3 p-0 m-0 list-none">
          <li className="flex items-center gap-2 min-w-0">
            <Phone size={12} className="shrink-0" style={{ color: "#C9A97A" }} />
            <a href="tel:+919876543210" className="fl truncate" style={{ padding: 0 }}>+91 98765 43210</a>
          </li>
          <li className="flex items-start gap-2 min-w-0">
            <Mail size={12} className="shrink-0 mt-0.5" style={{ color: "#C9A97A" }} />
            <a href="mailto:info@ecloraaesthetics.com" className="fl" style={{ padding: 0, wordBreak: "break-all", fontSize: "0.72rem" }}>
              info@ecloraaesthetics.com
            </a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin size={12} className="shrink-0 mt-0.5" style={{ color: "#C9A97A" }} />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", lineHeight: 1.65 }}>
              123 Aesthetic Lane,<br />New Delhi
            </span>
          </li>
        </ul>
      </div>

      {/* Follow */}
      <div>
        <span className="flabel">Follow Us</span>
        <div className="flex gap-2 mb-5">
          <a href="#" className="fsoc" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" className="fsoc" aria-label="Facebook"><FacebookIcon /></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="WhatsApp">
            <MessageCircle size={16} />
          </a>
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", lineHeight: 1.75 }}>
          Mon – Sat: 10am – 7pm<br />Sunday: By appointment
        </p>
      </div>

    </div>

    {/* ── BOTTOM BAR ───────────────────────────────────────── */}
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
      <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.68rem", letterSpacing: "0.08em" }}>
        © {new Date().getFullYear()} Éclora Aesthetics &amp; Laser Clinic. All rights reserved.
      </p>
      <div className="flex gap-5">
        {["Privacy Policy", "Terms of Use"].map((t) => (
          <Link key={t} href="#" className="fpol">{t}</Link>
        ))}
      </div>
    </div>

  </footer>
);

export default Footer;