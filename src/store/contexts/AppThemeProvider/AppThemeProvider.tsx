import { Provider } from '@/components/ui/provider';
import { createContext, ReactNode } from 'react';
import '../../../styles/theme.styl';

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  // Встановлюємо значення для теми
  const themes = {
    light: 'light', // Клас для світлої теми
    dark: 'dark', // Клас для темної теми
  };

  return (
    <ThemeContext.Provider value={undefined}>
      <Provider value={themes}>{children}</Provider>
    </ThemeContext.Provider>
  );
};
