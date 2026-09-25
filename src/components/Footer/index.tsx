import styles from './styles.module.css'
import { RouterLink } from '../RouterLink'

export function Footer({}) {
  return (
    <>
      <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>Entenda como funciona o método pomodoro!</RouterLink>
      <RouterLink href='/'>Chronos Eyes &copy; {new Date().getFullYear()}</RouterLink>
      </footer>
    </>
  )
}