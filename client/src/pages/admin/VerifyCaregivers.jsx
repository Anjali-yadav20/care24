import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { getPendingCaregivers, verifyCaregiver } from '../../api/index';

const VerifyCaregivers = () => {
  const [caregivers, setCaregivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const res = await getPendingCaregivers();
        setCaregivers(res.data.caregivers);
      } catch (err) {
        setError('Failed to load caregivers.');
      } finally {
        setLoading(false);
      }
    };
    fetchCaregivers();
  }, []);

  const handleApprove = async (id) => {
    try {
      await verifyCaregiver(id, { verified: true });
      setCaregivers(caregivers.map(c =>
        c._id === id ? { ...c, verified: true } : c
      ));
    } catch (err) {
      setError('Failed to approve caregiver.');
    }
  };

  const handleReject = async (id) => {
    try {
      await verifyCaregiver(id, { verified: false });
      setCaregivers(caregivers.filter(c => c._id !== id));
    } catch (err) {
      setError('Failed to reject caregiver.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading caregivers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Verify Caregivers</h2>
        <p className="text-gray-400 text-sm mb-8">Review and approve or reject caregiver registrations</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        {caregivers.length === 0 && (
          <p className="text-gray-400 text-center">No pending caregivers.</p>
        )}

        <div className="flex flex-col gap-4">
          {caregivers.map((c) => (
            <div
              key={c._id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{c.user.name}</h3>
                  <p className="text-sm text-gray-400">{c.user.email} · {c.user.phone}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={c.verified
                    ? {backgroundColor: '#D4EDDA', color: '#155724'}
                    : {backgroundColor: '#FFF3CD', color: '#856404'}
                  }
                >
                  {c.verified ? 'Approved' : 'Pending'}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <p>🎓 {c.qualification}</p>
                <p>💼 {c.experience}</p>
              </div>

              {!c.verified && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(c._id)}
                    className="text-white text-sm font-medium px-6 py-2 rounded-lg"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(c._id)}
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