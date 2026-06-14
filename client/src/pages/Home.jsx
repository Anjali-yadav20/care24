import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF8F8' }}>
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-medium mb-3 tracking-wide" style={{ color: '#F4617F' }}>
            Trusted Healthcare at Home
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Elderly Nursing & <br />
            <span style={{ color: '#F4617F' }}>Healthcare Assistance</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            Connect with verified nurses, caregivers and physiotherapists
            for professional in-home elderly care services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="text-white font-semibold px-8 py-3 rounded-xl transition"
              style={{ backgroundColor: '#F4617F' }}
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="font-semibold px-8 py-3 rounded-xl transition"
              style={{ border: '2px solid #F4617F', color: '#F4617F' }}
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="font-medium text-center mb-2" style={{ color: '#F4617F' }}>
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div
              className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition"
              style={{ border: '1px solid #FDEEF1' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#FFF0F3' }}
              >
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Nursing Care</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                Professional nurses for medical assistance at home
              </p>
            </div>

            <div
              className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition"
              style={{ border: '1px solid #FDEEF1' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#FFF0F3' }}
              >
                <span className="text-3xl">👴</span>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Elderly Attendant</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                Trained attendants for daily personal care and companionship
              </p>
            </div>

            <div
              className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition"
              style={{ border: '1px solid #FDEEF1' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#FFF0F3' }}
              >
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Physiotherapy</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                Certified physiotherapists for recovery and mobility
              </p>
            </div>

            <div
              className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition"
              style={{ border: '1px solid #FDEEF1' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#FFF0F3' }}
              >
                <span className="text-3xl">🩺</span>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Post-Hospital Care</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                Specialized care after hospital discharge at home
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6" style={{ borderTop: '1px solid #FDEEF1' }}>
        <p className="text-sm" style={{ color: '#888888' }}>© 2024 Care24. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;