import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const caregiversData = [
  {
    id: 1,
    name: 'Priya Sharma',
    email: 'priya@gmail.com',
    phone: '9876543210',
    qualification: 'Registered Nurse (RN)',
    experience: '5 years',
    status: 'Pending'
  },
  {
    id: 2,
    name: 'Rahul Singh',
    email: 'rahul@gmail.com',
    phone: '9876543211',
    qualification: 'Licensed Physiotherapist',
    experience: '7 years',
    status: 'Pending'
  },
  {
    id: 3,
    name: 'Anjali Verma',
    email: 'anjali@gmail.com',
    phone: '9876543212',
    qualification: 'Certified Caregiver',
    experience: '3 years',
    status: 'Pending'
  }
];

const VerifyCaregivers = () => {
  const [caregivers, setCaregivers] = useState(caregiversData);

  const handleApprove = (id) => {
    setCaregivers(caregivers.map(c =>
      c.id === id ? { ...c, status: 'Approved' } : c
    ));
  };

  const handleReject = (id) => {
    setCaregivers(caregivers.map(c =>
      c.id === id ? { ...c, status: 'Rejected' } : c
    ));
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Verify Caregivers</h2>
        <p className="text-gray-400 text-sm mb-8">Review and approve or reject caregiver registrations</p>

        <div className="flex flex-col gap-4">
          {caregivers.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{c.name}</h3>
                  <p className="text-sm text-gray-400">{c.email} · {c.phone}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={
                    c.status === 'Approved'
                      ? {backgroundColor: '#D4EDDA', color: '#155724'}
                      : c.status === 'Rejected'
                      ? {backgroundColor: '#F8D7DA', color: '#721C24'}
                      : {backgroundColor: '#FFF3CD', color: '#856404'}
                  }
                >
                  {c.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <p>🎓 {c.qualification}</p>
                <p>💼 {c.experience}</p>
              </div>

              {c.status === 'Pending' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(c.id)}
                    className="text-white text-sm font-medium px-6 py-2 rounded-lg"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(c.id)}
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

export default VerifyCaregivers;