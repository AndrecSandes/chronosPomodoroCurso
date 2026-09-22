import styles from './styles.module.css'

export function Footer({}) {
  return (
    <>
      <footer className={styles.footer}>
        <a href="">Entenda como funciona o método pomodoro!</a>
        <a href="">Chronos Eyes &copy; {new Date().getFullYear()}</a>
      </footer>
    </>
  )
}