import {Routes as ReactDomRoutes, Route} from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import CheckOut from '../pages/CheckOut/CheckOut';
import Register from '../pages/Register/Register';
import { MisOrdenes } from '../pages/MisOrdenes/MisOrdenes';



function Routes(){
  return (
    <ReactDomRoutes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
        <Route path='/mis-ordenes' element={<MisOrdenes/>}/>
    </ReactDomRoutes>
  )
}

export default Routes