import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePages';
import About from './Component/Fungsional/AboutComp'

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
