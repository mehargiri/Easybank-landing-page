/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'custom-md': '850px',
        'custom-lg': '1440px',
      },
      colors: {
        primary: {
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)',
        },
        neutral: {
          'grayish-blue': 'hsl(233, 8%, 62%)',
          'light-grayish-blue': 'hsl(220, 16%, 96%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)',
        },
        active: {
          button: '#82deb4',
        },
      },
      backgroundImage: {
        currency: 'url(/src/assets/image-currency.jpg)',
        confetti: 'url(/src/assets/image-confetti.jpg)',
        airplane: 'url(/src/assets/image-plane.jpg)',
        restaurant: 'url(/src/assets/image-restaurant.jpg)',
        desktop: 'url(/src/assets/bg-intro-desktop.svg)',
        mobile: 'url(/src/assets/bg-intro-mobile.svg)',
        mockup: 'url(/src/assets/image-mockups.png)',
      },
    },
  },
  plugins: [],
};
