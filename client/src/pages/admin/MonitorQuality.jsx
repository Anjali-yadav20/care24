import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const complaintsData = [
  {
    id: 1,
    userName: 'Ramesh Kumar',
    caregiverName: 'Priya Sharma',
    service: 'Nursing Care',
    date: '2024-06-10',
    complaint: 'Caregiver arrived late by 2 hours without prior notice.',
    rating: 2,
    status: 'Pending'
  },
  {
    id: 2,
    userName: 'Sunita Gupta',
    caregiverName: 'Anjali Verma',
    service: 'Elderly Attendant',
    date: '2024-06-12',
    complaint: 'Service quality was not up to the mark. Patient was not given proper attention.',
    rating: 3,
    status: 'Pending'
  },
  {
    id: 3,
    userName: 'Mohan Lal',
    caregiverName: 'Rahul Singh',
    service: 'Physiotherapy',
    date: '2024-06-15',
    complaint: 'Excellent service provided. Very professional and caring.',
    rating: 5,
    status: 'Resolved'
  }
];

const MonitorQuality = () => {
  const [complaints, setComplaints] = useState(complaintsData);

  const handleResolve = (id) => {
    setComplaints(complaints.map(c =>
      c.id === id ? { ...c, status: 'Resolved' } : c
    ));
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Monitor Service Quality & Complaints</h2>
        <p className="text-gray-400 text-sm mb-8">Review service quality reports and user complaints</p>

        <div className="flex flex-col gap-4">
          {complaints.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{c.service}</h3>
                  <p className="text-sm text-gray-400">
                    User: {c.userName} · Caregiver: {c.caregiverName}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={c.status === 'Resolved'
                    ? {backgroundColor: '#D4EDDA', color: '#155724'}
                    : {backgroundColor: '#FFF3CD', color: '#856404'}
                  }
                >
                  {c.status}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">{c.complaint}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-4 text-sm text-gray-400">
                  <p>📅 {c.date}</p>
                  <p>{renderStars(c.rating)} ({c.rating}/5)</p>
                </div>

                {c.status === 'Pending' && (
                  <button
                    onClick={() => handleResolve(c.id)}
                    className="text-white text-sm font-medium px-5 py-2 rounded-lg"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Mark Resolved
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MonitorQuality;