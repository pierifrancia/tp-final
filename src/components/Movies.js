import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardContainer from './CardContainer'
import Nav from './Nav'

const Movies = () => {

  const [popularMovies, setPopularMovies] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setTopRated(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setUpcoming(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setNowPlaying(data.results))
  }, [])


  return (
    <>
      <div>{'Estoy en Movies'}</div>
      <CardContainer props={popularMovies}></CardContainer>
      <CardContainer props={topRated}></CardContainer>
      <CardContainer props={upcoming}></CardContainer>
      <CardContainer props={nowPlaying}></CardContainer>
    </>
  )

}

export default Movies;
