import React from 'react';
import Navbar from '../../components/common/Navbar';

const kpiData = [
  {
    id: 1,
    title: 'Registered Users',
    value: '1,240',
    icon: '👥'
  },
  {
    id: 2,
    title: 'Verified Caregivers',
    value: '186',
    icon: '✅'
  },
  {
    id: 3,
    title: 'Booking Completion Rate',
    value: '92%',
    icon: '📋'
  },
  {
    id: 4,
    title: 'Average Response Time',
    value: '18 mins',
    icon: '⏱'
  },
  {
    id: 5,
    title: 'User Satisfaction Score',
    value: '4.7 / 5',
    icon: '⭐'
  },
  {
    id: 6,
    title: 'Monthly Active Users',
    value: '874',
    icon: '📈'
  }
];

const recentBookings = [
  {
    id: 1,
    user: 'Ramesh Kumar',
    service: 'Nursing Care',
    caregiver: 'Priya Sharma',
    date: '2024-06-18',
    status: 'Completed'
  },
  {
    id: 2,
    user: 'Sunita Gupta',
    service: 'Physiotherapy',
    caregiver: 'Rahul Singh',
    date: '2024-06-19',
    status: 'In Progress'
  },
  {
    id: 3,
    user: 'Mohan Lal',
    service: 'Elderly Attendant',
    caregiver: 'Anjali Verma',
    date: '2024-06-20',
    status: 'Pending'
  }
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Admin Dashboard</h2>
        <p className="text-gray-400 text-sm mb-8">Platform analytics and reports</p>

        {/* kpi cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {kpiData.map((kpi) => (
            <div
              key={kpi.id}
              className="bg-white rounded-xl border p-6"
              style={{borderColor: '#FDEEF1'}}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{backgroundColor: '#FFF0F3'}}
                >
                  {kpi.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{kpi.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* recent bookings */}
        <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
          <h3 className="font-semibold text-gray-700 mb-4">Recent Bookings</h3>
          <div className="flex flex-col gap-3">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex justify-between items-center p-4 rounded-lg border"
                style={{borderColor: '#FDEEF1'}}
              >
                <div>
                  <p className="font-medium text-gray-800">{booking.service}</p>
                  <p className="text-sm text-gray-400">
                    {booking.user} · {booking.caregiver}
                  </p>
                  <p className="text-sm text-gray-400">📅 {booking.date}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={
                    booking.status === 'Completed'
                      ? {backgroundColor: '#D4EDDA', color: '#155724'}
                      : booking.status === 'In Progress'
                      ? {backgroundColor: '#FFF0F3', color: '#F4617F'}
                      : {backgroundColor: '#FFF3CD', color: '#856404'}
                  }
                >
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;