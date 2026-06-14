import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
 const services = [
  {
    id: 1,
    name: 'Nursing Care',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400',
    description: 'Professional nurses provide medical assistance at home including wound care, medication management and health monitoring.',
    duration: 'Hourly / Daily / Long-term',
    price: '₹500/hour',
    qualification: 'Registered Nurse (RN)'
  },
  {
    id: 2,
    name: 'Elderly Attendant',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400',
    description: 'Trained attendants assist with daily personal care, bathing, grooming, meals and companionship for elderly patients.',
    duration: 'Hourly / Daily / Long-term',
    price: '₹300/hour',
    qualification: 'Certified Caregiver'
  },
  {
    id: 3,
    name: 'Physiotherapy',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    description: 'Certified physiotherapists help with recovery, mobility exercises and pain management at the comfort of home.',
    duration: 'Hourly / Daily',
    price: '₹800/hour',
    qualification: 'Licensed Physiotherapist'
  },
  {
    id: 4,
    name: 'Post-Hospital Care',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    description: 'Specialized care for patients recently discharged from hospital including medication, dressing and follow-up monitoring.',
    duration: 'Daily / Long-term',
    price: '₹600/hour',
    qualification: 'Registered Nurse (RN)'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
        <p className="text-gray-400 mb-10">Choose from our range of professional elderly care services</p>

        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* left side */}
                <div className="flex items-start gap-4">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}>
                        ⏱ {service.duration}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}>
                        🎓 {service.qualification}
                      </span>
                    </div>
                  </div>
                </div>

                {/* right side */}
                <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                  <p className="text-xl font-bold text-gray-800">{service.price}</p>
                  <Link
                    to="/user/book"
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