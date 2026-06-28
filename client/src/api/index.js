import axios from 'axios';

// base URL - when we deploy we just change this one line
const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// automatically attach JWT token to every request
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('care24_user'));
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// auth routes
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);

// user routes
export const getPatientProfile = () => API.get('/users/patient');
export const savePatientProfile = (data) => API.post('/users/patient', data);
export const getServiceHistory = () => API.get('/users/history');

// caregiver routes
export const getCaregivers = () => API.get('/caregivers');
export const updateAvailability = (data) => API.put('/caregivers/availability', data);
export const getServiceRequests = () => API.get('/caregivers/requests');
export const updateRequestStatus = (id, data) => API.put(`/caregivers/requests/${id}`, data);
export const getActiveJobs = () => API.get('/caregivers/jobs');
export const updateJobStatus = (id, data) => API.put(`/caregivers/jobs/${id}`, data);
export const addCareNote = (id, data) => API.post(`/caregivers/jobs/${id}/note`, data);
export const getEarningsHistory = () => API.get('/caregivers/history');

// service routes
export const getServices = () => API.get('/services');

// booking routes
export const createBooking = (data) => API.post('/bookings', data);
export const getBookings = () => API.get('/bookings');
export const trackBooking = (id) => API.get(`/bookings/${id}`);

// admin routes
export const getAllUsers = () => API.get('/admin/users');
export const updateUserStatus = (id, data) => API.put(`/admin/users/${id}`, data);
export const getPendingCaregivers = () => API.get('/admin/caregivers/pending');
export const verifyCaregiver = (id, data) => API.put(`/admin/caregivers/${id}/verify`, data);
export const getComplaints = () => API.get('/admin/complaints');
export const resolveComplaint = (id) => API.put(`/admin/complaints/${id}/resolve`);
export const getDisputes = () => API.get('/admin/disputes');
export const resolveDispute = (id) => API.put(`/admin/disputes/${id}/resolve`);
export const getAnalytics = () => API.get('/admin/analytics');