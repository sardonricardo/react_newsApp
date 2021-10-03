import React, { Component } from "react";
import axios from 'axios'; 
import NewsCard from '../Card' 


class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      news: this.props.new
      
    }
    /* this.state = {
      fetchData: [],
    }  */
    
  }
  async componentDidMount(){
    //Petición HTTP
    // fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(resp => resp.json())
    //     .then(data => data)
  
      await new Promise(resolve => setTimeout(resolve, 1000));
      const resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=5&apiKey=${process.env.REACT_APP_NEWSAPI_URL}`);
      const data = await resp.data;

      console.log(data) //Objeto completo. 

      let stateUpdated = this.state.news.concat(data.articles)

      this.setState({news: stateUpdated}) 

      /* console.log('componendfdfdtDidMount'); */
      /*  this.setState({   //Del JSON obtenido, implementamos el estado con el método setState. 
        fetchData: data.articles
      });  */

      /* console.log({ fetchData: data.articles}) //Objeto con los artículos */

}

  paintNews = () => {

    return this.state.news.map((article,i)=> <NewsCard info={article} key={i} remove={() => this.removeNew(i)}/>)
  
  }

  removeNew = (i) => {

    const remainNews = this.state.news.filter((task,j)=> j!==i );
    this.setState({news:remainNews})

    }

  render() {

    return (
    <>
    <section>
      <h2>Breaking news</h2>
    </section>
    
    <section>
    <div className="container-card">
     {/*  Aquí llamamos a la función!  */}
     
      {this.paintNews()} 
    </div>;
    </section>
    </>
  )

   /*  Your pai key is: 86ba2d0c3e3f43e8a93a15dd6842487c */
  }
}

export default List;
