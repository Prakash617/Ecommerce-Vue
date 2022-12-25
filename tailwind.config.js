/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    // prefix: 'tw-',
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}