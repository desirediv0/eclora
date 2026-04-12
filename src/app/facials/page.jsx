"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { facials } from "@/data/services";

const Grain = () => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain-f"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain-f)" />
  </svg>
);

export default function FacialsPage() {
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
          --border: #E0D8CC;
          --cf: 'Cormorant Garamond', Georgia, serif;
          --jost: 'Jost', system-ui, sans-serif;
        }
        .facial-card {
          background: #fff;
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .facial-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: var(--gold);
          transition: height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .facial-card:hover { border-color: var(--gold); box-shadow: 0 12px 40px rgba(0,0,0,0.04); }
        .facial-card:hover::after { height: 2px; }
        .facial-card:hover .facial-btn { background: var(--gold); color: var(--ink); border-color: var(--gold); }
        .facial-btn {
          font-family: var(--jost);
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.85rem 1.8rem;
          border: 1px solid var(--border);
          color: var(--muted);
          background: transparent;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
        }
        .facial-cta:hover { background: var(--olive); color: #fff; }
        .breadcrumb-sep { color: rgba(255,255,255,0.2); margin: 0 0.5rem; }
      `}} />

      <div style={{ fontFamily: "var(--jost)" }} className="pt-16 md:pt-20">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--olive-dark)", position: "relative", overflow: "hidden" }} className="py-24 md:py-32 px-6">
          <Grain />

          {/* Watermark */}
          <div style={{
            position: "absolute", right: "-1vw", bottom: "-8%",
            fontFamily: "var(--cf)", fontSize: "clamp(120px,18vw,260px)",
            color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300,
            pointerEvents: "none", userSelect: "none", zIndex: 0, fontStyle: "italic",
          }}>
            Facials
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
                <span style={{ color: "var(--gold)" }}>Facials</span>
              </span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
              <h1 style={{
                fontFamily: "var(--cf)", fontWeight: 300, lineHeight: 1.05,
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#fff", letterSpacing: "-0.01em",
              }}>
                Signature<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Facial Collection</em>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.45)", marginTop: "1.5rem", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "400px" }}>
                Six handcrafted facial experiences — each designed to reveal a more luminous, rested you.
              </p>
            </motion.div>

            {/* Subtle scrolling hint */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
              style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div style={{ width: "1px", height: "40px", background: "rgba(201,169,122,0.4)" }} />
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        {/* ── PHILOSOPHY STRIP ─────────────────────────────────── */}
        <div style={{ background: "var(--cream)", borderBottom: "1px solid #E0D8CC", padding: "1.5rem 2rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[["6", "Signature Facials"], ["60–90", "Minutes Each"], ["All", "Skin Types"]].map(([n, l], i) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                {i > 0 && <div style={{ width: "1px", height: "28px", background: "#D0C8BC" }} />}
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--cf)", fontSize: "1.5rem", fontWeight: 300, color: "var(--olive)" }}>{n}</span>
                  <span style={{ fontFamily: "var(--jost)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>{l}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FACIALS GRID ─────────────────────────────────────── */}
        <section style={{ background: "var(--parchment)" }} className="px-6 py-20">
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

            {/* Section label */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted)" }}>
                Our Collection
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.5px", background: "#E0D8CC" }}>
              {facials.map((f, i) => (
                <motion.div
                  key={f.id}
                  className="facial-card"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ padding: "2.5rem", display: "flex", flexDirection: "column", minHeight: "340px" }}
                >
                  {/* Card top row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.75rem" }}>
                    <span style={{ fontFamily: "var(--cf)", fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.1em" }}>
                      {String(f.id).padStart(2, "0")}
                    </span>
                    <span style={{
                      fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.15em",
                      textTransform: "uppercase", color: "var(--muted)",
                      display: "flex", alignItems: "center", gap: "0.35rem",
                      border: "1px solid #D0C8BC", padding: "0.3rem 0.7rem",
                    }}>
                      <Clock size={10} /> {f.duration}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: "var(--cf)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: "1rem", flex: 1,
                  }}>
                    {f.name}
                  </h3>

                  {/* Divider */}
                  <div style={{ width: "32px", height: "1px", background: "var(--gold)", marginBottom: "1rem", opacity: 0.6 }} />

                  {/* Description */}
                  <p style={{ fontFamily: "var(--jost)", fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                    {f.description}
                  </p>

                  {/* CTA — appears on hover */}
                  <div>
                    <Link href="/book" className="facial-cta">
                      Book This Facial →
                    </Link>
                  </div>

                  {/* Large watermark number */}
                  <div style={{
                    position: "absolute", right: "1.5rem", bottom: "1rem",
                    fontFamily: "var(--cf)", fontSize: "6rem", fontWeight: 300,
                    color: "var(--gold)", opacity: 0.06, lineHeight: 1,
                    pointerEvents: "none", userSelect: "none",
                  }}>
                    {f.id}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RITUAL STRIP ─────────────────────────────────────── */}
        <section style={{ background: "var(--cream)", borderTop: "1px solid #E0D8CC", borderBottom: "1px solid #E0D8CC" }} className="py-20 px-6">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted)" }}>
                What to Expect
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", border: "1px solid #E0D8CC" }}>
              {[
                { n: "01", t: "Skin Assessment", d: "Your therapist begins with a thorough skin analysis to personalise every step." },
                { n: "02", t: "Deep Cleanse", d: "Medical-grade cleansing to remove impurities and prepare the skin barrier." },
                { n: "03", t: "Active Treatment", d: "Targeted serums, masks, or devices applied to your specific concern." },
                { n: "04", t: "Glow & Go", d: "A nourishing finish and personalised home-care guidance to extend results." },
              ].map((step, i) => (
                <div key={step.n}
                  style={{
                    padding: "2rem",
                    borderRight: i < 3 ? "1px solid #E0D8CC" : "none",
                    position: "relative",
                  }}
                >
                  <div style={{ fontFamily: "var(--cf)", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.1em", marginBottom: "1rem" }}>{step.n}</div>
                  <h4 style={{ fontFamily: "var(--cf)", fontSize: "1.15rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.6rem" }}>{step.t}</h4>
                  <p style={{ fontFamily: "var(--jost)", fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.75 }}>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────── */}
        <section
          style={{ background: "var(--olive)", position: "relative", overflow: "hidden" }}
          className="py-24 px-6 text-center"
        >
          <Grain />
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)", margin: "0 auto 2rem" }} />
            <h2 style={{
              fontFamily: "var(--cf)", fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff",
              lineHeight: 1.2, marginBottom: "1rem",
            }}>
              Your skin deserves<br />
              <em style={{ color: "var(--gold)" }}>a ritual, not a routine.</em>
            </h2>
            <p style={{ fontFamily: "var(--jost)", color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "380px", margin: "0 auto 2.5rem" }}>
              Book your facial today and let our specialists craft an experience tailored to you.
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
              Reserve Your Facial
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}