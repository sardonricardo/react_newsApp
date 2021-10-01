import React, { Component } from "react";
import {userContext} from '../../context/userContext';

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

      <form onSubmit={this.handleSubmit} className="product-list-form">
                          
          <input type="text" onChange={this.handleChange} ref={this.name}/>
                          
          <userContext.Consumer>
          {({user,login}) => 
            <input type="submit" value="Enviar" onClick={()=>login(this.name.current.value)}/>
            }
          </userContext.Consumer>
      </form>
    
    </div>;
  }
}

export default Home;
