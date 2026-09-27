import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { Link } from 'react-router';
import { RouterLink } from '../RouterLink';
import { useThemeContext } from '../../contexts/TaskContext/ThemeContext/useThemeContext';

export function Menu() {
  const { theme, toggleTheme } = useThemeContext();

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // não segue o link ex: href='#'
    toggleTheme();
  }

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to='/'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </Link>

      <RouterLink
        className={styles.menuLink}
        href='/history/'
        aria-label='Visualizar o histórico'
        title='Visualizar histórico'
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='/settings/'
        aria-label='Ir para as configurações'
        title='Ir para as configurações'
      >
        <SettingsIcon />
      </RouterLink>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar o tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}