import './App.css';
import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form'; 
import Main from './components/Main';
import './styles/styles.scss'

import {userContext} from './context/userContext';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:""
      }
    }
  }
  login = (name, email, url, age) => {
    this.setState({
      user: {
        name: name,
        email: email,
        url: url,
        age: age,
      }
    })
  }
  
/*   logout = () => this.setState({user:{name:""}}) */


  //Función que cambia el color! 
  

  render() {
    const value = {
      user: this.state.user,
      login: this.login
      /* logout: this.logout  */
    }

   
    return (
      <div className="App">
      <BrowserRouter>

        <userContext.Provider value={value}>   
          <Header/>
          <Main/>
        </userContext.Provider>
        
      </BrowserRouter>
      <Footer/>
    </div>
    )
  }
}

export default App