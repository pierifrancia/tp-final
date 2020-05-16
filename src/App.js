import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardContainer from './components/CardContainer'
import Nav from './components/Nav'
import Home from './components/Home'
import Movies from './components/Movies'
import Tv from './components/Tv'
import './App.css';



const App = () => {

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Home />}></Route>
          <Route path="/movies" component={() => <Movies />}></Route>
          <Route path="/tv" component={() => <Tv />}></Route>
        </Switch>
      </Router>
    </>
  )

}

export default App;
