import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { getCaregiverBookings } from '../../api/index';

const EarningsHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getCaregiverBookings();
        setBookings(res.data.bookings);
      } catch (err) {
        setError('Failed to load history.');
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const completedJobs = bookings.filter(b => b.status === 'Completed');

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Earnings & Work History</h2>
        <p className="text-gray-400 text-sm mb-8">View your completed jobs and earnings</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        {/* summary card */}
        <div
          className="bg-white rounded-xl border p-6 mb-6"
          style={{borderColor: '#FDEEF1'}}
        >
          <p className="text-sm text-gray-400 mb-1">Completed Jobs</p>
          <p className="text-3xl font-bold" style={{color: '#F4617F'}}>
            {completedJobs.length}
          </p>
          <p className="text-sm text-gray-400 mt-1">Total jobs: {bookings.length}</p>
        </div>

        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {booking.service.name}
                  </h3>
                  <p className="text-sm text-gray-400">User: {booking.user.name}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                    <p>📅 {booking.date}</p>
                    <p>⏱ {booking.bookingType}</p>
                  </div>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={
                    booking.status === 'Completed'
                      ? {backgroundColor: '#D4EDDA', color: '#155724'}
                      : booking.status === 'Pending'
                      ? {backgroundColor: '#FFF3CD', color: '#856404'}
                      : {backgroundColor: '#FFF0F3', color: '#F4617F'}
                  }
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EarningsHistory;