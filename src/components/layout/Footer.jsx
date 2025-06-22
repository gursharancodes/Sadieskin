import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-primary-dark text-primary-light">
      <div className="px-12 py-8 flex flex-col gap-1 md:flex-row items-center justify-between">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Sadie <span className='font-["Courgette"]'>Skin</span> <span className='text-[#b78e66] text-sm font-[500]'>| All rights reserved.</span></h2>
        </div>


        {/* made with love */}
        <div>
          <p className='text-[#b78e66]'>Developed by 
              <a href="https://github.com/gursharancodes" target='_blank' className='text-primary-light underline hover:text-[#b78e66] transition-all duration-200 ease-in-out ml-1'>
                 GursharanCodes.
              </a>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
