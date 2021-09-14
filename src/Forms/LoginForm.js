import React from 'react'
import '../css/form.css'
import {Link} from 'react-router-dom'

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  };

  render() {
    return (
      <>
        <div><h1 style={{ textAlign: "center", marginTop:"-40px"}}>Login</h1></div>
        <div className="Signin card border-dark mb-3 col-md-12 col-sm-4 col-sx-12">
          <form className="col-md-8 col-sm-4 col-sx-12">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} className="form-control" required />

            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password"  placeholder="Password"   value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} className="form-control" id="exampleInputPassword1" required />
            </div>
            <button style={{marginBottom:'14px'}} type="submit" onClick={() => this.props.login(this.state.email, this.state.password)} className="btn btn-primary">Login</button>
            <p>Don't have an account ?<Link style={{textDecoration:'none',fontWeight:700}}to="./signup"> Create here</Link></p>
          
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
