/* ─────────────────────────────────────────────────────────────────
   shared/EcloraForm.jsx
   Reusable primitives used by BookPage & ContactPage
───────────────────────────────────────────────────────────────── */

export const STYLES = `
  :root {
    --olive: #3E4535;
    --olive-dark: #262C1E;
    --gold: #C9A97A;
    --cream: #F6F1E9;
    --parchment: #FAF7F2;
    --ink: #1C1C1A;
    --muted: #7A7568;
    --border: #E0D8CC;
    --cf: 'Cormorant Garamond', Georgia, serif;
    --jost: 'Jost', system-ui, sans-serif;
  }
  .ef-label {
    font-family: var(--jost);
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    display: block;
    margin-bottom: 0.5rem;
  }
  .ef-input, .ef-select, .ef-textarea {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid var(--border);
    background: #fff;
    font-family: var(--jost);
    font-size: 0.85rem;
    color: var(--ink);
    outline: none;
    transition: border-color 0.3s;
    appearance: none;
    -webkit-appearance: none;
  }
  .ef-input::placeholder, .ef-textarea::placeholder { color: rgba(122,117,104,0.5); }
  .ef-input:focus, .ef-select:focus, .ef-textarea:focus { border-color: var(--gold); }
  .ef-textarea { resize: none; }
  .ef-select-wrap { position: relative; }
  .ef-select-wrap::after {
    content: '↓';
    position: absolute; right: 1rem; top: 50%; transform: translateY(-50%);
    color: var(--gold); font-size: 0.7rem; pointer-events: none;
    font-family: var(--jost);
  }
  .ef-btn {
    font-family: var(--jost);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 1rem 2.5rem;
    background: var(--olive);
    color: #fff;
    border: 1px solid var(--olive);
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
    width: 100%;
  }
  .ef-btn:hover { background: var(--gold); border-color: var(--gold); color: var(--ink); }
  .ef-row { display: grid; gap: 1.25rem; }
  .ef-row-2 { grid-template-columns: 1fr 1fr; }
  @media(max-width:600px){ .ef-row-2 { grid-template-columns: 1fr; } }
  .ef-field { display: flex; flex-direction: column; }
  .ef-success-mark {
    width: 48px; height: 48px;
    border: 1px solid var(--gold);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 2rem;
    color: var(--gold);
    font-size: 1.4rem;
    font-family: var(--cf);
  }
  .ef-info-row {
    display: flex; gap: 1.25rem; align-items: flex-start;
    padding: 1.5rem 0; border-bottom: 1px solid var(--border);
  }
  .ef-info-row:first-child { padding-top: 0; }
  .ef-info-row:last-child { border-bottom: none; }
  .ef-info-icon {
    width: 36px; height: 36px; flex-shrink: 0;
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    color: var(--gold);
    margin-top: 2px;
  }
  .breadcrumb-sep { color: rgba(255,255,255,0.2); margin: 0 0.5rem; }
`;

import { services, facials } from "@/data/services";

/* ── Field ─────────────────────────────────────────────────────── */
export const Field = ({ label, children }) => (
  <div className="ef-field">
    <label className="ef-label">{label}</label>
    {children}
  </div>
);

/* ── Service selector shared optgroups ─────────────────────────── */
export const ServiceOptions = () => (
  <>
    <option value="">Choose a treatment</option>
    <option value="General Consultation">General Consultation — First Visit</option>
    <optgroup label="Face & Laser">
      {services.slice(0, 8).map(s => (
        <option key={`s-${s.id}`} value={s.name}>{s.name}</option>
      ))}
    </optgroup>
    <optgroup label="Signature Facials">
      {facials.map(f => (
        <option key={`f-${f.id}`} value={f.name}>{f.name}</option>
      ))}
    </optgroup>
  </>
);

/* ── Success state ─────────────────────────────────────────────── */
export const SuccessPanel = ({ title, message, onReset, resetLabel }) => (
  <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
    <div className="ef-success-mark">✓</div>
    <h3 style={{ fontFamily: "var(--cf)", fontSize: "2rem", fontWeight: 300, color: "var(--olive)", marginBottom: "1rem" }}>{title}</h3>
    <p style={{ fontFamily: "var(--jost)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "360px", margin: "0 auto 2.5rem" }}>{message}</p>
    <button
      onClick={onReset}
      style={{
        fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.18em",
        textTransform: "uppercase", padding: "0.75rem 2rem",
        border: "1px solid var(--border)", background: "transparent",
        color: "var(--muted)", cursor: "pointer", transition: "all 0.3s",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
    >
      {resetLabel}
    </button>
  </div>
);

/* ── Page hero (shared) ────────────────────────────────────────── */
export const PageHero = ({ breadcrumb, title, accent, subtitle }) => (
  <section style={{ background: "var(--olive-dark)", position: "relative", overflow: "hidden" }} className="py-24 px-6">
    <svg className="pointer-events-none absolute inset-0 w-full h-full" style={{ opacity: 0.055 }} xmlns="http://www.w3.org/2000/svg">
      <filter id="gh"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
      <rect width="100%" height="100%" filter="url(#gh)" />
    </svg>
    <div style={{
      position: "absolute", right: "-1vw", bottom: "-8%",
      fontFamily: "var(--cf)", fontSize: "clamp(120px,16vw,240px)",
      color: "#fff", opacity: 0.025, lineHeight: 1, fontWeight: 300,
      pointerEvents: "none", userSelect: "none", fontStyle: "italic",
    }}>{accent}</div>

    <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <span style={{ fontFamily: "var(--jost)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
          {breadcrumb}
        </span>
      </div>
      <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
      <h1 style={{ fontFamily: "var(--cf)", fontWeight: 300, fontSize: "clamp(2.8rem,7vw,5rem)", color: "#fff", lineHeight: 1.05 }}>
        {title}<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>{accent}</em>
      </h1>
      <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1.5rem", fontSize: "0.92rem", lineHeight: 1.85, maxWidth: "400px", fontFamily: "var(--jost)" }}>{subtitle}</p>
    </div>
  </section>
);