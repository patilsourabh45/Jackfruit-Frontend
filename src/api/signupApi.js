const axios = require('axios');
// const BACKEND_URL = 'https://JackFruitBackend.patilsourabh45.repl.co';
// const BACKEND_URL = 'http://5mafqx25za.execute-api.us-east-1.amazonaws.com/dev/';
const BACKEND_URL = 'http://localhost:3006'
function signupApi(name, email, phonenumber,  password) {
  return axios.post(`${BACKEND_URL}/signup`, {},{
    params: {
      name:name,
      phonenumber:phonenumber,
      email: email,
      password: password
    }
  });
}

export { signupApi };