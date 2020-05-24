import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
background-image: cover;
.portada {
    width: 100%;
    height: auto;
}
`

const Details = props => {

    const [contenidoDetails, setContenidoDetails] = useState([])
    const [imagen, setImagen] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setContenidoDetails(data))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}/images?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setImagen(data.backdrops[0].file_path))
    }, [])

    console.log(imagen)

    // let idMovie = useParams().id

    return (

        <CardStyle>
            <img className="portada" src={`https://image.tmdb.org/t/p/w500/${imagen}`} alt={`${contenidoDetails.poster_path}`} />
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${contenidoDetails.poster_path}`} alt={`${contenidoDetails.poster_path}`} />
            <p>{contenidoDetails.title || contenidoDetails.name}</p>
        </CardStyle>

    )
}


export default Details;