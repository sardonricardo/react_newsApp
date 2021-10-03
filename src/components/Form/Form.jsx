import React, { Component } from "react";
import { Input } from '@nextui-org/react';
import Button from '@mui/material/Button';
import List from '../List'
import { Redirect } from "react-router-dom";

class Form extends Component {

  

  constructor(props) {
        
    super(props)

   /* this.title = React.createRef(); // Referencia para URL
    this.author = React.createRef();
    this.content = React.createRef(); */
    this.url = React.createRef();  
    this.urlToImage = React.createRef(); 

    this.state = {
      news: [],
      redirect: false
    }
}

  addNews = (event) => {
    //const name = prompt("Introduce nombre")
    //const desc = prompt("introduce descripción")

    event.preventDefault();

    console.log("**************************");

    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const content = event.target.elements.content.value;
    const url = this.url.current.value; 
    const urlToImage = this.urlToImage.current.value; 

    /* console.log(title, author, content, url)  */

      if (title && author && content && url && urlToImage) {

        const newToAdd = { title, author, content, url, urlToImage } 

        this.props.newPassed(newToAdd); 
        console.log('entro!')

        /* this.setState({ redirect: "/list" }); */
        
      }
    
    }
    
  

  /* formPage =()=>{
      const openFormPage= () => {
        history.push('/list'); //this will open login page on click of login button
    }
  } */


  render() {

    return <div className="form--container">

    {/* Añadir nueva noticia */}

    <h2>Add new article</h2>
    
    <form action="" onSubmit={this.addNews} className="form-form">
      <Input underlined animated={false} type="text" name="title" id="" placeholder="Title" className="form-form-title"/>
      <Input underlined animated={false} type="text" name="author" id="" placeholder="Author" className="form-form-author"/>
      <textarea type="text"name="content" rows="10" cols="50" placeholder="Start writting..." className="form-form-content" ></textarea>
      <Input underlined animated={false} type="url" name="url" id="" placeholder="Url" className="form-form-url" ref={this.url} />
      <Input underlined animated={false} type="url" name="urlToImage" id="" ref={this.urlToImage} placeholder="Image url"/>
      <Button variant="contained" color="success" type="submit" value="Register" >Add</Button>
    </form>

    </div>;
  }
}

export default Form;
