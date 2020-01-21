import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import { Grid,Typography,Card,CardActionArea,CardActions,CardContent,CardMedia,Button } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles'
// import {receta} from '../fakeDb'
import Title from '../layouts/Header'


const Posts=(props,classes) => {
  const receta =[
    {
      categoria:'Mexicana',
        titulo:'Chilaquiles',
        img:'https://upload.wikimedia.org/wikipedia/commons/9/92/01_Chilaquiles_verdes_con_frijoles_chinos.jpg',
        description:'Tradicional y delicioso',
        ingredientes:['2 Jitomate',
        ' 1 Chile ancho',
        ' 10 Tortillas',
        'queso al gusto',
        'crema al gusto',
        ' 1/4 cebolla'],
        procedimiento:['Cocer los jitomates y los chiles',
        'Cortar las tortillas y freirlas', 
        'Licuar el jitomate, el chile, la crema y cebolla',
        'Una vez que estén listas las tortillas se les echa la salsa y se dejan calentar por 15 minutos',
        'Para servir se puede acompañar con el queso y cebolla']
    }
  ]
    
  return <Fragment>
       <Title/>
    <div style={{ marginTop: 20, padding: 30 }}>

      <Grid container spacing={40} justify="center">
        {receta.map(post => (
          <Grid 
            item xs={6}  
            key={post.categoria}
            style={{ margin: 20}}
            className={classes.carta}
           >
            <Card className={classes.carta}>
              <CardActionArea>
                <CardMedia className={classes.img}
                  component="img"
                  alt={post.categoria}
                  // height="140"
                  image={post.img}
                  title={post.categoria}
                />
                <CardContent >
                  <Typography 
                     gutterBottom 
                     color='inherit' 
                     variant="h4" 
                     component="p" 
                     className={classes.texto}>
                    {post.categoria}
                  </Typography>
                  <Typography component="p">{post.description}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to='/resultados'>Explorar</Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </Fragment>
}

export default withStyles({
  carta:{
    maxWidth:'200px',
    maxHeight:'100px'
  },
  texto:{
    maxWidth:'50px',
    textAlign:'center'
  },
  img:{
    maxWidth:'100px',
    maxHeight:'85px'
  }
}) (Posts);