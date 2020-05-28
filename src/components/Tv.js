import React from 'react';
import CardContainer from './CardContainer'

const Tv = () => {

  return (
    <>
      <CardContainer 
      mediaType={'tv'} 
      urlFetch={'https://api.themoviedb.org/3/tv/popular?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Series que son tendencia'}
      section={'popular'}></CardContainer>
      <CardContainer 
      mediaType={'tv'} 
      urlFetch={'https://api.themoviedb.org/3/tv/top_rated?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Series con mejores críticas'}
      section={'top_rated'}>
      </CardContainer>
      <CardContainer 
      mediaType={'tv'} 
      urlFetch={'https://api.themoviedb.org/3/tv/on_the_air?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Series al aire'}
      section={'on_the_air'}>
      </CardContainer>
    </>
  )

}

export default Tv;
