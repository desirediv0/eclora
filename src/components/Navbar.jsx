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

const Navbar = ({ onBookOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we're on a dark-hero page (home) to start transparent
  const isDarkHero = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // When mobile menu open, prevent body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isTransparent = isDarkHero && !scrolled && !mobileOpen;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .nav-link-eclora {
          font-family: 'Jost', system-ui, sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link-eclora::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #C9A97A;
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link-eclora:hover::after,
        .nav-link-eclora.active::after {
          width: 100%;
        }
        .nav-link-eclora.active {
          color: #C9A97A;
        }
      `}} />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease, border-color 0.5s ease",
          background: isTransparent ? "transparent" : "rgba(250,247,242,0.97)",
          backdropFilter: isTransparent ? "none" : "blur(12px)",
          borderBottom: isTransparent ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E5DDD0",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          className="flex items-center justify-between h-16 md:h-20"
        >
          {/* ── Logo ────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Image
                src="/logo.jpeg"
                alt="Éclora"
                width={110}
                height={52}
                className="h-9 md:h-10 w-auto object-contain"
                style={{
                  borderRadius: "2px",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                style={{
                  display: "none", // Only shown if image errors
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  letterSpacing: "0.18em",
                  color: isTransparent ? "#fff" : "#3E4535",
                  transition: "color 0.5s ease",
                }}
              >
                ÉCLORA
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`nav-link-eclora ${isActive ? "active" : ""}`}
                  style={{
                    color: isTransparent
                      ? isActive ? "#C9A97A" : "rgba(255,255,255,0.75)"
                      : isActive ? "#C9A97A" : "#3E4535",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/book"
              style={{
                fontFamily: "'Jost', system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "0.6rem 1.6rem",
                background: isTransparent ? "rgba(255,255,255,0.1)" : "#3E4535",
                color: isTransparent ? "#fff" : "#fff",
                border: isTransparent ? "1px solid rgba(255,255,255,0.3)" : "1px solid #3E4535",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A97A";
                e.currentTarget.style.borderColor = "#C9A97A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isTransparent ? "rgba(255,255,255,0.1)" : "#3E4535";
                e.currentTarget.style.borderColor = isTransparent ? "rgba(255,255,255,0.3)" : "#3E4535";
              }}
            >
              Book Now
            </Link>
          </div>

          {/* ── Mobile Toggle ────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9"
            style={{ color: isTransparent ? "#fff" : "#3E4535" }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 48,
                background: "rgba(30,28,26,0.5)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "min(320px, 85vw)", zIndex: 49,
                background: "var(--parchment, #FAF7F2)",
                borderLeft: "1px solid #E5DDD0",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Drawer header */}
              <div
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  borderBottom: "1px solid #E5DDD0",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.4rem", fontWeight: 300, letterSpacing: "0.15em",
                    color: "#3E4535",
                  }}
                >
                  ÉCLORA
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "#7A7568", padding: "4px" }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div style={{ flex: 1, padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {navLinks.map((link, i) => {
                  const isActive =
                    link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.path}
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "1.8rem", fontWeight: 300,
                          color: isActive ? "#C9A97A" : "#3E4535",
                          display: "block", padding: "0.5rem 0",
                          borderBottom: "1px solid transparent",
                          transition: "color 0.3s, border-color 0.3s",
                          letterSpacing: "0.02em",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A97A"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#C9A97A" : "#3E4535"; }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ padding: "1.5rem" }}
              >
                <div style={{ height: "1px", background: "#E5DDD0", marginBottom: "1.5rem" }} />
                <Link
                  href="/book"
                  style={{
                    display: "block", textAlign: "center",
                    fontFamily: "'Jost', system-ui, sans-serif",
                    fontSize: "0.72rem", letterSpacing: "0.2em",
                    textTransform: "uppercase", fontWeight: 500,
                    padding: "1rem", background: "#3E4535", color: "#fff",
                  }}
                >
                  Book Consultation
                </Link>
                <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.75rem", color: "#7A7568", fontFamily: "'Jost', system-ui, sans-serif" }}>
                  Or call us on{" "}
                  <a href="tel:+911234567890" style={{ color: "#C9A97A" }}>+91 12345 67890</a>
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