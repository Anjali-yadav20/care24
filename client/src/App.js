import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientProfile from './pages/user/PatientProfile';
import Services from './pages/user/Services';
import Caregivers from './pages/user/Caregivers';
import BookService from './pages/user/BookService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/patient" element={<PatientProfile />} />
        <Route path="/user/services" element={<Services />} />
        <Route path="/user/caregivers" element={<Caregivers />} />
        <Route path="/user/book" element={<BookService />} />

      </Routes>
    </Router>
  );
}

export default App;