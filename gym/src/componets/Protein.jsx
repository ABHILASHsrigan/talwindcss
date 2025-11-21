import React from "react";

export default function ProteinSection() {
  return (
    <section className="bg-[#1a0f00] py-16">
      <div className="text-center mb-15">
        <h2 className="text-5xl font-bold text-orange-500">INSTORE</h2>
        <p className="text-gray-200 mt-5">High-quality  boost your fitness journey</p>
      </div>

      <div className="flex justify-center items-center px-4 md:px-20 gap-0">
        {/* Original Image */}
        <div className="overflow-hidden  shadow-lg   transition-transform duration-300 w-full max-w-2xl">
          <img
            src="images/instore.png"
            alt="Protein Original"
            className="w-full h-[600px] object-cover sm:h-[700px] md:h-[750px] lg:h-[800px]"
          />
        </div>

        {/* Mirror Image */}
        <div className="overflow-hidden  shadow-lg  transition-transform duration-300 w-full max-w-2xl">
          <img
            src="images/instore.png"
            alt="Protein Mirror"
            className="w-full h-[600px] object-cover sm:h-[700px] md:h-[750px] lg:h-[800px] scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
}
