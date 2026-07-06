import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { getCaregiverBookings, updateBookingStatus } from '../../api/index';

const ServiceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await getCaregiverBookings();
        setRequests(res.data.bookings);
      } catch (err) {
        setError('Failed to load requests.');
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      await updateBookingStatus(id, { status: 'Accepted' });
      setRequests(requests.map(req =>
        req._id === id ? { ...req, status: 'Accepted' } : req
      ));
    } catch (err) {
      setError('Failed to update status.');
    }
  };

  const handleReject = async (id) => {
    try {
      await updateBookingStatus(id, { status: 'Rejected' });
      setRequests(requests.map(req =>
        req._id === id ? { ...req, status: 'Rejected' } : req
      ));
    } catch (err) {
      setError('Failed to update status.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Service Requests</h2>
        <p className="text-gray-400 text-sm mb-8">Accept or reject incoming booking requests</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        {requests.length === 0 && (
          <p className="text-gray-400 text-center">No requests found.</p>
        )}

        <div className="flex flex-col gap-4">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {req.service.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    User: {req.user.name}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={
                    req.status === 'Accepted'
                      ? {backgroundColor: '#D4EDDA', color: '#155724'}
                      : req.status === 'Rejected'
                      ? {backgroundColor: '#F8D7DA', color: '#721C24'}
                      : {backgroundColor: '#FFF3CD', color: '#856404'}
                  }
                >
                  {req.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <p>📅 {req.date}</p>
                <p>🕐 {req.time}</p>
                <p>⏱ {req.bookingType}</p>
              </div>

              {req.status === 'Pending' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAccept(req._id)}
                    className="text-white text-sm font-medium px-6 py-2 rounded-lg"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(req._id)}
                    className="text-sm font-medium px-6 py-2 rounded-lg border"
                    style={{borderColor: '#FDEEF1', color: '#888'}}
                  >
                    Reject
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceRequests;