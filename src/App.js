import React, { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer'
import Nav from './components/Nav'
import Hero from './components/Hero'
import './App.css';

const App = () => {

  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingSeries, setTrendingSeries] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setTrendingSeries(data.results))
  }, [])


  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <CardContainer props={trendingMovies}></CardContainer>
      <CardContainer props={trendingSeries}></CardContainer>
    </>
  )

}

export default App;
