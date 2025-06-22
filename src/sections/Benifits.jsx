import React from 'react'
import { benefits } from '../constants'

const Benifits = () => {
    return (
        <>
            <section className="w-full bg-gradient-to-b from-[#f5f1eb] to-[#f0d9b3] py-18 md:p-25 px-5">
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-[#5c3b1c] text-center'>
                        Why Sadie <span className='font-["Courgette"]'>Skin</span>?
                    </h1>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-10 md:mt-15'>
                    {benefits.map((benefit, i) => (
                        < div className="relative z-10" >
                            <div className="text-center">
                                <div className="mx-auto bg-[#fffaf3]/60 backdrop-blur-md rounded-3xl px-5 py-10 sm:px-8 md:px-10 border border-[#d9c7a8]/40 shadow-xl">

                                    {/* name and image */}
                                    <h2 className='text-2xl md:text-3xl text-left font-bold text-[#5c3b1c]'>{benefit.title}</h2>

                                    {/* review */}
                                    <div className='text-left mt-6 text-[#5c3b1c]'>
                                        <p>{benefit.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Benifits
