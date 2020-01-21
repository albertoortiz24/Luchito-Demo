import React, { Component, Fragment } from 'react'
import Title from '../layouts/Header'
import {TextField,Grid,IconButton, Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

class Search extends Component {
  render() {
        return (
          <Fragment>
            <Title/>
            <Grid container justify='center' alignItems='center' style={{paddingTop:50,margin:60,paddingRight:100,paddingLeft:30}}>
              <Typography variant='h4' component='p' color='textPrimary' style={{textAlign:'center'}}> 
              En Lunchito podrás encontrar ideas para cocinar {<br/>} con los ingredientes que ya tienes.
              </Typography>
            </Grid>
            <Grid container justify='center' alignItems='center' style={{paddingTop:0,marginTop:0}}>
            <TextField  
                id="outlined-search"
                label="Ingresa los ingredientes separados por coma"
                type="search"
                margin="normal"
                variant="outlined"
                style={{width:500}}
                
              />
              <IconButton aria-label="Delete">
                 
                 <Link to='/resultados'> 
                   <SearchIcon/>
                 </Link>
              </IconButton>
            </Grid>
          </Fragment>
        )
      }
    }


  

 
export default Search




/*
const { API_KEY } = process.env
const API_URL = 'https://swapi.co/api/people'
 */
/*  */

  //aquí como se cambian los valores y como al hacer click en la sugerencia puedo hacer que pida otro ingrediente hasta que sean 3

  /* getInfo = () => {
    axios.get('./fakeDb.json')
      .then((response ) => {
          console.log(response)
        this.setState({
          results: '' // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
        })
      })
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    }) 
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
} */

/* class Search extends React.Component {
    state = {
      filter: "",
      data: [
        {categoria:"Mexicana",
        titulo:"Chilaquiles",
        img:"https://upload.wikimedia.org/wikipedia/commons/9/92/01_Chilaquiles_verdes_con_frijoles_chinos.jpg",
        description:"Tradicional y delicioso",
        ingredientes:["2 Jitomate",
        "1 Chile ancho",
        "10 Tortillas",
        "queso al gusto",
        "crema al gusto",
        "1/4 cebolla" ],
        procedimiento:["Cocer los jitomates y los chiles",
        "Cortar las tortillas y freirlas", 
        "Licuar el jitomate, el chile, la crema y cebolla",
        "Una vez que estén listas las tortillas se les echa la salsa y se dejan calentar por 15 minutos",
        "Para servir se puede acompañar con el queso y cebolla"]
        },{}
      ]
    };
  
    handleChange = event => {
      this.setState({ filter: event.target.value });
    };
  
    render() {
      const { filter, data } = this.state;
      const lowercasedFilter = filter.toLowerCase();
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toLowerCase().includes(lowercasedFilter)
        );
      });
  
      return (
        <div>
          <input value={filter} onChange={this.handleChange} />
          {filteredData.map(item => (
            <div key={item.email}>
              <div>
                {item.fname} {item.lname} - {item.gender} - {item.email}
              </div>
            </div>
          ))}
        </div>
      );
    }
  } */