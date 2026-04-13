"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { servicesWithSvg, categories } from "@/data/services";

const Grain = () => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain-s"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain-s)" />
  </svg>
);

export default function ServicesPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => active === "All" ? servicesWithSvg : servicesWithSvg.filter((s) => s.category === active),
    [active]
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        :root{--olive:#3E4535;--olive-dark:#262C1E;--gold:#C9A97A;--cream:#F6F1E9;--parchment:#FAF7F2;--ink:#1C1C1A;--muted:#7A7568;--cf:'Cormorant Garamond',Georgia,serif;--jost:'Jost',system-ui,sans-serif;}
        .cf{font-family:var(--cf);}
        .jost{font-family:var(--jost);}
        .hide-scroll::-webkit-scrollbar{display:none;}
        .hide-scroll{-ms-overflow-style:none;scrollbar-width:none;}

        .f-btn{font-family:var(--jost);font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;padding:0.5rem 1.1rem;border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.5);background:transparent;cursor:pointer;white-space:nowrap;transition:all 0.3s;flex-shrink:0;}
        .f-btn:hover{color:var(--gold);border-color:var(--gold);}
        .f-btn.on{background:var(--gold);color:var(--ink);border-color:var(--gold);}

        .svc-row{background:#fff;border-bottom:1px solid #E0D8CC;padding:1.25rem 1.25rem 1.25rem 1.5rem;position:relative;transition:background 0.3s;overflow:hidden;}
        .svc-row:last-child{border-bottom:none;}
        .svc-row::before{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:var(--gold);transition:width 0.4s cubic-bezier(0.22,1,0.36,1);}
        .svc-row:hover::before{width:2px;}
        .svc-row:hover{background:rgba(201,169,122,0.04);}
        .svc-row:hover .svc-cta,.svc-row:focus-within .svc-cta{opacity:1;transform:translateX(0);}
        .svc-cta{font-family:var(--jost);font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);opacity:0;transform:translateX(-8px);transition:opacity 0.3s,transform 0.3s;text-decoration:none;display:inline-flex;align-items:center;gap:0.35rem;margin-top:0.65rem;}
        .svc-icon{width:72px;height:72px;border-radius:20px;border:1px solid rgba(201,169,122,0.22);background:linear-gradient(180deg,rgba(201,169,122,0.08),rgba(201,169,122,0.02));display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.35s ease,border-color 0.35s ease,background 0.35s ease;}
        .svc-row:hover .svc-icon{transform:translateY(-2px);border-color:rgba(201,169,122,0.45);background:linear-gradient(180deg,rgba(201,169,122,0.14),rgba(201,169,122,0.05));}
        @media(hover:none){.svc-cta{opacity:1;transform:none;}}

        .cat-pill{font-family:var(--jost);font-size:0.55rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(201,169,122,0.4);padding:0.2rem 0.6rem;display:inline-block;flex-shrink:0;}

        /* Grid layout at md+ */
        @media(min-width:768px){
          .svc-grid{display:grid; grid-template-columns:repeat(2,1fr);}
          .svc-grid .svc-row:nth-child(odd){border-right:1px solid #E0D8CC;}
        }
        @media(min-width:1024px){
          .svc-grid{grid-template-columns:repeat(3,1fr);}
          .svc-grid .svc-row{border-right:1px solid #E0D8CC;}
          .svc-grid .svc-row:nth-child(3n){border-right:none;}
        }
      `}} />

      <div className="jost pt-16 md:pt-20" style={{ fontFamily: "var(--jost)" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 sm:py-20  px-5 sm:px-8" style={{ background: "var(--olive-dark)" }}>
          <Grain />

          {/* Watermark — hidden on mobile to prevent overflow */}
          <div className="cf hidden sm:block absolute right-[-1vw] bottom-[-5%] select-none pointer-events-none z-0"
            style={{ fontSize: "clamp(100px,18vw,280px)", color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300 }}
          >
            Treatments
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="jost uppercase tracking-[0.18em] text-[0.62rem] mb-7 sm:mb-10" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Link href="/" className="transition-colors hover:text-[var(--gold)]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Home
              </Link>
              <span className="mx-2" style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "var(--gold)" }}>Services</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="w-10 h-px mb-6 sm:mb-8" style={{ background: "var(--gold)" }} />
              <h1 className="cf text-white" style={{ fontSize: "clamp(2.4rem,9vw,5.5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                Face &amp; Hair<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Procedures</em>
              </h1>
              <p className="jost mt-4 sm:mt-5" style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.8rem,2vw,0.95rem)", lineHeight: 1.85, maxWidth: "420px" }}>
                46+ advanced aesthetic treatments — each one tailored to your skin, your goals, your story.
              </p>
            </motion.div>

            {/* Stats — 2×2 grid on mobile → 4 col grid on md+ */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-12 mt-10 lg:mt-16"
            >
              {[["46+", "Treatments"], ["10+", "Years"], ["2000+", "Clients"], ["5 ★", "Rated"]].map(([n, l]) => (
                <div key={l} className="flex flex-col">
                  <div className="cf text-white" style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 300, lineHeight: 1 }}>{n}</div>
                  <div className="jost uppercase mt-2" style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "var(--gold)" }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── STICKY FILTER BAR ────────────────────────────────── */}
        <div className="sticky z-30 border-b" style={{ top: "64px", background: "var(--olive)", borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 overflow-x-auto hide-scroll">
            <div className="flex gap-1.5 items-center" style={{ minWidth: "max-content" }}>
              {/* Label — desktop only */}
              <span className="hidden sm:inline jost uppercase text-[0.58rem] tracking-[0.2em] mr-2 pr-3 shrink-0"
                style={{ color: "rgba(255,255,255,0.25)", borderRight: "1px solid rgba(255,255,255,0.1)" }}
              >Filter</span>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)} className={`f-btn ${active === cat ? "on" : ""}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SERVICES LIST ─────────────────────────────────────── */}
        <section className="px-4 sm:px-8 py-8 sm:py-14" style={{ background: "var(--parchment)" }}>
          <div className="max-w-7xl mx-auto">

            {/* Count + clear */}
            <div className="flex items-baseline justify-between pb-3 mb-0 border-b border-[#E0D8CC]">
              <span className="cf" style={{ fontSize: "clamp(0.85rem,2vw,1.05rem)", fontWeight: 300, color: "var(--muted)" }}>
                Showing{" "}
                <em style={{ color: "var(--ink)" }}>{filtered.length}</em>
                {" "}treatment{filtered.length !== 1 ? "s" : ""}
                {active !== "All" && <span style={{ color: "var(--gold)" }}> · {active}</span>}
              </span>
              {active !== "All" && (
                <button
                  onClick={() => setActive("All")}
                  className="jost uppercase bg-transparent transition-colors text-[0.6rem] tracking-[0.15em]"
                  style={{ color: "var(--muted)", borderBottom: "1px solid var(--muted)", paddingBottom: "1px" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderBottomColor = "var(--gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderBottomColor = "var(--muted)"; }}
                >
                  Clear
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                {filtered.length === 0 ? (
                  <div className="py-20 text-center">
                    <p className="cf" style={{ fontSize: "1.3rem", fontWeight: 300, color: "var(--muted)", fontStyle: "italic" }}>
                      No treatments in this category.
                    </p>
                  </div>
                ) : (
                  /* 1 col on mobile → 2 col on md+ */
                  <div className="svc-grid border border-[#E0D8CC]">
                    {filtered.map((s, i) => (
                      <motion.div
                        key={s.id}
                        className="svc-row"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ delay: (i % 4) * 0.05, duration: 0.55 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          {s.svg && (
                            <div className="svc-icon">
                              <Image
                                src={s.svg}
                                alt={s.name}
                                width={42}
                                height={42}
                                className="h-10 w-10 object-contain"
                              />
                            </div>
                          )}

                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="cf" style={{ fontSize: "0.68rem", color: "var(--gold)", letterSpacing: "0.08em" }}>
                                {String(s.id).padStart(2, "0")}
                              </span>
                              <span className="cat-pill">{s.category}</span>
                            </div>

                            <h3 className="cf" style={{ fontSize: "clamp(1rem,2.5vw,1.35rem)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.25 }}>
                              {s.name}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="jost" style={{ fontSize: "clamp(0.78rem,1.5vw,0.82rem)", color: "var(--muted)", lineHeight: 1.75, maxWidth: "400px" }}>
                          {s.description}
                        </p>

                        {/* CTA — hidden until hover (always visible on touch) */}
                        <Link href="/contact" className="svc-cta">
                          Enquire Now →
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-14 sm:py-20 px-5 sm:px-8 text-center" style={{ background: "var(--olive)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <Grain />
          <div className="relative z-10">
            <div className="w-10 h-px mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <h2 className="cf text-white mx-auto" style={{ fontSize: "clamp(1.6rem,4vw,3.2rem)", fontWeight: 300, lineHeight: 1.25, maxWidth: "560px" }}>
              Not sure which treatment<br className="hidden sm:block" /> is right for you?
            </h2>
            <p className="jost mt-4 mx-auto" style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.8rem,2vw,0.9rem)", lineHeight: 1.85, maxWidth: "380px" }}>
              Our dermatologists will assess your skin and build a plan that is truly yours.
            </p>
            <Link
              href="/book"
              className="jost uppercase inline-block mt-7 sm:mt-10 font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--gold)", color: "var(--ink)", fontSize: "0.7rem", letterSpacing: "0.18em", padding: "0.875rem 2rem" }}
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
