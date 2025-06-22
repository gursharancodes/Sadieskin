import React from 'react'
import { Link } from 'react-router-dom'

const Proofs = () => {
    return (
        <section className="w-full bg-gradient-to-b from-[#f5f1eb] to-[#f0d9b3] py-16 md:py-24 px-4 sm:px-6 relative">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-radial from-[#e4cfa4]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-80 md:h-80 bg-gradient-radial from-[#dbc8a1]/30 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center">
                    <div className="mx-auto bg-[#fffaf3]/60 backdrop-blur-md rounded-3xl px-6 py-10 sm:px-10 md:px-12 md:py-14 border border-[#d9c7a8]/40 shadow-xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-[600] text-[#5c3b1c] mb-4 tracking-tight">
                            Clinically Proven Results
                        </h3>
                        <p className="text-[#b78e66] text-sm md:text-base mb-8 max-w-xl mx-auto">
                            Every ingredient is chosen with intention — rigorously tested to deliver visible results while maintaining gentle, luxurious care.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 text-center">
                            <div>
                                <div className="text-lg md:text-2xl font-light text-[#5c3b1c] mb-1">97%</div>
                                <div className="text-xs sm:text-sm text-[#9c7b58] font-medium tracking-widest uppercase">Satisfaction</div>
                            </div>
                            <div className="sm:border-x border-[#d9c7a8]/50 px-4">
                                <div className="text-lg md:text-2xl font-light text-[#5c3b1c] mb-1">14 Days</div>
                                <div className="text-xs sm:text-sm text-[#9c7b58] font-medium tracking-widest uppercase">Visible Results</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-2xl font-light text-[#5c3b1c] mb-1">100%</div>
                                <div className="text-xs sm:text-sm text-[#9c7b58] font-medium tracking-widest uppercase">Natural</div>
                            </div>
                        </div>

                        <Link
                            to="/shop"
                            className="inline-block bg-[#5c3b1c] text-[#f5f1eb] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full hover:bg-[#4a2e18] transition-colors duration-300 text-sm sm:text-base font-medium"
                        >
                            Discover Our Collection
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proofs
