// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        code: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
