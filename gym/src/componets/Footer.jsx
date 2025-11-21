import { FaGlobe, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GymFooter() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-12 border-t-4 border-white/10" id="Contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2"
            animate={{
              y: [0, -4, 0],
              boxShadow: [
                "0 0 25px rgba(255,255,255,0.6)",
                "0 0 35px rgba(255,255,255,0.9)",
                "0 0 25px rgba(255,255,255,0.6)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-block h-7 w-10 bg-gradient-to-r from-white to-gray-400 skew-x-[-20deg] rounded-sm" />
            NIKE STORE
          </motion.h2>
          <p className="mt-3 text-gray-400 max-w-sm">
            Discover the latest Nike footwear drops, classics reimagined, and performance gear engineered for every run, court and street.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/nike"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1" />
            </a>

            <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe className="text-2xl hover:text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1" />
            </a>

            <a href="https://wa.me/91YOURNUMBER" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-green-400 cursor-pointer transition-transform duration-300 hover:-translate-y-1" />
            </a>
          </div>

        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-white mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">New Releases</li>
            <li className="hover:text-white cursor-pointer transition-colors">Men's Shoes</li>
            <li className="hover:text-white cursor-pointer transition-colors">Women's Shoes</li>
            <li className="hover:text-white cursor-pointer transition-colors">Kids</li>
            <li className="hover:text-white cursor-pointer transition-colors">Sale</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Order Status &amp; Tracking</li>
            <li>Shipping &amp; Delivery</li>
            <li>Returns &amp; Refunds</li>
            <li>Help &amp; FAQs</li>
          </ul>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-3">Nike Membership</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Member-only drops &amp; early access.</li>
            <li>Personalised product picks for every run.</li>
            <li>Exclusive access to Nike Run Club &amp; Training Club content.</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-4 text-sm">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Nike — This is a conceptual Nike shoes landing page built for learning purposes.
        </p>
      </div>
    </footer>
  );
}
