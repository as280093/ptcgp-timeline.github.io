/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      display: ["Catamaran", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      background: "#202442",
      "background-secondary": "#25294A",
      item: "#2D325A",
      primary: "#4E7CFF",
      button: "#394076",
      rare: {
        from: "#D28FD6",
        to: "#665680",
      },
      legendary: {
        from: "#FFB13F",
        to: "#846332",
      },
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
    extend: {
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        rare: "0 0 0 3px rgba(173, 118, 176, 0.5)",
        legendary: "0 0 0 3px rgba(185, 129, 46, 0.5)",
        outline: "0 0 0 2px #4E7CFF",
        select: "0 20px 16px rgba(0, 0, 0, 0.5)",
      },
      spacing: {
        14: "3.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "month-gradient":
          "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(37, 41, 74, 100) 10%, rgb(37, 41, 74, 100) 90%, rgba(0, 0, 0, 0) 100%)",
        "modal-watermark":
          "linear-gradient(to top, rgba(37, 41, 74, 0.95), rgba(37, 41, 74, 0) 100%)",
      },
      backdropBlur: {
        modal: "6px",
      },
    },
  },
  plugins: [],
};
