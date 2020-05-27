import React from 'react';
import styled from 'styled-components';
import noDisponible from '../assets/nodisponible.png' 

const CardStyle = styled.div`
display: flex;
flex-wrap: wrap;
width: 264px;
height: 396px;
background-image: cover;
margin: 50px 5px 50px 5px;
img {
    width: auto;
    height: 100%;
}
`

const Card = ({ poster, name, title, character, photo, site }) => {
    return (
        <CardStyle>            
        {poster != null || photo != null ? 
        <img src={`https://image.tmdb.org/t/p/w500${poster ? poster : photo}`} alt={`${title ? title : name}`}></img>
        : <img src={noDisponible} alt={"Imagen no disponible"}></img>}
        <div>       
        <h3>{title ? title : ""}</h3>
        <h3>{name ? name : ""}</h3>
        <h4>{character ? character : ""}</h4>
        <h3>{site ? site : ""}</h3>
        </div>
        </CardStyle>


    )
}


export default Card;