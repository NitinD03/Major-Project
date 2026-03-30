/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0ff',
          100: '#ede9fe',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          900: '#6366f1',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          900: '#8b5cf6',
        },
        accent: {
          green: '#10b981',
          red: '#ef4444',
          900: '#ec4899',
        },
        background: {
          50: '#ffffff',
          900: '#fafbff',
        },
        foreground: {
          50: '#1e293b',
          900: '#1a1a2e',
        },
        surface: {
          900: '#ffffff',
        },
        muted: {
          50: '#94a3b8',
          900: '#e4e4e7',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-light': 'linear-gradient(to bottom, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}