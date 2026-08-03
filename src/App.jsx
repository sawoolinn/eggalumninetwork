import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomeSection from './components/HomeSection.jsx'
import NewsSection from './components/NewsSection.jsx'
import OrganizationSection from './components/OrganizationSection.jsx'
import HistorySection from './components/HistorySection.jsx'
import LeadershipSection from './components/LeadershipSection.jsx'
import EventsSection from './components/EventsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/Modal.jsx'
import Toast from './components/Toast.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [modal, setModal] = useState(null)       // { type: 'news'|'event', data: {} }
  const [toast, setToast] = useState(null)       // { message: '' }

  const navigateTo = (tab) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openNewsModal = (item) => setModal({ type: 'news', data: item })
  const openEventModal = (item) => setModal({ type: 'event', data: item })
  const closeModal = () => setModal(null)

  const showToast = (message) => {
    setToast({ message })
    setTimeout(() => setToast(null), 4000)
  }

  const renderSection = () => {
    switch (activeTab) {
      case 'home':          return <HomeSection onNavigate={navigateTo} onOpenNews={openNewsModal} onOpenEvent={openEventModal} />
      case 'news':          return <NewsSection onOpenNews={openNewsModal} />
      case 'organizations': return <OrganizationSection />
      case 'history':       return <HistorySection />
      case 'leadership':    return <LeadershipSection onNavigate={navigateTo} />
      case 'events':        return <EventsSection onOpenEvent={openEventModal} />
      case 'contact':       return <ContactSection onShowToast={showToast} />
      default:              return <HomeSection onNavigate={navigateTo} onOpenNews={openNewsModal} onOpenEvent={openEventModal} />
    }
  }

  return (
    <>
      <Navbar activeTab={activeTab} onNavigate={navigateTo} />

      <main id="main-content">
        {renderSection()}
      </main>

      <Footer onNavigate={navigateTo} />

      {modal && (
        <Modal modal={modal} onClose={closeModal} />
      )}

      {toast && (
        <Toast message={toast.message} />
      )}
    </>
  )
}

export default App
