module.exports = {
  purge: {
    mode: "all",
    content: ["./src/_includes/*.html", "./src/_posts/*.html", "./src/admin/*.html", "./src/blog/*.html"],
    options: {
      whitelist: [],
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
