import React from 'react'
import Hero from '../sections/Hero'
import Benifits from '../sections/Benifits'
import Gallary from '../sections/Gallary'
import Ingredients from '../sections/Stats'
import Reviews from '../sections/ReviewsSection'
import CTA from '../sections/Cta'

const Home = () => {
  return (
    <>
      <Hero />
      <Benifits />
      <Gallary />
      <Ingredients />
      <Reviews />
      <CTA />
    </>
  )
}

export default Home