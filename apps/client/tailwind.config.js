/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ['lato', 'sans-serif']
      },
      animation: {
        bounceOnce: "bounce 2s linear 2",
        pulseOnce: "pulse 2s linear 2",
        pingOnce: "ping 2s linear 2",
      }
    },
  },
  plugins: [],
}

