import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Typography,Button,Paper, Grid} from '@material-ui/core/';
import { Link } from 'react-router-dom' //usar para los home,buscar,categorias

const styles={
  grid:{
    paddingTop:250,
  
  }
}


 const Welcome=withStyles(styles)( ({classes})=>{  
  return  <Grid  
            container 
            spacing={4}
            direction="column"
            justify="center"
            alignItems="center"
            style={styles.grid}
          >
      <Grid item>
          <Typography variant='h3' color='textSecondary' noWrap>
              Bienvenido a Lunchito
            </Typography>
            <br/> <br/>
            <Typography variant="body1" gutterBottom noWrap style={{textAlign:'center'}}  >
                Gracias por registrarte con nosotros. 
            </Typography>
        </Grid>
       <br/>
       <Grid item>
           <Button>
             <Link to='/categorias'>Explorar</Link>
           </Button>
       </Grid>

    </Grid>
    
 }) 
export default withStyles(styles)(Welcome);