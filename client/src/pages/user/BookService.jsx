import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import { createBooking, getServices } from '../../api/index';

const BookService = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    serviceId: '',
    bookingType: 'hourly',
    date: '',
    time: '',
    notes: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // get caregiverId passed from Caregivers page
  const caregiverId = location.state?.caregiverId;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getServices();
        setServices(res.data.services);
      } catch (err) {
        setError('Failed to load services.');
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createBooking({
        caregiverId,
        serviceId: formData.serviceId,
        bookingType: formData.bookingType,
        date: formData.date,
        time: formData.time,
        notes: formData.notes
      });
      navigate('/user/track');
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Book a Service</h2>
        <p className="text-gray-400 text-sm mb-8">Fill in the details to book a caregiver</p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <div className="bg-white rounded-xl border p-8" style={{borderColor: '#FDEEF1'}}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Select Service</label>
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none"
                style={{borderColor: '#FDEEF1'}}
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name} — ₹{service.price}/hour
                  </option>
                ))}
              </select>
            </div>

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

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any specific requirements for the caregiver"
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
              {loading ? 'Booking...' : 'Send Service Request'}
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default BookService;