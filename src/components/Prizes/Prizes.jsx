import { useLang } from '../../context/LanguageContext'
import medal01 from '../../assets/medal-01.svg'
import medal02 from '../../assets/medal-02.svg'
import medal03 from '../../assets/medal-03.svg'
import styles from './Prizes.module.css'

const prizes = [
  { place: 1, amount: '$1000', names: 'CRAS DAPIBUS &\nCRAS DAPIBUS', medal: medal01 },
  { place: 2, amount: '$1000', names: 'CRAS DAPIBUS', medal: medal02 },
  { place: 3, amount: '$1000', names: 'CRAS DAPIBUS', medal: medal03 },
]

export default function Prizes() {
  const { t } = useLang()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.prizes.title}</h2>
        <div className={styles.cards}>
          {prizes.map((p) => (
            <div key={p.place} className={styles.card}>
              <img src={p.medal} alt={`${p.place} place`} className={styles.medal} />
              <div className={styles.amount}>{p.amount}</div>
              <div className={styles.names}>{p.names}</div>
            </div>
          ))}
        </div>
        <div className={styles.btnWrap}>
          <a href="#" className={styles.joinBtn}>{t.prizes.joinNow}</a>
          <p className={styles.small}>{t.prizes.termsApply}</p>
        </div>
      </div>
    </section>
  )
}
