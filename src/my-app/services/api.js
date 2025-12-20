import axios from 'axios';

// Création d'une instance Axios configurée
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur : Ajoute le token automatiquement à chaque requête
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') { // Vérifie qu'on est côté navigateur
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Intercepteur : Si le token est périmé (Erreur 401), on redirige vers le login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/'; // Retour case départ
      }
    }
    return Promise.reject(error);
  }
);

export default api;