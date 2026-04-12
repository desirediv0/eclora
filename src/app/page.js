"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/* ─── Font Injection ─────────────────────────────────────────────── */
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ─── Grain overlay (gives texture, kills "digital flat" look) ──── */
const Grain = ({ opacity = 0.04 }) => (
  <svg
    className="pointer-events-none absolute inset-0 w-full h-full z-[1]"
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);

/* ─── Marquee strip ─────────────────────────────────────────────── */
const Marquee = () => {
  const items = ["Laser Hair Reduction", "Chemical Peels", "HIFU Lifting", "QR678 Hair Therapy", "Carbon Laser Toning", "Microneedling", "Signature Glow Facials", "Botox & Fillers"];
  return (
    <div className="eclora-marquee overflow-hidden border-y border-[#D4B896]/30 py-4 bg-[#F7F3EC] relative">
      <div className="eclora-marquee-track flex gap-14 whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[#4A5240] text-xs tracking-[0.25em] uppercase font-[Jost,sans-serif] flex items-center gap-4">
            {item}<span className="text-[#D4B896] text-lg">◆</span>
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .animate-marquee { animation: marquee 28s linear infinite; }
      `}} />
    </div>
  );
};

/* ─── Data ──────────────────────────────────────────────────────── */
const servicesTab = {
  "Face & Laser": [
    { id: 1, title: "Laser Hair Reduction", desc: "Long-lasting results using advanced diode & Nd:YAG systems" },
    { id: 2, title: "Chemical Peels", desc: "Medical-grade exfoliation for even tone & luminosity" },
    { id: 3, title: "Botox & Fillers", desc: "Precision volumising and wrinkle relaxation" },
    { id: 4, title: "HIFU", desc: "Non-surgical face lifting with focused ultrasound" },
    { id: 5, title: "Microneedling", desc: "Collagen induction for smoother, firmer skin" },
    { id: 6, title: "Carbon Laser Toning", desc: "Deep pore cleanse and brightening therapy" },
  ],
  "Hair Treatments": [
    { id: 7, title: "QR678 Hair Growth", desc: "Patented hair regrowth injection protocol" },
    { id: 8, title: "Exosomes", desc: "Next-generation regenerative scalp therapy" },
    { id: 9, title: "Hair Fall Treatment", desc: "Targeted solutions for thinning & loss" },
    { id: 10, title: "Dandruff Therapy", desc: "Medical-grade scalp reset treatment" },
    { id: 11, title: "Electrolysis", desc: "Permanent removal of white & grey hair" },
    { id: 12, title: "GFC / PRP", desc: "Growth factor concentrate for scalp & skin" },
  ],
  "Facials": [
    { id: 13, title: "Éclora Signature Glow", desc: "Brightening actives + LED for instant radiance" },
    { id: 14, title: "Diamond Elixir Facial", desc: "Diamond exfoliation + rich elixir infusion" },
    { id: 15, title: "Skin Revival Therapy", desc: "Barrier repair and deep restoration" },
    { id: 16, title: "Platinum Luxe Facial", desc: "Platinum-infused lifting & rejuvenation" },
    { id: 17, title: "Elite Aura Facial", desc: "Bespoke multi-step personalized experience" },
    { id: 18, title: "Acne Defense Therapy", desc: "Deep cleanse + anti-bacterial acne control" },
  ]
};

const facials = [
  { num: "01", name: "Éclora Signature Glow", dur: "60 min", desc: "Brightening actives + LED for instant radiance" },
  { num: "02", name: "Diamond Elixir Facial", dur: "75 min", desc: "Diamond exfoliation with rich elixir infusion" },
  { num: "03", name: "Skin Revival Therapy", dur: "60 min", desc: "Barrier repair and deep skin restoration" },
  { num: "04", name: "Platinum Luxe Facial", dur: "90 min", desc: "Platinum-infused lifting and rejuvenation" },
  { num: "05", name: "Elite Aura Facial", dur: "75 min", desc: "Bespoke multi-step personalized experience" },
  { num: "06", name: "Acne Defense Therapy", dur: "60 min", desc: "Deep cleanse and anti-bacterial acne control" }
];

const faqs = [
  { q: "What should I expect on my first visit?", a: "Our dermatologist will assess your skin and hair condition, discuss your concerns, and create a personalized treatment plan. First consultations take 30–45 minutes." },
  { q: "Are your treatments safe for Indian skin tones?", a: "Absolutely. Our specialists are trained for all Indian and South Asian skin tones (Fitzpatrick types III–VI) and use devices calibrated specifically for our skin." },
  { q: "How many sessions will I need?", a: "It varies by treatment. Most laser treatments require 6–8 sessions; facials work best on a monthly schedule. Your doctor will create a tailored plan." },
  { q: "Is there downtime after laser treatments?", a: "Most procedures have minimal downtime. Slight redness may occur for 1–2 days. We provide complete aftercare instructions for every procedure." },
  { q: "Do you offer packages?", a: "Yes, we offer discounted multi-session packages. Ask our team during consultation." },
  { q: "What's the difference between HIFU and RF tightening?", a: "HIFU uses focused ultrasound for deeper lifting; RF works on surface collagen remodelling. Both are non-surgical and highly effective." },
  { q: "How long do facial results last?", a: "Signature facials deliver an immediate glow lasting 1–2 weeks. Medical facials build cumulative benefits with regular sessions." },
  { q: "Can I book a same-day appointment?", a: "Yes, subject to availability. Call or WhatsApp us directly for urgent bookings." },
];

const testimonials = [
  { q: "The laser toning transformed my skin in just 3 sessions. Absolutely professional team and stunning results.", n: "Priya S.", t: "Carbon Laser Toning" },
  { q: "Finally a clinic that listens. My acne scars are almost completely gone after the treatment plan they designed for me.", n: "Rahul M.", t: "Acne Scar Treatment" },
  { q: "The Éclora Signature Glow facial is pure luxury. I book it every month — it has become my self-care ritual.", n: "Anjali K.", t: "Éclora Signature Glow" }
];

const expertise = [
  { n: "01", title: "Expert Dermatologists", d: "Board-certified specialists with deep expertise in skin, hair & advanced aesthetics." },
  { n: "02", title: "Advanced Technology", d: "FDA-cleared laser and aesthetic devices calibrated for South Asian skin." },
  { n: "03", title: "Luxury Experience", d: "A premium clinic environment with warm, unhurried, personalised care." },
  { n: "04", title: "Natural Results", d: "We enhance what is already yours — we never alter, we only refine." },
];

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Face & Laser");
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      <FontLoader />
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --olive: #3E4535;
          --olive-dark: #262C1E;
          --gold: #C9A97A;
          --gold-light: #E8D5B8;
          --cream: #F6F1E9;
          --parchment: #FAF7F2;
          --ink: #1C1C1A;
          --muted: #7A7568;
          --cf: 'Cormorant Garamond', Georgia, serif;
          --jost: 'Jost', system-ui, sans-serif;
        }
        .cf { font-family: var(--cf); }
        .jost { font-family: var(--jost); }
        .eclora-rule { display:block; width:40px; height:1px; background:var(--gold); }
        .eclora-tab-active { background:var(--olive); color:#fff; }
        .eclora-tab { background:transparent; color:var(--olive); border:1px solid #D4CAB8; }
        .scroll-hide::-webkit-scrollbar { display:none; }
        .scroll-hide { -ms-overflow-style:none; scrollbar-width:none; }
      `}} />

      <div className="w-full" style={{ fontFamily: "var(--jost)", background: "var(--parchment)" }}>

        {/* ══ SECTION 1 — HERO ══════════════════════════════════════ */}
        <section
          ref={heroRef}
          style={{ background: "var(--olive-dark)", minHeight: "100vh" }}
          className="relative flex items-end pb-20 overflow-hidden pt-24"
        >
          <Grain opacity={0.06} />

          {/* Large watermark "É" */}
          <motion.div
            style={{ y: heroY }}
            className="cf absolute right-[-2vw] top-[8%] select-none pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ duration: 2 }}
          >
            <span style={{ fontSize: "clamp(280px,38vw,580px)", color: "#fff", lineHeight: 1, fontWeight: 300 }}>É</span>
          </motion.div>

          <div className="container mx-auto px-6 lg:px-16 relative z-10 w-full max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">

              {/* Left — editorial headline */}
              <motion.div variants={stagger} initial="hidden" animate="show">
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                  <span className="eclora-rule" />
                  <span style={{ color: "var(--gold)", letterSpacing: "0.2em", fontSize: "0.7rem" }} className="jost uppercase tracking-widest">Delhi's Premier Aesthetic Clinic</span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="cf text-white"
                  style={{ fontSize: "clamp(3rem,7vw,6.5rem)", fontWeight: 300, lineHeight: 1.01, letterSpacing: "-0.01em" }}
                >
                  Reveal Your<br />
                  Most <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Radiant</em><br />
                  Self
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  style={{ color: "#B8B0A4", fontSize: "1rem", maxWidth: "420px", lineHeight: 1.8 }}
                  className="mt-4 jost"
                >
                  Advanced laser treatments, luxury facials &amp; expert dermatology —
                  meticulously personalised for your unique skin.
                </motion.p>

                <motion.div variants={fadeUp} className="flex gap-4 flex-wrap mt-6">
                  <Link
                    href="/book"
                    style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 600, letterSpacing: "0.06em" }}
                    className="jost uppercase text-xs px-8 py-4 hover:opacity-90 transition-opacity"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href="/services"
                    style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff", letterSpacing: "0.06em" }}
                    className="jost uppercase text-xs px-8 py-4 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                  >
                    Explore Treatments
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — stat column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:flex flex-col gap-8 text-right pb-4"
              >
                {[["2000+", "Clients"], ["46+", "Treatments"], ["10+", "Years"], ["5 ★", "Rated"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="cf text-white" style={{ fontSize: "2.8rem", fontWeight: 300, lineHeight: 1 }}>{n}</div>
                    <div style={{ color: "var(--gold)", fontSize: "0.65rem", letterSpacing: "0.25em" }} className="jost uppercase mt-1">{l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ MARQUEE ════════════════════════════════════════════════ */}
        <Marquee />

        {/* ══ SECTION 2 — PHILOSOPHY ═══════════════════════════════ */}
        <section style={{ background: "var(--parchment)" }} className="py-28 px-6 text-center relative overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "1px", background: "var(--gold)", transformOrigin: "left", maxWidth: "60px", margin: "0 auto 3rem" }}
          />
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="cf"
            style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)", fontWeight: 300, fontStyle: "italic", color: "var(--olive)", maxWidth: "760px", margin: "0 auto", lineHeight: 1.5 }}
          >
            "We combine the science of dermatology with the art of personalised care — because your skin deserves nothing less than exceptional."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{ marginTop: "2rem", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.25em" }}
            className="jost uppercase"
          >
            — Éclora Aesthetics &amp; Laser Clinic, Delhi
          </motion.div>
        </section>

        {/* ══ SECTION 3 — EXPERTISE ════════════════════════════════ */}
        <section style={{ background: "var(--cream)", borderTop: "1px solid #E5DDD0" }} className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="eclora-rule mb-5 block" />
              <h2 className="cf" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)", letterSpacing: "-0.01em" }}>
                Why patients choose Éclora
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-0 border border-[#D9D0C4]">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.n}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="group flex gap-8 p-10 border-b border-r border-[#D9D0C4] hover:bg-white transition-colors duration-500 relative overflow-hidden"
                  style={{ borderRight: i % 2 === 1 ? "none" : undefined, borderBottom: i >= 2 ? "none" : undefined }}
                >
                  <div className="cf shrink-0" style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.1em", marginTop: "2px" }}>{item.n}</div>
                  <div>
                    <h3 className="cf" style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.75 }} className="jost">{item.d}</p>
                  </div>
                  {/* hover accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: "var(--gold)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 4 — SERVICES ═════════════════════════════════ */}
        <section style={{ background: "var(--parchment)", borderTop: "1px solid #E5DDD0" }} className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <span className="eclora-rule mb-5 block" />
                <h2 className="cf" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                  Our Treatments
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: "0.75rem" }} className="jost">46+ advanced procedures for face, skin &amp; hair</p>
              </div>
              {/* Tabs */}
              <div className="flex gap-2 flex-wrap">
                {["Face & Laser", "Hair Treatments", "Facials"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`jost text-xs uppercase tracking-widest px-6 py-3 transition-all duration-300 ${activeTab === tab ? "eclora-tab-active" : "eclora-tab"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#D9D0C4]"
              >
                {servicesTab[activeTab].map((s, i) => (
                  <div
                    key={s.id}
                    className="group p-8 border-b border-r border-[#D9D0C4] hover:bg-white transition-colors duration-400 relative cursor-pointer"
                    style={{
                      borderRight: (i + 1) % 3 === 0 ? "none" : undefined,
                      borderBottom: i >= servicesTab[activeTab].length - (servicesTab[activeTab].length % 3 || 3) ? "none" : undefined
                    }}
                  >
                    <div style={{ fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.15em", marginBottom: "1rem" }} className="jost uppercase">{String(s.id).padStart(2, "0")}</div>
                    <h3 className="cf" style={{ fontSize: "1.25rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.5rem" }}>{s.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.7 }} className="jost">{s.desc}</p>
                    <Link href="/services" style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.12em" }} className="jost uppercase inline-block mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more →
                    </Link>
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--gold)" }} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 text-center">
              <Link href="/services" style={{ color: "var(--olive)", borderBottom: "1px solid var(--gold)", paddingBottom: "3px", fontSize: "0.8rem", letterSpacing: "0.15em" }} className="jost uppercase hover:text-[var(--gold)] transition-colors">
                View all 46+ treatments
              </Link>
            </div>
          </div>
        </section>

        {/* ══ SECTION 5 — SIGNATURE FACIALS ════════════════════════ */}
        <section style={{ background: "var(--olive)", borderTop: "1px solid #2E3527" }} className="py-28 px-6 relative overflow-hidden">
          <Grain opacity={0.05} />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <span style={{ background: "var(--gold)" }} className="eclora-rule mb-5 block" />
                <h2 className="cf text-white" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300 }}>
                  Signature Facial<br /><em style={{ color: "var(--gold)" }}>Collection</em>
                </h2>
              </div>
              <Link href="/facials" style={{ color: "var(--gold)", borderBottom: "1px solid var(--gold)", paddingBottom: "3px", fontSize: "0.75rem", letterSpacing: "0.15em" }} className="jost uppercase">
                Explore all facials →
              </Link>
            </div>

            <div className="flex gap-5 overflow-x-auto scroll-hide pb-4">
              {facials.map((f, i) => (
                <motion.div
                  key={f.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    minWidth: "clamp(240px,28vw,300px)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)"
                  }}
                  className="group shrink-0 p-8 hover:border-[var(--gold)] hover:bg-white/[0.07] transition-all duration-500 cursor-pointer relative"
                >
                  <div style={{ color: "var(--gold)", fontSize: "0.65rem", letterSpacing: "0.2em" }} className="jost uppercase mb-6">{f.num}</div>
                  <h3 className="cf text-white" style={{ fontSize: "1.3rem", fontWeight: 300, lineHeight: 1.3, marginBottom: "1rem" }}>{f.name}</h3>
                  <div style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.15em" }} className="jost uppercase mb-4">{f.dur}</div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7 }} className="jost mb-8">{f.desc}</p>
                  <Link href="/facials" style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.12em" }} className="jost uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Book facial →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 6 — PROCESS ══════════════════════════════════ */}
        <section style={{ background: "var(--cream)", borderTop: "1px solid #E5DDD0" }} className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
              <span className="eclora-rule mb-5 mx-auto block" />
              <h2 className="cf" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                Your journey to glowing skin
              </h2>
            </motion.div>

            <div className="space-y-0">
              {[
                { n: "01", t: "Book a Consultation", d: "Share your skin and hair goals with our specialist." },
                { n: "02", t: "Receive Your Custom Plan", d: "A personalised treatment protocol designed exclusively for you." },
                { n: "03", t: "Transform & Glow", d: "Experience visible, lasting results that speak for themselves." }
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-10 py-10 border-b border-[#D9D0C4] last:border-0 group"
                >
                  <div className="cf shrink-0 w-14 text-right" style={{ fontSize: "2.5rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{step.n}</div>
                  <div className="pt-1">
                    <h3 className="cf" style={{ fontSize: "1.6rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.5rem" }}>{step.t}</h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.75 }} className="jost">{step.d}</p>
                  </div>
                  <div className="ml-auto hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)", fontSize: "1.2rem" }}>→</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/book" style={{ background: "var(--olive)", color: "#fff", letterSpacing: "0.08em", padding: "1rem 3rem", display: "inline-block", fontSize: "0.8rem" }} className="jost uppercase hover:opacity-90 transition-opacity">
                Begin Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* ══ SECTION 7 — TESTIMONIALS ══════════════════════════════ */}
        <section style={{ background: "var(--parchment)", borderTop: "1px solid #E5DDD0" }} className="py-28 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
              <span className="eclora-rule mb-5 block" />
              <h2 className="cf" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>What our clients say</h2>
            </motion.div>

            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Large opening quote */}
                  <div className="cf" style={{ fontSize: "6rem", color: "var(--gold)", lineHeight: 0.5, marginBottom: "1.5rem", opacity: 0.4 }}>"</div>
                  <blockquote className="cf" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.55, maxWidth: "820px" }}>
                    {testimonials[activeTestimonial].q}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-10">
                    <span style={{ width: "32px", height: "1px", background: "var(--gold)", display: "block" }} />
                    <div>
                      <div className="jost" style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--ink)" }}>{testimonials[activeTestimonial].n}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.12em" }} className="jost uppercase mt-0.5">{testimonials[activeTestimonial].t}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot navigation */}
            <div className="flex gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  style={{
                    width: i === activeTestimonial ? "28px" : "8px",
                    height: "2px",
                    background: i === activeTestimonial ? "var(--gold)" : "#C8C0B4",
                    transition: "all 0.4s ease"
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 8 — FAQ ═══════════════════════════════════════ */}
        <section id="faq" style={{ background: "var(--cream)", borderTop: "1px solid #E5DDD0" }} className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="eclora-rule mb-5 block" />
              <h2 className="cf" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                Frequently asked questions
              </h2>
            </motion.div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: "1px solid #D9D0C4" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className="cf" style={{ fontSize: "1.15rem", fontWeight: 400, color: "var(--ink)", paddingRight: "2rem" }}>{faq.q}</span>
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", flexShrink: 0, transition: "transform 0.3s", transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>+</span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.92rem", paddingBottom: "1.5rem" }} className="jost">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SECTION 9 — CTA ═══════════════════════════════════════ */}
        <section style={{ background: "var(--olive-dark)" }} className="py-32 px-6 text-center relative overflow-hidden">
          <Grain opacity={0.07} />
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <span style={{ color: "var(--gold)", fontSize: "0.65rem", letterSpacing: "0.3em" }} className="jost uppercase block mb-8">Begin Your Transformation</span>
              <h2 className="cf text-white" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 300, lineHeight: 1.2 }}>
                Ready for your most<br />
                <em style={{ color: "var(--gold)" }}>radiant chapter?</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1.5rem", fontSize: "0.95rem", lineHeight: 1.8 }} className="jost">
                Book your consultation today and step into the skin you deserve.
              </p>
              <div className="flex gap-5 justify-center flex-wrap mt-12">
                <Link href="/book" style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 600, letterSpacing: "0.08em", padding: "1rem 2.5rem", fontSize: "0.8rem" }} className="jost uppercase hover:opacity-90 transition-opacity">
                  Book Now
                </Link>
                <Link href="/services" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", letterSpacing: "0.08em", padding: "1rem 2.5rem", fontSize: "0.8rem" }} className="jost uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}