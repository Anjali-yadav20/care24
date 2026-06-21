import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

const usersData = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    email: 'ramesh@gmail.com',
    phone: '9876543210',
    role: 'user',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@gmail.com',
    phone: '9876543211',
    role: 'caregiver',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Sunita Gupta',
    email: 'sunita@gmail.com',
    phone: '9876543212',
    role: 'user',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Rahul Singh',
    email: 'rahul@gmail.com',
    phone: '9876543213',
    role: 'caregiver',
    status: 'Active'
  }
];

const serviceCategories = [
  'Nursing Care',
  'Elderly Attendant',
  'Physiotherapy',
  'Post-Hospital Care'
];

const ManageUsers = () => {
  const [users, setUsers] = useState(usersData);
  const [filterRole, setFilterRole] = useState('all');

  const handleDeactivate = (id) => {
    setUsers(users.map(u =>
      u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u
    ));
  };

  const filtered = filterRole === 'all'
    ? users
    : users.filter(u => u.role === filterRole);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Manage Users & Service Categories</h2>
        <p className="text-gray-400 text-sm mb-8">View and manage all registered users and service types</p>

        {/* service categories */}
        <div className="bg-white rounded-xl border p-6 mb-6" style={{borderColor: '#FDEEF1'}}>
          <h3 className="font-semibold text-gray-700 mb-4">Service Categories</h3>
          <div className="flex flex-wrap gap-3">
            {serviceCategories.map((cat, index) => (
              <span
                key={index}
                className="text-sm px-4 py-2 rounded-lg"
                style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* users table */}
        <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">All Users</h3>
            <div className="flex gap-3">
              {['all', 'user', 'caregiver'].map((role) => (
                <button
                  key={role}
                  onClick={() => setFilterRole(role)}
                  className="text-sm px-4 py-1 rounded-lg border capitalize transition"
                  style={filterRole === role
                    ? {backgroundColor: '#F4617F', color: 'white', borderColor: '#F4617F'}
                    : {backgroundColor: 'white', color: '#888', borderColor: '#FDEEF1'}
                  }
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {filtered.map((u) => (
              <div
                key={u.id}
                className="flex justify-between items-center p-4 rounded-lg border"
                style={{borderColor: '#FDEEF1'}}
              >
                <div>
                  <p className="font-medium text-gray-800">{u.name}</p>
                  <p className="text-sm text-gray-400">{u.email} · {u.phone}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full capitalize"
                    style={{backgroundColor: '#FFF0F3', color: '#F4617F'}}
                  >
                    {u.role}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={u.status === 'Active'
                      ? {backgroundColor: '#D4EDDA', color: '#155724'}
                      : {backgroundColor: '#F8D7DA', color: '#721C24'}
                    }
                  >
                    {u.status}
                  </span>
                  <button
                    onClick={() => handleDeactivate(u.id)}
                    className="text-sm px-4 py-1 rounded-lg border"
                    style={{borderColor: '#FDEEF1', color: '#888'}}
                  >
                    {u.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageUsers;