import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const ManageAvailability = () => {
  const [availability, setAvailability] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const [serviceArea, setServiceArea] = useState('');
  const [areas, setAreas] = useState(['Lucknow, UP']);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleDayToggle = (day) => {
    setAvailability({ ...availability, [day]: !availability[day] });
  };

  const handleAddArea = () => {
    if (serviceArea.trim() !== '') {
      setAreas([...areas, serviceArea.trim()]);
      setServiceArea('');
    }
  };

  const handleRemoveArea = (index) => {
    setAreas(areas.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ availability, areas, startTime, endTime });
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Manage Availability</h2>
        <p className="text-gray-400 text-sm mb-8">Set your available days, time and service areas</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* available days */}
          <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
            <h3 className="font-semibold text-gray-700 mb-4">Available Days</h3>
            <div className="flex flex-wrap gap-3">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDayToggle(day)}
                  className="px-4 py-2 rounded-lg text-sm font-medium border capitalize transition"
                  style={availability[day]
                    ? {backgroundColor: '#F4617F', color: 'white', borderColor: '#F4617F'}
                    : {backgroundColor: 'white', color: '#888', borderColor: '#FDEEF1'}
                  }
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* available time */}
          <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
            <h3 className="font-semibold text-gray-700 mb-4">Available Time</h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-1 block">Start Time</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                  className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                  style={{borderColor: '#FDEEF1'}}
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-1 block">End Time</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                  className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                  style={{borderColor: '#FDEEF1'}}
                />
              </div>
            </div>
          </div>

          {/* service areas */}
          <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
            <h3 className="font-semibold text-gray-700 mb-4">Service Areas</h3>

            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={serviceArea}
                onChange={(e) => setServiceArea(e.target.value)}
                placeholder="Add a city or area"
                className="flex-1 border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
              <button
                type="button"
                onClick={handleAddArea}
                className="text-white px-4 py-2 rounded-lg text-sm font-medium"
                style={{backgroundColor: '#F4617F'}}
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                  style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}
                >
                  <span>{area}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveArea(index)}
                    className="font-bold hover:opacity-70"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="text-white font-semibold py-3 rounded-lg"
            style={{backgroundColor: '#F4617F'}}
          >
            Save Availability
          </button>

        </form>
      </div>
    </div>
  );
};

export default ManageAvailability;