import axios from 'axios';

// Create an Axios instance with base configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach the auth token to headers if the user is logged in
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Response Interceptor: Handle 401 Unauthorized errors by logging the user out
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/auth';
      }
    }
    return Promise.reject(error);
  }
);

// --- API Service Functions ---

/**
 * Fetches the prediction history from the backend.
 */
export const fetchPredictionHistory = async () => {
  try {
    const response = await api.get('/history');
    return response.data;
  } catch (error) {
    console.error("Error fetching prediction history:", error);
    throw new Error('Failed to fetch history from the backend.');
  }
};

export default api;