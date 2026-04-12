"use client";

import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Fade in after slight delay on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.35); }
          70%  { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .wa-pulse { animation: wa-pulse 2.8s ease-out infinite; }
      `}</style>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: "0.65rem",
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          padding: hovered ? "0.75rem 1.25rem 0.75rem 0.9rem" : "0.9rem",
          borderRadius: "0",                         /* sharp — matches site aesthetic */
          transition: "padding 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        className="wa-pulse"
      >
        {/* WhatsApp SVG logo */}
        <svg
          width="22" height="22" viewBox="0 0 24 24" fill="currentColor"
          style={{ flexShrink: 0 }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M11.99 2C6.48 2 2 6.48 2 11.99c0 1.88.52 3.64 1.42 5.15L2 22l4.99-1.37C8.44 21.49 10.18 22 11.99 22 17.52 22 22 17.52 22 11.99S17.52 2 11.99 2z" fillOpacity="0.3" />
        </svg>

        {/* Label — slides in on hover */}
        <span
          style={{
            fontFamily: "'Jost', system-ui, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            maxWidth: hovered ? "120px" : "0px",
            opacity: hovered ? 1 : 0,
            transition: "max-width 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
            overflow: "hidden",
          }}
        >
          Chat with us
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;