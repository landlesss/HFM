import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Prizes from './components/Prizes/Prizes'
import Winners from './components/Winners/Winners'
import FAQ from './components/FAQ/FAQ'
import PlaceholderPage from './pages/PlaceholderPage'

function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Prizes />
      <Winners />
      <FAQ />
    </main>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/markets" element={<PlaceholderPage title="Markets" />} />
        <Route path="/trading" element={<PlaceholderPage title="Trading" />} />
        <Route path="/investing" element={<PlaceholderPage title="Investing" />} />
        <Route path="/tools-education" element={<PlaceholderPage title="Tools & Education" />} />
        <Route path="/company" element={<PlaceholderPage title="Company" />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  )
}
