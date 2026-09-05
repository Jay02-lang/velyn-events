import { create } from 'zustand';

export type Theme = 'coffee' | 'champagne' | 'sage' | 'blush' | 'sunshine' | 'ocean' | 'custom';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  customColors: {
    primary: string;
    background: string;
    text: string;
  };
  setCustomColor: (type: 'primary' | 'background' | 'text', color: string) => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'coffee',
  customColors: {
    primary: '#E65C00', // Brighter default orange/gold
    background: '#FFFFFF', // Bright white
    text: '#111111' // High contrast text
  },
  setTheme: (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme !== 'custom') {
      document.documentElement.style.removeProperty('--color-primary');
      document.documentElement.style.removeProperty('--color-background');
      document.documentElement.style.removeProperty('--color-text');
    } else {
      const { customColors } = get();
      document.documentElement.style.setProperty('--color-primary', customColors.primary);
      document.documentElement.style.setProperty('--color-onprimary', '#FFFFFF');
      document.documentElement.style.setProperty('--color-background', customColors.background + 'd9'); // 85% opacity
      document.documentElement.style.setProperty('--color-text', customColors.text);
    }
    set({ theme });
  },
  setCustomColor: (type: 'primary' | 'background' | 'text', color: string) => {
    set((state: ThemeState) => {
      const newColors = { ...state.customColors, [type]: color };
      document.documentElement.setAttribute('data-theme', 'custom');
      
      // Apply the color directly to the DOM for immediate preview
      if (type === 'background') {
        document.documentElement.style.setProperty(`--color-${type}`, color + 'd9');
      } else {
        document.documentElement.style.setProperty(`--color-${type}`, color);
      }
      
      return { theme: 'custom', customColors: newColors };
    });
  },
}));

// Initialize theme
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', 'coffee');
}
