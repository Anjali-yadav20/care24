import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const disputesData = [
  {
    id: 1,
    userName: 'Ramesh Kumar',
    caregiverName: 'Priya Sharma',
    service: 'Nursing Care',
    date: '2024-06-10',
    issue: 'User claims caregiver did not complete the full service duration but charged full amount.',
    status: 'Open'
  },
  {
    id: 2,
    userName: 'Sunita Gupta',
    caregiverName: 'Anjali Verma',
    service: 'Elderly Attendant',
    date: '2024-06-14',
    issue: 'Caregiver claims user was abusive and demands compensation for distress caused.',
    status: 'Open'
  },
  {
    id: 3,
    userName: 'Mohan Lal',
    caregiverName: 'Rahul Singh',
    service: 'Physiotherapy',
    date: '2024-06-08',
    issue: 'User requested refund due to cancellation but caregiver denies the cancellation.',
    status: 'Resolved'
  }
];

const Disputes = () => {
  const [disputes, setDisputes] = useState(disputesData);
  const [resolutionNote, setResolutionNote] = useState({});

  const handleNoteChange = (id, value) => {
    setResolutionNote({ ...resolutionNote, [id]: value });
  };

  const handleResolve = (id) => {
    setDisputes(disputes.map(d =>
      d.id === id ? { ...d, status: 'Resolved' } : d
    ));
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Handle Disputes & Escalations</h2>
        <p className="text-gray-400 text-sm mb-8">Manage escalated issues between users and caregivers</p>

        <div className="flex flex-col gap-4">
          {disputes.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{d.service}</h3>
                  <p className="text-sm text-gray-400">
                    User: {d.userName} · Caregiver: {d.caregiverName}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={d.status === 'Resolved'
                    ? {backgroundColor: '#D4EDDA', color: '#155724'}
                    : {backgroundColor: '#F8D7DA', color: '#721C24'}
                  }
                >
                  {d.status}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">{d.issue}</p>

              <p className="text-sm text-gray-400 mb-4">📅 {d.date}</p>

              {d.status === 'Open' && (
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={resolutionNote[d.id] || ''}
                    onChange={(e) => handleNoteChange(d.id, e.target.value)}
                    placeholder="Add resolution note"
                    className="w-full border rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none"
                    style={{borderColor: '#FDEEF1'}}
                  />
                  <button
                    onClick={() => handleResolve(d.id)}
                    className="text-white text-sm font-medium px-5 py-2 rounded-lg w-fit"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Mark as Resolved
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

export default Disputes;