"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getFacialSvg, getServiceSvg } from "@/data/services";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const Grain = ({ opacity = 0.04 }) => (
  <svg className="pointer-events-none absolute inset-0 w-full h-full z-[1]" style={{ opacity }} xmlns="http://www.w3.org/2000/svg">
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);

const Marquee = () => {
  const items = ["Laser Hair Reduction", "Chemical Peels", "HIFU Lifting", "QR678 Hair Therapy", "Carbon Laser Toning", "Microneedling", "Signature Glow Facials", "Botox & Fillers"];
  return (
    <div className="overflow-hidden border-y border-[#D4B896]/30 py-3 bg-[#F7F3EC] relative">
      <div className="flex gap-10 whitespace-nowrap animate-marquee-run">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[#3E4535] text-[0.6rem] tracking-[0.22em] uppercase flex items-center gap-4" style={{ fontFamily: "var(--jost)" }}>
            {item}<span className="text-[#C9A97A] text-base">◆</span>
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} .animate-marquee-run{animation:mq 28s linear infinite;}` }} />
    </div>
  );
};

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

Object.values(servicesTab).forEach((group) => {
  group.forEach((service) => {
    service.svg = getServiceSvg(service.title) ?? getFacialSvg(service.title);
  });
});

const facials = [
  { num: "01", name: "Éclora Signature Glow", dur: "60 min", desc: "Brightening actives + LED for instant radiance" },
  { num: "02", name: "Diamond Elixir Facial", dur: "75 min", desc: "Diamond exfoliation with rich elixir infusion" },
  { num: "03", name: "Skin Revival Therapy", dur: "60 min", desc: "Barrier repair and deep skin restoration" },
  { num: "04", name: "Platinum Luxe Facial", dur: "90 min", desc: "Platinum-infused lifting and rejuvenation" },
  { num: "05", name: "Elite Aura Facial", dur: "75 min", desc: "Bespoke multi-step personalized experience" },
  { num: "06", name: "Acne Defense Therapy", dur: "60 min", desc: "Deep cleanse and anti-bacterial acne control" }
];

facials.forEach((facial) => {
  facial.svg = getFacialSvg(facial.name);
});

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

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Face & Laser");
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };



  return (
    <>
      <FontLoader />
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --olive:#3E4535; --olive-dark:#262C1E; --gold:#C9A97A;
          --cream:#F6F1E9; --parchment:#FAF7F2; --ink:#1C1C1A; --muted:#7A7568;
          --cf:'Cormorant Garamond',Georgia,serif; --jost:'Jost',system-ui,sans-serif;
        }
        .cf{font-family:var(--cf);}
        .jost{font-family:var(--jost);}
        .e-rule{display:block;width:40px;height:1px;background:var(--gold);}
        .tab-on{background:var(--olive);color:#fff;border:1px solid var(--olive);}
        .tab-off{background:transparent;color:var(--olive);border:1px solid #D4CAB8;}
        .hide-scroll::-webkit-scrollbar{display:none;}
        .hide-scroll{-ms-overflow-style:none;scrollbar-width:none;}
        .home-svc-icon{width:64px;height:64px;border-radius:18px;border:1px solid rgba(201,169,122,0.24);background:linear-gradient(180deg,rgba(201,169,122,0.08),rgba(201,169,122,0.02));display:flex;align-items:center;justify-content:center;transition:transform 0.35s ease,border-color 0.35s ease,background 0.35s ease;}
        .svc-row:hover .home-svc-icon{transform:translateY(-2px);border-color:rgba(201,169,122,0.45);background:linear-gradient(180deg,rgba(201,169,122,0.16),rgba(201,169,122,0.05));}
        .home-facial-icon{width:68px;height:68px;border-radius:20px;border:1px solid rgba(201,169,122,0.22);background:linear-gradient(180deg,rgba(201,169,122,0.08),rgba(201,169,122,0.02));display:flex;align-items:center;justify-content:center;transition:transform 0.35s ease,border-color 0.35s ease,background 0.35s ease;}
        .group:hover .home-facial-icon{transform:translateY(-2px);border-color:rgba(201,169,122,0.45);background:linear-gradient(180deg,rgba(201,169,122,0.16),rgba(201,169,122,0.05));}
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

      <div className="w-full" style={{ fontFamily: "var(--jost)", background: "var(--parchment)" }}>

        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative flex flex-col justify-center lg:justify-end overflow-hidden min-h-screen pt-24  pb-12 sm:pb-20 lg:pb-32"
          style={{ background: "var(--olive-dark)" }}
        >
          <Grain opacity={0.06} />

          {/* Watermark — positioned bottom-right on desktop */}
          <motion.div
            style={{ y: heroY }}
            className="cf absolute right-[-5vw] bottom-[-10%] select-none pointer-events-none z-0 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.045 }}
            transition={{ duration: 2 }}
          >
            <span className="text-white" style={{ fontSize: "clamp(300px,40vw,650px)", lineHeight: 1, fontWeight: 300 }}>É</span>
          </motion.div>

          {/* Watermark — mobile version (top right) */}
          <motion.div className="cf absolute right-[-2vw] top-[8%] select-none pointer-events-none z-0 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ duration: 2 }}>
            <span className="text-white" style={{ fontSize: "clamp(180px,38vw,400px)", lineHeight: 1, fontWeight: 300 }}>É</span>
          </motion.div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex flex-col items-center sm:items-start text-center sm:text-left">
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center sm:items-start">

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <span className="e-rule" />
                <span className="jost uppercase tracking-[0.2em]" style={{ color: "var(--gold)", fontSize: "0.62rem" }}>
                  Delhi's Premier Aesthetic Clinic
                </span>
                <span className="e-rule sm:hidden" />
              </motion.div>

              <motion.h1 variants={fadeUp} className="cf text-white" style={{ fontSize: "clamp(2.5rem,9vw,6.5rem)", fontWeight: 300, lineHeight: 1.03, letterSpacing: "-0.01em" }}>
                Reveal Your<br />
                Most <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Radiant</em><br />
                Self
              </motion.h1>

              <motion.p variants={fadeUp} className="jost mt-4 sm:mt-5" style={{ color: "#B8B0A4", fontSize: "clamp(0.85rem,2.5vw,1rem)", maxWidth: "420px", lineHeight: 1.8 }}>
                Advanced laser treatments, luxury facials &amp; expert dermatology —
                meticulously personalised for your unique skin.
              </motion.p>

              <motion.div variants={fadeUp} className="flex gap-3 justify-center sm:justify-start flex-wrap mt-8 sm:mt-10">
                <Link href="/book" className="jost uppercase font-semibold hover:opacity-90 transition-opacity" style={{ background: "var(--gold)", color: "var(--ink)", letterSpacing: "0.1em", fontSize: "0.72rem", padding: "0.875rem 2.25rem", display: "inline-block" }}>
                  Book Now
                </Link>
                <Link href="/services" className="jost uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff", letterSpacing: "0.1em", fontSize: "0.72rem", padding: "0.875rem 1.75rem", display: "inline-block" }}>
                  View Services
                </Link>
              </motion.div>
            </motion.div>

            {/* ── Mobile stats (shown below lg) ── */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-12 mt-10 md:mt-16 lg:hidden w-full"
            >
              {[["46+", "Treatments"], ["10+", "Years"], ["2000+", "Clients"], ["5 ★", "Rated"]].map(([n, l]) => (
                <div key={l} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="cf text-white" style={{ fontSize: "clamp(1.5rem,4vw,2rem)", fontWeight: 300, lineHeight: 1 }}>{n}</div>
                  <div className="jost uppercase mt-2" style={{ fontSize: "0.55rem", letterSpacing: "0.22em", color: "var(--gold)" }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Desktop stats — absolute right, hidden on mobile ── */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 1 }}
            className="absolute right-8 lg:right-16 bottom-24 hidden lg:flex flex-col gap-10 text-right z-10"
          >
            {[["2000+", "Clients"], ["46+", "Treatments"], ["10+", "Years"], ["5 ★", "Rated"]].map(([n, l]) => (
              <div key={l}>
                <div className="cf text-white" style={{ fontSize: "2.8rem", fontWeight: 300, lineHeight: 1 }}>{n}</div>
                <div className="jost uppercase mt-2" style={{ color: "var(--gold)", fontSize: "0.62rem", letterSpacing: "0.25em" }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ══ MARQUEE ══════════════════════════════════════════ */}
        <Marquee />

        {/* ══ PHILOSOPHY ════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 text-center relative overflow-hidden" style={{ background: "var(--parchment)" }}>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
            className="mx-auto mb-8"
            style={{ height: "1px", background: "var(--gold)", transformOrigin: "left", maxWidth: "60px" }}
          />
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="cf mx-auto"
            style={{ fontSize: "clamp(1.2rem,3.5vw,2.8rem)", fontWeight: 300, fontStyle: "italic", color: "var(--olive)", maxWidth: "760px", lineHeight: 1.5 }}
          >
            "We combine the science of dermatology with the art of personalised care — because your skin deserves nothing less than exceptional."
          </motion.blockquote>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="jost uppercase mt-5" style={{ color: "var(--gold)", fontSize: "0.62rem", letterSpacing: "0.22em" }}
          >
            — Éclora Aesthetics &amp; Laser Clinic, Delhi
          </motion.div>
        </section>

        {/* ══ EXPERTISE ═════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 border-t border-[#E5DDD0]" style={{ background: "var(--cream)" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
              <span className="e-rule mb-5 block" />
              <h2 className="cf" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                Why patients choose Éclora
              </h2>
            </motion.div>

            <div className="border border-[#D9D0C4]">
              {expertise.map((item, i) => {
                const isRight = i % 2 === 1;
                const isBottom = i >= 2;
                return (
                  <motion.div key={item.n} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1, duration: 0.7 }}
                    className="group flex gap-6 sm:gap-8 p-6 sm:p-10 hover:bg-white transition-colors duration-500 relative overflow-hidden"
                    style={{
                      borderRight: isRight ? "none" : undefined,
                      borderBottom: isBottom ? "none" : "1px solid #D9D0C4",
                    }}
                  >
                    <div className="cf shrink-0 text-[0.72rem] mt-0.5" style={{ color: "var(--gold)", letterSpacing: "0.1em" }}>{item.n}</div>
                    <div>
                      <h3 className="cf" style={{ fontSize: "clamp(1.05rem,2vw,1.4rem)", fontWeight: 400, color: "var(--ink)", marginBottom: "0.5rem" }}>{item.title}</h3>
                      <p className="jost text-sm" style={{ color: "var(--muted)", lineHeight: 1.75 }}>{item.d}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--gold)" }} />
                  </motion.div>
                );
              })}
            </div>
            <style dangerouslySetInnerHTML={{
              __html: `
              @media(min-width:768px){
                .exp-wrap{display:grid;grid-template-columns:1fr 1fr;}
                .exp-wrap > div:nth-child(2n-1){border-right:1px solid #D9D0C4;}
                .exp-wrap > div:nth-child(n+3){border-bottom:none;}
                .exp-wrap > div{border-bottom:1px solid #D9D0C4;}
                .exp-wrap > div:nth-child(3),.exp-wrap > div:nth-child(4){border-bottom:none;}
              }
            `}} />
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 border-t border-[#E5DDD0]" style={{ background: "var(--parchment)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-5 mb-8 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="e-rule mb-4 block" />
                <h2 className="cf" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>Our Treatments</h2>
                <p className="jost mt-2 text-sm" style={{ color: "var(--muted)" }}>46+ advanced procedures for face, skin &amp; hair</p>
              </div>
              <div className="flex gap-2 overflow-x-auto hide-scroll pb-0.5 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
                {["Face & Laser", "Hair Treatments", "Facials"].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`jost text-[0.62rem] uppercase tracking-widest px-4 sm:px-6 py-2.5 transition-all duration-300 shrink-0 ${activeTab === tab ? "tab-on" : "tab-off"}`}
                  >{tab}</button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className="svc-grid border border-[#E0D8CC]">
                  {servicesTab[activeTab].map((s, i) => {
                    const total = servicesTab[activeTab].length;
                    return (
                      <div key={s.id} className="svc-row group p-6 sm:p-8 hover:bg-white transition-colors relative cursor-pointer"
                        style={{ borderBottom: i < total - (total % 3 === 0 ? 3 : total % 3) ? "1px solid #E0D8CC" : "none" }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          {s.svg && (
                            <div className="home-svc-icon shrink-0">
                              <Image
                                src={s.svg}
                                alt={s.title}
                                width={38}
                                height={38}
                                className="h-9 w-9 object-contain"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="jost uppercase mb-3" style={{ color: "var(--gold)", letterSpacing: "0.15em", fontSize: "0.58rem" }}>{String(s.id).padStart(2, "0")}</div>
                            <h3 className="cf mb-2" style={{ fontSize: "clamp(1rem,2vw,1.2rem)", fontWeight: 400, color: "var(--ink)" }}>{s.title}</h3>
                          </div>
                        </div>
                        <p className="jost text-sm" style={{ color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
                        <Link href="/services" className="jost uppercase inline-block mt-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)", letterSpacing: "0.12em", fontSize: "0.68rem" }}>
                          Learn more →
                        </Link>
                        <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--gold)" }} />
                      </div>
                    );
                  })}
                </div>
                {/* Column borders via stylesheet — cleaner than inline */}
                <style dangerouslySetInnerHTML={{
                  __html: `
                  @media(min-width:768px) and (max-width:1023px){
                    .svc-inner > div:nth-child(2n-1){border-right:1px solid #D9D0C4;}
                    .svc-inner > div:nth-child(n+5){border-bottom:none;}
                  }
                  @media(min-width:1024px){
                    .svc-inner > div:nth-child(3n-1){border-right:1px solid #D9D0C4;}
                    .svc-inner > div:nth-child(3n-2){border-right:1px solid #D9D0C4;}
                    .svc-inner > div:nth-last-child(-n+3){border-bottom:none;}
                  }
                `}} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 sm:mt-12 text-center">
              <Link href="/services" className="jost uppercase hover:text-[var(--gold)] transition-colors" style={{ color: "var(--olive)", borderBottom: "1px solid var(--gold)", paddingBottom: "3px", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
                View all 46+ treatments
              </Link>
            </div>
          </div>
        </section>

        {/* ══ SIGNATURE FACIALS ════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-0 sm:px-8 relative overflow-hidden border-t border-[#2E3527]" style={{ background: "var(--olive)" }}>
          <Grain opacity={0.05} />
          <div className="max-w-6xl mx-auto relative z-10 px-5 sm:px-0">
            <div className="flex items-end justify-between mb-8 sm:mb-14 flex-wrap gap-4">
              <div>
                <span className="e-rule mb-5 block" style={{ background: "var(--gold)" }} />
                <h2 className="cf text-white" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300 }}>
                  Signature Facial<br /><em style={{ color: "var(--gold)" }}>Collection</em>
                </h2>
              </div>
              <Link href="/facials" className="jost uppercase text-[0.68rem]" style={{ color: "var(--gold)", borderBottom: "1px solid var(--gold)", paddingBottom: "3px", letterSpacing: "0.15em" }}>
                Explore all →
              </Link>
            </div>
          </div>
          {/* Cards — full bleed scroll on mobile */}
          <div className="flex gap-4 overflow-x-auto hide-scroll pb-4 px-5 sm:px-8 sm:max-w-6xl sm:mx-auto">
            {facials.map((f, i) => (
              <motion.div key={f.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.7 }}
                className="group shrink-0 p-6 sm:p-8 hover:border-[var(--gold)] transition-all duration-500 cursor-pointer relative"
                style={{ minWidth: "clamp(230px,70vw,290px)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="jost uppercase mb-5" style={{ color: "var(--gold)", letterSpacing: "0.2em", fontSize: "0.58rem" }}>{f.num}</div>
                <div className="flex items-start gap-4 mb-4">
                  {f.svg && (
                    <div className="home-facial-icon shrink-0">
                      <Image
                        src={f.svg}
                        alt={f.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain invert"
                      />
                    </div>
                  )}
                  <h3 className="cf text-white" style={{ fontSize: "clamp(1.05rem,2.5vw,1.3rem)", fontWeight: 300, lineHeight: 1.3 }}>{f.name}</h3>
                </div>
                <div className="jost uppercase mb-3" style={{ color: "var(--gold)", letterSpacing: "0.15em", fontSize: "0.62rem" }}>{f.dur}</div>
                <p className="jost mb-6 text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{f.desc}</p>
                <Link href="/facials" className="jost uppercase opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)", letterSpacing: "0.12em", fontSize: "0.65rem" }}>
                  Book facial →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 border-t border-[#E5DDD0]" style={{ background: "var(--cream)" }}>
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16 text-center">
              <span className="e-rule mx-auto mb-5 block" />
              <h2 className="cf" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                Your journey to glowing skin
              </h2>
            </motion.div>

            {[
              { n: "01", t: "Book a Consultation", d: "Share your skin and hair goals with our specialist." },
              { n: "02", t: "Receive Your Custom Plan", d: "A personalised treatment protocol designed exclusively for you." },
              { n: "03", t: "Transform & Glow", d: "Experience visible, lasting results that speak for themselves." }
            ].map((step, i) => (
              <motion.div key={step.n}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group flex items-start gap-5 sm:gap-10 py-6 sm:py-10 border-b border-[#D9D0C4] last:border-0"
              >
                <div className="cf shrink-0 w-10 sm:w-14 text-right" style={{ fontSize: "clamp(1.6rem,4vw,2.5rem)", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{step.n}</div>
                <div className="pt-0.5">
                  <h3 className="cf" style={{ fontSize: "clamp(1.1rem,2.5vw,1.6rem)", fontWeight: 400, color: "var(--ink)", marginBottom: "0.35rem" }}>{step.t}</h3>
                  <p className="jost text-sm" style={{ color: "var(--muted)", lineHeight: 1.75 }}>{step.d}</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)" }}>→</div>
              </motion.div>
            ))}

            <div className="mt-10 sm:mt-16 text-center">
              <Link href="/book" className="jost uppercase hover:opacity-90 transition-opacity inline-block" style={{ background: "var(--olive)", color: "#fff", letterSpacing: "0.08em", padding: "0.875rem 2.5rem", fontSize: "0.72rem" }}>
                Begin Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 border-t border-[#E5DDD0] relative overflow-hidden" style={{ background: "var(--parchment)" }}>
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10 sm:mb-14">
              <span className="e-rule mb-5 block" />
              <h2 className="cf" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>What our clients say</h2>
            </motion.div>

            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.7 }}>
                  <div className="cf" style={{ fontSize: "4rem", color: "var(--gold)", lineHeight: 0.5, marginBottom: "1.25rem", opacity: 0.4 }}>"</div>
                  <blockquote className="cf" style={{ fontSize: "clamp(1.1rem,3vw,2.2rem)", fontWeight: 300, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.55 }}>
                    {testimonials[activeTestimonial].q}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-7 sm:mt-10">
                    <span style={{ width: "28px", height: "1px", background: "var(--gold)", display: "block", flexShrink: 0 }} />
                    <div>
                      <div className="jost font-semibold" style={{ fontSize: "0.85rem", color: "var(--ink)" }}>{testimonials[activeTestimonial].n}</div>
                      <div className="jost uppercase mt-0.5" style={{ fontSize: "0.62rem", color: "var(--gold)", letterSpacing: "0.12em" }}>{testimonials[activeTestimonial].t}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-3 mt-7 sm:mt-10">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  style={{ width: i === activeTestimonial ? "28px" : "8px", height: "2px", background: i === activeTestimonial ? "var(--gold)" : "#C8C0B4", transition: "all 0.4s ease", border: "none", padding: 0, cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════ */}
        <section id="faq" className="py-14 sm:py-20 px-5 sm:px-8 border-t border-[#E5DDD0]" style={{ background: "var(--cream)" }}>
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
              <span className="e-rule mb-5 block" />
              <h2 className="cf" style={{ fontSize: "clamp(1.7rem,4vw,3.2rem)", fontWeight: 300, color: "var(--olive)" }}>
                Frequently asked questions
              </h2>
            </motion.div>

            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: "1px solid #D9D0C4" }}>
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-start gap-4 py-5 sm:py-6 text-left"
                >
                  <span className="cf" style={{ fontSize: "clamp(0.92rem,2vw,1.1rem)", fontWeight: 400, color: "var(--ink)" }}>{faq.q}</span>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem", flexShrink: 0, transition: "transform 0.3s", transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block", marginTop: "3px" }}>+</span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                      <p className="jost text-sm pb-5" style={{ color: "var(--muted)", lineHeight: 1.8 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-32 px-5 sm:px-8 text-center relative overflow-hidden" style={{ background: "var(--olive-dark)" }}>
          <Grain opacity={0.07} />
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <span className="jost uppercase block mb-6" style={{ color: "var(--gold)", fontSize: "0.6rem", letterSpacing: "0.3em" }}>Begin Your Transformation</span>
              <h2 className="cf text-white" style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 300, lineHeight: 1.2 }}>
                Ready for your most<br />
                <em style={{ color: "var(--gold)" }}>radiant chapter?</em>
              </h2>
              <p className="jost mt-4 mx-auto" style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.85rem,2vw,0.95rem)", lineHeight: 1.8, maxWidth: "400px" }}>
                Book your consultation today and step into the skin you deserve.
              </p>
              <div className="flex gap-3 sm:gap-6 justify-center flex-wrap mt-8 sm:mt-12">
                <Link href="/book" className="jost uppercase font-semibold hover:opacity-90 transition-opacity overflow-hidden relative" style={{ background: "var(--gold)", color: "var(--ink)", letterSpacing: "0.1em", padding: "0.875rem 2.5rem", fontSize: "0.72rem", display: "inline-block", boxShadow: "0 4px 15px rgba(201, 169, 122, 0.2)" }}>
                  Book Now
                </Link>
                <Link href="/services" className="jost uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", letterSpacing: "0.1em", padding: "0.875rem 1.75rem", fontSize: "0.72rem", display: "inline-block" }}>
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
