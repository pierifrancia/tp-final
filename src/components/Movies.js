import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardContainer from './CardContainer'

const Movies = () => {

  return (
    <>
      <div>{'Estoy en Movies'}</div>
      <CardContainer urlFetch={'https://api.themoviedb.org/3/movie/popular?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas populares'}></CardContainer>
      <CardContainer urlFetch={'https://api.themoviedb.org/3/movie/top_rated?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas con mejores críticas'}></CardContainer>
      <CardContainer urlFetch={'https://api.themoviedb.org/3/movie/upcoming?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas a estrenarse'}></CardContainer>
      <CardContainer urlFetch={'https://api.themoviedb.org/3/movie/now_playing?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas en ciness'}></CardContainer>
    </>
  )

}

export default Movies;
