// src/components/ProductBentoGrid.jsx
import React from "react";

const products = [
    {
        id: 1,
        img: "./Demo-images/demo1.jpeg",
        text: "SadieSkin Serum",
        featured: true,
    },
    {
        id: 2,
        img: "./Demo-images/demo2.jpeg",
        text: "Radiance Boost",
    },
    {
        id: 3,
        img: "./Demo-images/demo3.jpeg",
        text: "Glow Essentials",
    },
    {
        id: 4,
        img: "./Demo-images/demo4.jpeg",
        text: "Hydra Complex",
    },
];

const ProductBentoGrid = () => {
    return (
        <section className="w-full flex justify-center py-12 md:py-25 px-5 md:px-12">
            <div className="max-w-7xl w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div>
                            <img src={product.img} alt="" className="w-full rounded-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductBentoGrid;