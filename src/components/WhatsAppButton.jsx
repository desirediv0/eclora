"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0   rgba(37,211,102,0.40); }
          70%  { box-shadow: 0 0 0 12px rgba(37,211,102,0);   }
          100% { box-shadow: 0 0 0 0   rgba(37,211,102,0);   }
        }
        .wa-btn { animation: wa-pulse 2.8s ease-out infinite; }
      `}</style>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="wa-btn fixed bottom-7 right-7 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          /* Fixed square when idle, expands on hover */
          width: hovered ? "auto" : "40px",
          height: "40px",
          minWidth: "40px",
          padding: hovered ? "0 1.25rem 0 1rem" : "0",
          gap: hovered ? "0.55rem" : "0",
          whiteSpace: "nowrap",
          transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), padding 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {/* WhatsApp icon — always perfectly centered when idle */}
        <FaWhatsapp size={30} style={{ flexShrink: 0 }} />

        {/* Label — slides in on hover */}
        <span
          className="overflow-hidden"
          style={{
            fontFamily: "'Jost', system-ui, sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            maxWidth: hovered ? "110px" : "0px",
            opacity: hovered ? 1 : 0,
            transition: "max-width 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease",
          }}
        >
          Chat with us
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;