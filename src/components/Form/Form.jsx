import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
        
    super(props)



    this.title = React.createRef(); // Referencia para URL
    this.author = React.createRef();
    this.content = React.createRef();
    this.url = React.createRef(); 

    this.state = {
      data: {}
    }
}

  addProduct = (event) => {
    //const name = prompt("Introduce nombre")
    //const desc = prompt("introduce descripción")

    event.preventDefault();

    console.log("**************************");

    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const content = event.target.elements.content.value;
    const url = event.target.elements.content.value; 

    /* console.log(title, author, content, url)  */

      if (title && author && content && url) {

        this.setState({

          data: {
          title: title,
          author: author,
          content: content,
          url: url
            }
         })

        console.log()

        //Añadir producto al array
       /*  const newArticle = news
        this.setState({ news: [...this.state.news, newArticle] }) */
    }
  }


  render() {
    return <div className="form--container">

    {/* Añadir nueva noticia */}

    <h2>Add new article</h2>
    
    <form action="" onSubmit={this.addProduct} className="form-form">
      <input type="text" name="title" id="" placeholder="Title" ref="" className="form-form-title"/>
      <input type="text" name="author" id="" placeholder="Author" ref="" className="form-form-author"/>
      <textarea name="content" rows="10" cols="50" placeholder="Start writting..." className="form-form-content" ref=""></textarea>
      <input type="url" name="url" id="" placeholder="Url" className="form-form-url" ref="" />
      <input type="submit" value="Register" />
    </form>

    </div>;
  }
}

export default Form;
