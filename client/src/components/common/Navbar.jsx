import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50" style={{ borderBottom: '1px solid #FDEEF1' }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Care<span style={{ color: '#F4617F' }}>24</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/login"
            className="font-medium transition"
            style={{ color: '#888888' }}
            onMouseEnter={e => e.target.style.color = '#F4617F'}
            onMouseLeave={e => e.target.style.color = '#888888'}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white px-5 py-2 rounded-xl font-medium transition"
            style={{ backgroundColor: '#F4617F' }}
          >
            Register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          style={{ color: '#888888' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-3" style={{ borderTop: '1px solid #FDEEF1' }}>
          <Link to="/login" className="font-medium py-2" style={{ color: '#888888' }}>
            Login
          </Link>
          <Link
            to="/register"
            className="text-white px-5 py-2 rounded-xl text-center font-medium"
            style={{ backgroundColor: '#F4617F' }}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;