import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { getAnalytics } from '../../api/index';

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await getAnalytics();
        setAnalytics(res.data);
      } catch (err) {
        setError('Failed to load analytics.');
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Admin Dashboard</h2>
        <p className="text-gray-400 text-sm mb-8">Platform analytics and reports</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        {analytics && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{backgroundColor: '#FFF0F3'}}>
                  👥
                </div>
                <div>
                  <p className="text-sm text-gray-400">Registered Users</p>
                  <p className="text-2xl font-bold text-gray-800">{analytics.totalUsers}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{backgroundColor: '#FFF0F3'}}>
                  ✅
                </div>
                <div>
                  <p className="text-sm text-gray-400">Verified Caregivers</p>
                  <p className="text-2xl font-bold text-gray-800">{analytics.totalCaregivers}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{backgroundColor: '#FFF0F3'}}>
                  📋
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-800">{analytics.totalBookings}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{backgroundColor: '#FFF0F3'}}>
                  🎯
                </div>
                <div>
                  <p className="text-sm text-gray-400">Completed Bookings</p>
                  <p className="text-2xl font-bold text-gray-800">{analytics.completedBookings}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{backgroundColor: '#FFF0F3'}}>
                  📈
                </div>
                <div>
                  <p className="text-sm text-gray-400">Booking Completion Rate</p>
                  <p className="text-2xl font-bold text-gray-800">{analytics.completionRate}</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;