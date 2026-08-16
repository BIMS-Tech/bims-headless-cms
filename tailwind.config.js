const tokens = require('@contentful/f36-tokens');
const { fontFamily } = require('tailwindcss/defaultTheme');

// BIMS brand tokens — Figma YhDoKvzYJLAM3ivEIRKKyr, page 178:26 "Final Design".
const bimsColors = {
  primary: '#055094',
  'primary-dark': '#044882', // hover state for primary surfaces
  text: '#051625',
  'light-blue': '#EEF7FC', // Figma token name: bg_light_blue
  background: '#F5F7FA',
};

const f36Colors = Object.entries(tokens).reduce((acc, [key, value]) => {
  // Filter Hex colors from the f36-tokens
  if (/^#[0-9A-F]{6}$/i.test(value)) {
    acc[key] = value;
  }

  return acc;
}, {});

// f36 names are camelCase (colorPrimary, gray800); BIMS names are lowercase/kebab,
// so the sets are disjoint today. Fail loudly if an f36 upgrade ever changes that,
// rather than silently letting the starter palette shadow a brand color.
const overlap = Object.keys(bimsColors).filter(key => key in f36Colors);
if (overlap.length > 0) {
  throw new Error(`BIMS color token(s) collide with @contentful/f36-tokens: ${overlap.join(', ')}`);
}

// BIMS tokens spread last: brand wins on any future tie.
const colors = { ...f36Colors, ...bimsColors };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      maxWidth: {
        '8xl': '90rem',
      },
      letterSpacing: {
        snug: '-0.011em',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      lineHeight: {
        tighter: 1.1,
      },
      boxShadow: {
        // Outer content cards.
        card: '0 0 20px 0 rgba(5,80,148,0.10)',
        // Buttons, icon tiles, logo tiles, nav pill.
        // NOTE: Figma specifies 0.08; the code this replaced used 0.05 at all 12
        // sites. Under review — if 0.08 reads too heavy, change it here only.
        control: '0 0 15px 0 rgba(5,80,148,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
