/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0B0F1A',
          secondary: '#141925',
          tertiary: '#1F2433',
          accent: '#2A3142',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
          accent: '#E5E7EB',
        },
        brand: {
          // Primary fire/heat orange (Firecrawl style)
          orange: {
            light: '#FF8C42',
            DEFAULT: '#FF6B35',
            dark: '#FF5722',
            darker: '#E64A19',
          },
          // Secondary fire colors
          red: {
            light: '#FF6B6B',
            DEFAULT: '#F44336',
            dark: '#E53935',
            darker: '#C62828',
          },
          amber: {
            light: '#FFCA28',
            DEFAULT: '#FFC107',
            dark: '#FFB300',
            darker: '#FFA000',
          },
          yellow: {
            light: '#FFEB3B',
            DEFAULT: '#FFD54F',
            dark: '#FFC107',
            darker: '#FFB300',
          },
          // Graphite (dark neutrals)
          graphite: {
            light: '#424242',
            DEFAULT: '#2D2D2D',
            dark: '#1E1E1E',
            darker: '#121212',
          },
          // Paper (light neutrals)
          paper: {
            light: '#FFFFFF',
            DEFAULT: '#F8F9FA',
            dark: '#F5F5F5',
            darker: '#EEEEEE',
          },
          slate: {
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
          },
        },
        text: {
          dark: {
            primary: '#F8FAFC',
            secondary: '#E2E8F0',
            tertiary: '#CBD5E1',
            muted: '#94A3B8',
          },
          light: {
            primary: '#0F172A',
            secondary: '#334155',
            tertiary: '#475569',
            muted: '#64748B',
          },
        },
        border: {
          dark: {
            DEFAULT: '#334155',
            light: '#475569',
          },
          light: {
            DEFAULT: '#E5E7EB',
            dark: '#D1D5DB',
          },
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        // Primary fire/heat gradients (Firecrawl style)
        'gradient-brand': 'linear-gradient(135deg, #FF6B35 0%, #FF5722 25%, #F44336 50%, #FFC107 75%, #FFD54F 100%)',
        'gradient-brand-alt': 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 33%, #FF5722 66%, #F44336 100%)',
        'gradient-fire': 'linear-gradient(135deg, #FF6B35 0%, #F44336 33%, #E53935 66%, #FFC107 100%)',
        'gradient-flame': 'linear-gradient(135deg, #FFD54F 0%, #FFC107 25%, #FF6B35 50%, #F44336 75%, #E53935 100%)',
        'gradient-heat': 'linear-gradient(135deg, #FF5722 0%, #FF6B35 50%, #FF8C42 100%)',

        // Warm fire gradients
        'gradient-sunset': 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FFCA28 100%)',
        'gradient-ember': 'linear-gradient(135deg, #E53935 0%, #F44336 50%, #FF5722 100%)',
        'gradient-amber': 'linear-gradient(135deg, #FFB300 0%, #FFC107 50%, #FFCA28 100%)',

        // Graphite/neutral gradients
        'gradient-graphite': 'linear-gradient(135deg, #121212 0%, #1E1E1E 50%, #2D2D2D 100%)',
        'gradient-paper': 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F5F5F5 100%)',
        'gradient-smoke': 'linear-gradient(135deg, #424242 0%, #2D2D2D 50%, #1E1E1E 100%)',

        // Multi-color fire gradients
        'gradient-inferno': 'linear-gradient(135deg, #FFD54F 0%, #FFC107 20%, #FF6B35 40%, #F44336 60%, #E53935 80%, #C62828 100%)',
        'gradient-blaze': 'linear-gradient(135deg, #FFEB3B 0%, #FF8C42 33%, #FF5722 66%, #E53935 100%)',
        'gradient-wildfire': 'linear-gradient(135deg, #FF6B35 0%, #F44336 25%, #FFC107 50%, #FF5722 75%, #E53935 100%)',

        // Utility gradients
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',

        // Mesh backgrounds with fire colors
        'mesh-gradient': 'radial-gradient(at 0% 0%, #FF6B3520 0px, transparent 50%), radial-gradient(at 100% 0%, #F4433620 0px, transparent 50%), radial-gradient(at 100% 100%, #FFC10720 0px, transparent 50%), radial-gradient(at 0% 100%, #FF572220 0px, transparent 50%)',
        'mesh-gradient-alt': 'radial-gradient(at 20% 30%, #FF6B3515 0px, transparent 50%), radial-gradient(at 80% 20%, #F4433615 0px, transparent 50%), radial-gradient(at 70% 80%, #FFC10715 0px, transparent 50%), radial-gradient(at 30% 70%, #FF572215 0px, transparent 50%)',
      },
      boxShadow: {
        // Glass effects with fire colors
        'glass': '0 8px 32px 0 rgba(255, 107, 53, 0.15), 0 4px 16px 0 rgba(244, 67, 54, 0.1)',
        'glass-light': '0 8px 32px 0 rgba(255, 107, 53, 0.08)',
        'glass-orange': '0 8px 32px 0 rgba(255, 107, 53, 0.15), 0 4px 16px 0 rgba(255, 140, 66, 0.1)',

        // Fire glow effects
        'glow-sm': '0 0 15px rgba(255, 107, 53, 0.4)',
        'glow': '0 0 25px rgba(255, 107, 53, 0.5), 0 0 50px rgba(244, 67, 54, 0.2)',
        'glow-lg': '0 0 40px rgba(255, 107, 53, 0.6), 0 0 80px rgba(244, 67, 54, 0.3)',

        // Color-specific fire glows
        'glow-orange': '0 0 30px rgba(255, 107, 53, 0.5), 0 0 60px rgba(255, 140, 66, 0.2)',
        'glow-red': '0 0 30px rgba(244, 67, 54, 0.5), 0 0 60px rgba(255, 107, 107, 0.2)',
        'glow-amber': '0 0 30px rgba(255, 193, 7, 0.5), 0 0 60px rgba(255, 202, 40, 0.2)',
        'glow-yellow': '0 0 30px rgba(255, 213, 79, 0.5), 0 0 60px rgba(255, 235, 59, 0.2)',

        // Multi-color fire glows
        'glow-fire': '0 0 20px rgba(255, 107, 53, 0.4), 0 0 40px rgba(244, 67, 54, 0.3), 0 0 60px rgba(255, 193, 7, 0.2)',
        'glow-inferno': '0 0 20px rgba(255, 87, 34, 0.5), 0 0 40px rgba(244, 67, 54, 0.3), 0 0 60px rgba(229, 57, 53, 0.2)',

        // Inner shadows
        'inner-glow': 'inset 0 0 20px rgba(255, 107, 53, 0.15)',
        'inner-glow-sm': 'inset 0 0 10px rgba(255, 107, 53, 0.1)',

        // Elevation system
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 8px 20px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.12)',
        'elevation-4': '0 16px 40px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.15)',
        'elevation-5': '0 24px 60px rgba(0, 0, 0, 0.12), 0 12px 30px rgba(0, 0, 0, 0.18)',

        // Colored elevations with fire theme
        'elevation-orange': '0 10px 30px rgba(255, 107, 53, 0.15), 0 5px 15px rgba(255, 140, 66, 0.1)',
        'elevation-red': '0 10px 30px rgba(244, 67, 54, 0.15), 0 5px 15px rgba(255, 107, 107, 0.1)',
        'elevation-amber': '0 10px 30px rgba(255, 193, 7, 0.15), 0 5px 15px rgba(255, 202, 40, 0.1)',
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
