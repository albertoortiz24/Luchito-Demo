import React, { Fragment,Component }  from 'react'
import {Typography,Grid, AppBar,Button} from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles={
    padre:{margin:25,padding:25},
    hijo:{margin:5,padding:15},
 }

class Title extends Component{

    render(){
        return <Fragment>
           <AppBar color='primary' className={styles.padre} >
           <Grid 
            container 
            spacing={4}
            direction="row-reverse"
            justify="space-between"
            alignItems="center"
            xs={12} 
            sm={4}
           >
           <Grid item lg={10}   >
                <Button color='secondary'> 
                    <Link to='/busqueda'> 
                        Lunchito
                    </Link>
                </Button>
           </Grid> {/*link*/}
           <Grid item lg={2}  >
                <Button color='secondary'> 
                    <Link to='/login'> 
                        Login
                    </Link>
                </Button>
           </Grid> {/*Login*/}
        </Grid> {/*padre */}
           </AppBar>
        </Fragment>
    }
}
  
      
export default Title
