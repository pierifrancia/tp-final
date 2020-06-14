import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// recorda siempre poner ; despues de cada import (y de cada sentencia en js)
import Nav from './components/Nav'
import Home from './components/Home'
import Movies from './components/Movies'
import Tv from './components/Tv'
import Details from './components/Details'
import Trending from './components/Trending'
import Cast from './components/Cast'
import Search from './components/Search'
import styled from 'styled-components';
// esto no se usa, asi que seria mejor borrarlo
import './App.css';

const AppStyle = styled.div`
body {
  margin: 0px;
}
`

const App = () => {

  return (
    <AppStyle>
      <Router>
        <Nav />
        <Switch>
        {/* Preferible aqui escribir el componente directamente, no retornarlo con una funcion  */}
          <Route exact path="/" component={() => <Home />}></Route>
          <Route path="/movies" component={() => <Movies />}></Route>
          <Route exact path="/tv" component={() => <Tv />}></Route>
          <Route exact path="/:media_type/:id" component={Details}></Route>
          <Route path="/:media_type/:section/page" component={Trending}></Route>
          <Route exact path="/:media_type/:id/info" component={Details}></Route>
          <Route exact path="/:media_type/:id/cast" component={Cast}></Route>
          <Route exact path="/multi/:query/page" component={Search}></Route>
        </Switch>
      </Router>
    
      </AppStyle>
  )

}

export default App;
