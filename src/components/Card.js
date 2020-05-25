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

    const handleClick = () => {
        console.log(`hiciste click en el id ${info.id}`)
    }

    return (
        <CardStyle onClick={handleClick}>
        <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} alt={`${info.poster_path}`}/>       
        <p>{info.original_title || info.original_name}</p>
        </CardStyle>
    )
}


export default Card;