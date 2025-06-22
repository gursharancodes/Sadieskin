import React from 'react'
import Benifits from '../sections/Benifits'
import CTA from '../sections/Cta'

const About = () => {
  return (
    <>
      {/* Hero Image with Gradient Overlay */}
      <div className="w-full h-[60vh] relative">
        <img
          src="./hero/hero-bg-mobiles.png"
          alt="Sadie Skin About Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5c3b1c]/90 to-transparent"></div>
      </div>

      {/* Rest of the sections */}
      <Benifits />
      <CTA />
    </>
  )
}

export default About
