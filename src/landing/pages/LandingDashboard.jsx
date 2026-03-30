import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import SignInModal from '../components/SignInModal'
import SignUpModal from '../components/SignUpModal'

export default function Home() {
  const [signInOpen, setSignInOpen] = useState(false)
  const [signUpOpen, setSignUpOpen] = useState(false)

  const openSignIn = () => {
    setSignUpOpen(false)
    setSignInOpen(true)
  }

  const openSignUp = () => {
    setSignInOpen(false)
    setSignUpOpen(true)
  }

  const closeModals = () => {
    setSignInOpen(false)
    setSignUpOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSignInClick={openSignIn} onSignUpClick={openSignUp} />
      <Hero onBrowseTalentClick={openSignIn} onHireTalentClick={openSignUp} />
      <Features />
      <Stats />
      <CTA onJoinAsTabClick={openSignUp} onHireTalentClick={openSignUp} />
      <Footer />

      <SignInModal
        isOpen={signInOpen}
        onClose={closeModals}
        onSwitchToSignUp={openSignUp}
      />
      <SignUpModal
        isOpen={signUpOpen}
        onClose={closeModals}
        onSwitchToSignIn={openSignIn}
      />
    </div>
  )
}
