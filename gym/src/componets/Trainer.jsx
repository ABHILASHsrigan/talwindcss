import React from "react";
import { motion } from "framer-motion";

const nikeShoes = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "$150",
    description: "Revolutionary cushioning with a sleek design for ultimate comfort.",
  image: "images/travis.jpeg"
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    price: "$110",
    description: "The classic basketball shoe that's been reimagined for everyday wear.",
    image: "images/airforce.jpeg"
  },
  {
    id: 3,
    name: "Nike React Infinity Run",
    price: "$160",
    description: "Designed to help reduce injury and keep you running.",
    image: "images/mens.jpeg"
  }
];

export default function NikeShowcase() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto px-6 flex flex-col items-center gap-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-black mb-4">Nike Collection</h1>
          <p className="text-gray-700 mb-8 text-xl max-w-2xl mx-auto">
            Step into style and comfort with our latest collection of Nike shoes.
          </p>
        </motion.div>

        <motion.div 
          className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {nikeShoes.map((shoe) => (
            <motion.div
              key={shoe.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={item}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{shoe.name}</h2>
                <p className="text-red-600 font-bold text-xl mb-4">{shoe.price}</p>
                <p className="text-gray-600 mb-6">{shoe.description}</p>
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
              <div className="h-64 overflow-hidden">
                <motion.img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}