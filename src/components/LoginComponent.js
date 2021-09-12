import React from 'react';
import LoginForm from '../Forms/LoginForm';
import Loader from './Loader';
import { loginApi } from '../api/authApi';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import '../css/form.css'


const AvailableStates = {
  NEW: 'NEW',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

export class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: AvailableStates.NEW
    }
  }

  login(email, password) {
    console.log(`Email = ${email} and password=${password}`);
    this.setState({ state: AvailableStates.LOADING });
    loginApi(email, password)
      .then(response => {
        console.log(JSON.stringify(response));
        if (response.status === 200) {
          this.setState({ state: AvailableStates.SUCCESS });
          this.props.history.push('/hra')

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
            <LoginForm login={(email, password) => this.login(email, password)} />
          )
        }
        {
          state === AvailableStates.LOADING && (<Loader />)
        }
        {
          state === AvailableStates.ERROR && (
            <>
              <div className="center">
                <div>Invalid email or password</div>
                <br></br>
                <button type="button" class="btn btn-primary"><Link style={{ textDecoration: 'none', color: "white" }} to="./">Login</Link> </button>
              </div>
            </>
          )
        }
        {
          state === AvailableStates.SUCCESS && (
            <>
              <div> Login successfull! </div>

            </>



          )
        }
      </>
    )
  }
}

export default withRouter(LoginComponent);