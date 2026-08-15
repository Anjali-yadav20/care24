import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PatientProfile from './pages/user/PatientProfile.jsx';
import Services from './pages/user/Services.jsx';
import Caregivers from './pages/user/Caregivers.jsx';
import BookService from './pages/user/BookService.jsx';
import TrackService from './pages/user/TrackService.jsx';
import ServiceHistory from './pages/user/ServiceHistory.jsx';
import ManageAvailability from './pages/caregiver/ManageAvailability.jsx';
import ServiceRequests from './pages/caregiver/ServiceRequests.jsx';
import ActiveJobs from './pages/caregiver/ActiveJobs.jsx';
import EarningsHistory from './pages/caregiver/EarningsHistory.jsx';
import VerifyCaregivers from './pages/admin/VerifyCaregivers.jsx';
import ManageUsers from './pages/admin/ManageUsers.jsx';
import MonitorQuality from './pages/admin/MonitorQuality.jsx';
import Disputes from './pages/admin/Disputes.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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