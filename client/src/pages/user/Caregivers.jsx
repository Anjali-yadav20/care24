import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import { getCaregivers } from '../../api/index';

const Caregivers = () => {
  const [caregivers, setCaregivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const res = await getCaregivers();
        setCaregivers(res.data.caregivers);
      } catch (err) {
        setError('Failed to load caregivers. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchCaregivers();
  }, []);

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

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Caregivers</h2>
        <p className="text-gray-400 mb-10">Browse verified caregivers and their qualifications</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caregivers.map((caregiver) => (
            <div
              key={caregiver._id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex items-start gap-4">

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{backgroundColor: '#FFF0F3'}}
                >
                  👩‍⚕️
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {caregiver.user.name}
                      </h3>
                      <p className="text-sm text-gray-400">{caregiver.qualification}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">⭐ {caregiver.rating || 'New'}</p>
                      <p className="text-xs text-gray-400">{caregiver.reviewsCount} reviews</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}>
                      💼 {caregiver.experience}
                    </span>
                    {caregiver.serviceAreas.length > 0 && (
                      <span className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}>
                        📍 {caregiver.serviceAreas[0]}
                      </span>
                    )}
                  </div>

                  <Link
                    to="/user/book"
                    state={{ caregiverId: caregiver._id }}
                    className="mt-4 inline-block text-white text-sm font-medium px-5 py-2 rounded-lg"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Book Now
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Caregivers;