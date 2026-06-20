import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50" style={{borderColor: '#FDEEF1'}}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-gray-800">
          Care<span style={{color: '#F4617F'}}>24</span>
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex gap-6 items-center">

          {!user && (
            <>
              <Link to="/login" className="text-gray-500 hover:text-gray-800 text-sm">Login</Link>
              <Link to="/register" className="text-white px-5 py-2 rounded-lg text-sm" style={{backgroundColor: '#F4617F'}}>
                Register
              </Link>
            </>
          )}

          {user && user.role === 'user' && (
            <>
              <Link to="/user/services" className="text-gray-500 hover:text-gray-800 text-sm">Services</Link>
              <Link to="/user/caregivers" className="text-gray-500 hover:text-gray-800 text-sm">Caregivers</Link>
              <Link to="/user/patient" className="text-gray-500 hover:text-gray-800 text-sm">Patient Profile</Link>
              <Link to="/user/track" className="text-gray-500 hover:text-gray-800 text-sm">Track Service</Link>
              <Link to="/user/history" className="text-gray-500 hover:text-gray-800 text-sm">History</Link>
              <button onClick={handleLogout} className="text-sm font-medium" style={{color: '#F4617F'}}>
                Logout
              </button>
            </>
          )}

        </div>

        {/* mobile hamburger */}
        <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t" style={{borderColor: '#FDEEF1'}}>

          {!user && (
            <>
              <Link to="/login" className="text-gray-500 py-2 text-sm">Login</Link>
              <Link to="/register" className="text-white px-5 py-2 rounded-lg text-center text-sm" style={{backgroundColor: '#F4617F'}}>
                Register
              </Link>
            </>
          )}

          {user && user.role === 'user' && (
            <>
              <Link to="/user/services" className="text-gray-500 py-2 text-sm">Services</Link>
              <Link to="/user/caregivers" className="text-gray-500 py-2 text-sm">Caregivers</Link>
              <Link to="/user/patient" className="text-gray-500 py-2 text-sm">Patient Profile</Link>
              <Link to="/user/track" className="text-gray-500 py-2 text-sm">Track Service</Link>
              <Link to="/user/history" className="text-gray-500 py-2 text-sm">History</Link>
              <button onClick={handleLogout} className="text-sm font-medium text-left" style={{color: '#F4617F'}}>
                Logout
              </button>
            </>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;