import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// attach token to every request automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('care24_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// auth
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);

// patient
export const savePatientProfile = (data) => API.post('/users/patient', data);
export const getPatientProfile = () => API.get('/users/patient');

// services
export const getServices = () => API.get('/services');

// caregivers
export const getCaregivers = () => API.get('/caregivers');

// bookings
export const createBooking = (data) => API.post('/bookings', data);
export const getUserBookings = () => API.get('/bookings/user');
export const getCaregiverBookings = () => API.get('/bookings/caregiver');
export const updateAvailability = (data) => API.put('/caregivers/availability', data);
export const updateBookingStatus = (id, data) => API.put(`/bookings/${id}/status`, data);
export const addCareNote = (id, data) => API.post(`/bookings/${id}/note`, data);
export const getCareNotes = (id) => API.get(`/bookings/${id}/notes`);

// admin
export const getAllUsers = () => API.get('/admin/users');
export const updateUserStatus = (id, data) => API.put(`/admin/users/${id}`, data);
export const getPendingCaregivers = () => API.get('/admin/caregivers/pending');
export const verifyCaregiver = (id, data) => API.put(`/admin/caregivers/${id}/verify`, data);
export const getAnalytics = () => API.get('/admin/analytics');