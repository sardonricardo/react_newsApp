import React, { Component } from "react"; //importa React
import {Route, Switch} from 'react-router-dom'; //Importa el router 
import Home from "../Home";
import List from "../List";
import Form from "../Form"; 
import Error from "../Error/Error";

function Main() {
  return (
    <div>
            <Switch>
                <Route path="/home" component={Home} exact/>
                <Route path="/list" component={List} />
                <Route path="/form" component={Form} />
               {/*  <Route component={Error} /> */}
            </Switch>
    </div>
  )
}

export default Main
