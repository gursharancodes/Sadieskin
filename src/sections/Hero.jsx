import React from 'react'

const Hero = () => {
  return (
      <>
          <div className='h-screen bg-primary-light text-white'>
              {/* desktop bg-image */}
              <div className='hidden lg:block w-full h-full'>
                  <img src="./hero/hero-bg-desktops.png" alt="" className='w-full h-full aspect-[16/9] object-cover' />

                  {/* hero overlay */}
                  <div className='absolute w-full h-full bg-primary-dark/20 top-0 left-0 z-20' />
              </div>


              {/* mobile bg-image */}
              <div className='lg:hidden w-full h-full'>
                  <img src="./hero/hero-bg-mobiles.png" alt="" className='w-full h-full aspect-[16/9] object-cover' />
                  <div className='absolute w-full h-full bg-primary-dark/20 top-0 left-0 z-20' />
              </div>


              {/* hero content */}
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center w-full'>
                  <h1 className="text-4xl sm:6xl md:text-7xl font-[700] md:font-[600] tracking-tight leading-[1.1] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.2)]">
                      {['Bare', 'Beauty.'].map((word, i) => (
                          <span
                              key={word + i}
                              className="fade-word"
                              style={{ animationDelay: `${i * 0.3}s` }}
                          >
                              {word}&nbsp;
                          </span>
                      ))}
                      <br />
                      {['Bold', 'Confidence.'].map((word, i) => (
                          <span
                              key={word + i}
                              className="fade-word"
                              style={{ animationDelay: `${(i + 2) * 0.3}s` }} // continues delay
                          >
                              {word}&nbsp;
                          </span>
                      ))}
                  </h1>
                  <p className='text-base w-[80%] mx-auto leading-[1.4] sm:text-md md:text-lg text-white/90 mt-4 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.3)] md:drop-shadow-[2px_2px_6px_rgba(0,0,0,0.05)]'>Reveal your skin’s natural brilliance with Sadie Skin — where skincare meets subtle luxury.</p>
              </div>


              {/* product img */}
              <div className="hidden lg:block absolute top-3/5 md:top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 lg:z-[500] h-full">
                  <img
                      src="./product-transparent-bg.png"
                      alt=""
                      className="h-[70%] md:h-[120%] object-cover lg:-rotate-12 transition-transform duration-700 ease-in-out drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)] fade-in-up-blur"
                  />
              </div>


              {/* <div className='h-[20vh] absolute bottom-5 right-5'>
                  <img src="./product-card.png" alt="" className='h-full rounded-2xl shadow-md' />
              </div> */}
          </div>
      </>
  )
}

export default Hero