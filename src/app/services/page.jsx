"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services, categories } from "@/data/services";

/* ── Grain texture ─────────────────────────────────────────────── */
const Grain = () => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain-s"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain-s)" />
  </svg>
);

export default function ServicesPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => active === "All" ? services : services.filter((s) => s.category === active),
    [active]
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --olive: #3E4535;
          --olive-dark: #262C1E;
          --gold: #C9A97A;
          --cream: #F6F1E9;
          --parchment: #FAF7F2;
          --ink: #1C1C1A;
          --muted: #7A7568;
          --cf: 'Cormorant Garamond', Georgia, serif;
          --jost: 'Jost', system-ui, sans-serif;
        }
        .svc-filter-btn {
          font-family: var(--jost);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.55rem 1.4rem;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.5);
          background: transparent;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .svc-filter-btn:hover { color: var(--gold); border-color: var(--gold); }
        .svc-filter-btn.active { background: var(--gold); color: var(--ink); border-color: var(--gold); }
        .svc-card {
          background: #fff;
          border: 1px solid #E0D8CC;
          transition: border-color 0.4s, box-shadow 0.4s;
          position: relative;
        }
        .svc-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: var(--gold);
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .svc-card:hover::before { width: 2px; }
        .svc-card:hover { background: rgba(201,169,122,0.04); }
        .svc-card:hover .svc-enquire { opacity: 1; transform: translateX(0); }
        .svc-enquire {
          font-family: var(--jost);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s, transform 0.3s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .svc-cat-pill {
          font-family: var(--jost);
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(201,169,122,0.35);
          padding: 0.25rem 0.75rem;
          display: inline-block;
        }
        .breadcrumb-sep { color: rgba(255,255,255,0.2); margin: 0 0.5rem; }
      `}} />

      <div style={{ fontFamily: "var(--jost)" }} className="pt-16 md:pt-20">

        {/* ── HERO HEADER ──────────────────────────────────────── */}
        <section
          style={{ background: "var(--olive-dark)", position: "relative", overflow: "hidden" }}
          className="py-24 md:py-32 px-6"
        >
          <Grain />
          {/* Watermark */}
          <div
            style={{
              position: "absolute", right: "-2vw", bottom: "-5%",
              fontFamily: "var(--cf)", fontSize: "clamp(160px,22vw,320px)",
              color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300,
              pointerEvents: "none", userSelect: "none", zIndex: 0,
            }}
          >
            Treatments
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div style={{ marginBottom: "2.5rem" }}>
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                >Home</Link>
                <span className="breadcrumb-sep">/</span>
                <span style={{ color: "var(--gold)" }}>Services</span>
              </span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
              <h1
                style={{
                  fontFamily: "var(--cf)", fontWeight: 300, lineHeight: 1.05,
                  fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                Face &amp; Hair<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Procedures</em>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.45)", marginTop: "1.5rem", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "420px" }}>
                46+ advanced aesthetic treatments — each one tailored to your skin, your goals, your story.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
              style={{ display: "flex", gap: "3rem", marginTop: "3.5rem", flexWrap: "wrap" }}
            >
              {[["46+", "Treatments"], ["10+", "Years"], ["2000+", "Clients"], ["5 ★", "Rated"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--cf)", fontSize: "1.8rem", fontWeight: 300, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--gold)", marginTop: "0.35rem", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── STICKY FILTER BAR ────────────────────────────────── */}
        <div
          style={{
            position: "sticky", top: "64px", zIndex: 30,
            background: "var(--olive)", borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1rem 1.5rem", overflowX: "auto" }}
            className="scroll-hide"
          >
            <div style={{ display: "flex", gap: "0.5rem", minWidth: "max-content", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginRight: "0.75rem", paddingRight: "0.75rem", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                Filter
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`svc-filter-btn ${active === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <style dangerouslySetInnerHTML={{ __html: `.scroll-hide::-webkit-scrollbar{display:none}.scroll-hide{-ms-overflow-style:none;scrollbar-width:none}` }} />
        </div>

        {/* ── SERVICES LIST ────────────────────────────────────── */}
        <section style={{ background: "var(--parchment)" }} className="px-6 py-16">
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            {/* Count */}
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1rem", paddingBottom: "1.25rem", borderBottom: "1px solid #E0D8CC" }}>
              <span style={{ fontFamily: "var(--cf)", fontSize: "1.1rem", fontWeight: 300, color: "var(--muted)" }}>
                Showing <em style={{ color: "var(--ink)" }}>{filtered.length}</em> treatment{filtered.length !== 1 ? "s" : ""}
                {active !== "All" && <span style={{ color: "var(--gold)" }}> · {active}</span>}
              </span>
              {active !== "All" && (
                <button
                  onClick={() => setActive("All")}
                  style={{ fontFamily: "var(--jost)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", background: "none", border: "none", cursor: "pointer", paddingBottom: "1px", borderBottom: "1px solid var(--muted)", transition: "color 0.3s, border-color 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderColor = "var(--gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--muted)"; }}
                >
                  Clear filter
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {filtered.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "6rem 0" }}>
                    <p style={{ fontFamily: "var(--cf)", fontSize: "1.5rem", fontWeight: 300, color: "var(--muted)", fontStyle: "italic" }}>No treatments found in this category.</p>
                  </div>
                ) : (
                  /* Two-column grid of bordered rows */
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))", gap: "0 4rem" }}>
                    {filtered.map((s, i) => (
                      <motion.div
                        key={s.id}
                        className="svc-card"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: (i % 6) * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ paddingLeft: "1.5rem" }}
                      >
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                          <div style={{ flex: 1 }}>
                            {/* Number + category row */}
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                              <span style={{ fontFamily: "var(--cf)", fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.08em" }}>
                                {String(s.id).padStart(2, "0")}
                              </span>
                              <span className="svc-cat-pill">{s.category}</span>
                            </div>
                            <h3
                              style={{
                                fontFamily: "var(--cf)", fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                                fontWeight: 400, color: "var(--ink)", marginBottom: "0.6rem", lineHeight: 1.2,
                              }}
                            >
                              {s.name}
                            </h3>
                            <p style={{ fontFamily: "var(--jost)", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: "380px" }}>
                              {s.description}
                            </p>
                            <Link href="/contact" className="svc-enquire" style={{ marginTop: "1rem" }}>
                              Enquire Now <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────── */}
        <section
          style={{ background: "var(--olive)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}
          className="py-24 px-6 text-center"
        >
          <Grain />
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)", margin: "0 auto 2rem" }} />
            <h2
              style={{
                fontFamily: "var(--cf)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#fff", marginBottom: "1rem", lineHeight: 1.2,
              }}
            >
              Not sure which treatment is right for you?
            </h2>
            <p style={{ fontFamily: "var(--jost)", color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "420px", margin: "0 auto 2.5rem" }}>
              Our dermatologists will assess your skin and build a plan that is truly yours.
            </p>
            <Link
              href="/book"
              style={{
                fontFamily: "var(--jost)", fontSize: "0.72rem", letterSpacing: "0.18em",
                textTransform: "uppercase", padding: "1rem 2.5rem",
                background: "var(--gold)", color: "var(--ink)", fontWeight: 600,
                display: "inline-block", textDecoration: "none", transition: "opacity 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}