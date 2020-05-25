import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

section {
    display: flex;
.poster {
    background-image: cover;
    width: 300px;
    height: 500px;
    padding: 30px;
    img {
        width: 100%;
        height: auto;
    }
}
.textDetails {
    width: 50%;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
}
}
`
const InfoDetails = ({props}) => {


    return (

        <CardStyle>
            <section>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
                alt={`${props.poster_path}`} />
            </div>
            <div className="textDetails">
            <p>{props.original_title}</p>
            <p>{props.vote_average}</p>
            <p>{props.overview}</p>
            </div>
            </section>

        </CardStyle>

    )
}

export default InfoDetails;