import React from 'react'
import Pagenotfound from './Pagenotfound';
import Navigation from './Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserDataPage from '../pages/UserDataPage';
import Footer from './Footer';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Aboutus from './Aboutus'

function App(){
  return(
    <>
     <BrowserRouter>
       <div className="App">
      <Navigation></Navigation>
      </div>
      <div style={{height:"150px"}}></div>
      <Switch>
      <Route path='/' component={LoginPage} exact></Route>
      <Route path='/aboutus' component={Aboutus}></Route>
      <Route path='/hra' component={UserDataPage}></Route>
      <Route path='/signup' component={SignupPage}></Route>
      <Route path='*' component={Pagenotfound}></Route>
      
      </Switch>
    </BrowserRouter>
    <Footer></Footer>
    
 
 
  
    </>  
  )
}
export default App;