import HeroForm from './HeroForm'
import bgSrc from '../../assets/bg.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${bgSrc})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h1 className={styles.titleGold}>LOREM IPSUM DOLOR</h1>
          <h1 className={styles.titleWhite}>SIT AMET TOSIK</h1>
        </div>
        <div className={styles.formCard}>
          <HeroForm />
        </div>
      </div>
    </section>
  )
}
