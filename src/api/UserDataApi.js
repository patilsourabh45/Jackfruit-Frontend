const axios = require('axios');
const BACKEND_URL = 'http://localhost:7000/';

function UserDataApi(fname, lname, mobilenumber, basic, lta, hra, fa, investments, rent, citytype, medicalpolicy, applicablehra, totaltaxableincome) {

  return axios.post(`${BACKEND_URL}userdata`, {},{
    params: {
        FirstName: fname, 
        lastName: lname,
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