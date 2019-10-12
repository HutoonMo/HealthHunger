import React from 'react';
import logo from './logo.png';
import './App.css';
import header from './header.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Signin from './Signin';
function Header() {
  return (
    <Router>
    <div >

<nav className="navbar navbar-expand-lg App-header">

  <Link  to={'/'} className="navbar-brand" >
    <img src={logo} width="130" height="130" className="d-inlines-block align-top mx-auto " alt=""/>

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
      </div>
      </nav>
      <Switch>
              <Route exact path='/' component={RestaurantList} />
              <Route path='/restaurants' component={RestaurantList} />
              <Route path='/signin' component={Signin} />
          </Switch>
    </div>

    </Router>
  );
}

export default Header;
