const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api' 
  : 'https://amit-portfolio-backend.onrender.com/api';

export default API_BASE_URL;
