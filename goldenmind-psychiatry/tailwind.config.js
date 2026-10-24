/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Goldenmind palette ---------------------------------------
        // NOTE: these are a close-match "golden / obsidian" palette built
        // to match the Golden Mind Psychiatry brand (warm gold on deep
        // charcoal-black). The reference URL renders client-side, so exact
        // hex values couldn't be scraped — swap these for devtools-exact
        // values any time, every usage below runs through these tokens.
        ink: {
          DEFAULT: "#0b0a08", // primary background, near-black warm charcoal
          soft: "#14110c", // raised surfaces / cards
          line: "#241f17", // hairline borders on dark
        },
        gold: {
          50: "#fbf3e1",
          100: "#f5e6c3",
          200: "#ecd49a",
          300: "#e0bd6c",
          400: "#d4ac56", // primary accent
          500: "#c89a3f", // button / glow core
          600: "#a87d2e",
          700: "#846023",
          900: "#3a2a12",
        },
        cream: "#f6efe0", // primary light text on dark
        muted: "#9c9281", // secondary text
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
