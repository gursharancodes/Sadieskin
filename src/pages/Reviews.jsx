import React from 'react'
import ReviewsSection from '../sections/ReviewsSection'
import CTA from '../sections/Cta'

const Reviews = () => {
  return (
    <>
      {/* Hero Image with Gradient Overlay */}
      <div className="w-full h-[60vh] relative">
        <img
          src="./hero/hero-bg-mobiles.png"
          alt="Sadie Skin Reviews Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5c3b1c]/90 to-transparent"></div>
      </div>

      {/* Rest of the sections */}
      <ReviewsSection />
      <CTA />
    </>
  )
}

export default Reviews
