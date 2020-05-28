import React from 'react';
import CardContainer from './CardContainer'

const Movies = () => {

  return (
    <>
      <CardContainer section={'popular'} mediaType={'movie'} urlFetch={'https://api.themoviedb.org/3/movie/popular?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas populares'}></CardContainer>
      <CardContainer section={'top_rated'} mediaType={'movie'} urlFetch={'https://api.themoviedb.org/3/movie/top_rated?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas con mejores críticas'}></CardContainer>
      <CardContainer section={'upcoming'} mediaType={'movie'} urlFetch={'https://api.themoviedb.org/3/movie/upcoming?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas a estrenarse'}></CardContainer>
      <CardContainer section={'now_playing'} mediaType={'movie'} urlFetch={'https://api.themoviedb.org/3/movie/now_playing?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Películas en ciness'}></CardContainer>
    </>
  )

}

export default Movies;
