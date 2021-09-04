const axios = require('axios');
const BACKEND_URL = 'https://JackFruitBackend.patilsourabh45.repl.co';

function UserDataApi(fname, lname, mobilenumber, basic, lta, hra, fa, investments, rent, citytype, medicalpolicy, applicablehra, totaltaxableincome) {

  return axios.post(`${BACKEND_URL}/userdata`, {},{
    params: {
        FirstName: fname, 
        LastName: lname,
        MobileNumber:mobilenumber, 
        Basic:basic,
        LTA:lta, 
        HRA:hra, 
        FA:fa, 
        Investments:investments, 
        Rent:rent, 
        CityType:citytype,  
        MedicalPolicy:medicalpolicy, 
        ApplicableHRA:applicablehra, 
        TotalTaxableIncome:totaltaxableincome
    }
  });
}

export { UserDataApi };