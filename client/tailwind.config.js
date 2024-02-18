/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    // ...
    import("flowbite/plugin"),
  ],
};
