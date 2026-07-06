import React from 'react';
import Navbar from '../../components/common/Navbar';

const Disputes = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF8F8'}}>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Handle Disputes & Escalations</h2>
        <p className="text-gray-400 text-sm mb-8">Manage escalated issues between users and caregivers</p>

        <div className="bg-white rounded-xl border p-12 text-center" style={{borderColor: '#FDEEF1'}}>
          <p className="text-4xl mb-4">⚖️</p>
          <p className="text-gray-500 font-medium">No disputes raised yet</p>
          <p className="text-gray-400 text-sm mt-2">Disputes between users and caregivers will appear here</p>
        </div>

      </div>
    </div>
  );
};

export default Disputes;