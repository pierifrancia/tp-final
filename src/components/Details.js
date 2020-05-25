import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfoDetails from './InfoDetails';

const CardStyle = styled.div`
.portada {
    overflow: hidden;
    background-image: cover;
    width: 100%;
    height: 650px;
    img {
    width: 100%;
    }
}
`
const Details = props => {

    const [imagen, setImagen] = useState([])
    const [contenidoDetails, setContenidoDetails] = useState([])

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


    // let idMovie = useParams().id

    return (

        <CardStyle>
            <div className="portada" >
                <img src={`https://image.tmdb.org/t/p/original/${imagen}`} />
            </div>
            
            <InfoDetails props={contenidoDetails}></InfoDetails>

        </CardStyle>

    )
}


export default Details;