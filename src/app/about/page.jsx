"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Grain = () => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain-a"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain-a)" />
  </svg>
);

const ClinicImage = ({ label }) => (
  <div className="w-full relative overflow-hidden" style={{ aspectRatio: "4/3", background: "linear-gradient(135deg,#2E3527 0%,#4A5240 100%)" }}>
    <Grain />
    <span className="absolute inset-0 flex items-center justify-center jost uppercase tracking-[0.3em] z-10"
      style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.2)" }}
    >{label}</span>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        :root{--olive:#3E4535;--olive-dark:#262C1E;--gold:#C9A97A;--cream:#F6F1E9;--parchment:#FAF7F2;--ink:#1C1C1A;--muted:#7A7568;--cf:'Cormorant Garamond',Georgia,serif;--jost:'Jost',system-ui,sans-serif;}
        .cf{font-family:var(--cf);}
        .jost{font-family:var(--jost);}
        .e-rule{display:block;width:40px;height:1px;background:var(--gold);margin-bottom:1.75rem;}
        .mvv-cell{padding:2rem;background:#fff;transition:background 0.3s;border-bottom:1px solid #E0D8CC;}
        .mvv-cell:last-child{border-bottom:none;}
        @media(min-width:768px){
          .mvv-grid{display:grid;grid-template-columns:repeat(3,1fr);}
          .mvv-cell{border-bottom:none;border-right:1px solid #E0D8CC;}
          .mvv-cell:last-child{border-right:none;}
        }
        .mvv-cell:hover{background:var(--parchment);}
        .diff-row{display:grid;grid-template-columns:1fr;border-bottom:1px solid #E0D8CC;}
        .diff-row:last-child{border-bottom:none;}
        @media(min-width:768px){.diff-row{grid-template-columns:1fr 1fr;}}
        .team-card{border:1px solid #E0D8CC;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;overflow:hidden;transition:border-color 0.4s;background:#fff;}
        .team-card:hover{border-color:var(--gold);}
        .team-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--gold);transform:scaleX(0);transition:transform 0.4s cubic-bezier(0.22,1,0.36,1);transform-origin:left;}
        .team-card:hover::after{transform:scaleX(1);}
      `}} />

      <div className="jost pt-16 md:pt-20" style={{ fontFamily: "var(--jost)" }}>

        {/* ── 1. HERO ───────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 sm:py-20 md:py-36 px-5 sm:px-8" style={{ background: "var(--olive-dark)" }}>
          <Grain />
          {/* Watermark — desktop only */}
          <div className="cf hidden sm:block absolute left-[-1vw] bottom-[-10%] select-none pointer-events-none z-0"
            style={{ fontSize: "clamp(120px,20vw,300px)", color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300, fontStyle: "italic" }}
          >Éclora</div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="jost uppercase tracking-[0.18em] text-[0.62rem] mb-7 sm:mb-10" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Link href="/" className="hover:text-[var(--gold)] transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>Home</Link>
              <span className="mx-2" style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "var(--gold)" }}>About</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <span className="e-rule" />
              <h1 className="cf text-white" style={{ fontSize: "clamp(2.4rem,9vw,5.5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                The Story<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Behind Éclora</em>
              </h1>
              <p className="jost mt-4 sm:mt-5" style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(0.82rem,2vw,0.95rem)", lineHeight: 1.85, maxWidth: "440px" }}>
                A sanctuary where the science of dermatology meets the art of truly personalised care — built for Delhi, designed for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 2. OUR STORY ──────────────────────────────────── */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 border-b border-[#E0D8CC]" style={{ background: "var(--parchment)" }}>
          <div className="max-w-6xl mx-auto">
            {/* 1 col mobile → 2 col md+ */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 lg:gap-24 items-start">

              {/* Left label — desktop only */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="hidden md:block pt-1"
              >
                <span className="e-rule" />
                <span className="jost uppercase tracking-[0.25em] text-[0.62rem]" style={{ color: "var(--muted)" }}>Our Story</span>
              </motion.div>

              {/* Right — text */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <span className="e-rule" />
                <h2 className="cf" style={{ fontSize: "clamp(1.5rem,3.5vw,3rem)", fontWeight: 300, color: "var(--olive)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  Founded with a vision to bring world-class aesthetic dermatology to Delhi.
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    "Éclora Aesthetics & Laser Clinic is a sanctuary of science and luxury. We believe every person deserves access to safe, effective, and personalised skin and hair care — delivered with genuine warmth and expertise.",
                    "Our clinic combines the latest evidence-based dermatological technology with a deeply human approach. Every client who walks through our doors receives a tailored treatment plan designed around their unique skin, hair, and lifestyle goals — not a template.",
                  ].map((p, i) => (
                    <p key={i} className="jost" style={{ fontSize: "clamp(0.85rem,2vw,0.95rem)", color: "var(--muted)", lineHeight: 1.9 }}>{p}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. MISSION / VISION / VALUES ──────────────────── */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 border-b border-[#E0D8CC]" style={{ background: "var(--cream)" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-12">
              <span className="e-rule" />
              <h2 className="cf" style={{ fontSize: "clamp(1.5rem,3.5vw,3rem)", fontWeight: 300, color: "var(--olive)" }}>
                What drives us
              </h2>
            </motion.div>

            {/* Mobile: stacked | md+: 3 col */}
            <div className="mvv-grid border border-[#E0D8CC]">
              {[
                { n: "01", title: "Our Mission", text: "To provide evidence-based aesthetic treatments that deliver real, visible results — while maintaining the highest standards of safety and patient care." },
                { n: "02", title: "Our Vision", text: "To be Delhi's most trusted aesthetic clinic — where cutting-edge technology meets compassionate, individualised care." },
                { n: "03", title: "Our Values", text: "Integrity, Excellence, Empathy, and Innovation guide every treatment and every interaction at Éclora." },
              ].map((item, i) => (
                <motion.div key={item.n} className="mvv-cell"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                >
                  <div className="cf text-[0.72rem] tracking-[0.1em] mb-6 sm:mb-8" style={{ color: "var(--gold)" }}>{item.n}</div>
                  <h3 className="cf" style={{ fontSize: "clamp(1.2rem,2vw,1.5rem)", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <div className="w-7 h-px mb-3 sm:mb-4" style={{ background: "var(--gold)", opacity: 0.6 }} />
                  <p className="jost text-sm" style={{ color: "var(--muted)", lineHeight: 1.85 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. THE ÉCLORA DIFFERENCE ──────────────────────── */}
        <section className="py-14 sm:py-20 px-5 sm:px-8" style={{ background: "var(--parchment)" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-14">
              <span className="e-rule" />
              <h2 className="cf" style={{ fontSize: "clamp(1.5rem,3.5vw,3rem)", fontWeight: 300, color: "var(--olive)" }}>
                The Éclora difference
              </h2>
            </motion.div>

            {[
              { num: "01", title: "Certified Expertise", body: "Our team consists of board-certified dermatologists and trained aesthetic practitioners with years of specialised experience in advanced skin and hair treatments.", img: "/certified-expertise.jpg", flip: false },
              { num: "02", title: "Advanced Technology", body: "We invest in the latest FDA-cleared devices to ensure every treatment is both safe and highly effective — from fractional lasers to HIFU and beyond.", img: "/advanced-technology.jpg", flip: true },
              { num: "03", title: "Your Safety, Always First", body: "Every treatment is preceded by a thorough consultation and skin analysis. We never recommend procedures that are not right for your skin type or condition.", img: "/your-safety.jpg", flip: false },
            ].map((row, i) => (
              <motion.div key={row.num} className="diff-row"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                {/* On mobile: image always first, text below.
                    On md+: flip alternates using order */}
                <div className="md:hidden">
                  <ClinicImage label={row.imgLabel} />
                </div>

                {/* Image — desktop, with flip */}
                <div className="hidden md:block" style={{ order: row.flip ? 2 : 1, borderRight: !row.flip ? "1px solid #E0D8CC" : "none", borderLeft: row.flip ? "1px solid #E0D8CC" : "none" }}>
                  <Image src={row.img} alt={row.title} width={600} height={450} className="w-full h-auto object-cover" />
                </div>

                {/* Text */}
                <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center" style={{ order: row.flip ? 1 : 2 }}>
                  <div className="cf text-[0.7rem] tracking-[0.1em] mb-4" style={{ color: "var(--gold)" }}>{row.num}</div>
                  <h3 className="cf" style={{ fontSize: "clamp(1.3rem,2.5vw,2.2rem)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.2, marginBottom: "0.75rem" }}>{row.title}</h3>
                  <div className="w-8 h-px mb-4" style={{ background: "var(--gold)" }} />
                  <p className="jost" style={{ fontSize: "clamp(0.82rem,1.5vw,0.9rem)", color: "var(--muted)", lineHeight: 1.9 }}>{row.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 5. STATS BAR ──────────────────────────────────── */}
        <section className="relative overflow-hidden py-12 sm:py-16 px-5 sm:px-8" style={{ background: "var(--olive-dark)" }}>
          <Grain />
          <div className="max-w-6xl mx-auto relative z-10">
            {/* 2×2 on mobile → 4 col on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/[0.07]">
              {[
                { num: "2000+", label: "Happy Clients" },
                { num: "46+", label: "Treatments" },
                { num: "10+", label: "Years Experience" },
                { num: "5 ★", label: "Google Rating" },
              ].map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="text-center py-7 sm:py-10 px-2"
                  style={{
                    borderRight: i % 2 === 0 && i < 3 ? "1px solid rgba(255,255,255,0.07)" : i % 2 !== 0 && i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none"
                  }}
                >
                  <div className="cf text-white" style={{ fontSize: "clamp(1.6rem,4vw,3rem)", fontWeight: 300, lineHeight: 1 }}>{stat.num}</div>
                  <div className="jost uppercase mt-2" style={{ fontSize: "0.52rem", letterSpacing: "0.2em", color: "var(--gold)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. TEAM ───────────────────────────────────────── */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 border-t border-[#E0D8CC]" style={{ background: "var(--cream)" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-12">
              <span className="e-rule" />
              <h2 className="cf" style={{ fontSize: "clamp(1.5rem,3.5vw,3rem)", fontWeight: 300, color: "var(--olive)" }}>
                Meet our specialists
              </h2>
              <p className="jost mt-2 text-sm" style={{ color: "var(--muted)" }}>Trusted experts committed to your skin health</p>
            </motion.div>

            {/* Team cards — 1 col mobile → 2 col sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E0D8CC]" style={{ maxWidth: "720px" }}>
              {[
                { name: "Dr. [Your Name]", role: "Lead Dermatologist", bio: "Specialist in advanced laser procedures and aesthetic dermatology with 10+ years of clinical experience." },
                { name: "Dr. [Name]", role: "Aesthetic Physician", bio: "Expert in injectables, skin boosters, and non-surgical facial rejuvenation." },
              ].map((doc, i) => (
                <motion.div key={doc.name} className="team-card p-7 sm:p-10"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                >
                  {/* Avatar */}
                  <div className="rounded-full flex items-center justify-center mb-5 shrink-0"
                    style={{ width: "72px", height: "72px", background: "linear-gradient(135deg,#3E4535,#5A6550)" }}
                  >
                    <span className="cf" style={{ fontSize: "1.5rem", fontWeight: 300, color: "var(--gold)" }}>
                      {doc.name.charAt(4)}
                    </span>
                  </div>
                  <h3 className="cf" style={{ fontSize: "clamp(1.1rem,2vw,1.35rem)", fontWeight: 400, color: "var(--ink)", marginBottom: "0.3rem" }}>{doc.name}</h3>
                  <div className="jost uppercase tracking-[0.18em] mb-4" style={{ fontSize: "0.58rem", color: "var(--gold)" }}>{doc.role}</div>
                  <div className="w-6 h-px mb-4" style={{ background: "var(--gold)", opacity: 0.5 }} />
                  <p className="jost text-sm" style={{ color: "var(--muted)", lineHeight: 1.8 }}>{doc.bio}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-7">
              <Link href="/contact"
                className="jost uppercase text-[0.68rem] tracking-[0.15em] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                style={{ color: "var(--muted)", borderBottom: "1px solid var(--muted)", paddingBottom: "2px", textDecoration: "none" }}
              >
                Interested in joining our team? →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── 7. CTA ────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 sm:py-20 px-5 sm:px-8 text-center" style={{ background: "var(--olive)" }}>
          <Grain />
          <div className="relative z-10">
            <div className="w-10 h-px mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <h2 className="cf text-white mx-auto" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300, lineHeight: 1.2, maxWidth: "540px" }}>
              Ready to begin<br />
              <em style={{ color: "var(--gold)" }}>your skin journey?</em>
            </h2>
            <p className="jost mt-4 mx-auto" style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(0.8rem,2vw,0.88rem)", lineHeight: 1.8, maxWidth: "340px" }}>
              Book a consultation and let our experts build your personalised treatment plan.
            </p>
            <Link href="/book"
              className="jost uppercase inline-block mt-8 font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--gold)", color: "var(--ink)", fontSize: "0.7rem", letterSpacing: "0.18em", padding: "0.875rem 2rem" }}
            >
              Book Your Consultation
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}