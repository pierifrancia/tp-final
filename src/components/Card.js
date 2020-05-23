import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Link } from 'react-router-dom';

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



    const handleClick = (e) => {
        e.preventDefault();
        console.log(`The link was clicked ${info.id}`);
}

    return (
    
        <CardStyle onClick={handleClick} infoCard={info}>
            <Link to={`/movie/${info.id}/info`}/>
        <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} alt={`${info.poster_path}`}/>       
        <p>{info.title}</p>
        <p>{info.popularity}</p>  
        </CardStyle>
        
    )
}


export default Card;