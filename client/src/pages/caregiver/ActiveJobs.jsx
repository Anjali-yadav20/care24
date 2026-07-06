

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { getCaregiverBookings, updateBookingStatus, addCareNote } from '../../api/index';

const ActiveJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [noteInput, setNoteInput] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getCaregiverBookings();
        setJobs(res.data.bookings.filter(b =>
          b.status === 'Accepted' || b.status === 'In Progress'
        ));
      } catch (err) {
        setError('Failed to load jobs.');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updateBookingStatus(id, { status: newStatus });
      setJobs(jobs.map(job =>
        job._id === id ? { ...job, status: newStatus } : job
      ));
    } catch (err) {
      setError('Failed to update status.');
    }
  };

  const handleNoteChange = (id, value) => {
    setNoteInput({ ...noteInput, [id]: value });
  };

  const handleNoteSave = async (id) => {
    try {
      await addCareNote(id, { note: noteInput[id] });
      setNoteInput({ ...noteInput, [id]: '' });
      alert('Care note saved!');
    } catch (err) {
      setError('Failed to save note.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Active Jobs</h2>
        <p className="text-gray-400 text-sm mb-8">Update service status and add care notes</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        {jobs.length === 0 && (
          <p className="text-gray-400 text-center">No active jobs found.</p>
        )}

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {job.service.name}
                  </h3>
                  <p className="text-sm text-gray-400">User: {job.user.name}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={
                    job.status === 'In Progress'
                      ? {backgroundColor: '#FFF0F3', color: '#F4617F'}
                      : job.status === 'Completed'
                      ? {backgroundColor: '#D4EDDA', color: '#155724'}
                      : {backgroundColor: '#FFF3CD', color: '#856404'}
                  }
                >
                  {job.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <p>📅 {job.date}</p>
                <p>🕐 {job.time}</p>
                <p>⏱ {job.bookingType}</p>
              </div>

              {job.status !== 'Completed' && (
                <div className="flex gap-3 mb-4">
                  {job.status === 'Accepted' && (
                    <button
                      onClick={() => handleStatusUpdate(job._id, 'In Progress')}
                      className="text-white text-sm font-medium px-5 py-2 rounded-lg"
                      style={{backgroundColor: '#F4617F'}}
                    >
                      Start Service
                    </button>
                  )}
                  {job.status === 'In Progress' && (
                    <button
                      onClick={() => handleStatusUpdate(job._id, 'Completed')}
                      className="text-white text-sm font-medium px-5 py-2 rounded-lg"
                      style={{backgroundColor: '#F4617F'}}
                    >
                      Mark as Completed
                    </button>
                  )}
                </div>
              )}

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Add Care Note</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={noteInput[job._id] || ''}
                    onChange={(e) => handleNoteChange(job._id, e.target.value)}
                    placeholder="Add a care note for the family"
                    className="flex-1 border rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none"
                    style={{borderColor: '#FDEEF1'}}
                  />
                  <button
                    onClick={() => handleNoteSave(job._id)}
                    className="text-white text-sm font-medium px-4 py-2 rounded-lg"
                    style={{backgroundColor: '#F4617F'}}
                  >
                    Save
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ActiveJobs;