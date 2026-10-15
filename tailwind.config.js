/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:   '#ede8df',
        'cream-dark': '#e2ddd4',
        ink:     '#0f0e0c',
        'ink-soft': '#1a1916',
        red:     '#c8392b',
        muted:   '#7a7670',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
