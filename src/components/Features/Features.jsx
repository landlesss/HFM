import { useLang } from '../../context/LanguageContext'
import icon1 from '../../assets/1.svg'
import icon2 from '../../assets/2.svg'
import icon3 from '../../assets/3.svg'
import phoneSrc from '../../assets/QuisquePhone.svg'
import styles from './Features.module.css'

const leftFeatures = [
  { icon: icon1, text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit' },
  { icon: icon2, text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit' },
]

const rightFeatures = [
  { icon: icon3, text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit' },
  { icon: icon1, text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit' },
]

export default function Features() {
  const { t } = useLang()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.features.title}</h2>
        <div className={styles.titleLine} />
        <div className={styles.grid}>
          <div className={styles.col}>
            {leftFeatures.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <img src={f.icon} alt="" className={styles.icon} />
                <p className={styles.featureText}>{f.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.phoneCol}>
            <img src={phoneSrc} alt="App" className={styles.phoneImg} />
          </div>

          <div className={styles.col}>
            {rightFeatures.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <img src={f.icon} alt="" className={styles.icon} />
                <p className={styles.featureText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
