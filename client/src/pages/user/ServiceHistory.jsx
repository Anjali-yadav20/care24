import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { getUserBookings } from '../../api/index';

const ServiceHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getUserBookings();
        setBookings(res.data.bookings);
      } catch (err) {
        setError('Failed to load history.');
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

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
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Service History</h2>
        <p className="text-gray-400 text-sm mb-8">View all your past and active bookings</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        {bookings.length === 0 && (
          <p className="text-gray-400 text-center">No bookings found.</p>
        )}

        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {booking.service.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Caregiver: {booking.caregiver.user?.name || 'Assigned'}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={
                    booking.status === 'Completed'
                      ? {backgroundColor: '#D4EDDA', color: '#155724'}
                      : booking.status === 'Pending'
                      ? {backgroundColor: '#FFF3CD', color: '#856404'}
                      : booking.status === 'Accepted'
                      ? {backgroundColor: '#D1ECF1', color: '#0C5460'}
                      : booking.status === 'In Progress'
                      ? {backgroundColor: '#FFF0F3', color: '#F4617F'}
                      : {backgroundColor: '#F8D7DA', color: '#721C24'}
                  }
                >
                  {booking.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <p>📅 {booking.date}</p>
                <p>⏱ {booking.bookingType}</p>
                <p>🕐 {booking.time}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceHistory;