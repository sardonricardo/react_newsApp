import React, { Component } from "react";


const Card = (props) => { //Pasaremos los valores a la Weathercard via props. 


  
  return ( //Aquí renderizamos los datos. 
      <section>
        
          <div className="news-container">
            <h1 className="news-title">{props.info.title}</h1>
            <h3 className="news-author">{props.info.author}</h3>
            <p className="news-content">{props.info.content}</p>
            <p className="news-url"> + info {props.info.url}</p>
            <button onClick={props.remove}>Delete</button>

          </div>
      </section>
  );
};



export default Card;
