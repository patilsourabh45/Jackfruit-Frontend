import React from 'react';
import UserDataForm from '../Forms/UserDataForm';
import Loader from '../components/Loader';
import { UserDataApi } from '../api/UserDataApi';
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';

let history = createBrowserHistory();

const AvailableStates = {
  NEW: 'NEW',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

export class UserDataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: AvailableStates.NEW
    }
  }

  createUserData(fname, lname, mobilenumber, basic, lta, hra, fa, investments, rent, citytype, medicalpolicy, applicablehra, totaltaxableincome) {

    this.setState({ state: AvailableStates.LOADING });
    UserDataApi(fname, lname, mobilenumber, basic, lta, hra, fa, investments, rent, citytype, medicalpolicy, applicablehra, totaltaxableincome)
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
            <UserDataForm UserData={(fname, lname, mobilenumber, basic, lta, hra, fa, investments, rent, citytype, medicalpolicy, applicablehra, totaltaxableincome) => this.createUserData(fname, lname, mobilenumber, basic, lta, hra, fa, investments, rent, citytype, medicalpolicy, applicablehra, totaltaxableincome)} />
          )
        }
        {
          state === AvailableStates.LOADING && (<Loader />)
        }
        {
          state === AvailableStates.ERROR && (
            <div className="center">
              <div>Error : Invalid data</div>
              <br></br>
              <button type="button" class="btn btn-primary"><Link style={{ textDecoration: 'none', color: "white" }} to="./">Login</Link> </button>
            </div>
          )
        }
        {
          state === AvailableStates.SUCCESS && (
            <>
              <div className="center">
                <div> Data sent successfully! </div>
                <br></br>
                <button type="button" class="btn btn-primary"><Link style={{ textDecoration: 'none', color: "black" }} to="./">Login Again</Link> </button>
              </div>

            </>
          )
        }
      </>
    )
  }
}

export default UserDataComponent;