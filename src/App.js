import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Movies from './components/Movies'
import Tv from './components/Tv'
import Details from './components/Details'
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
          <Route path="/movie/:id" component={() => <Details />}></Route>
        </Switch>
      </Router>
    </>
  )

}

export default App;
