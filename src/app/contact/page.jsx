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
  const [loading, setLoading]     = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ${STYLES}
        /* Extra responsive helpers */
        .cf  { font-family: var(--cf); }
        .jost{ font-family: var(--jost); }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .contact-info-row:last-child { border-bottom: none !important; }
        /* Make ef-row-2 single col on mobile */
        @media(max-width:599px){
          .ef-row-2 { grid-template-columns: 1fr !important; }
          .ef-input,.ef-select,.ef-textarea { font-size: 16px !important; } /* prevent iOS zoom */
        }
        /* email link wraps on small screens */
        .email-link { word-break: break-all; }
      `}} />

      <div className="jost pt-16 md:pt-20" style={{ fontFamily: "var(--jost)" }}>

        {/* ══ HERO ═════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8" style={{ background: "var(--olive-dark)" }}>
          <Grain />
          {/* Watermark — desktop only */}
          <div className="cf hidden sm:block absolute right-[-1vw] bottom-[-8%] select-none pointer-events-none z-0"
            style={{ fontSize: "clamp(100px,14vw,220px)", color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300, fontStyle: "italic" }}
          >Connect</div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="jost uppercase tracking-[0.18em] text-[0.62rem] mb-7 sm:mb-10" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Link href="/" className="hover:text-[var(--gold)] transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>Home</Link>
              <span className="mx-2" style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Contact</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="w-10 h-px mb-6 sm:mb-8" style={{ background: "var(--gold)" }} />
              <h1 className="cf text-white" style={{ fontSize: "clamp(2.6rem,9vw,5rem)", fontWeight: 300, lineHeight: 1.05 }}>
                Get In<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Touch</em>
              </h1>
              <p className="jost mt-4 sm:mt-5" style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(0.82rem,2vw,0.92rem)", lineHeight: 1.85, maxWidth: "400px" }}>
                We'd love to hear from you. Book a consultation, ask a question, or simply say hello.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ MAIN CONTENT ═════════════════════════════════════ */}
        <section className="px-5 sm:px-8 py-10 sm:py-16 lg:py-20" style={{ background: "var(--parchment)" }}>
          {/* Stack on mobile, side-by-side on lg+ */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 sm:gap-12 lg:gap-16 items-start">

            {/* ── LEFT — Contact info ──────────────────────── */}
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <div className="w-10 h-px mb-5 sm:mb-7" style={{ background: "var(--gold)" }} />
              <h2 className="cf mb-6 sm:mb-10" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                Visit us
              </h2>

              {/* Contact cards */}
              <div className="border border-[#E0D8CC] bg-white">
                {contactDetails.map(({ icon: Icon, label, lines, link }) => (
                  <div key={label}
                    className="contact-info-row flex gap-3 sm:gap-4 items-start p-4 sm:p-5 border-b border-[#E0D8CC]"
                  >
                    {/* Icon box */}
                    <div className="shrink-0 flex items-center justify-center border border-[#E0D8CC] mt-0.5"
                      style={{ width: "32px", height: "32px", color: "var(--gold)" }}
                    >
                      <Icon size={13} />
                    </div>
                    <div className="min-w-0">
                      <div className="jost uppercase tracking-[0.2em] mb-1" style={{ fontSize: "0.56rem", color: "var(--gold)" }}>{label}</div>
                      {lines.map(l => (
                        <div key={l} className="jost" style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7 }}>{l}</div>
                      ))}
                      {link && (
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="email-link jost inline-block mt-0.5 hover:text-[var(--gold)] transition-colors"
                          style={{ fontSize: "0.8rem", color: "var(--ink)", borderBottom: "1px solid var(--gold)", paddingBottom: "1px", textDecoration: "none" }}
                        >
                          {link.text}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="mt-5 sm:mt-7">
                <div className="jost uppercase tracking-[0.2em] mb-3" style={{ fontSize: "0.56rem", color: "var(--muted)" }}>Follow us</div>
                <div className="flex gap-2">
                  {[
                    { label: "Instagram", Icon: InstagramIcon, href: "#" },
                    { label: "Facebook",  Icon: FacebookIcon,  href: "#" },
                  ].map(({ label, Icon, href }) => (
                    <a key={label} href={href} aria-label={label}
                      className="flex items-center justify-center border border-[#E0D8CC] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                      style={{ width: "36px", height: "36px", color: "var(--muted)", textDecoration: "none" }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT — Form ─────────────────────────────── */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="border border-[#E0D8CC] bg-white"
            >
              {submitted ? (
                <SuccessPanel
                  title="Message Received"
                  message="Thank you for reaching out to Éclora. Our team will get back to you within 24 hours."
                  onReset={() => setSubmitted(false)}
                  resetLabel="Send Another Message"
                />
              ) : (
                <form onSubmit={handleSubmit}
                  className="flex flex-col gap-4 sm:gap-5 p-5 sm:p-8"
                  style={{ opacity: loading ? 0.6 : 1, transition: "opacity 0.3s" }}
                >
                  {/* Form header */}
                  <div className="pb-4 sm:pb-5 border-b border-[#E0D8CC]">
                    <div className="w-8 h-px mb-3" style={{ background: "var(--gold)" }} />
                    <h2 className="cf" style={{ fontSize: "clamp(1.4rem,3vw,1.8rem)", fontWeight: 300, color: "var(--ink)" }}>
                      Send a message
                    </h2>
                    <p className="jost mt-1" style={{ fontSize: "0.76rem", color: "var(--muted)" }}>
                      We'll call you back within 24 hours
                    </p>
                  </div>

                  <Field label="Full Name *">
                    <input type="text" required disabled={loading} className="ef-input" placeholder="Your full name" autoComplete="name" />
                  </Field>

                  {/* 2 col on sm+, stacked on mobile */}
                  <div className="ef-row ef-row-2">
                    <Field label="Phone Number *">
                      <input type="tel" required disabled={loading} className="ef-input" placeholder="+91 98765 43210" autoComplete="tel" />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" disabled={loading} className="ef-input" placeholder="optional" autoComplete="email" />
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
                    <textarea rows={4} disabled={loading} className="ef-textarea ef-input" placeholder="Tell us about your concerns — skin type, allergies, goals..." />
                  </Field>

                  <button type="submit" disabled={loading} className="ef-btn mt-1">
                    {loading ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </section>

        {/* ══ MAP ══════════════════════════════════════════════ */}
        <div className="w-full relative overflow-hidden border-t border-[#E0D8CC]" style={{ height: "clamp(220px,40vw,420px)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.918925!2d77.2155!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26fb511f5bb%3A0x6b7a5843b0d24e1d!2sSouth+Extension+II%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1712918400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ══ QUICK LINKS ══════════════════════════════════════ */}
        <section className="relative overflow-hidden py-12 sm:py-16 px-5 sm:px-8 border-t" style={{ background: "var(--olive)", borderColor: "rgba(255,255,255,0.06)" }}>
          <Grain />
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            {/* Label */}
            <div className="shrink-0">
              <div className="w-8 h-px mb-2" style={{ background: "var(--gold)" }} />
              <h3 className="cf text-white" style={{ fontSize: "clamp(1.2rem,3vw,1.6rem)", fontWeight: 300 }}>
                Explore Éclora
              </h3>
            </div>

            {/* Links — wrap nicely on mobile */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { l: "All Services",      p: "/services" },
                { l: "Signature Facials", p: "/facials"  },
                { l: "About the Clinic",  p: "/about"    },
              ].map(({ l, p }) => (
                <Link key={p} href={p}
                  className="jost uppercase text-[0.65rem] tracking-[0.14em] px-4 py-2.5 border transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  {l}
                </Link>
              ))}
              <Link href="/book"
                className="jost uppercase text-[0.65rem] tracking-[0.14em] px-4 py-2.5 font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "var(--gold)", color: "var(--ink)", textDecoration: "none" }}
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}