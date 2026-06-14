import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const BookService = () => {
  const [formData, setFormData] = useState({
    service: '',
    bookingType: 'hourly',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Book a Service</h2>
        <p className="text-gray-400 text-sm mb-8">Fill in the details to book a caregiver</p>

        <div className="bg-white rounded-xl border p-8" style={{borderColor: '#FDEEF1'}}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* service selection */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              >
                <option value="">Choose a service</option>
                <option value="nursing">Nursing Care</option>
                <option value="attendant">Elderly Attendant</option>
                <option value="physiotherapy">Physiotherapy</option>
                <option value="post-hospital">Post-Hospital Care</option>
              </select>
            </div>

            {/* booking type */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Booking Type</label>
              <div className="flex gap-3">
                {['hourly', 'daily', 'long-term'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({...formData, bookingType: type})}
                    className="flex-1 py-2 rounded-lg text-sm font-medium border capitalize transition"
                    style={formData.bookingType === type
                      ? {backgroundColor: '#F4617F', color: 'white', borderColor: '#F4617F'}
                      : {backgroundColor: 'white', color: '#888', borderColor: '#FDEEF1'}
                    }
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* date */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            {/* time */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            {/* additional notes */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any specific requirements or instructions for the caregiver"
                rows={3}
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none resize-none"
                style={{borderColor: '#FDEEF1'}}
              />
            </div>

            <button
              type="submit"
              className="text-white font-semibold py-3 rounded-lg mt-2"
              style={{backgroundColor: '#F4617F'}}
            >
              Send Service Request
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default BookService;