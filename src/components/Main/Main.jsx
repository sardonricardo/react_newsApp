import React, { Component } from "react"; //importa React
import {Route, Switch, Redirect} from 'react-router-dom'; //Importa el router 
import Home from "../Home";
import List from "../List";
import Form from "../Form"; 
import Error from "../Error/Error";

class Main extends Component {

  constructor(props) {

    super(props)
  
    this.state = { //array vacío que se llenará cuando el child le envíe la información desde el form! 
      news: [],
      redirect: false
    }

  }
  
  passNew = (newToPass) => {
    this.setState({news: [...this.state.news, newToPass], redirect:true}); 
  }

  render() {

    if ( this.state.redirect === true ) {

      return (
      <>
      <Redirect from='/form' to='/list'/>
      <Route path="/list" component={() => <List new={this.state.news} /> } />
      {this.setState({redirect: false})}
      </>
      )
    }

    return (

    <div>
            <Switch>
                <Route path="/home" component={Home} exact />
                <Route path="/list" component={() => <List new={this.state.news} /> } />
                <Route path="/form" component={() => <Form newPassed={this.passNew} />} />
               {/*  <Route component={Error} /> */}
            </Switch>
    </div>
  )
}
}

export default Main
