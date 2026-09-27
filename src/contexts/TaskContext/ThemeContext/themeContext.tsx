import { createContext } from 'react';

type AvaliableThemes = 'dark' | 'light';

type ThemeContextProps = {
  theme: AvaliableThemes;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

export type { AvaliableThemes };