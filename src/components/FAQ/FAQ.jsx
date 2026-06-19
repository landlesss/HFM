import { useState } from 'react'
import { useLang } from '../../context/LanguageContext'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'Question A',
    answer: 'Answer A — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Question B',
    answer: 'Answer B — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation.',
  },
  {
    question: 'Question C',
    answer: 'Answer C — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate.',
  },
  {
    question: 'Question D',
    answer: 'Answer D — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) 
  const { t } = useLang()

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.faq.title}</h2>
        
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`${styles.chevron} ${openIndex === index ? styles.chevronUp : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}