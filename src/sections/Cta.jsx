import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className="w-full from-[#f5f1eb] backdrop-blur-md py-16 sm:py-20 px-4 sm:px-6 text-center relative overflow-hidden">
            {/* Soft radial background glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-[#e4cfa4]/40 rounded-full blur-[180px] opacity-40 z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5c3b1c] mb-4 tracking-tight leading-tight sm:leading-snug">
                    Radiance, Redefined.
                </h2>

                <p className="text-[#9c7b58] text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
                    Discover the serum that’s setting new standards in skincare. Gentle, effective, and clinically backed.
                </p>

                <Link
                    to="/shop"
                    className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#5c3b1c] text-[#f5f1eb] text-sm sm:text-base md:text-lg font-medium shadow-md hover:bg-[#4a2e18] transition duration-300 hover:scale-105"
                >
                    Buy Now
                </Link>
            </div>
        </section>
    )
}

export default CTA
