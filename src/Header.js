import React from 'react';
import logo from './logo.jpg';
import './App.css';
import header from './header.jpg';

function Header() {
  return (
    <div >

<nav className="navbar navbar-expand-lg App-header">

  <a className="navbar-brand" href="#">
    <img src={logo} width="150" height="150" className="d-inlines-block align-top" alt=""/>

  </a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> Resturant</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> Sign-in</a>
      </li>
       </ul>
      </div>
</nav>
    </div>
  );
}

export default Header;
