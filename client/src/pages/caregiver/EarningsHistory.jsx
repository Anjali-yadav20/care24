import React from 'react';
import Navbar from '../../components/common/Navbar';

const earningsData = [
  {
    id: 1,
    service: 'Nursing Care',
    patientName: 'Ram Sharma',
    date: '2024-05-12',
    duration: '4 hours',
    amount: '₹2000',
    status: 'Completed'
  },
  {
    id: 2,
    service: 'Elderly Attendant',
    patientName: 'Sita Devi',
    date: '2024-05-18',
    duration: '8 hours',
    amount: '₹2400',
    status: 'Completed'
  },
  {
    id: 3,
    service: 'Physiotherapy',
    patientName: 'Mohan Lal',
    date: '2024-06-01',
    duration: '2 hours',
    amount: '₹1600',
    status: 'Completed'
  }
];

const totalEarnings = earningsData.reduce((sum, item) => {
  return sum + parseInt(item.amount.replace('₹', '').replace(',', ''));
}, 0);

const EarningsHistory = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Earnings & Work History</h2>
        <p className="text-gray-400 text-sm mb-8">View your completed jobs and total earnings</p>

        {/* total earnings card */}
        <div
          className="bg-white rounded-xl border p-6 mb-6"
          style={{borderColor: '#FDEEF1'}}
        >
          <p className="text-sm text-gray-400 mb-1">Total Earnings</p>
          <p className="text-3xl font-bold" style={{color: '#F4617F'}}>
            ₹{totalEarnings.toLocaleString()}
          </p>
          <p className="text-sm text-gray-400 mt-1">{earningsData.length} jobs completed</p>
        </div>

        {/* jobs list */}
        <div className="flex flex-col gap-4">
          {earningsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{item.service}</h3>
                  <p className="text-sm text-gray-400">Patient: {item.patientName}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                    <p>📅 {item.date}</p>
                    <p>⏱ {item.duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">{item.amount}</p>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{backgroundColor: '#D4EDDA', color: '#155724'}}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EarningsHistory;