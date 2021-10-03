import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {userContext} from '../../context/userContext';
import Button from '@mui/material/Button';

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
      {({user,logout}) =>
        user.name?
        <>
          <h3>Welcome, {user.name} to</h3>
          <h1>News App</h1>
          <Button variant="contained" color="error" onClick={logout}>Logout</Button>
        </> :""
      }
      </userContext.Consumer>
      
    </nav>);
  }
}

export default Nav;

