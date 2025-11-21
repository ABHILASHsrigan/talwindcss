import React from "react";
import { motion } from "framer-motion";

export default function NikeStore() {
  const nikeProducts = [
    { 
      src: "images/a1.jpeg", 
      name: "Nike Air Max 270",
      category: "Men's Shoes",
      price: "$150"
    },
    { 
      src: "images/a2.jpeg", 
      name: "Nike Air Force 1 '07",
      category: "Classic Sneakers",
      price: "$110"
    },
    { 
      src: "images/a3.jpeg", 
      name: "Nike React Infinity Run",
      category: "Running Shoes",
      price: "$160"
    },
    { 
      src: "images/a4.jpeg",
      name: "Nike Sportswear",
      category: "Men's Apparel",
      price: "$85"
    },
    { 
      src: "images/a5.jpeg",
      name: "Nike Dri-FIT",
      category: "Training Gear",
      price: "$65"
    },
    { 
      src: "images/a6.jpeg",
      name: "Nike Pro",
      category: "Performance Wear",
      price: "$75"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">Nike Collection</h2>
        <p className="text-gray-300 text-xl">Just Do It.</p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {nikeProducts.map((product, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-700"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-80 overflow-hidden bg-gray-900">
              <motion.img
                src={product.src}
                alt={product.name}
                className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </div>
            </div>
            <div className="p-6">
              <span className="text-sm text-gray-400">{product.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{product.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-white">{product.price}</span>
                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                 view 
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
