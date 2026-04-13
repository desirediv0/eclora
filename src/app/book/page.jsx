"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { STYLES, Field, ServiceOptions, SuccessPanel } from "@/shared/EcloraForm";
import { FaWhatsapp } from "react-icons/fa";

const Grain = () => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain-b"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain-b)" />
  </svg>
);

const clinicInfo = [
  { icon: Clock, label: "Hours", lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: By appointment only"] },
  { icon: MapPin, label: "Location", lines: ["123 Aesthetic Lane, South Ex Part 2", "New Delhi, 110049"] },
  { icon: Phone, label: "Contact", lines: ["+91 98765 43210", "info@ecloraaesthetics.com"] },
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <style dangerouslySetInnerHTML={{
        __html: `
        ${STYLES}
        .cf  { font-family: var(--cf); }
        .jost{ font-family: var(--jost); }
        /* Stack ef-row-2 on mobile */
        @media(max-width:599px){
          .ef-row-2 { grid-template-columns: 1fr !important; }
          .ef-input, .ef-select, .ef-textarea { font-size: 16px !important; }
        }
        /* Clinic info row */
        .ci-row { display:flex; gap:1rem; align-items:flex-start; padding:1.25rem; border-bottom:1px solid var(--border); }
        .ci-row:last-child { border-bottom: none; }
        .ci-icon { width:32px; height:32px; flex-shrink:0; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--gold); margin-top:2px; }
      `}} />

      <div className="jost pt-16 md:pt-20" style={{ fontFamily: "var(--jost)" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8" style={{ background: "var(--olive-dark)" }}>
          <Grain />
          {/* Watermark — desktop only */}
          <div className="cf hidden sm:block absolute right-[-1vw] bottom-[-8%] select-none pointer-events-none z-0"
            style={{ fontSize: "clamp(100px,14vw,220px)", color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300, fontStyle: "italic" }}
          >Reserve</div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="jost uppercase tracking-[0.18em] text-[0.62rem] mb-7 sm:mb-10" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Link href="/" className="hover:text-[var(--gold)] transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>Home</Link>
              <span className="mx-2" style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Book</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="w-10 h-px mb-6 sm:mb-8" style={{ background: "var(--gold)" }} />
              <h1 className="cf text-white" style={{ fontSize: "clamp(2.4rem,9vw,5rem)", fontWeight: 300, lineHeight: 1.05 }}>
                Reserve Your<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Appointment</em>
              </h1>
              <p className="jost mt-4 sm:mt-5" style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(0.82rem,2vw,0.92rem)", lineHeight: 1.85, maxWidth: "400px" }}>
                Secure your slot for personalised skin and hair care at Éclora. We'll confirm within a few hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 py-10 sm:py-16 lg:py-20" style={{ background: "var(--parchment)" }}>
          {/* Stack on mobile, side-by-side on lg+ */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 sm:gap-10 lg:gap-16 items-start">

            {/* ── LEFT — Clinic info ──────────────────────────── */}
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <div className="w-10 h-px mb-5 sm:mb-7" style={{ background: "var(--gold)" }} />
              <h2 className="cf mb-3" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                What to expect
              </h2>
              <p className="jost mb-7 sm:mb-10 text-sm" style={{ color: "var(--muted)", lineHeight: 1.85 }}>
                Our certified dermatologists begin with a thorough skin assessment before crafting a treatment plan built around your unique goals.
              </p>

              {/* Clinic info cards */}
              <div className="border border-[#E0D8CC] bg-white">
                {clinicInfo.map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="ci-row">
                    <div className="ci-icon shrink-0"><Icon size={13} /></div>
                    <div className="min-w-0">
                      <div className="jost uppercase tracking-[0.2em] mb-1" style={{ fontSize: "0.56rem", color: "var(--gold)" }}>{label}</div>
                      {lines.map(l => (
                        <div key={l} className="jost" style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7 }}>{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 mt-4 p-4 border hover:border-[#25D366] transition-colors"
                style={{ border: "1px solid rgba(37,211,102,0.3)", background: "rgba(37,211,102,0.04)", textDecoration: "none" }}
              >
                <FaWhatsapp size={20} style={{ color: "#25D366", flexShrink: 0 }} />
                <span className="jost uppercase tracking-[0.15em]" style={{ fontSize: "0.65rem", color: "#1a9e47" }}>
                  Quick Book on WhatsApp
                </span>
              </a>
            </motion.div>

            {/* ── RIGHT — Form ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="border border-[#E0D8CC] bg-white"
            >
              {submitted ? (
                <SuccessPanel
                  title="Appointment Requested"
                  message="Thank you for choosing Éclora. Our team will call you within a few hours to confirm your slot."
                  onReset={() => setSubmitted(false)}
                  resetLabel="Book Another Slot"
                />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 sm:gap-5 p-5 sm:p-8"
                  style={{ opacity: loading ? 0.6 : 1, transition: "opacity 0.3s" }}
                >
                  {/* Form header */}
                  <div className="pb-4 sm:pb-5 border-b border-[#E0D8CC]">
                    <div className="w-8 h-px mb-3" style={{ background: "var(--gold)" }} />
                    <h2 className="cf" style={{ fontSize: "clamp(1.4rem,3vw,1.8rem)", fontWeight: 300, color: "var(--ink)" }}>
                      Your details
                    </h2>
                    <p className="jost mt-1" style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                      All fields marked * are required
                    </p>
                  </div>

                  {/* First + Last name — stacked on mobile */}
                  <div className="ef-row ef-row-2">
                    <Field label="First Name *">
                      <input type="text" required disabled={loading} className="ef-input" placeholder="Priya" autoComplete="given-name" />
                    </Field>
                    <Field label="Last Name *">
                      <input type="text" required disabled={loading} className="ef-input" placeholder="Sharma" autoComplete="family-name" />
                    </Field>
                  </div>

                  {/* Phone + Email */}
                  <div className="ef-row ef-row-2">
                    <Field label="Phone Number *">
                      <input type="tel" required disabled={loading} className="ef-input" placeholder="+91 98765 43210" autoComplete="tel" />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" disabled={loading} className="ef-input" placeholder="optional" autoComplete="email" />
                    </Field>
                  </div>

                  {/* Treatment */}
                  <Field label="Treatment *">
                    <div className="ef-select-wrap">
                      <select required disabled={loading} className="ef-select">
                        <ServiceOptions />
                      </select>
                    </div>
                  </Field>

                  {/* Date + Time */}
                  <div className="ef-row ef-row-2">
                    <Field label="Preferred Date *">
                      <input type="date" required disabled={loading} className="ef-input" min={new Date().toISOString().split("T")[0]} />
                    </Field>
                    <Field label="Preferred Time">
                      <div className="ef-select-wrap">
                        <select disabled={loading} className="ef-select">
                          <option value="">Any slot</option>
                          <option>Morning — 10 AM to 1 PM</option>
                          <option>Afternoon — 1 PM to 4 PM</option>
                          <option>Evening — 4 PM to 7 PM</option>
                        </select>
                      </div>
                    </Field>
                  </div>

                  {/* Notes */}
                  <Field label="Notes (optional)">
                    <textarea rows={3} disabled={loading} className="ef-textarea ef-input" placeholder="Any specific concerns, skin type, allergies..." />
                  </Field>

                  {/* Submit */}
                  <button type="submit" disabled={loading} className="ef-btn mt-1">
                    {loading ? "Requesting Slot…" : "Request Appointment →"}
                  </button>

                  <p className="jost text-center" style={{ fontSize: "0.68rem", color: "var(--muted)", lineHeight: 1.7 }}>
                    We'll call to confirm within a few hours. No payment required.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </section>

      </div>
    </>
  );
}