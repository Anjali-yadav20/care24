import React from 'react';
import Navbar from '../../components/common/Navbar';

const activeBookings = [
  {
    id: 1,
    service: 'Nursing Care',
    caregiver: 'Priya Sharma',
    date: '2024-06-18',
    time: '10:00 AM',
    status: 'In Progress'
  },
  {
    id: 2,
    service: 'Physiotherapy',
    caregiver: 'Rahul Singh',
    date: '2024-06-20',
    time: '4:00 PM',
    status: 'Pending'
  }
];

const statusColor = {
  'Pending': { bg: '#FFF3CD', text: '#856404' },
  'Accepted': { bg: '#D1ECF1', text: '#0C5460' },
  'In Progress': { bg: '#FFF0F3', text: '#F4617F' },
  'Completed': { bg: '#D4EDDA', text: '#155724' }
};

const TrackService = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Track Service Status</h2>
        <p className="text-gray-400 text-sm mb-8">View the status of your active bookings</p>

        <div className="flex flex-col gap-4">
          {activeBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{booking.service}</h3>
                  <p className="text-sm text-gray-400">Caregiver: {booking.caregiver}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: statusColor[booking.status].bg,
                    color: statusColor[booking.status].text
                  }}
                >
                  {booking.status}
                </span>
              </div>

              <div className="flex gap-4 text-sm text-gray-500">
                <p>📅 {booking.date}</p>
                <p>🕐 {booking.time}</p>
              </div>

              {/* progress steps */}
              <div className="flex items-center mt-5">
                {['Pending', 'Accepted', 'In Progress', 'Completed'].map((step, index) => {
                  const steps = ['Pending', 'Accepted', 'In Progress', 'Completed'];
                  const currentIndex = steps.indexOf(booking.status);
                  const isDone = index <= currentIndex;

                  return (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{backgroundColor: isDone ? '#F4617F' : '#FDEEF1'}}
                        />
                        <p className="text-xs mt-1 text-gray-400 text-center" style={{width: '60px'}}>
                          {step}
                        </p>
                      </div>
                      {index < 3 && (
                        <div
                          className="flex-1 h-0.5 mb-4"
                          style={{backgroundColor: index < currentIndex ? '#F4617F' : '#FDEEF1'}}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrackService;