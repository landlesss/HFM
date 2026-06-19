import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'
import logoSrc from '../../assets/logo.svg'
import phoneIcon from '../../assets/phoneIcon.svg'
import flagEN from '../../assets/languageUK.svg'
import flagDE from '../../assets/germany.svg'
import flagES from '../../assets/spain.svg'
import flagZH from '../../assets/china.svg'
import styles from './Header.module.css'

const languages = [
  { code: 'EN', label: 'English', flag: flagEN },
  { code: 'DE', label: 'Deutsch', flag: flagDE },
  { code: 'ES', label: 'Español', flag: flagES },
  { code: 'ZH', label: '中文', flag: flagZH },
]

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)

  const selectedLang = languages.find(l => l.code === lang) || languages[0]

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = [
    { label: t.nav.markets, to: '/markets' },
    { label: t.nav.trading, to: '/trading' },
    { label: t.nav.investing, to: '/investing' },
    { label: t.nav.toolsEducation, to: '/tools-education' },
    { label: t.nav.company, to: '/company' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.topRight}>
            <a href="#" className={styles.downloadApp}>
              <img src={phoneIcon} alt="" className={styles.phoneIcon} />
              {t.header.downloadApp}
            </a>
            <span className={styles.divider} />
            <a href="#" className={styles.topLink}>{t.header.contactUs}</a>
            <span className={styles.divider} />
            <a href="#" className={styles.topLink}>{t.header.partnerWithUs}</a>
            <span className={styles.divider} />
            <div className={styles.langSelector} ref={langRef}>
              <button
                className={styles.langBtn}
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
                aria-label="Select language"
              >
                <img src={selectedLang.flag} alt={selectedLang.code} className={styles.langIcon} />
              </button>
              {langOpen && (
                <div className={styles.langDropdown}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      className={`${styles.langOption} ${lang === l.code ? styles.langOptionActive : ''}`}
                      onClick={() => { setLang(l.code); setLangOpen(false) }}
                    >
                      <img src={l.flag} alt={l.code} className={styles.langOptionFlag} />
                      <span className={styles.langOptionCode}>{l.code}</span>
                      <span className={styles.langOptionLabel}>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.navRow}>
          <div className={styles.logoWrap}>
            <NavLink to="/" className={styles.logo}>
              <img src={logoSrc} alt="HFM" className={styles.logoImg} />
            </NavLink>
            <span className={styles.brand}>{t.header.brand}</span>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              {navItems.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.navActions}>
            <a href="#" className={styles.loginBtn}>{t.header.login}</a>
            <a href="#" className={styles.registerBtn}>{t.header.register}</a>
          </div>
        </div>
      </div>
    </header>
  )
}
