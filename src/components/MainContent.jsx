import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import SocialLinks from './SocialLinks'
import About from './About'
import Services from './Services'

const MainContent = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />     
      <div className="mt-[-80px] md:mt-[-84px] lg:mt-[-11px]" ><Services /></div>
      <div className="mt-[-40px] md:mt-[-84px] lg:mt-[-101px]" ><Portfolio /></div>
      <div className="mt-[-40px] md:mt-[-84px] lg:mt-[-152px]" ><Experience /></div>
      <div className="mt-[-40px] lg:mt-[-101px]" ><Contact /></div>
      <Footer />
      <SocialLinks />
    </>
  )
}

export default MainContent
