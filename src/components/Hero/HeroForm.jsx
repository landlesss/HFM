import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useLang } from '../../context/LanguageContext'
import styles from './Hero.module.css'

const COUNTRIES = [
  { name: 'Cyprus',               code: '+357' },
  { name: 'United Kingdom',       code: '+44'  },
  { name: 'Germany',              code: '+49'  },
  { name: 'United States',        code: '+1'   },
  { name: 'France',               code: '+33'  },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Australia',            code: '+61'  },
  { name: 'Russia',               code: '+7'   },
]

const EXPERIENCE_OPTIONS = [
  'Beginner (less than 1 year)',
  'Intermediate (1–3 years)',
  'Experienced (3–5 years)',
  'Expert (5+ years)',
]

const schema = yup.object({
  firstName:  yup.string().required('First name is required').min(2, 'Min 2 characters'),
  lastName:   yup.string().required('Last name is required').min(2, 'Min 2 characters'),
  country:    yup.string().required('Country is required'),
  phone: yup.string()
    .required('Phone is required')
    .matches(/^[0-9\s\-]+$/, 'Invalid phone number'),
  email: yup.string()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address'
    ),
  experience: yup.string().required('Experience is required'),
  agreeTerms: yup.boolean().oneOf([true], 'You must accept the terms'),
})

export default function HeroForm() {
  const [phoneCode, setPhoneCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const { t } = useLang()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleCountryChange = (e) => {
    const selected = COUNTRIES.find(c => c.name === e.target.value)
    if (selected) {
      setPhoneCode(selected.code)
      setValue('phoneCode', selected.code)
    } else {
      setPhoneCode('')
      setValue('phoneCode', '')
    }
    setValue('country', e.target.value, { shouldValidate: true })
  }

  const onSubmit = (data) => {
    console.log('Form submitted:', { ...data, phoneCode })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h3 className={styles.formTitle}>{t.hero.formTitle}</h3>

      <div className={styles.row}>
        <div className={styles.field}>
          <input
            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
            placeholder={t.hero.firstName}
            {...register('firstName')}
          />
          {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
        </div>

        <div className={styles.field}>
          <input
            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
            placeholder={t.hero.lastName}
            {...register('lastName')}
          />
          {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <select
            className={`${styles.input} ${styles.select} ${errors.country ? styles.inputError : ''}`}
            defaultValue=""
            {...register('country')}
            onChange={handleCountryChange}
          >
            <option value="" disabled>{t.hero.country}</option>
            {COUNTRIES.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.country && <span className={styles.error}>{errors.country.message}</span>}
        </div>

        <div className={styles.codePhoneRow}>
          <div className={styles.codeField}>
            <input
              className={styles.input}
              placeholder={t.hero.code}
              value={phoneCode}
              readOnly
              tabIndex={-1}
            />
          </div>
          <div className={styles.phoneField}>
            <input
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              placeholder={t.hero.phone}
              type="tel"
              {...register('phone')}
            />
            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <input
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder={t.hero.email}
            type="email"
            {...register('email')}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.field}>
          <select
            className={`${styles.input} ${styles.select} ${errors.experience ? styles.inputError : ''}`}
            defaultValue=""
            {...register('experience')}
          >
            <option value="" disabled>{t.hero.experience}</option>
            {EXPERIENCE_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.experience && <span className={styles.error}>{errors.experience.message}</span>}
        </div>
      </div>

      <div className={styles.checkboxRow}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" {...register('agreeTerms')} />
          <span>
            {t.hero.agreeText}{' '}
            <a
              href="https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t.hero.privacy}
            </a>
            {' '}{t.hero.and}{' '}
            <a
              href="https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t.hero.terms}
            </a>
          </span>
        </label>
        {errors.agreeTerms && <span className={styles.error}>{errors.agreeTerms.message}</span>}
      </div>

      {submitted && (
        <div className={styles.successMsg}>{t.hero.success}</div>
      )}

      <button type="submit" className={styles.submitBtn}>
        {t.hero.joinNow}
      </button>
    </form>
  )
}
