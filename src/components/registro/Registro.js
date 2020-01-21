import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
//import Stepper from '@material-ui/core/Stepper';
//import Step from '@material-ui/core/Step';
//import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import AddressForm from './AddressForm';
import { Grid, TextField, FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
//import PaymentForm from './PaymentForm';
//import Review from './Review';
//import { Link } from 'react-router-dom'
//import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Welcome from '../layouts/Welcome';
import { Link } from 'react-router-dom'



const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 6,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 450,
      marginLeft: 'auto',
      marginRight: '150',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});








const steps = ['Registrate'];

/*function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;

    default:
      throw new Error('Unknown step');
  }
}*/

class Register extends React.Component {
  state = {
    //activeStep: 0,
    firstName:'',
    lastname:'',
    username:'',
    password:'',
    cfnpassword:'',
    
  };




  onChange = event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  comparePasswords = () => !(this.state.password === this.state.cfnpassword)

  onSubmit = event=>{
    
      console.log(this.state)
      

    event.preventDefault()
  }
  


  
  
  
  /*handleRegister = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,

    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    
    }));
  };*/

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Lunchito
            </Typography>
            
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Gracias Por Haberte Registrado
                  </Typography>
                  <Typography variant="subtitle1">
                    esperemos que encuentres la receta que estas buscando! :)
                  </Typography>
                  <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography variant="h6" gutterBottom>
                      Registrarse
                  </Typography>
                  <form className={classes.form} onSubmit={this.onSubmit}>
                  <Grid container spacing={24}>
                      <Grid item xs={12} sm={6}>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="firstName">FirstName</InputLabel>
                            <Input
                             name="firstName" 
                             onChange={this.onChange} 
                             value={this.state.firstName} 
                             type="text" 
                             id="firstName"
                             autoFocus/>
                            
                             
                          </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                         <FormControl margin="normal" required fullWidth>
                           <InputLabel htmlFor="lastname">Lastname</InputLabel>
                           <Input
                            name="lastname" 
                            onChange={this.onChange} 
                            value={this.state.lastname} 
                            type="text" 
                            id="lastname" 
                            autoFocus/>
                         </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                         <FormControl margin="normal" required fullWidth>
                           <InputLabel htmlFor="username"> Username</InputLabel>
                           <Input
                            name="username" 
                            onChange={this.onChange} 
                            value={this.state.username} 
                            type="text" 
                            id="username" 
                            autoFocus/>
                         </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={8}  >
                          <FormControl margin="normal" required fullWidth>
                              <InputLabel htmlFor="password">contraseña</InputLabel>
                              <Input 
                              name="password" 
                              onChange={this.onChange} 
                              value={this.state.password} 
                              type="password" 
                              id="password" 
                              autoComplete="current-password"
                              
                              />
                          </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={8}  >
                        <FormControl margin="normal" required fullWidth error ={this.comparePasswords()}>
                        <InputLabel htmlFor="cnfpassword">Confirmar contraseña </InputLabel>
                          <Input 
                          name="cfnpassword" 
                          onChange={this.onChange} 
                          value={this.state.cnfpassword} 
                          type="password" 
                          id="cfnpassword" 
                          autoComplete="current-password"
                         error = {
                           this.comparePasswords()
                         }
                          />                        
                        </FormControl>
                        </Grid>
                     
                  </Grid>
                  
                  <div className={classes.buttons}>
                    
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={this.state.submit}
                      className={classes.button}  >
                     <Link to='/welcome'>Confirmar</Link>

                    </Button>
                    
                   
                  </div>
                  </form>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);