import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/themeContext';

export function useThemeContext() {
  return useContext(ThemeContext);
}