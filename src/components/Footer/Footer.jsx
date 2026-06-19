import { useLang } from '../../context/LanguageContext'
import appStoreSrc from '../../assets/appstore.svg'
import googlePlaySrc from '../../assets/googleplay.svg'
import facebookIcon from '../../assets/facebook1.svg'
import twitterIcon from '../../assets/X2.svg'
import telegramIcon from '../../assets/telegram3.svg'
import instagramIcon from '../../assets/instagram4.svg'
import youtubeIcon from '../../assets/youtube5.svg'
import linkedinIcon from '../../assets/linkedin6.svg'
import styles from './Footer.module.css'

const socialLinks = [
  { icon: facebookIcon,  label: 'Facebook',    href: '#' },
  { icon: twitterIcon,   label: 'X (Twitter)', href: '#' },
  { icon: telegramIcon,  label: 'Telegram',    href: '#' },
  { icon: instagramIcon, label: 'Instagram',   href: '#' },
  { icon: youtubeIcon,   label: 'YouTube',     href: '#' },
  { icon: linkedinIcon,  label: 'LinkedIn',    href: '#' },
]

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.leftCol}>
          <p className={styles.label}>{t.footer.findUsOn}</p>

          <div className={styles.socialIcons}>
            {socialLinks.map(({ icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className={styles.socialIcon}>
                <img
                  src={icon}
                  alt={label}
                  className={label === 'X (Twitter)' ? styles.iconX : ''}
                />
              </a>
            ))}
          </div>

          <p className={styles.label}>{t.footer.downloadApp}</p>

          <div className={styles.appBtns}>
            <a href="#">
              <img src={appStoreSrc} alt="App Store" className={styles.appBtn} />
            </a>
            <a href="#">
              <img src={googlePlaySrc} alt="Google Play" className={styles.appBtn} />
            </a>
          </div>
        </div>

        <div className={styles.rightCol}>
          <p className={styles.riskTitle}>{t.footer.riskWarning}</p>
          <p className={styles.riskText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p
          </p>
        </div>

      </div>
    </footer>
  )
}
