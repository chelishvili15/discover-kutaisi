/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Century751Custom", "Times New Roman", "Times", "serif"],
        body: ["Times New Roman", "Times", "serif"]
      },
      colors: {
        brandOrange: "#e49c24",
        brandOrangeLight: "#e99e31",
        brandDark: "#1a1a1a"
      },
      keyframes: {
        runTop: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        runLeft: {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        runRight: {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      },
      animation: {
        runTop: "runTop .8s ease-out both",
        runLeft: "runLeft .8s ease-out both",
        runRight: "runRight .8s ease-out both"
      }
    }
  },
  plugins: []
};
