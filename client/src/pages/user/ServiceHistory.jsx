import React from 'react';
import Navbar from '../../components/common/Navbar';

const historyData = [
  {
    id: 1,
    service: 'Nursing Care',
    caregiver: 'Priya Sharma',
    date: '2024-05-12',
    duration: '4 hours',
    amount: '₹2000',
    status: 'Completed'
  },
  {
    id: 2,
    service: 'Physiotherapy',
    caregiver: 'Rahul Singh',
    date: '2024-05-20',
    duration: '2 hours',
    amount: '₹1600',
    status: 'Completed'
  },
  {
    id: 3,
    service: 'Elderly Attendant',
    caregiver: 'Anjali Verma',
    date: '2024-06-01',
    duration: '8 hours',
    amount: '₹2400',
    status: 'Completed'
  }
];

const ServiceHistory = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Service History</h2>
        <p className="text-gray-400 text-sm mb-8">View all your past bookings</p>

        <div className="flex flex-col gap-4">
          {historyData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.service}</h3>
                  <p className="text-sm text-gray-400">Caregiver: {item.caregiver}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{backgroundColor: '#D4EDDA', color: '#155724'}}
                >
                  {item.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <p>📅 {item.date}</p>
                <p>⏱ {item.duration}</p>
                <p>💰 {item.amount}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceHistory;