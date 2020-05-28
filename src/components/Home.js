import React from 'react';
import CardContainer from './CardContainer';
import styled from 'styled-components';


const Home = () => {

  return (
    <div>
      <CardContainer 
      urlFetch={'https://api.themoviedb.org/3/trending/movie/week?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Películas que son tendencia'}
      mediaType={'movie'}
      section={'trending'}>
      </CardContainer>

      <CardContainer 
      urlFetch={'https://api.themoviedb.org/3/trending/tv/week?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Series que son tendencia'}
      mediaType={'tv'}
      section={'trending'}>
      </CardContainer>
      </div>
  )

}

export default Home;
