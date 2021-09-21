module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.html"],
    options: {
      whitelist: 
      ["./src/keydrop/*.html", "./src/rebox/*.html"],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
