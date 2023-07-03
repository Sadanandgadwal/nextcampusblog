import axios from 'axios';

// Create an instance of Axios
const tokenApi = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
});

// Add a request interceptor
tokenApi.interceptors.request.use(
  config => {
    // Get the token from local storage
    const token = localStorage.getItem('token');

    // Add the token to the request header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
tokenApi.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle token expiration or authentication errors
    if (error.response.status === 401) {
      // Refresh the token or redirect to the login page
      // ...

      // For example, you can refresh the token by making a separate API call
      return tokenApi.post('/refresh-token')
        .then(response => {
          const newToken = response.data.token;
          // Update the token in the local storage
          localStorage.setItem('token', newToken);
          // Retry the original request with the new token
          error.config.headers['Authorization'] = `Bearer ${newToken}`;
          return axios.request(error.config);
        })
        .catch(error => {
          // Handle the token refresh error, e.g., redirect to the login page
          // ...
          return Promise.reject(error);
        });
    }

    return Promise.reject(error);
  }
);

export default tokenApi;
