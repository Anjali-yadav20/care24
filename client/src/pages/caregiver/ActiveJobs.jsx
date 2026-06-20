import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const jobsData = [
  {
    id: 1,
    service: 'Nursing Care',
    patientName: 'Ram Sharma',
    patientAge: 75,
    date: '2024-06-22',
    time: '10:00 AM',
    duration: 'Daily',
    address: 'Lucknow, UP',
    status: 'In Progress',
    careNote: ''
  },
  {
    id: 2,
    service: 'Elderly Attendant',
    patientName: 'Sita Devi',
    patientAge: 70,
    date: '2024-06-22',
    time: '2:00 PM',
    duration: 'Hourly',
    address: 'Lucknow, UP',
    status: 'Accepted',
    careNote: ''
  }
];

const ActiveJobs = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [noteInput, setNoteInput] = useState({});

  const handleStatusUpdate = (id, newStatus) => {
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, status: newStatus } : job
    ));
  };

  const handleNoteChange = (id, value) => {
    setNoteInput({ ...noteInput, [id]: value });
  };

  const handleNoteSave = (id) => {
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, careNote: noteInput[id] || '' } : job
    ));
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Active Jobs</h2>
        <p className="text-gray-400 text-sm mb-8">Update service status and add care notes</p>

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              {/* job header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.service}</h3>
                  <p className="text-sm text-gray-400">
                    Patient: {job.patientName}, {job.patientAge} years
                  </p>
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

              {/* job details */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <p>📅 {job.date}</p>
                <p>🕐 {job.time}</p>
                <p>⏱ {job.duration}</p>
                <p>📍 {job.address}</p>
              </div>

              {/* status update buttons */}
              {job.status !== 'Completed' && (
                <div className="flex gap-3 mb-4">
                  {job.status === 'Accepted' && (
                    <button
                      onClick={() => handleStatusUpdate(job.id, 'In Progress')}
                      className="text-white text-sm font-medium px-5 py-2 rounded-lg"
                      style={{backgroundColor: '#F4617F'}}
                    >
                      Start Service
                    </button>
                  )}
                  {job.status === 'In Progress' && (
                    <button
                      onClick={() => handleStatusUpdate(job.id, 'Completed')}
                      className="text-white text-sm font-medium px-5 py-2 rounded-lg"
                      style={{backgroundColor: '#F4617F'}}
                    >
                      Mark as Completed
                    </button>
                  )}
                </div>
              )}

              {/* care notes */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Care Notes</label>
                {job.careNote && (
                  <p className="text-sm text-gray-500 mb-2 p-3 rounded-lg" style={{backgroundColor: '#FFF8F8'}}>
                    {job.careNote}
                  </p>
                )}
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={noteInput[job.id] || ''}
                    onChange={(e) => handleNoteChange(job.id, e.target.value)}
                    placeholder="Add a care note for the family"
                    className="flex-1 border rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none"
                    style={{borderColor: '#FDEEF1'}}
                  />
                  <button
                    onClick={() => handleNoteSave(job.id)}
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