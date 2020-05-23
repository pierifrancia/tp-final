import React, { useParams } from 'react';
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

const Details = ({ infoCard }) => {

    // let idMovie = useParams().id

    return (
    
        <CardStyle>
        <img src={`https://image.tmdb.org/t/p/w500/${infoCard.poster_path}`} alt={`${infoCard.poster_path}`}/>       
        <p>{infoCard.title}</p>
        <p>{infoCard.popularity}</p>  
        </CardStyle>
        
    )
}


export default Details;