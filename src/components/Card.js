import React from 'react';

const Card = ({ info }) => {

    console.log(info)

    return (
    
        <div>
        <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} />       
        <p>{info.title}</p>
        <p>{info.popularity}</p>     
        </div>
        
    )
}


export default Card;