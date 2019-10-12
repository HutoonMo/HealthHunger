import React from 'react';
import logo from './logo.png';
import './App.css';
import header from './header.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Signin from './Signin';
import Cart from './Cart';

import MdCart from 'react-ionicons/lib/MdCart'
 
function Header() {
  return (
    <Router>
    <div >

<nav className="navbar navbar-expand- App-header" style={{display: 'flex', justifyContent: 'center'}}>

  <Link  to={'/'} className="navbar-brand" >
    <img src={logo} width="180" height="180" className="d-inlines-block align-top mx-auto " alt=""/>

  </Link>

</nav>
<nav className="navbar navbar-expand-lg navig">



<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link  to={'/'}className="nav-link">Home </Link>
      </li>
      <li className="nav-item">
        <Link  to={'/restaurants'} className="nav-link" > Resturants</Link>
      </li>
      <li className="nav-item">
        <Link  to={'/signin'} className="nav-link" > Sign-in</Link>
      </li>

       </ul>
       <ul className="navbar-nav ml-auto">       <li className="nav-item" >
        <Link  to={'/cart'} className="nav-link" >  Cart <MdCart  fontSize="25px" color="#ffffff" /> </Link>
      </li></ul>
      </div>
      </nav>
      <Switch>
              <Route exact path='/' component={RestaurantList} />
              <Route path='/restaurants' component={RestaurantList} />
              <Route path='/signin' component={Signin} />
              <Route path='/cart' component={Cart} />
          </Switch>
    </div>

    </Router>
  );
}

export default Header;
