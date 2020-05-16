import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
width: 264px;
height: 396px;
background-image: cover;
margin: 10px;
img {
    width: auto;
    height: 100%;
}
`

const Card = ({ info }) => {

    return (
    
        <CardStyle>
        <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} />       
        <p>{info.title}</p>
        <p>{info.popularity}</p>     
        </CardStyle>
        
    )
}


export default Card;