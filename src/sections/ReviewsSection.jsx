import React from 'react'
import { reviews } from '../constants'

const ReviewsSection = () => {
    return (
        <>
            <section className="w-full bg-gradient-to-b from-[#f5f1eb] to-[#f0d9b3] py-18 md:py-25 px-5 md:px-12">
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-[#5c3b1c] text-center'>
                        What are our <span className='font-["Courgette"]'>Customers</span> Saying?
                    </h1>
                </div>



                {/* Cards */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-15'>

                    {reviews.map((review, i) => (
                        < div className="relative z-10" >
                            <div className="text-center">
                                <div className="mx-auto bg-[#fffaf3]/60 backdrop-blur-md rounded-3xl px-5 py-10 sm:px-8 md:px-10 border border-[#d9c7a8]/40 shadow-xl">

                                    {/* name and image */}
                                    <div className='flex items-center gap-6'>
                                        <div>
                                            <img
                                                src={review.img}
                                                alt={review.name}
                                                onError={(e) => {
                                                    e.target.onerror = null
                                                    e.target.src = './Demo-images/fallback-user.png'
                                                }}
                                                className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full"
                                            />
                                        </div>

                                        <div className='text-left'>
                                            <h2 className='text-lg md:text-2xl font-bold text-[#5c3b1c] tracking-tight'>{review.name}</h2>
                                            <p className='text-sm text-[#9c7b58] font-medium'>{review.title}</p>
                                        </div>
                                    </div>

                                    {/* review */}
                                    <div className='text-left mt-6 text-[#5c3b1c]'>
                                        <p>{review.review}</p>
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

export default ReviewsSection