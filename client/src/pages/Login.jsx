import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/index';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // call real backend API
      const res = await loginUser(formData);

      // save JWT token in localStorage
      localStorage.setItem('care24_token', res.data.token);

      // save user info in AuthContext
      login({
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
        role: res.data.user.role
      });

      // redirect based on role
      if (res.data.user.role === 'user') {
        navigate('/user/services');
      } else if (res.data.user.role === 'caregiver') {
        navigate('/caregiver/requests');
      } else if (res.data.user.role === 'admin') {
        navigate('/admin/dashboard');
      }

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="flex justify-center items-center py-16 px-4">
        <div className="bg-white rounded-xl shadow-sm border p-8 w-full max-w-md" style={{borderColor: '#FDEEF1'}}>

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-1">Welcome Back</h2>
          <p className="text-gray-400 text-center text-sm mb-6">Login to your Care24 account</p>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

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
              disabled={loading}
              className="text-white font-semibold py-3 rounded-lg mt-2"
              style={{backgroundColor: '#F4617F', opacity: loading ? 0.7 : 1}}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium" style={{color: '#F4617F'}}>
              Register here
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;