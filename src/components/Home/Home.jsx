import React, { Component } from "react";
import {userContext} from '../../context/userContext';
import Button from '@mui/material/Button';
import { Input } from '@nextui-org/react';


class Home extends Component {


  constructor(props) {
    super(props)
      //Creamos una referencia:
    this.name = React.createRef(); 
  
  }

  handleSubmit = (event) => {

    event.preventDefault(); 
  }

  handleChange = (event) => {
    
    console.log(event.target.value);

}

  render() {
    return <div>


      <div className="welcome-container">
      </div>

      <form onSubmit={this.handleSubmit} className="login-list-form">

            <Input underlined animated={false} labelPlaceholder="Please, enter your username" color="black" type="text" onChange={this.handleChange} ref={this.name} className="input-submit" />   
          <userContext.Consumer>
          {({user,login}) => 
            <Button  className="button-enter" variant="contained" color="grey" type="submit" value="Enviar" onClick={()=>login(this.name.current.value)}>Enter</Button>
            }
          </userContext.Consumer>
      </form>

     
    
    </div>;
  }
}

export default Home;
