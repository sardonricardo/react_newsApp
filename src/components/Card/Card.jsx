import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsCard = (props) => { 


  
  return ( //Aquí renderizamos los datos. 
    <>
      <section className="section-card">
        
        <Card sx={{ maxWidth: 345 }} className="container-card">
      <CardMedia
        component="img"
        height="140"
        image={props.info.urlToImage}
        alt={props.info.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.info.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.info.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.info.url}>Continue reading</Button>
        <Button onClick={props.remove} variant="contained" color="error">Delete</Button>
      </CardActions>
    </Card>

         {/*  <div className="news-container">
            <h2 className="news-title">{props.info.title}</h2>
            <h3 className="news-author">{props.info.author}</h3>
            <p className="news-content">{props.info.content}</p>
            <p></p><a className="news-url" href={props.info.url}>{props.info.url}</a>
            <div className="image-container">
              <img src={props.info.urlToImage} alt={props.info.title} className="news-url-image" />
            </div>
            
            <Button onClick={props.remove} variant="contained" color="error">Delete</Button>

          </div> */}
      </section>

    </>
  );
};



export default NewsCard;


