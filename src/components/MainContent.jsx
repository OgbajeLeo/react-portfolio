import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import SocialLinks from './SocialLinks'
import About from './About'

const MainContent = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  )
}

export default MainContent
