import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme = 
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //não segue o link ex: href='#'

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]); //executa só quando o valor de theme muda

  return (
  <nav className={styles.menu}>
    <a 
      className={styles.menuLink} 
      href='#' 
      aria-label='Ir para a Home'
      title='Ir para a Home'>
      <HouseIcon/>
    </a>

    <a 
      className={styles.menuLink} 
      href='#' 
      aria-label='Visualizar o histórico'
      title='Visualizar histórico'> 
      <HistoryIcon/>
    </a>

    <a 
      className={styles.menuLink} 
      href='#' 
      aria-label='Ir para as configurações'
      title='Ir para as configurações'>
      <SettingsIcon/>
    </a>

    <a 
      className={styles.menuLink} 
      href='#' 
      aria-label='Mudar o tema'
      title='Mudar tema'
      onClick={handleThemeChange}>
      {nextThemeIcon[theme]}
    </a>

  </nav>
  )
}