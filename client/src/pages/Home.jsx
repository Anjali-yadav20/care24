import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      {/* hero section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Elderly Nursing & Healthcare Assistance
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Connect with verified nurses and caregivers for in-home elderly care services.
        </p>
        <Link to="/register" className="text-white px-6 py-3 rounded-lg mr-4" style={{backgroundColor: '#F4617F'}}>
          Get Started
        </Link>
        <Link to="/login" className="px-6 py-3 rounded-lg border-2" style={{borderColor: '#F4617F', color: '#F4617F'}}>
          Login
        </Link>
      </div>

      {/* services section */}
      <div className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Our Services</h2>
        <p className="text-center text-gray-400 mb-10">Professional healthcare services delivered at home</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="bg-white rounded-xl border overflow-hidden" style={{borderColor: '#FDEEF1'}}>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=400"
              alt="Nursing Care"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Nursing Care</h3>
              <p className="text-gray-400 text-sm">Professional nurses for medical assistance at home</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border overflow-hidden" style={{borderColor: '#FDEEF1'}}>
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400"
              alt="Elderly Attendant"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Elderly Attendant</h3>
              <p className="text-gray-400 text-sm">Trained attendants for daily personal care</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border overflow-hidden" style={{borderColor: '#FDEEF1'}}>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
              alt="Physiotherapy"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Physiotherapy</h3>
              <p className="text-gray-400 text-sm">Certified physiotherapists for recovery and mobility</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border overflow-hidden" style={{borderColor: '#FDEEF1'}}>
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
              alt="Post-Hospital Care"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Post-Hospital Care</h3>
              <p className="text-gray-400 text-sm">Specialized care after hospital discharge</p>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <div className="text-center py-6 bg-white border-t" style={{borderColor: '#FDEEF1'}}>
        <p className="text-gray-400 text-sm">© 2024 Care24. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Home;