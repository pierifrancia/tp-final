import React from 'react';
import CardContainer from './CardContainer';
import styled from 'styled-components';



const HomeStyle = styled.div`
body {
  margin: 0px;
  background-color: #333;
}
background-color: #333;
`


const Home = () => {

  return (
    
    <HomeStyle>
      <CardContainer 
      urlFetch={'https://api.themoviedb.org/3/trending/movie/week?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Películas que son tendencia'}
      mediaType={'movie'}>
      </CardContainer>

      <CardContainer 
      urlFetch={'https://api.themoviedb.org/3/trending/tv/week?api_key=ae73920dc1db068b1ee4b5b159748206'} 
      sectionName={'Series que son tendencia'}
      mediaType={'tv'}>
      </CardContainer>
      </HomeStyle>
  )

}

export default Home;
