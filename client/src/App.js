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
import ProtectedRoute from './components/common/ProtectedRoute';

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
      </Routes>
    </Router>
  );
}

export default App;