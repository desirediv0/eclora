"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { STYLES, Field, ServiceOptions, SuccessPanel } from "@/shared/EcloraForm";

const Grain = () => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain-c"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain-c)" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["123 Aesthetic Lane, South Ex Part 2", "New Delhi, 110049, India"],
    link: null,
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["Mon – Sat: 10 AM – 7 PM"],
    link: { href: "tel:+919876543210", text: "+91 98765 43210" },
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["We respond within 24 hours"],
    link: { href: "mailto:info@ecloraaesthetics.com", text: "info@ecloraaesthetics.com" },
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["Quick queries & appointment booking"],
    link: { href: "https://wa.me/919876543210", text: "Open WhatsApp →", external: true },
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a brief delay for a premium feel
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div style={{ fontFamily: "var(--jost)" }} className="pt-16 md:pt-20">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--olive-dark)", position: "relative", overflow: "hidden" }} className="py-24 px-6">
          <Grain />
          <div style={{
            position: "absolute", right: "-1vw", bottom: "-8%",
            fontFamily: "var(--cf)", fontSize: "clamp(100px,14vw,220px)",
            color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300,
            pointerEvents: "none", userSelect: "none", fontStyle: "italic",
          }}>Connect</div>

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                >Home</Link>
                <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 0.5rem" }}>/</span>
                <span style={{ color: "var(--gold)" }}>Contact</span>
              </span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
              <h1 style={{ fontFamily: "var(--cf)", fontWeight: 300, fontSize: "clamp(2.8rem,7vw,5rem)", color: "#fff", lineHeight: 1.05 }}>
                Get In<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Touch</em>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1.5rem", fontSize: "0.92rem", lineHeight: 1.85, maxWidth: "400px" }}>
                We'd love to hear from you. Book a consultation, ask a question, or simply say hello.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── MAIN SPLIT ───────────────────────────────────────── */}
        <section style={{ background: "var(--parchment)" }} className="px-6 py-20">
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}
            className="grid-cols-1 lg:grid-cols-[1fr_1.6fr]"
          >

            {/* ── LEFT — Contact info ─────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "var(--cf)", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 300, color: "var(--olive)", marginBottom: "3rem" }}>
                Visit us
              </h2>

              {/* Contact detail rows */}
              <div style={{ border: "1px solid var(--border)", background: "#fff" }}>
                {contactDetails.map(({ icon: Icon, label, lines, link }) => (
                  <div key={label} style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
                    className="last:border-0"
                  >
                    <div style={{ width: "36px", height: "36px", flexShrink: 0, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", marginTop: "2px" }}>
                      <Icon size={14} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>{label}</div>
                      {lines.map(l => (
                        <div key={l} style={{ fontFamily: "var(--jost)", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7 }}>{l}</div>
                      ))}
                      {link && (
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          style={{ fontFamily: "var(--jost)", fontSize: "0.82rem", color: "var(--ink)", display: "inline-block", marginTop: "0.25rem", borderBottom: "1px solid var(--gold)", paddingBottom: "1px", textDecoration: "none", transition: "color 0.3s" }}
                          onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--ink)"}
                        >
                          {link.text}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{ marginTop: "2rem" }}>
                <div style={{ fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>Follow us</div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {[
                    { label: "Instagram", Icon: InstagramIcon, href: "#" },
                    { label: "Facebook", Icon: FacebookIcon, href: "#" },
                  ].map(({ label, Icon, href }) => (
                    <a key={label} href={href} aria-label={label}
                      style={{ width: "36px", height: "36px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", textDecoration: "none", transition: "border-color 0.3s, color 0.3s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT — Form ────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: "#fff", border: "1px solid var(--border)" }}
            >
              {submitted ? (
                <SuccessPanel
                  title="Message Received"
                  message="Thank you for reaching out to Éclora. Our team will get back to you within 24 hours."
                  onReset={() => setSubmitted(false)}
                  resetLabel="Send Another Message"
                />
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", opacity: loading ? 0.6 : 1, transition: "opacity 0.3s" }}>
                  <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "32px", height: "1px", background: "var(--gold)", marginBottom: "1rem" }} />
                    <h2 style={{ fontFamily: "var(--cf)", fontSize: "1.8rem", fontWeight: 300, color: "var(--ink)" }}>
                      Send a message
                    </h2>
                    <p style={{ fontFamily: "var(--jost)", fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.35rem" }}>
                      We'll call you back within 24 hours
                    </p>
                  </div>

                  <Field label="Full Name *">
                    <input type="text" required disabled={loading} className="ef-input" placeholder="Your full name" />
                  </Field>

                  <div className="ef-row ef-row-2">
                    <Field label="Phone Number *">
                      <input type="tel" required disabled={loading} className="ef-input" placeholder="+91 98765 43210" />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" disabled={loading} className="ef-input" placeholder="optional" />
                    </Field>
                  </div>

                  <Field label="Service Interested In *">
                    <div className="ef-select-wrap">
                      <select required disabled={loading} className="ef-select">
                        <ServiceOptions />
                      </select>
                    </div>
                  </Field>

                  <div className="ef-row ef-row-2">
                    <Field label="Preferred Date">
                      <input type="date" disabled={loading} className="ef-input" min={new Date().toISOString().split("T")[0]} />
                    </Field>
                    <Field label="Preferred Time">
                      <div className="ef-select-wrap">
                        <select disabled={loading} className="ef-select">
                          <option value="">Any time</option>
                          <option>Morning — 10 AM to 1 PM</option>
                          <option>Afternoon — 1 PM to 4 PM</option>
                          <option>Evening — 4 PM to 7 PM</option>
                        </select>
                      </div>
                    </Field>
                  </div>

                  <Field label="Your Message">
                    <textarea rows={4} disabled={loading} className="ef-textarea ef-input" placeholder="Tell us about your concerns..." />
                  </Field>

                  <button type="submit" disabled={loading} className="ef-btn" style={{ marginTop: "0.5rem" }}>
                    {loading ? "Sending Message..." : "Send Message →"}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </section>

        {/* ── MAP ──────────────────────────────────────────────── */}
        <div style={{ width: "100%", height: "450px", background: "#f0f0f0", position: "relative", overflow: "hidden", borderTop: "1px solid var(--border)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.918925!2d77.2155!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26fb511f5bb%3A0x6b7a5843b0d24e1d!2sSouth+Extension+II%2C+New+Delhi%2C+Delhi!5e0!3m2!1sen!2sin!4v1712918400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ── QUICK LINKS ──────────────────────────────────────── */}
        <section style={{ background: "var(--olive)", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }} className="py-16 px-6">
          <Grain />
          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <div style={{ width: "32px", height: "1px", background: "var(--gold)", marginBottom: "0.75rem" }} />
              <h3 style={{ fontFamily: "var(--cf)", fontSize: "1.6rem", fontWeight: 300, color: "#fff" }}>
                Explore Éclora
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { l: "All Services", p: "/services" },
                { l: "Signature Facials", p: "/facials" },
                { l: "About the Clinic", p: "/about" },
              ].map(({ l, p }) => (
                <Link key={p} href={p}
                  style={{
                    fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.15em",
                    textTransform: "uppercase", padding: "0.7rem 1.5rem",
                    border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)",
                    textDecoration: "none", transition: "all 0.3s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                >
                  {l}
                </Link>
              ))}
              <Link href="/book"
                style={{
                  fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", padding: "0.7rem 1.5rem",
                  background: "var(--gold)", color: "var(--ink)", fontWeight: 600,
                  textDecoration: "none", transition: "opacity 0.3s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}