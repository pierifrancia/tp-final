import React from 'react';
import CardContainer from './CardContainer'

const Home = () => {

  return (
    <>
      <CardContainer 
      urlFetch={'https://api.themoviedb.org/3/trending/movie/week?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Películas que son tendencia'}>
      </CardContainer>

      <CardContainer 
      urlFetch={'https://api.themoviedb.org/3/trending/tv/week?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Series que son tendencia'}>
      </CardContainer>
    </>
  )

}

export default Home;
