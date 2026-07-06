import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import { getServices } from '../../api/index';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getServices();
        setServices(res.data.services);
      } catch (err) {
        setError('Failed to load services. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const icons = {
    'Nursing Care': '🏥',
    'Elderly Attendant': '👴',
    'Physiotherapy': '💪',
    'Post-Hospital Care': '🩺'
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
        <p className="text-gray-400 mb-10">Choose from our range of professional elderly care services</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                    style={{backgroundColor: '#FFF0F3'}}
                  >
                    {icons[service.name] || '🏥'}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}>
                        ⏱ {service.duration}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}>
                        🎓 {service.qualificationRequired}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                  <p className="text-xl font-bold text-gray-800">₹{service.price}/hour</p>
                  <Link
                    to="/user/caregivers"
                    className="text-white text-sm font-medium px-6 py-2 rounded-lg"
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

export default Services;