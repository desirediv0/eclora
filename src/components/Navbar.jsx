"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Facials", path: "/facials" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled && !mobileOpen;
  const useGreenLogo = !isHomePage || scrolled || mobileOpen;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .nl {
          font-family: 'Jost', system-ui, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          position: relative;
          padding-bottom: 2px;
          text-decoration: none;
          transition: color 0.3s;
        }
        .nl::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #C9A97A;
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nl:hover::after, .nl.on::after { width: 100%; }
        .nl.on { color: #C9A97A !important; }
        .book-btn {
          font-family: 'Jost', system-ui, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.6rem 1.5rem;
          transition: background 0.35s, border-color 0.35s, color 0.35s;
        }
        .book-btn:hover {
          background: #C9A97A !important;
          border-color: #C9A97A !important;
          color: #1C1C1A !important;
        }
      `}} />

      {/* ── NAV BAR ──────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isTransparent ? "transparent" : "rgba(250,247,242,0.97)",
          backdropFilter: isTransparent ? "none" : "blur(12px)",
          borderBottom: isTransparent ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E5DDD0",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="flex items-center justify-between h-16 md:h-[72px] max-w-7xl mx-auto px-5 sm:px-8">

          {/* ── LOGO ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center shrink-0">

            <Image
              src={useGreenLogo ? "/logo-green.png" : "/logo.png"}
              alt="Éclora Aesthetics & Laser Clinic"
              width={200}
              height={80}
              priority
              className="h-11 sm:h-12 md:h-14 w-auto object-contain"
              style={{
                maxWidth: "180px",

                transition: "filter 0.5s ease",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                (e.currentTarget.nextElementSibling).style.display = "block";
              }}
            />
            {/* Fallback text if image 404s */}
            <span
              className="hidden"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 300,
                letterSpacing: "0.18em",
                color: isTransparent ? "#fff" : "#3E4535",
                transition: "color 0.5s",
              }}
            >
              ÉCLORA
            </span>
          </Link>

          {/* ── DESKTOP LINKS ─────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`nl ${isActive ? "on" : ""}`}
                  style={{ color: isTransparent ? (isActive ? "#C9A97A" : "rgba(255,255,255,0.78)") : (isActive ? "#C9A97A" : "#3E4535") }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/book"
              className="book-btn"
              style={{
                background: isTransparent ? "rgba(255,255,255,0.1)" : "#3E4535",
                color: "#fff",
                border: isTransparent ? "1px solid rgba(255,255,255,0.3)" : "1px solid #3E4535",
              }}
            >
              Book Now
            </Link>
          </div>

          {/* ── HAMBURGER ─────────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-1"
            style={{ color: isTransparent ? "#fff" : "#3E4535" }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="m"
                  initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-48"
              style={{ background: "rgba(26,24,22,0.55)", backdropFilter: "blur(4px)", zIndex: 48 }}
            />

            {/* Drawer */}
            <motion.div
              key="dr"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 flex flex-col border-l border-[#E5DDD0]"
              style={{ width: "min(340px, 88vw)", zIndex: 49, background: "#FAF7F2" }}
            >

              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DDD0]">
                {/* Logo in drawer — larger for readability */}
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Éclora"
                    width={160}
                    height={64}
                    className="h-10 w-auto object-contain"
                    style={{ maxWidth: "140px" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      (e.currentTarget.nextSibling).style.display = "block";
                    }}
                  />
                  <span className="hidden"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 300, letterSpacing: "0.15em", color: "#3E4535" }}
                  >ÉCLORA</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-8 h-8" style={{ color: "#7A7568" }}>
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col px-6 pt-7 pb-4 gap-0.5 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
                  return (
                    <motion.div key={link.path}
                      initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055 + 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.path}
                        className="block py-2.5 border-b border-[#F0EBE2] last:border-0"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "clamp(1.55rem,5vw,1.85rem)",
                          fontWeight: 300,
                          color: isActive ? "#C9A97A" : "#3E4535",
                          letterSpacing: "0.02em",
                          textDecoration: "none",
                          transition: "color 0.25s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "#C9A97A"}
                        onMouseLeave={e => e.currentTarget.style.color = isActive ? "#C9A97A" : "#3E4535"}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA footer */}
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.45 }}
                className="px-6 pb-8 pt-4 border-t border-[#E5DDD0]"
              >
                <Link
                  href="/book"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center"
                  style={{
                    fontFamily: "'Jost', system-ui, sans-serif",
                    fontSize: "0.7rem", letterSpacing: "0.2em",
                    textTransform: "uppercase", fontWeight: 600,
                    padding: "1rem", background: "#3E4535", color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Book Consultation
                </Link>
                <p className="text-center mt-3" style={{ fontFamily: "'Jost', system-ui, sans-serif", fontSize: "0.72rem", color: "#7A7568" }}>
                  Or call{" "}
                  <a href="tel:+919876543210" style={{ color: "#C9A97A", textDecoration: "none" }}>
                    +91 98765 43210
                  </a>
                </p>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
