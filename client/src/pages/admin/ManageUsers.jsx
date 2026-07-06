import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { getAllUsers, updateUserStatus } from '../../api/index';

const serviceCategories = [
  'Nursing Care',
  'Elderly Attendant',
  'Physiotherapy',
  'Post-Hospital Care'
];

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        setUsers(res.data.users);
      } catch (err) {
        setError('Failed to load users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filtered = filterRole === 'all'
    ? users
    : users.filter(u => u.role === filterRole);

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Manage Users & Service Categories</h2>
        <p className="text-gray-400 text-sm mb-8">View and manage all registered users</p>

        {error && (
          <p className="text-red-500 text-center mb-6">{error}</p>
        )}

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

        {/* users */}
        <div className="bg-white rounded-xl border p-6" style={{borderColor: '#FDEEF1'}}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">All Users</h3>
            <div className="flex gap-3">
              {['all', 'user', 'caregiver', 'admin'].map((role) => (
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
                key={u._id}
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
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageUsers;