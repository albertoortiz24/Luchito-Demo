import React, { Component, Fragment } from 'react';
import {receta} from './fakeDb.js'
import Title from '../layouts/Header'
import {Typography, List,ListItem,ListItemText,Grid,Checkbox} from '@material-ui/core'




const styles={
  grid: {
    paddingTop:30,
    margin:50,
  }
}

class Recetario extends Component{
    state={
        categoria:'Mexicana',
            titulo:'Chilaquiles',
            img:'https://upload.wikimedia.org/wikipedia/commons/9/92/01_Chilaquiles_verdes_con_frijoles_chinos.jpg',
            description:'Unos deliciosos chilaquiles rojos muy mexicanos, sencillos de preparar que dejarán satisfecha a toda tu familia. Con ese sabor a pueblo que a todos conquista. Sin gluten y veganos.',
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


    render (){
        return <Fragment>
        <Title/>
        <br/>   <br/>   <br/>   <br/>  
        
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center" spacing={40} 
            >
            <Grid item sm={12} >
                <Typography variant='h1' color='secondary' style={{textAlign:'center'}}>
                    {this.state.titulo}
                </Typography>
            </Grid> {/*Titulo*/}
            <br/>   <br/>  <br/>   <br/>  <br/>   <br/>   <br/>   <br/>  <br/>   <br/>  <br/>   <br/>  

            <Grid item sm={6} style={{alignItems:'center'}}>
                <img style={{maxHeight:500,maxWidth:700,borderRadius:3}} src=' https://upload.wikimedia.org/wikipedia/commons/9/92/01_Chilaquiles_verdes_con_frijoles_chinos.jpg' />
            </Grid> {/* imagen */}
            <br/>   <br/>  <br/>   <br/>  <br/>   <br/>  
            
            <br/>   <br/>  <br/>   <br/>  <br/>   <br/>  
           
             <Grid item sm={12} style={{padding:7,textAlign:'center'}}>
                    <Typography variant='h3'  style={{paddingTop:25}}>
                        Descripción
                    </Typography>
                    <Typography variant='h6' color='textSecondary' component='p' style={{padding:25,textAlign:'center',paddingTop:13}} >
                        {this.state.description}
                    </Typography>
                </Grid> {/*descri*/}

                <br/>   <br/>  <br/>   <br/>    <br/>   <br/>  <br/>   <br/>

                <Grid  item
                    direction="column"
                    justify="center"
                    alignItems='center'
                    lg={6} 
                    xs={12}
                    >
                    <Typography variant='h3' style={{textAlign:"center"}}>
                        Ingredientes
                    </Typography>
                    <Grid item  xs={12}>
                    {this.state.ingredientes.map((item,index) => {
                      return( 
                        <List xs={12} >
                         <ListItem key={index} sm={6} style={{alignItems:'center'}}>
                          <Checkbox  />
                          <ListItemText color='textSecondary' primary={item} />
                        </ListItem>
                        </List>
                      )
                    })}
                    </Grid>
                 </Grid> {/*ingredients*/}

                <Grid  container
                    direction="column"
                    justify="center"
                    alignItems="center" 
                    sm={12} 
                    >
                    <Typography variant='h3'>
                        Procedimiento
                    </Typography>
                    <Grid item>
                    {this.state.procedimiento.map((item,index) => {
                      return( 
                        <List sm={6}  >
                         <ListItem color='textSecondary' key={index} sm={6} style={{alignItems:'center'}}>
                          <ListItemText  primary={item} />
                        </ListItem>
                        </List>
                      )
                    })}
                    </Grid>
                    
                </Grid> {/*procedimiento*/}


            {/* <Grid item sm={6} style={{alignSelf:'center',paddingTop:'15'}} >
                <iframe src='https://www.youtube.com/embed/WpCe-pCKV_Y' title='video' style={{maxHeight:250,maxWidth:300}}/>    
             </Grid>  */}

            </Grid> {/*padre*/}
    

        </Fragment>
    }
}

export default Recetario


