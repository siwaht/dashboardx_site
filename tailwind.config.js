/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0A0E1A',
          secondary: '#131825',
          tertiary: '#1E2433',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F8FAFB',
          tertiary: '#F0F4F8',
        },
        brand: {
          blue: {
            start: '#0F62FE',
            mid: '#2B7FFF',
            end: '#4D9BFF',
          },
          teal: {
            start: '#0891B2',
            mid: '#06B6D4',
            end: '#22D3EE',
          },
          emerald: {
            start: '#059669',
            mid: '#10B981',
            end: '#34D399',
          },
          coral: {
            start: '#F97316',
            mid: '#FB923C',
            end: '#FDBA74',
          },
          amber: {
            start: '#F59E0B',
            mid: '#FBBF24',
            end: '#FCD34D',
          },
          slate: {
            light: '#E2E8F0',
            DEFAULT: '#94A3B8',
            dark: '#64748B',
          },
        },
        text: {
          dark: {
            primary: '#F1F5F9',
            secondary: '#CBD5E1',
          },
          light: {
            primary: '#0F172A',
            secondary: '#475569',
          },
        },
        border: {
          dark: {
            DEFAULT: '#2E3A52',
            light: '#3B4A63',
          },
          light: {
            DEFAULT: '#E2E8F0',
            dark: '#CBD5E0',
          },
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0F62FE 0%, #06B6D4 50%, #10B981 100%)',
        'gradient-brand-warm': 'linear-gradient(135deg, #F97316 0%, #FBBF24 50%, #10B981 100%)',
        'gradient-brand-cool': 'linear-gradient(135deg, #0F62FE 0%, #06B6D4 50%, #22D3EE 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)',
        'gradient-coral': 'linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FDBA74 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #22D3EE 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #FB923C 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        'mesh-gradient': 'radial-gradient(at 0% 0%, #0F62FE 0px, transparent 50%), radial-gradient(at 100% 0%, #10B981 0px, transparent 50%), radial-gradient(at 100% 100%, #06B6D4 0px, transparent 50%), radial-gradient(at 0% 100%, #F97316 0px, transparent 50%)',
        'mesh-gradient-alt': 'radial-gradient(at 20% 30%, #0F62FE15 0px, transparent 50%), radial-gradient(at 80% 20%, #10B98115 0px, transparent 50%), radial-gradient(at 70% 80%, #F9731615 0px, transparent 50%), radial-gradient(at 30% 70%, #06B6D415 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 98, 254, 0.15), 0 4px 16px 0 rgba(6, 182, 212, 0.1)',
        'glass-light': '0 8px 32px 0 rgba(15, 98, 254, 0.08)',
        'glow-sm': '0 0 15px rgba(6, 182, 212, 0.4)',
        'glow': '0 0 25px rgba(6, 182, 212, 0.5), 0 0 50px rgba(16, 185, 129, 0.2)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.6), 0 0 80px rgba(16, 185, 129, 0.3)',
        'glow-blue': '0 0 30px rgba(15, 98, 254, 0.5), 0 0 60px rgba(43, 127, 255, 0.2)',
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.5), 0 0 60px rgba(52, 211, 153, 0.2)',
        'glow-coral': '0 0 30px rgba(249, 115, 22, 0.5), 0 0 60px rgba(251, 146, 60, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(6, 182, 212, 0.15)',
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 8px 20px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.12)',
        'elevation-4': '0 16px 40px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.15)',
        'elevation-5': '0 24px 60px rgba(0, 0, 0, 0.12), 0 12px 30px rgba(0, 0, 0, 0.18)',
      },
      backdropBlur: {
        'glass': '10px',
        'xl': '20px',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'fadeInScale': 'fadeInScale 0.6s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
