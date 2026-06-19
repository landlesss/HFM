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
  const [menuOpen, setMenuOpen] = useState(false)
  const langRef = useRef(null)
  const mobileLangRef = useRef(null)

  const selectedLang = languages.find(l => l.code === lang) || languages[0]

  const closeMenu = () => {
    setMenuOpen(false)
    setLangOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(e) {
      const inDesktop = langRef.current?.contains(e.target)
      const inMobile = mobileLangRef.current?.contains(e.target)
      if (!inDesktop && !inMobile) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const navItems = [
    { label: t.nav.markets, to: '/markets' },
    { label: t.nav.trading, to: '/trading' },
    { label: t.nav.investing, to: '/investing' },
    { label: t.nav.toolsEducation, to: '/tools-education' },
    { label: t.nav.company, to: '/company' },
  ]

  const renderLangSelector = (ref, { dropdownClass, isMobile } = {}) => (
    <div className={`${styles.langSelector} ${isMobile ? styles.langSelectorMobile : ''}`} ref={ref}>
      <button
        className={`${styles.langBtn} ${isMobile ? styles.langBtnMobile : ''}`}
        onClick={() => setLangOpen(!langOpen)}
        aria-expanded={langOpen}
        aria-label="Select language"
      >
        <img src={selectedLang.flag} alt={selectedLang.code} className={styles.langIcon} />
        {isMobile && <span className={styles.langBtnLabel}>{selectedLang.label}</span>}
      </button>
      {langOpen && (
        <div className={`${styles.langDropdown} ${dropdownClass || ''}`}>
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
  )

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
            {renderLangSelector(langRef)}
          </div>
        </div>

        <div className={styles.navRow}>
          <div className={styles.logoWrap}>
            <span className={styles.brand}>{t.header.brand}</span>
            <NavLink
              to="/"
              className={styles.logo}
              onClick={() => {
                closeMenu()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img src={logoSrc} alt="HFM" className={styles.logoImg} />
            </NavLink>
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
          <button
            type="button"
            className={`${styles.burgerBtn} ${menuOpen ? styles.burgerBtnOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileTopLinks}>
            <a href="#" className={styles.mobileDownloadApp} onClick={closeMenu}>
              <img src={phoneIcon} alt="" className={styles.phoneIcon} />
              {t.header.downloadApp}
            </a>
            <a href="#" className={styles.mobileTopLink} onClick={closeMenu}>{t.header.contactUs}</a>
            <a href="#" className={styles.mobileTopLink} onClick={closeMenu}>{t.header.partnerWithUs}</a>
            {renderLangSelector(mobileLangRef, { dropdownClass: styles.langDropdownMobile, isMobile: true })}
          </div>

          <ul className={styles.mobileNavLinks}>
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <a href="#" className={styles.mobileLoginBtn} onClick={closeMenu}>{t.header.login}</a>
            <a href="#" className={styles.mobileRegisterBtn} onClick={closeMenu}>{t.header.register}</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
