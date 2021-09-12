import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../css/form.css'

function Navigation(props) {
  return <>
    <nav className="navbar navbar-expand-lg fixed-top shadow navbar-dark bg-dark">
      <div className="container-fluid" >
        <div className="d-flex align-items-center"><Link className="navbar-brand py-1" to="/"><p style={{color:"White",fontWeight:900,fontSize:"x-large"}}> <h1 className='h1'> <span className="span"> </span></h1></p></Link>
        </div>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>

        <div className="collapse navbar-collapse" id="navbarCollapse">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item" ><Link className="nav-link" to="/aboutus">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
          
                 
          </ul>
        </div>
      </div>
    </nav>
  </>
}
export default Navigation;

   
