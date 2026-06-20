import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const requestsData = [
  {
    id: 1,
    service: 'Nursing Care',
    patientName: 'Ram Sharma',
    patientAge: 75,
    date: '2024-06-22',
    time: '10:00 AM',
    duration: 'Daily',
    address: 'Lucknow, UP',
    status: 'Pending'
  },
  {
    id: 2,
    service: 'Post-Hospital Care',
    patientName: 'Shyam Gupta',
    patientAge: 68,
    date: '2024-06-23',
    time: '9:00 AM',
    duration: 'Long-term',
    address: 'Lucknow, UP',
    status: 'Pending'
  }
];

const ServiceRequests = () => {
  const [requests, setRequests] = useState(requestsData);

  const handleAccept = (id) => {
    setRequests(requests.map(req =>
      req.id === id ? { ...req, status: 'Accepted' } : req
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(req =>
      req.id === id ? { ...req, status: 'Rejected' } : req
    ));
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Service Requests</h2>
        <p className="text-gray-400 text-sm mb-8">Accept or reject incoming booking requests</p>

        <div className="flex flex-col gap-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{req.service}</h3>
                  <p className="text-sm text-gray-400">
                    Patient: {req.patientName}, {req.patientAge} years
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
                <p>⏱ {req.duration}</p>
                <p>📍 {req.address}</p>
              </div>

              {req.status === 'Pending' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAccept(req.id)}
                    className="text-white text-sm font-medium px-6 py-2 rounded-lg"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(req.id)}
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