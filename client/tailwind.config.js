/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        extend: {},
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1420px"
        }
    }
};

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {}
    },
    plugins: []
};
