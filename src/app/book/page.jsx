"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { STYLES, Field, ServiceOptions, SuccessPanel } from "@/shared/EcloraForm";

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
          }}>Reserve</div>

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                >Home</Link>
                <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 0.5rem" }}>/</span>
                <span style={{ color: "var(--gold)" }}>Book</span>
              </span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
              <h1 style={{ fontFamily: "var(--cf)", fontWeight: 300, fontSize: "clamp(2.8rem,7vw,5rem)", color: "#fff", lineHeight: 1.05 }}>
                Reserve Your<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Appointment</em>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1.5rem", fontSize: "0.92rem", lineHeight: 1.85, maxWidth: "400px" }}>
                Secure your slot for personalised skin and hair care at Éclora. We'll confirm within a few hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────────── */}
        <section style={{ background: "var(--parchment)" }} className="px-6 py-20">
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}
            className="grid-cols-1 lg:grid-cols-[1fr_2fr]"
          >

            {/* ── LEFT — Clinic info ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "var(--cf)", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 300, color: "var(--olive)", marginBottom: "0.75rem" }}>
                What to expect
              </h2>
              <p style={{ fontFamily: "var(--jost)", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "3rem" }}>
                Our certified dermatologists begin with a thorough skin assessment before crafting a treatment plan built around your unique goals.
              </p>

              {/* Info block */}
              <div style={{ border: "1px solid var(--border)", background: "#fff" }}>
                {clinicInfo.map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="ef-info-row" style={{ padding: "1.5rem" }}>
                    <div className="ef-info-icon">
                      <Icon size={14} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>{label}</div>
                      {lines.map(l => (
                        <div key={l} style={{ fontFamily: "var(--jost)", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7 }}>{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp quick book */}
              <a
                href="https://wa.me/919876543210"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginTop: "1.5rem", padding: "1rem 1.25rem",
                  border: "1px solid rgba(37,211,102,0.3)",
                  background: "rgba(37,211,102,0.04)",
                  fontFamily: "var(--jost)", fontSize: "0.72rem",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "#1a9e47", textDecoration: "none",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#25D366"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(37,211,102,0.3)"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 2C6.48 2 2 6.48 2 11.99c0 1.88.52 3.64 1.42 5.15L2 22l4.99-1.37C8.44 21.49 10.18 22 11.99 22 17.52 22 22 17.52 22 11.99S17.52 2 11.99 2z" fillOpacity=".3"/></svg>
                Quick Book on WhatsApp
              </a>
            </motion.div>

            {/* ── RIGHT — Form ────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: "#fff", border: "1px solid var(--border)" }}
            >
              {submitted ? (
                <SuccessPanel
                  title="Appointment Requested"
                  message="Thank you for choosing Éclora. Our team will call you within a few hours to confirm your slot."
                  onReset={() => setSubmitted(false)}
                  resetLabel="Book Another Slot"
                />
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", opacity: loading ? 0.6 : 1, transition: "opacity 0.3s" }}>
                  {/* Form header */}
                  <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "32px", height: "1px", background: "var(--gold)", marginBottom: "1rem" }} />
                    <h2 style={{ fontFamily: "var(--cf)", fontSize: "1.8rem", fontWeight: 300, color: "var(--ink)" }}>
                      Your details
                    </h2>
                    <p style={{ fontFamily: "var(--jost)", fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.35rem" }}>
                      All fields marked * are required
                    </p>
                  </div>

                  <div className="ef-row ef-row-2">
                    <Field label="First Name *">
                      <input type="text" required disabled={loading} className="ef-input" placeholder="Priya" />
                    </Field>
                    <Field label="Last Name *">
                      <input type="text" required disabled={loading} className="ef-input" placeholder="Sharma" />
                    </Field>
                  </div>

                  <div className="ef-row ef-row-2">
                    <Field label="Phone Number *">
                      <input type="tel" required disabled={loading} className="ef-input" placeholder="+91 98765 43210" />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" disabled={loading} className="ef-input" placeholder="optional" />
                    </Field>
                  </div>

                  <Field label="Treatment *">
                    <div className="ef-select-wrap">
                      <select required disabled={loading} className="ef-select">
                        <ServiceOptions />
                      </select>
                    </div>
                  </Field>

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

                  <Field label="Notes (optional)">
                    <textarea rows={3} disabled={loading} className="ef-textarea ef-input" placeholder="Any specific concerns..." />
                  </Field>

                  <button type="submit" disabled={loading} className="ef-btn" style={{ marginTop: "0.5rem" }}>
                    {loading ? "Requesting Slot..." : "Request Appointment →"}
                  </button>

                  <p style={{ fontFamily: "var(--jost)", fontSize: "0.7rem", color: "var(--muted)", textAlign: "center", lineHeight: 1.7 }}>
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