/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "var(--primary)",
        "secondary" : "var(--secondary)",
        "success" : "var(--success)",
        "danger" : "var(--danger)",
        "info" : "var(--info)",
        "warning" : "var(--warning)",
      }
    },
  },
  plugins: [],
}

