import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  

  state={
    username:'',
    password:'',
  }

  onChange = event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event=>{
    
    console.log(this.state)

    
    fetch('http://localhost:3001/usuario',{
      method: 'post',
      mode: 'no-cors',
      header:{
        "Content-Type":"aplication/json"
      },
       body: JSON.stringify(this.state)
    }).then((respuesta)=>{
      console.log(respuesta)  
    })

    event.preventDefault();
    
  }
  
  render(){
    const { classes } = this.props;
    return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.onSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Usuario</InputLabel>
            <Input  name="username" onChange={this.onChange} value={this.state.username} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input name="password" onChange={this.onChange} value={this.state.password} type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Guardar contraseña"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //onClick={this.state.onSubmit}
            className={classes.submit}
          >
            Iniciar Session
          </Button>
          <Button
            type="submit"
          >
          <Link to='/registro'>Registrarse</Link>
          </Button>
        </form>
      </Paper>
    </main>
    )
  }


  
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);