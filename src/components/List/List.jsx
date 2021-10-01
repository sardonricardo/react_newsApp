import React, { Component } from "react";
import axios from 'axios'; 
import Card from '../Card' 

const API_KEY = "86ba2d0c3e3f43e8a93a15dd6842487c"

class List extends Component {

  constructor(props) {
    super(props)

    console.log(props)

    this.state = {

      fetchData: [],
      
      /* error: false */
    }
    
  }
  
  async componentDidMount(){
    //Petición HTTP
    // fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(resp => resp.json())
    //     .then(data => data)
  
      await new Promise(resolve => setTimeout(resolve, 1000));
      const resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=ru&category=technology&pageSize=5&apiKey=${API_KEY}`);
      const data = await resp.data;

      console.log(data) //Objeto completo. 

      /* console.log('componendfdfdtDidMount'); */

      this.setState({   //Del JSON obtenido, implementamos el estado con el método setState. 
        fetchData: data.articles
      });

      console.log({ fetchData: data.articles}) //Objeto con los artículos

}


  paintNews = () => {

    return this.state.fetchData.map((article,i)=> <Card info={article} key={i} remove={() => this.removeNew(i)}/>)
  
  }

  removeNew = (i) => {

    const remainNews = this.state.fetchData.filter((task,j)=> j!==i );
    this.setState({fetchData:remainNews})

    }

  render() {

    return <div>New's List
     {/*  Aquí llamamos a la función!  */}
      {this.paintNews()} 
    </div>;

    

   /*  Your pai key is: 86ba2d0c3e3f43e8a93a15dd6842487c */
  }
}

export default List;
