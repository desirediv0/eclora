"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Grain = () => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain-a"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain-a)" />
  </svg>
);

const Rule = ({ width = 40 }) => (
  <div style={{ width, height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
);

/* ── Image placeholder — swap src when ready ────────────────────── */
const ClinicImage = ({ label }) => (
  <div style={{
    width: "100%", aspectRatio: "4/3",
    background: "linear-gradient(135deg, #2E3527 0%, #4A5240 100%)",
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden",
  }}>
    <Grain />
    <span style={{
      fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.3em",
      textTransform: "uppercase", color: "rgba(255,255,255,0.2)", position: "relative", zIndex: 2,
    }}>{label}</span>
  </div>
);

export default function AboutPage() {
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
        .about-grid-item {
          padding: 3rem;
          border: 1px solid #E0D8CC;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: #fff;
          transition: border-color 0.4s;
        }
        .about-grid-item:hover { border-color: var(--gold); }
        .about-num {
          font-family: var(--cf);
          font-size: 0.75rem;
          color: var(--gold);
          letter-spacing: 0.1em;
        }
        .breadcrumb-sep { color: rgba(255,255,255,0.2); margin: 0 0.5rem; }
        .about-diff-row { display:grid; grid-template-columns:1fr 1fr; gap:0; border-bottom:1px solid #E0D8CC; }
        .about-diff-row:last-child { border-bottom:none; }
        @media(max-width:768px){ .about-diff-row{grid-template-columns:1fr;} }
        .team-card {
          border: 1px solid #E0D8CC;
          padding: 2.5rem;
          display:flex; flex-direction:column; align-items:center; text-align:center;
          position:relative; overflow:hidden;
          transition: border-color 0.4s;
        }
        .team-card:hover { border-color: var(--gold); }
        .team-card::after {
          content:''; position:absolute; bottom:0; left:0; right:0;
          height:2px; background:var(--gold);
          transform:scaleX(0); transition:transform 0.4s cubic-bezier(0.22,1,0.36,1);
          transform-origin:left;
        }
        .team-card:hover::after { transform:scaleX(1); }
      `}} />

      <div style={{ fontFamily: "var(--jost)" }} className="pt-16 md:pt-20">

        {/* ── 1. HERO ───────────────────────────────────────────── */}
        <section style={{ background: "var(--olive-dark)", position: "relative", overflow: "hidden" }} className="py-24 md:py-36 px-6">
          <Grain />
          <div style={{
            position: "absolute", left: "-2vw", bottom: "-10%",
            fontFamily: "var(--cf)", fontSize: "clamp(140px,20vw,300px)",
            color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300,
            pointerEvents: "none", userSelect: "none", zIndex: 0, fontStyle: "italic",
          }}>Éclora</div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div style={{ marginBottom: "2.5rem" }}>
              <span style={{ fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                >Home</Link>
                <span className="breadcrumb-sep">/</span>
                <span style={{ color: "var(--gold)" }}>About</span>
              </span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <Rule />
              <h1 style={{
                fontFamily: "var(--cf)", fontWeight: 300, lineHeight: 1.05,
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#fff", letterSpacing: "-0.01em",
              }}>
                The Story<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Behind Éclora</em>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1.5rem", fontSize: "0.95rem", lineHeight: 1.85, maxWidth: "440px" }}>
                A sanctuary where the science of dermatology meets the art of truly personalised care — built for Delhi, designed for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 2. OUR STORY ─────────────────────────────────────── */}
        <section style={{ background: "var(--parchment)", borderBottom: "1px solid #E0D8CC" }} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }}>

              {/* Left — sticky label */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                style={{ paddingTop: "0.25rem" }}
                className="hidden md:block"
              >
                <Rule />
                <span style={{ fontFamily: "var(--jost)", fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Our Story
                </span>
              </motion.div>

              {/* Right — text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Rule />
                <h2 style={{ fontFamily: "var(--cf)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--olive)", lineHeight: 1.2, marginBottom: "2rem" }}>
                  Founded with a vision to bring world-class aesthetic dermatology to Delhi.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    "Éclora Aesthetics & Laser Clinic is a sanctuary of science and luxury. We believe every person deserves access to safe, effective, and personalised skin and hair care — delivered with genuine warmth and expertise.",
                    "Our clinic combines the latest evidence-based dermatological technology with a deeply human approach. Every client who walks through our doors receives a tailored treatment plan designed around their unique skin, hair, and lifestyle goals — not a template.",
                  ].map((p, i) => (
                    <p key={i} style={{ fontFamily: "var(--jost)", fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9 }}>{p}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. MISSION / VISION / VALUES ─────────────────────── */}
        <section style={{ background: "var(--cream)", borderBottom: "1px solid #E0D8CC" }} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "3rem" }}>
              <Rule />
              <h2 style={{ fontFamily: "var(--cf)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--olive)" }}>
                What drives us
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", border: "1px solid #E0D8CC" }}
              className="grid-cols-1 md:grid-cols-3"
            >
              {[
                {
                  n: "01",
                  title: "Our Mission",
                  text: "To provide evidence-based aesthetic treatments that deliver real, visible results — while maintaining the highest standards of safety and patient care.",
                },
                {
                  n: "02",
                  title: "Our Vision",
                  text: "To be Delhi's most trusted aesthetic clinic — where cutting-edge technology meets compassionate, individualised care.",
                },
                {
                  n: "03",
                  title: "Our Values",
                  text: "Integrity, Excellence, Empathy, and Innovation guide every treatment and every interaction at Éclora.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  style={{
                    padding: "2.5rem",
                    borderRight: i < 2 ? "1px solid #E0D8CC" : "none",
                    position: "relative",
                    overflow: "hidden",
                    background: "#fff",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--parchment)"}
                  onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                >
                  <div style={{ fontFamily: "var(--cf)", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.1em", marginBottom: "2rem" }}>{item.n}</div>
                  <h3 style={{ fontFamily: "var(--cf)", fontSize: "1.5rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1rem" }}>{item.title}</h3>
                  <div style={{ width: "28px", height: "1px", background: "var(--gold)", marginBottom: "1rem", opacity: 0.6 }} />
                  <p style={{ fontFamily: "var(--jost)", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.85 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. THE ÉCLORA DIFFERENCE ─────────────────────────── */}
        <section style={{ background: "var(--parchment)" }} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
              <Rule />
              <h2 style={{ fontFamily: "var(--cf)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--olive)" }}>
                The Éclora difference
              </h2>
            </motion.div>

            {[
              {
                num: "01", title: "Certified Expertise",
                body: "Our team consists of board-certified dermatologists and trained aesthetic practitioners with years of specialised experience in advanced skin and hair treatments.",
                imgLabel: "Clinic / Team",
                flip: false,
              },
              {
                num: "02", title: "Advanced Technology",
                body: "We invest in the latest FDA-cleared devices to ensure every treatment is both safe and highly effective — from fractional lasers to HIFU and beyond.",
                imgLabel: "Equipment",
                flip: true,
              },
              {
                num: "03", title: "Your Safety, Always First",
                body: "Every treatment is preceded by a thorough consultation and skin analysis. We never recommend procedures that are not right for your skin type or condition.",
                imgLabel: "Consultation",
                flip: false,
              },
            ].map((row, i) => (
              <motion.div
                key={row.num}
                className="about-diff-row"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div style={{ order: row.flip ? 2 : 1, borderRight: row.flip ? "none" : "1px solid #E0D8CC", borderLeft: row.flip ? "1px solid #E0D8CC" : "none" }}>
                  <ClinicImage label={row.imgLabel} />
                </div>

                {/* Text */}
                <div style={{ order: row.flip ? 1 : 2, padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontFamily: "var(--cf)", fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>{row.num}</div>
                  <h3 style={{ fontFamily: "var(--cf)", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 300, color: "var(--ink)", marginBottom: "1rem", lineHeight: 1.2 }}>{row.title}</h3>
                  <div style={{ width: "32px", height: "1px", background: "var(--gold)", marginBottom: "1.25rem" }} />
                  <p style={{ fontFamily: "var(--jost)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.9 }}>{row.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 5. STATS BAR ─────────────────────────────────────── */}
        <section style={{ background: "var(--olive-dark)", position: "relative", overflow: "hidden" }} className="py-20 px-6">
          <Grain />
          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)" }}
              className="grid-cols-2 md:grid-cols-4"
            >
              {[
                { num: "2000+", label: "Happy Clients" },
                { num: "46+", label: "Treatments Offered" },
                { num: "10+", label: "Years Experience" },
                { num: "5 ★", label: "Google Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  style={{
                    textAlign: "center", padding: "2.5rem 1rem",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ fontFamily: "var(--cf)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "#fff", lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontFamily: "var(--jost)", fontSize: "0.6rem", letterSpacing: "0.22em", color: "var(--gold)", marginTop: "0.75rem", textTransform: "uppercase" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. TEAM ──────────────────────────────────────────── */}
        <section style={{ background: "var(--cream)", borderTop: "1px solid #E0D8CC" }} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "3.5rem" }}>
              <Rule />
              <h2 style={{ fontFamily: "var(--cf)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--olive)" }}>Meet our specialists</h2>
              <p style={{ fontFamily: "var(--jost)", fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.75rem" }}>Trusted experts committed to your skin health</p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5px", background: "#E0D8CC", maxWidth: "720px" }}>
              {[
                { name: "Dr. [Your Name]", role: "Lead Dermatologist", bio: "Specialist in advanced laser procedures and aesthetic dermatology with 10+ years of clinical experience." },
                { name: "Dr. [Name]", role: "Aesthetic Physician", bio: "Expert in injectables, skin boosters, and non-surgical facial rejuvenation." },
              ].map((doc, i) => (
                <motion.div
                  key={doc.name}
                  className="team-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  style={{ background: "#fff" }}
                >
                  {/* Avatar placeholder */}
                  <div style={{
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #3E4535, #5A6550)",
                    marginBottom: "1.5rem", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontFamily: "var(--cf)", fontSize: "1.6rem", fontWeight: 300, color: "var(--gold)" }}>
                      {doc.name.charAt(4)}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--cf)", fontSize: "1.35rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.35rem" }}>{doc.name}</h3>
                  <div style={{ fontFamily: "var(--jost)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>{doc.role}</div>
                  <div style={{ width: "24px", height: "1px", background: "var(--gold)", marginBottom: "1.25rem", opacity: 0.5 }} />
                  <p style={{ fontFamily: "var(--jost)", fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.8 }}>{doc.bio}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              style={{ marginTop: "2.5rem" }}
            >
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--jost)", fontSize: "0.7rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "var(--muted)",
                  borderBottom: "1px solid var(--muted)", paddingBottom: "2px",
                  textDecoration: "none", transition: "color 0.3s, border-color 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderColor = "var(--gold)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--muted)"; }}
              >
                Interested in joining our team? →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── 7. CTA ───────────────────────────────────────────── */}
        <section style={{ background: "var(--olive)", position: "relative", overflow: "hidden" }} className="py-24 px-6 text-center">
          <Grain />
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)", margin: "0 auto 2rem" }} />
            <h2 style={{
              fontFamily: "var(--cf)", fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", lineHeight: 1.2, marginBottom: "1rem",
            }}>
              Ready to begin<br />
              <em style={{ color: "var(--gold)" }}>your skin journey?</em>
            </h2>
            <p style={{ fontFamily: "var(--jost)", color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "360px", margin: "0 auto 2.5rem" }}>
              Book a consultation and let our experts build your personalised treatment plan.
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
              Book Your Consultation
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}