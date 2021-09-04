import React from 'react';
import SignupForm from '../Forms/SignupForm';
import Loader from '../components/Loader';
import { signupApi } from '../api/signupApi';
import { createBrowserHistory } from 'history';

let history = createBrowserHistory();

const AvailableStates = {
  NEW: 'NEW',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

export class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: AvailableStates.NEW
    }
  }

  createSignup(name, phonenumber, email, password) {
    console.log(`Email = ${email} and password=${password}`);
    this.setState({ state: AvailableStates.LOADING });
    signupApi(name, phonenumber, email, password)
      .then(response => {
        console.log(JSON.stringify(response));
        if (response.status === 200) {
          this.setState({ state: AvailableStates.SUCCESS });
          history.push('/')

        }
        else {
          this.setState({ state: AvailableStates.ERROR });
        }
      })
      .catch(error => {
        this.setState({ state: AvailableStates.ERROR });
      })
  }

  render() {
    const { state } = this.state;
    return (
      <>
        {
          state === AvailableStates.NEW &&
          (
            <SignupForm signup={(name, phonenumber, email, password) => this.createSignup(name, phonenumber, email, password)} />
          )
        }
        {
          state === AvailableStates.LOADING && (<Loader />)
        }
        {
          state === AvailableStates.ERROR && (
            <div> Error occurred </div>
          )
        }
        {
          state === AvailableStates.SUCCESS && (
            <>
              <div> Signup successfull! </div>

            </>
          )
        }
      </>
    )
  }
}

export default SignupComponent;