module.exports = {
  purge: ["./src/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "not-quite-black": "#23272A",
        "blurple": "#5865F2",
        "new-blue": "#6665DD",
        "new-dark-blue": "#6665DD",
        "greyple": "#99AAB5",
        "dark-not-black": "#2C2F33"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
