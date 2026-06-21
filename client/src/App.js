import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientProfile from './pages/user/PatientProfile';
import Services from './pages/user/Services';
import Caregivers from './pages/user/Caregivers';
import BookService from './pages/user/BookService';
import TrackService from './pages/user/TrackService';
import ServiceHistory from './pages/user/ServiceHistory';
import ManageAvailability from './pages/caregiver/ManageAvailability';
import ServiceRequests from './pages/caregiver/ServiceRequests';
import ActiveJobs from './pages/caregiver/ActiveJobs';
import EarningsHistory from './pages/caregiver/EarningsHistory';
import VerifyCaregivers from './pages/admin/VerifyCaregivers';
import ManageUsers from './pages/admin/ManageUsers';
import MonitorQuality from './pages/admin/MonitorQuality';
import Disputes from './pages/admin/Disputes';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user/patient" element={
          <ProtectedRoute allowedRole="user"><PatientProfile /></ProtectedRoute>
        } />
        <Route path="/user/services" element={
          <ProtectedRoute allowedRole="user"><Services /></ProtectedRoute>
        } />
        <Route path="/user/caregivers" element={
          <ProtectedRoute allowedRole="user"><Caregivers /></ProtectedRoute>
        } />
        <Route path="/user/book" element={
          <ProtectedRoute allowedRole="user"><BookService /></ProtectedRoute>
        } />
        <Route path="/user/track" element={
          <ProtectedRoute allowedRole="user"><TrackService /></ProtectedRoute>
        } />
        <Route path="/user/history" element={
          <ProtectedRoute allowedRole="user"><ServiceHistory /></ProtectedRoute>
        } />

        <Route path="/caregiver/availability" element={
          <ProtectedRoute allowedRole="caregiver"><ManageAvailability /></ProtectedRoute>
        } />
        <Route path="/caregiver/requests" element={
          <ProtectedRoute allowedRole="caregiver"><ServiceRequests /></ProtectedRoute>
        } />
        <Route path="/caregiver/jobs" element={
          <ProtectedRoute allowedRole="caregiver"><ActiveJobs /></ProtectedRoute>
        } />
        <Route path="/caregiver/history" element={
          <ProtectedRoute allowedRole="caregiver"><EarningsHistory /></ProtectedRoute>
        } />

        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>
        } />
        <Route path="/admin/verify" element={
          <ProtectedRoute allowedRole="admin"><VerifyCaregivers /></ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute allowedRole="admin"><ManageUsers /></ProtectedRoute>
        } />
        <Route path="/admin/quality" element={
          <ProtectedRoute allowedRole="admin"><MonitorQuality /></ProtectedRoute>
        } />
        <Route path="/admin/disputes" element={
          <ProtectedRoute allowedRole="admin"><Disputes /></ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;