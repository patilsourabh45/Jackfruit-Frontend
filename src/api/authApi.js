const axios = require('axios');
const BACKEND_URL = 'http://localhost:7000/';

function loginApi(email, password) {
  return axios.get(`${BACKEND_URL}/auth/login`, {
    params: {
      email: email,
      password: password
    }
  });
}

export { loginApi };