import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        vendor: {
          mainBg: "#483B1D",
          card: {
            title: "#525252",
            price: "292929",
            subTitle: "#676767",
          },
        },
        kbackground: {
          card: "#F8F8F8",
        },
        kinput: {
          bg: "#F3F3F3",
        },
        filter: {
          gray: "#B6B6B6",
          purple: "#A00DB8",
          blue: "#022D80",
        },
        blue: {
          light: "#EAF6FE",
        },
        kborder: {
          default: "#525252",
        },
        kaccent: "#D7A022",
        ksecondary: "#242424",
        kTextWhite: "#FFFFFF",
        kgray: {
          dark: "#515151",
          light: "#A5A5A5",
          default: "#6C7275",
          text: "#6B7280",
          icon: "#CBCBCB",
          bg: "#f7f7f7",
          tableBg: "#CACACA",
          hr: "#B1B5C3",
          iconBg: "#C6C6C6",
          blue: "#8B94B2",
          progressBg: "#A0A0A0",
        },
        kprimary: {
          50: "#fbf9eb",
          100: "#f7f0ca",
          200: "#f0e098",
          300: "#e7c85d",
          400: "#dfb130",
          500: "#d7a024",
          600: "#b3781b",
          700: "#8f5719",
          800: "#77461c",
          900: "#663b1d",
          950: "#3b1e0d",
          header: "#483B1D",
        },
        green: {
          light: "#475156",
        },
        kgold: {
          default: "#D7A022",
          light: "#FBF5E9",
        },
        kwhite: {
          default: "#FFFFFF",
          background: "#f8f8f8",
          gray: "#C9C9C9",
          placeholderText: "#8D8D8D",
          inputBg: "#f3f3f3",
        },
        kblack: {
          default: "#000000",
          text: "#121212",
          review: "#141718",
          circle: "#1A1A1A",
        },
        kslate: {
          default: "#133240",
        },
        kpurple: {
          default: "#121069",
          lifght: "#6F6C90",
        },
        kgreen: {
          default: "#6AAE1E",
          success: "#57D10C",
        },
        kred: {
          default: "#EA0000",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
} satisfies Config;

export default config;
