import React from "react";

export default function ShoeCollections() {
  // Prefer local images in /public/images/*.jpg — if missing, fallback to Unsplash query, then to placeholder
  const products = [
    {
      title: "Ract Flyknit",
      type: "Running",
      img: "/images/add1.jpeg",
      fallback: "https://source.unsplash.com/800x600/?running-shoes,trainer",
      desc: "Lightweight runner engineered for speed.",
      price: "$120",
      tag: "NEW",
    },
    {
      title: "AirStride Pro",
      type: "Trail",
      img: "/images/add2.jpeg",
      fallback: "https://source.unsplash.com/800x600/?trail-running-shoes",
      desc: "Responsive cushioning built for trails.",
      price: "$140",
      tag: "LIMITED",
    },
    {
      title: "SprintX",
      type: "Track",
      img: "/images/add3.jpeg",
      fallback: "https://source.unsplash.com/800x600/?track-spikes,running",
      desc: "Sprint-focused outsole and minimal weight.",
      price: "$110",
      tag: "BEST",
    },
    {
      title: "CourtMaster",
      type: "Basketball",
      img: "/images/add4.jpeg",
      fallback: "https://source.unsplash.com/800x600/?basketball-shoes",
      desc: "High-grip court shoe for quick cuts and jumps.",
      price: "$150",
      tag: "PRO",
    },
    {
      title: "Striker Elite",
      type: "Soccer",
      img: "/images/add5.jpeg",
      fallback: "https://source.unsplash.com/800x600/?soccer-cleats,football",
      desc: "Precision traction for the pitch.",
      price: "$130",
      tag: "RUGGED",
    },
    {
      title: "Everyday Slip",
      type: "Slip-on",
      img: "/images/add6.jpeg",
      fallback: "https://source.unsplash.com/800x600/?slip-on-shoes,sneakers",
      desc: "Easy on/off casual comfort for every day.",
      price: "$95",
      tag: "STYLE",
    },
  ];

  return (
    <section id="collections" className="w-full py-20 bg-[#0b0b0d] text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Shoe Collections</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Curated selection of performance and lifestyle shoes. Each card shows a different shoe type.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <article
              key={i}
              className="bg-gradient-to-br from-[#0f1113] to-[#151518] p-4 rounded-2xl border border-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              role="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-[#0b0b0d] border border-gray-900">
                <img
                  src={p.img}
                  alt={`${p.title} - ${p.type}`}
                  className="w-full h-56 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // first fallback -> Unsplash query (one attempt), final fallback -> local placeholder
                    try {
                      const el = e.currentTarget;
                      if (!el.dataset.fallback) {
                        el.dataset.fallback = "1";
                        el.src = p.fallback;
                      } else {
                        el.src = "/images/placeholder.jpg";
                      }
                    } catch {
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }
                  }}
                />

                <div className="absolute top-3 left-3 bg-[#ff7a00] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {p.tag}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-md backdrop-blur-sm">
                  {p.type}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-md backdrop-blur-sm">
                  {p.price}
                </div>
              </div>

              <div className="mt-4 text-left">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 mt-2 mb-4">{p.desc}</p>

                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-[#ff7a00] text-black font-bold py-2 rounded-lg hover:brightness-95 transition">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition">
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .text-4xl { letter-spacing: -0.02em; }
        img { box-shadow: 0 10px 30px rgba(0,0,0,0.6); background: #111; }
      `}</style>
    </section>
  );
}
