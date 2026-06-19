import { Link } from 'react-router-dom'
import styles from './PlaceholderPage.module.css'

export default function PlaceholderPage({ title }) {

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>This page is coming soon.</p>
        <Link to="/" className={styles.back}> Back to Home</Link>
      </div>
    </div>
  )
}
