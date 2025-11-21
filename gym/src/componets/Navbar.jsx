import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* use vertical padding instead of fixed height so tall logos stay inside */}
        <div className="flex items-center justify-between py-3 md:py-4">

          {/* Logo (use public/nike-logo.png). object-contain keeps it inside the navbar */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="images/logo.jpeg"
              alt="Nike"
              className="h-12 md:h-16 lg:h-20 object-contain"
            />
            <span className="sr-only">Nike</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li className="hover:text-gray-300 cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#collections">Collections</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#men">Men</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#women">Women</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#sale">Sale</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {open && (
          <ul className="md:hidden flex flex-col space-y-4 pb-4 text-white font-medium">
            <li className="hover:text-gray-300 cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#collections">Collections</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#men">Men</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#women">Women</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#sale">Sale</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#contact">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
