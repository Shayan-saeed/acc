import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          light: '#D0D6B5',
          dark: '#8B95C9',
        },
        primary: {
          DEFAULT: '#D71B25',
          light: '#E34A53',
          dark: '#A3161C',
          50: '#FDEBEC',
          100: '#FBD7D9',
          200: '#F6AEB3',
          300: '#F2858D',
          400: '#EC5C67',
          500: '#D71B25',
          600: '#B0171F',
          700: '#8A1219',
          800: '#640D13',
          900: '#3E080C',
        },
        secondary: {
          DEFAULT: '#8B95C9',
          light: '#A0A9D6',
          dark: '#6E77A5',
          50: '#F2F4FA',
          100: '#E0E3F1',
          200: '#C7CCE5',
          300: '#AEB5D9',
          400: '#969ED0',
          500: '#8B95C9',
          600: '#6E77A5',
          700: '#525A80',
          800: '#363D5B',
          900: '#1B1F35',
        },
        text: {
          primary: '#D71B25',
          secondary: '#4B5358',
          muted: '#8B95C9',
          light: '#D0D6B5',
        },
        accent: {
          blue: '#8B95C9',
          teal: '#D0D6B5',
          green: '#A3B58C',
          orange: '#E39C6D',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F9FAFB',
          dark: '#D0D6B5',
        },
        border: {
          DEFAULT: '#4B5358',
          light: '#8B95C9',
          dark: '#363D5B',
        },
      },
      fontFamily: {
        grotesk: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        rajdhani: ['Rajdhani', ...defaultTheme.fontFamily.sans],
        orbitron: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(37, 99, 235, 0.08), 0 1.5px 8px 0 rgba(8, 145, 178, 0.08)',
        'glass-lg': '0 8px 64px 0 rgba(37, 99, 235, 0.12), 0 4px 16px 0 rgba(8, 145, 178, 0.12)',
        glow: '0 0 20px rgba(37, 99, 235, 0.3)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.4)',
      },
      backdropBlur: {
        glass: '8px',
        'glass-lg': '16px',
      },
       backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(8, 145, 178, 0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(37, 99, 235, 0.6), 0 0 40px rgba(8, 145, 178, 0.3)' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}; 