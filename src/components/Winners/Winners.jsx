import { useLang } from '../../context/LanguageContext'
import trophy01 from '../../assets/trophy-01.svg'
import trophy02 from '../../assets/trophy-02.svg'
import trophy03 from '../../assets/trophy-03.svg'
import styles from './Winners.module.css'

const winners = [
  { place: 1, suffix: 'st', name: 'JOHN SMITH', id: '50079977124', gain: '16344%', prize: '$1000', trophy: trophy01 },
  { place: 2, suffix: 'nd', name: 'JOHN SMITH', id: '50078979154', gain: '16344%', prize: '$1000', trophy: trophy02 },
  { place: 3, suffix: 'rd', name: 'JOHN SMITH', id: '50079977154', gain: '16344%', prize: '$1000', trophy: trophy03 },
]

const leaderboard = [
  { name: 'John Smith', gain: '1624.19%' },
  { name: 'John Smith', gain: '1083.63%' },
  { name: 'John Smith', gain: '635.47%' },
  { name: 'John Smith', gain: '169.20%' },
  { name: 'John Smith', gain: '158.62%' },
  { name: 'John Smith', gain: '124.50%' },
  { name: 'John Smith', gain: '71.47%' },
  { name: 'John Smith', gain: '67.05%' },
  { name: 'John Smith', gain: '62.30%' },
  { name: 'John Smith', gain: '61.74%' },
]

export default function Winners() {
  const { t } = useLang()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.winners.title}</h2>

        <div className={styles.grid}>
          <div className={styles.winnersCol}>
            {winners.map((w) => (
              <div key={w.place} className={styles.winnerCard}>
                <img src={w.trophy} alt="" className={styles.trophyImg} />
                <div className={styles.info}>
                  <div className={styles.placeLabel}>
                    {t.winners.january.toUpperCase()} {w.place}<sup>{w.suffix}</sup> {t.winners.winner.toUpperCase()}
                  </div>
                  <div className={styles.winnerName}>{w.name}</div>
                  <div className={styles.winnerId}>{w.id}</div>
                  <div className={styles.gainLabel}>
                    {t.winners.totalGain} <span className={styles.gainValue}>{w.gain}</span>
                  </div>
                </div>
                <div className={styles.ribbon}>
                  <span className={styles.ribbonPrice}>{w.prize}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.leaderCol}>
            <h3 className={styles.leaderTitle}>{t.winners.leaderTitle}</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thName}>NAME</th>
                  <th className={styles.thGain}>GAIN</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((row, i) => (
                  <tr key={i} className={styles.tableRow}>
                    <td>{row.name}</td>
                    <td className={styles.tdGain}>{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.tableNote}>{t.winners.tableNote}</p>
          </div>
        </div>

        <div className={styles.btnWrap}>
          <a href="#hero-form" className={styles.joinBtn}>{t.winners.joinNow}</a>
          <p className={styles.small}>{t.winners.termsApply}</p>
        </div>
      </div>
    </section>
  )
}
