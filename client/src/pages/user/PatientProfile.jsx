import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { savePatientProfile, getPatientProfile } from '../../api/index';

const PatientProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    medicalNeeds: '',
    emergencyContact: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // load existing patient profile when page opens
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getPatientProfile();
        if (res.data.patient) {
          setFormData(res.data.patient);
        }
      } catch (err) {
        // no profile yet - that's fine
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await savePatientProfile(formData);
      setSuccess('Patient profile saved successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Patient Profile</h2>
        <p className="text-gray-400 text-sm mb-8">Fill in the elderly patient's details</p>

        <div className="bg-white rounded-xl shadow-sm border p-8" style={{borderColor: '#FDEEF1'}}>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-sm text-center mb-4">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Patient Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter patient's full name"
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter patient's age"
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Medical Needs</label>
              <textarea
                name="medicalNeeds"
                value={formData.medicalNeeds}
                onChange={handleChange}
                placeholder="Describe the patient's medical conditions and needs"
                required
                rows={4}
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none resize-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Emergency Contact</label>
              <input
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Enter emergency contact number"
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter patient's home address"
                required
                rows={3}
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none resize-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="text-white font-semibold py-3 rounded-lg mt-2"
              style={{backgroundColor: '#F4617F', opacity: loading ? 0.7 : 1}}
            >
              {loading ? 'Saving...' : 'Save Patient Profile'}
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default PatientProfile;