/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './sass/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredTable from './components/Table';
import Login from './components/Login';
import Register from './components/Register';
import ChangePassword from './components/ChangePassword';
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={ <Home/>} exact />
      <Route path='/table' element={<FilteredTable/>} exact />
      <Route path='/login' element={<Login/>} exact />
      <Route path='/register' element={<Register/>} exact />
      <Route path='/change' element={<ChangePassword/>} exact />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
