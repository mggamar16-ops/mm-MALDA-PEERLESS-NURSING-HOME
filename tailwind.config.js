/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0B3C5D",      // Deep Medical Blue
          navy: "#0A2540",      // Rich Header Blue
          accent: "#00A8CC",    // Soft Cyan Accent
          cyanBg: "#E6F4F8",    // Light Soft Cyan Tint
          green: "#059669",     // Medical Success Green
          offwhite: "#F8FAFC",  // Clean Off-White Background
          card: "#FFFFFF",      // Pure White Card
          dark: "#0F172A",      // Dark Slate text
          muted: "#475569",     // Muted Slate text
          border: "#E2E8F0"     // Soft Border
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      },
      boxShadow: {
        'apple-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'apple-md': '0 10px 30px -10px rgba(11, 60, 93, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'apple-lg': '0 20px 40px -15px rgba(11, 60, 93, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'apple-glow': '0 0 25px 0 rgba(0, 168, 204, 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
