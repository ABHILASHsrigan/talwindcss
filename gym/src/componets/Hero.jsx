import { GiRunningShoe } from "react-icons/gi";

export default function HeroBanner() {
  const loopNames = [
    "Ract Flyknit",
    "AirStride Pro",
    "SprintX",
    "CloudStep",
    "TrailMax",
    "StreetLite",
    "Performance GT",
  ];

  return (
    <section
      id="home"
      className="relative w-full h-[115vh] overflow-hidden mt-16"
      style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
    >
      {/* Background Image (shoe-only) */}
      <img
        src="images/banner.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="shoes background"
      />

      {/* Dark Gradient Overlay tuned for Nike-like contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content Section */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-24">
        <div className="max-w-xl text-right">
          <p className="text-sm uppercase tracking-widest text-[#ff7a00] mb-4">
            New Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Step Into Comfort
            <br />
            and Style
          </h1>

          <p className="text-gray-300 mt-4 drop-shadow-md">
            Discover the latest Nike-inspired performance & lifestyle shoes
            engineered for every step.
          </p>

          <div className="mt-8 flex gap-4 justify-end">
            <button className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg">
              Shop Now
            </button>

            <button className="border border-neutral-400 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all shadow-lg">
              Browse Collections
            </button>
          </div>
        </div>
      </div>

      {/* Animated Swoosh Ticker (new animation) */}
      <div className="absolute bottom-6 left-0 right-0 z-20 px-4 md:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="relative bg-black/40 backdrop-blur-sm rounded-full py-3 px-4">
            <div className="swoosh-track">
              {/* duplicate loop for seamless animation */}
              {Array.from({ length: 2 }).map((_, loopIdx) => (
                <div className="swoosh-row" key={loopIdx}>
                  {loopNames.map((name, idx) => (
                    <div className="swoosh-item" key={idx}>
                      <GiRunningShoe className="swoosh-icon" />
                      <span className="swoosh-text">{name}</span>
                      <span className="swoosh-badge">LIMITED</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* fonts: add Montserrat in index.html for best match:
           <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet"> 
        */

        .swoosh-track {
          display: flex;
          gap: 36px;
          align-items: center;
          transform: translateZ(0);
          /* move whole track left continuously */
          animation: trackMove 18s linear infinite;
        }

        .swoosh-row {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        .swoosh-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(255,122,0,0.08), rgba(255,122,0,0.02));
          transform-origin: center;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .swoosh-item:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }

        .swoosh-icon {
          color: #ff7a00; /* Nike-like orange accent */
          font-size: 20px;
          filter: drop-shadow(0 3px 6px rgba(255,122,0,0.15));
        }

        .swoosh-text {
          color: #f7f7f7;
          font-weight: 700;
          letter-spacing: 0.4px;
          font-size: 16px;
          background: linear-gradient(90deg, #fff, #e6e6e6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .swoosh-badge {
          margin-left: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #111;
          background: #ff7a00;
          padding: 4px 8px;
          border-radius: 999px;
          box-shadow: 0 4px 12px rgba(255,122,0,0.18);
        }

        @keyframes trackMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* responsive tweaks */
        @media (max-width: 768px) {
          .swoosh-text { font-size: 14px; }
          .swoosh-icon { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}

