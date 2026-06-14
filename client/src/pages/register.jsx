import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'user'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="flex justify-center items-center py-16 px-4">
        <div className="bg-white rounded-xl shadow-sm border p-8 w-full max-w-md" style={{borderColor: '#FDEEF1'}}>

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-1">Create Account</h2>
          <p className="text-gray-400 text-center text-sm mb-6">Register to get started with Care24</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Register as</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              >
                <option value="user">Family / Elderly User</option>
                <option value="caregiver">Caregiver</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                minLength={8}
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            {formData.role === 'caregiver' && (
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Qualifications</label>
                <input
                  type="text"
                  name="qualifications"
                  onChange={handleChange}
                  placeholder="e.g. Registered Nurse, Physiotherapist"
                  required
                  className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                  style={{borderColor: '#FDEEF1'}}
                />
              </div>
            )}

            <button
              type="submit"
              className="text-white font-semibold py-3 rounded-lg mt-2"
              style={{backgroundColor: '#F4617F'}}
            >
              Register
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-medium" style={{color: '#F4617F'}}>
              Login here
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Register;