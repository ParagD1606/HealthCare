import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-5 py-4">
        
        <h1 className="text-2xl font-bold">ElderShield</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>Home</li>
          <li>Platform</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full">
          Join us
        </button>

        {/* Mobile Burger */}
        <button
          className="md:hidden block text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-5 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>Home</li>
            <li>Platform</li>
            <li>Services</li>
            <li>Contact</li>
            <button className="bg-black text-white px-5 py-2 rounded-full w-fit">
              Join us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
