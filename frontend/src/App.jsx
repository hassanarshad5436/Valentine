import { useEffect, useRef } from 'react'
import useStore from './store/useStore'
import WelcomeSection from './components/WelcomeSection'
import LoveLetterSection from './components/LoveLetterSection'
import MemoriesSection from './components/MemoriesSection'
import LanguagesSection from './components/LanguagesSection'
import DrawingSection from './components/DrawingSection'
import ReasonsSection from './components/ReasonsSection'
import ProposalSection from './components/ProposalSection'
import AcceptedSection from './components/AcceptedSection'
import FallingRoses from './components/FallingRoses'
import FloatingParticles from './components/FloatingParticles'

function App() {
  const currentSection = useStore((state) => state.currentSection)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      if (currentSection >= 1 && currentSection <= 7) {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err))
      } else {
        audioRef.current.pause()
      }
    }
  }, [currentSection])

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)',
      position: 'relative'
    }}>
      <audio ref={audioRef} src="/shayari.mpeg" loop />
      <FallingRoses />
      <FloatingParticles />
      <WelcomeSection isActive={currentSection === 1} />
      <LoveLetterSection isActive={currentSection === 2} />
      <MemoriesSection isActive={currentSection === 3} />
      <LanguagesSection isActive={currentSection === 4} />
      <DrawingSection isActive={currentSection === 5} />
      <ReasonsSection isActive={currentSection === 6} />
      <ProposalSection isActive={currentSection === 7} />
      <AcceptedSection isActive={currentSection === 8} />
    </div>
  )
}

export default App
