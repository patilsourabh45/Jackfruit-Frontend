import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import '../css/ui.css'
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

export default class UserDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      MobileNumber: '',
      Basic: '',
      LTA: '',
      HRA: '',
      FA: '',
      Investments: '',
      Rent: '',
      CityType: '',
      MedicalPolicy: '',
      ApplicableHRA: '',
      TotalTaxableIncome: ''
    }
  }

  evaluate=(e)=>{
    let taxableIncome = parseInt(this.state.Basic) + parseInt(this.state.LTA) + parseInt(this.state.HRA)+ parseInt(this.state.FA)  - parseInt(this.state.Investments)-parseInt(this.state.MedicalPolicy);
    this.setState({TotalTaxableIncome: taxableIncome})

    console.log(this.state.MedicalPolicy)

  }

  calculate=(e)=>{
    var option=document.getElementById('option').value;
    if(option==="Metro City"){
      this.setState({ApplicableHRA:parseFloat(this.state.Basic*0.5)})
    }
    else{
      this.setState({ApplicableHRA:parseFloat(this.state.Basic*0.4)})
    }
  }


  render() {
    return (
      <>
       <marquee behaviour="scroll" direction="left" scrollamount="10" direction="left" style={{marginBottom:"5px", color:"red"}}>Do you know you can save your tax using our website. Please fill the below form.</marquee>

        <Card className="uicard" variant="outlined">
          <CardContent>
            <h5 style={{textAlign:"center"}}>Sample Form</h5>
            <Grid className="grid" container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                  placeholder="Enter First Name"
                  value={this.state.FirstName} 
                  onChange={(e) => this.setState({FirstName: e.target.value})}  
                  type="text"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                  placeholder="Enter Last Name"
                  value={this.state.LastName} 
                  onChange={(e) => this.setState({LastName: e.target.value})}
                  type="text"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  label="Mobile Number"
                  fullWidth
                  placeholder="Enter Mobile Number"
                  value={this.state.MobileNumber} 
                  onChange={(e) => this.setState({MobileNumber: e.target.value})} 
                  type="number"
                  inputProps={{ min: 0 }}
                  
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  label="Basic Salary"
                  fullWidth
                  placeholder="Enter Basic Salary"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={this.state.Basic} 
                  onChange={(e) => {this.setState({Basic: e.target.value})
                  this.evaluate();}}
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  label="LTA"
                  fullWidth
                  placeholder="Leave Travel Allowance"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={this.state.LTA} 
                  onChange={(e) =>{ this.setState({LTA: e.target.value})
                  this.evaluate();}}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="HRA"
                  fullWidth
                  placeholder="House Rent Allowance"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={this.state.HRA} 
                  onChange={(e) => {this.setState({HRA: e.target.value})
                  this.evaluate();}}
                />

              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="FA"
                  fullWidth
                  placeholder="Food Allowance"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={this.state.FA} 
                  onChange={(e) =>{this.setState({FA: e.target.value})
                  this.evaluate();}}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  label="Investments"
                  fullWidth
                  placeholder="Investments under section 80C"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={this.state.Investments} 
                  onChange={(e) => {this.setState({Investments: e.target.value})
                  this.evaluate();}}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  label="Rent"
                  fullWidth
                  placeholder="Rent Per Month"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={this.state.Rent} 
                  onChange={(e) => {this.setState({Rent: e.target.value})
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField id="select" label="City Type" 
                displayEmpty
                value={this.state.CityType} 
                onChange={(e) => this.setState({CityType: e.target.value})
              }
                select>
                  <MenuItem value="Metro City" >Metro City</MenuItem>
                  <MenuItem value="Non Metro City">Non Metro City</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  label="Medical Policy"
                  fullWidth
                  placeholder="Total Medical Policy Premium Paid"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={this.state.MedicalPolicy} 
                  onChange={(e) => { 
                    this.setState({MedicalPolicy: e.target.value});
                    this.evaluate();
                    }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  disabled
                  label="Applicable HRA"
                  fullWidth
                  type="number"
                  value={this.state.ApplicableHRA} 
              
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  disabled
                  label="Total Taxable Income"
                  fullWidth
                  type="number"
                  value={this.state.TotalTaxableIncome}  
                 
                />
              </Grid>

              <Grid item xs={6}>
                <Button
                className="btn"  
                variant="contained" 
                color="primary" 
                onClick={() => this.props.UserData(this.state.FirstName, 
                  this.state.LastName, this.state.MobileNumber, this.state.Basic, this.state.LTA, this.state.HRA, this.state.FA, this.state.Investments, this.state.Rent, this.state.CityType, this.state.MedicalPolicy, this.state.ApplicableHRA, this.state.TotalTaxableIncome)}>
                  Submit
                </Button>
              </Grid>


            </Grid>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>

      </>
    )
  }
}