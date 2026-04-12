/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F4",
        foreground: "#3A3A3A",
        primary: {
          DEFAULT: "#C9956C",
          strong: "#D4A27F",
          foreground: "#FFF9F4",
        },
        secondary: {
          DEFAULT: "#2C2C2C",
          foreground: "#FAF7F4",
        },
        accent: {
          DEFAULT: "#F3E4DC",
          foreground: "#3A3A3A",
        },
        muted: {
          DEFAULT: "#F4EBE4",
          foreground: "#6C6864",
        },
        card: {
          DEFAULT: "#FFFCFA",
          foreground: "#3A3A3A",
        },
        border: "#E1D2C7",
        input: "#E5DCD4",
        ring: "#C9956C",
      },
      fontFamily: {
        heading: ["Playfair Display", "Times New Roman", "Georgia", "serif"],
        body: ["Inter", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
