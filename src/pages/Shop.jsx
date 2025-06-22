import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ShoppingCart as Cart } from 'lucide-react'

const ProductPage = () => {
  const [isOrdered, setIsOrdered] = React.useState(false);
  const [isCart, setIsCart] = React.useState(false);

  const handleOrder = () => {
    setIsCart(false);
    setIsOrdered(true);

    setTimeout(() => {
      setIsOrdered(false);
    }, 3000);
  };

  const handleCart = () => {
    setIsCart(true);
    setIsOrdered(true);

    setTimeout(() => {
      setIsOrdered(false);
      setIsCart(false);
    }, 3000);
  };

  return (
    <>
      {isOrdered && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[10000] w-[90%] max-w-md px-6 py-4 bg-[#f5f1eb] border border-[#e4cfa4] shadow-xl rounded-xl backdrop-blur-sm flex items-center gap-4 animate-fadeIn">
          {isCart ? (
            <>
              <Cart className="text-[#5c3b1c]" size={24} />
              <p className="text-sm text-[#5c3b1c] font-medium">
                The product has been added to your cart successfully.
              </p>
            </>
          ) : (
            <>
              <CheckCircle className="text-[#5c3b1c]" size={24} />
              <p className="text-sm text-[#5c3b1c] font-medium">
                Your order has been placed successfully.
              </p>
            </>
          )}
        </div>
      )}

      {/* Hero Image with Gradient Overlay */}
      <div className="w-full h-[60vh] relative">
        <img
          src="./hero/hero-bg-mobiles.png"
          alt="Sadie Skin Shop Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5c3b1c]/90 to-transparent"></div>
      </div>

      <section className="w-full bg-[#fffaf3] px-6 py-16 text-[#5c3b1c]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Product Image */}
          <div className="w-full">
            <div className="bg-[#f5f1eb] rounded-xl overflow-hidden shadow-md">
              <img
                src="./product-transparent-bg.png"
                alt="Sadie Skin Serum"
                className="w-full object-contain max-h-[500px] mx-auto"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Sadie Skin Luminous Renewal Serum
            </h1>
            <p className="text-[#9c7b58] text-base leading-relaxed">
              Experience elevated skincare with our clinically crafted serum, infused with botanical actives and skin-barrier technology to hydrate, brighten, and protect. Ideal for daily rituals and visible glow within 14 days.
            </p>

            {/* Price + Options */}
            <div className="text-2xl font-semibold mt-4">₹1,299</div>
            <div className="text-sm text-[#9c7b58]">
              30ml · Dermatologically Tested · Paraben-Free
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={(e) => {
                  handleCart();
                  e.currentTarget.blur();
                }}
                className="border border-[#5c3b1c] bg-[#5c3b1c] text-[#f5f1eb] px-6 py-3 rounded-full text-base font-medium hover:bg-[#4a2e18] transition duration-300 text-center"
              >
                Add to Cart
              </button>

              <button
                onClick={(e) => {
                  handleOrder();
                  e.currentTarget.blur();
                }}
                className="bg-transparent border border-[#5c3b1c] text-[#5c3b1c] px-6 py-3 rounded-full text-base font-medium hover:bg-[#5c3b1c] hover:text-[#f5f1eb] transition duration-300 text-center"
              >
                Buy Now
              </button>
            </div>

            {/* Product Highlights */}
            <ul className="mt-8 space-y-2 text-sm text-[#7c5a3b] list-disc pl-5">
              <li>Clinically proven to improve skin texture & hydration</li>
              <li>Formulated with Niacinamide, Hyaluronic Acid & Peptides</li>
              <li>Made for all skin types – non-comedogenic</li>
              <li>Luxurious lightweight formula with fast absorption</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
