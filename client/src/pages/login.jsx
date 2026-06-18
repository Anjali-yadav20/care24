import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login - normally this would call the backend to check email/password
    // for now we just trust whatever role was selected and log them in
    login({
      name: formData.email.split('@')[0],
      email: formData.email,
      role: formData.role
    });

    // redirect to the correct dashboard based on role
    if (formData.role === 'user') {
      navigate('/user/services');
    } else if (formData.role === 'caregiver') {
      navigate('/caregiver/requests');
    } else if (formData.role === 'admin') {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="flex justify-center items-center py-16 px-4">
        <div className="bg-white rounded-xl shadow-sm border p-8 w-full max-w-md" style={{borderColor: '#FDEEF1'}}>

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-1">Welcome Back</h2>
          <p className="text-gray-400 text-center text-sm mb-6">Login to your Care24 account</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Login as</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              >
                <option value="user">Family / Elderly User</option>
                <option value="caregiver">Caregiver</option>
                <option value="admin">Admin</option>
              </select>
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
              <label className="text-sm text-gray-600 mb-1 block">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <button
              type="submit"
              className="text-white font-semibold py-3 rounded-lg mt-2"
              style={{backgroundColor: '#F4617F'}}
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/login" className="font-medium" style={{color: '#F4617F'}}>
              Register here
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;