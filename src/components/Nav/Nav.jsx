import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {userContext} from '../../context/userContext';

class Nav extends Component {
  render() {
    return (         
    <nav className="header--nav">
      <ul>
        <li className="header--nav-element"><Link to="/home">Home</Link></li>
        <li className="Header--nav-element"><Link to="/form">Form</Link></li>
        <li className="Header--nav-element"><Link to="/list">New's List</Link></li>
      </ul>
      <userContext.Consumer>
            {(value) => {

                  console.log(value) //Este value es del Provider de app.js, que lo consume el header. 
                  
                  return <p>{value.user.name}</p>
            }}
      </userContext.Consumer>
    </nav>);
  }
}

export default Nav;
