import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Title from './components/layouts/Header';
import Results from './components/busqueda/Resultados'
import Register from './components/registro/Registro'
import Search from './components/busqueda/Busqueda'
import Login from './components/registro/Login'
import Welcome from './components/layouts/Welcome'
import Posts from './components/recetas/Categorias'
import Recetario from './components/recetas/Receta';

 const Routes=()=>{
    return(
        <Switch>
            <Route  exact path='/' component={Search} />
            <Route path='/title' component={Title} />
            <Route path='/resultados' component={Results} />
            <Route path='/busqueda' component={Search} />
            <Route path='/recetas' component={Recetario} />
            <Route path='/registro' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/categorias' component={Posts} />
        </Switch>
    )
}

export default Routes