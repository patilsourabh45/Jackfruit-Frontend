const axios = require('axios');
// const BACKEND_URL = 'https://JackFruitBackend.patilsourabh45.repl.co';
// const BACKEND_URL = 'https://5mafqx25za.execute-api.us-east-1.amazonaws.com/dev/';
const BACKEND_URL = 'http://localhost:3006'

function loginApi(email, password) {
  return axios.get(`${BACKEND_URL}/auth/login`, {
    params: {
      email: email,
      password: password
    }
  });
}

export { loginApi };