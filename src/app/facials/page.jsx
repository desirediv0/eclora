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
      <style dangerouslySetInnerHTML={{ __html: `
        :root{--olive:#3E4535;--olive-dark:#262C1E;--gold:#C9A97A;--cream:#F6F1E9;--parchment:#FAF7F2;--ink:#1C1C1A;--muted:#7A7568;--border:#E0D8CC;--cf:'Cormorant Garamond',Georgia,serif;--jost:'Jost',system-ui,sans-serif;}
        .cf{font-family:var(--cf);}
        .jost{font-family:var(--jost);}

        /* Facial card */
        .fc{background:#fff;border:1px solid var(--border);position:relative;overflow:hidden;transition:border-color 0.4s,box-shadow 0.4s;}
        .fc::after{content:'';position:absolute;bottom:0;left:0;right:0;height:0;background:var(--gold);transition:height 0.4s cubic-bezier(0.22,1,0.36,1);}
        .fc:hover{border-color:var(--gold);box-shadow:0 12px 40px rgba(0,0,0,0.04);}
        .fc:hover::after{height:2px;}
        .fc:hover .fc-btn,.fc:focus-within .fc-btn{background:var(--gold);color:var(--ink);border-color:var(--gold);}
        .fc-btn{font-family:var(--jost);font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;padding:0.75rem 1.5rem;border:1px solid var(--border);color:var(--muted);background:transparent;text-decoration:none;display:inline-block;transition:all 0.3s;}
        /* Always show button on touch */
        @media(hover:none){.fc-btn{background:transparent;color:var(--muted);}}

        /* What to expect grid */
        .ritual-grid{display:grid;grid-template-columns:1fr;border:1px solid var(--border);}
        @media(min-width:640px){.ritual-grid{grid-template-columns:repeat(2,1fr);}}
        @media(min-width:1024px){.ritual-grid{grid-template-columns:repeat(4,1fr);}}
        .ritual-cell{padding:1.5rem;border-bottom:1px solid var(--border);}
        @media(min-width:640px){
          .ritual-cell:nth-child(odd){border-right:1px solid var(--border);}
          .ritual-cell:nth-last-child(-n+2){border-bottom:none;}
        }
        @media(min-width:1024px){
          .ritual-cell{border-right:1px solid var(--border);border-bottom:none;}
          .ritual-cell:last-child{border-right:none;}
        }
        .ritual-cell:last-child{border-bottom:none;}
      `}} />

      <div className="jost pt-16 md:pt-20" style={{ fontFamily: "var(--jost)" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 sm:py-24 md:py-32 px-5 sm:px-8" style={{ background: "var(--olive-dark)" }}>
          <Grain />

          {/* Watermark — desktop only */}
          <div className="cf hidden sm:block absolute right-[-1vw] bottom-[-8%] select-none pointer-events-none z-0"
            style={{ fontSize: "clamp(100px,18vw,260px)", color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300, fontStyle: "italic" }}
          >Facials</div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="jost uppercase tracking-[0.18em] text-[0.62rem] mb-7 sm:mb-10" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Link href="/" className="hover:text-[var(--gold)] transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>Home</Link>
              <span className="mx-2" style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Facials</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="w-10 h-px mb-6 sm:mb-8" style={{ background: "var(--gold)" }} />
              <h1 className="cf text-white" style={{ fontSize: "clamp(2.4rem,9vw,5.5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                Signature<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Facial Collection</em>
              </h1>
              <p className="jost mt-4 sm:mt-5" style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.82rem,2vw,0.95rem)", lineHeight: 1.8, maxWidth: "400px" }}>
                Six handcrafted facial experiences — each designed to reveal a more luminous, rested you.
              </p>
            </motion.div>

            {/* Scroll hint */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
              className="flex items-center gap-3 mt-10 sm:mt-16"
            >
              <div className="w-px h-9 sm:h-10" style={{ background: "rgba(201,169,122,0.4)" }} />
              <span className="jost uppercase tracking-[0.25em]" style={{ fontSize: "0.57rem", color: "rgba(255,255,255,0.3)" }}>Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        {/* ── PHILOSOPHY STRIP ──────────────────────────────────── */}
        <div className="border-b border-[#E0D8CC] px-5 sm:px-8 py-4 sm:py-5" style={{ background: "var(--cream)" }}>
          <div className="max-w-6xl mx-auto flex items-center gap-0 flex-wrap">
            {[["6", "Signature Facials"], ["60–90", "Minutes Each"], ["All", "Skin Types"]].map(([n, l], i) => (
              <div key={l} className="flex items-center">
                {i > 0 && <div className="w-px mx-4 sm:mx-6 hidden sm:block" style={{ height: "24px", background: "#D0C8BC" }} />}
                {i > 0 && <div className="mx-3 sm:hidden" style={{ color: "#D0C8BC", fontSize: "0.8rem" }}>·</div>}
                <div className="flex items-baseline gap-1.5 py-1">
                  <span className="cf" style={{ fontSize: "clamp(1.1rem,3vw,1.5rem)", fontWeight: 300, color: "var(--olive)" }}>{n}</span>
                  <span className="jost uppercase tracking-[0.16em]" style={{ fontSize: "0.55rem", color: "var(--muted)" }}>{l}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FACIALS GRID ──────────────────────────────────────── */}
        <section className="px-5 sm:px-8 py-10 sm:py-16 lg:py-20" style={{ background: "var(--parchment)" }}>
          <div className="max-w-7xl mx-auto">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-8 sm:mb-12">
              <div className="w-10 h-px" style={{ background: "var(--gold)" }} />
              <span className="jost uppercase tracking-[0.25em]" style={{ fontSize: "0.58rem", color: "var(--muted)" }}>Our Collection</span>
            </div>

            {/* 1 col → 2 col sm → 3 col lg, gap-px trick for seamless borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0D8CC]">
              {facials.map((f, i) => (
                <motion.div key={f.id} className="fc flex flex-col p-5 sm:p-8 min-h-[280px] sm:min-h-[320px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.7 }}
                >
                  {/* Top row: number + duration */}
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <span className="cf" style={{ fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.1em" }}>
                      {String(f.id).padStart(2, "0")}
                    </span>
                    <span className="jost flex items-center gap-1 border border-[#D0C8BC] px-2 py-1"
                      style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}
                    >
                      <Clock size={9} /> {f.duration}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="cf flex-1" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: "0.75rem" }}>
                    {f.name}
                  </h3>

                  {/* Gold rule */}
                  <div className="w-8 h-px mb-3 sm:mb-4" style={{ background: "var(--gold)", opacity: 0.6 }} />

                  {/* Description */}
                  <p className="jost text-sm mb-5 sm:mb-7" style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                    {f.description}
                  </p>

                  {/* CTA */}
                  <div>
                    <Link href="/book" className="fc-btn">
                      Book This Facial →
                    </Link>
                  </div>

                  {/* Watermark number */}
                  <div className="cf absolute right-4 bottom-3 select-none pointer-events-none"
                    style={{ fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 300, color: "var(--gold)", opacity: 0.06, lineHeight: 1 }}
                  >{f.id}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ────────────────────────────────────── */}
        <section className="py-12 sm:py-20 px-5 sm:px-8 border-t border-b border-[#E0D8CC]" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-7 sm:mb-10">
              <div className="w-10 h-px" style={{ background: "var(--gold)" }} />
              <span className="jost uppercase tracking-[0.25em]" style={{ fontSize: "0.58rem", color: "var(--muted)" }}>What to Expect</span>
            </div>

            {/* 1 col → 2 col sm → 4 col lg */}
            <div className="ritual-grid">
              {[
                { n: "01", t: "Skin Assessment", d: "Your therapist begins with a thorough skin analysis to personalise every step." },
                { n: "02", t: "Deep Cleanse",    d: "Medical-grade cleansing to remove impurities and prepare the skin barrier." },
                { n: "03", t: "Active Treatment",d: "Targeted serums, masks, or devices applied to your specific concern." },
                { n: "04", t: "Glow & Go",       d: "A nourishing finish and personalised home-care guidance to extend results." },
              ].map((step) => (
                <div key={step.n} className="ritual-cell">
                  <div className="cf mb-3 sm:mb-4 text-[0.68rem] tracking-[0.1em]" style={{ color: "var(--gold)" }}>{step.n}</div>
                  <h4 className="cf mb-2" style={{ fontSize: "clamp(1rem,2vw,1.15rem)", fontWeight: 400, color: "var(--ink)" }}>{step.t}</h4>
                  <p className="jost text-sm" style={{ color: "var(--muted)", lineHeight: 1.75 }}>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8 text-center" style={{ background: "var(--olive)" }}>
          <Grain />
          <div className="relative z-10">
            <div className="w-10 h-px mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <h2 className="cf text-white mx-auto" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300, lineHeight: 1.2, maxWidth: "520px" }}>
              Your skin deserves<br />
              <em style={{ color: "var(--gold)" }}>a ritual, not a routine.</em>
            </h2>
            <p className="jost mt-4 mx-auto" style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(0.8rem,2vw,0.88rem)", lineHeight: 1.8, maxWidth: "360px" }}>
              Book your facial today and let our specialists craft an experience tailored to you.
            </p>
            <Link href="/book"
              className="jost uppercase inline-block mt-8 font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--gold)", color: "var(--ink)", fontSize: "0.7rem", letterSpacing: "0.18em", padding: "0.875rem 2rem" }}
            >
              Reserve Your Facial
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}