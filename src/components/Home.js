import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardContainer from './CardContainer'
import Nav from './Nav'

const Home = () => {

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
      <CardContainer props={trendingMovies}></CardContainer>
      <CardContainer props={trendingSeries}></CardContainer>
    </>
  )

}

export default Home;
