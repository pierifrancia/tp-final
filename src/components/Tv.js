import React from 'react';
import CardContainer from './CardContainer'

const Tv = () => {

  return (
    <>
      <div>{'Estoy en TV'}</div>
      <CardContainer urlFetch={'https://api.themoviedb.org/3/tv/popular?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Series que son tendencia'}></CardContainer>
      <CardContainer urlFetch={'https://api.themoviedb.org/3/tv/on_the_air?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Series con mejores críticas'}></CardContainer>
      <CardContainer urlFetch={'https://api.themoviedb.org/3/tv/airing_today?api_key=ae73920dc1db068b1ee4b5b159748206'} sectionName={'Series al aire'}></CardContainer>
    </>
  )

}

export default Tv;
