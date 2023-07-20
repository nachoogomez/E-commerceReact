import {Routes as ReactDomRoutes, Route} from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import CheckOut from '../pages/CheckOut/CheckOut';
import Register from '../pages/Register/Register';



function Routes(){
  return (
    <ReactDomRoutes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/register' element={<Register/>}/>
    </ReactDomRoutes>
  )
}

export default Routes