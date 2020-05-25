import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import InfoDetails from './InfoDetails';
import NavDetails from './NavDetails';

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
const Details = () => {

    const [contenidoDetails, setContenidoDetails] = useState([])
    const [imagen, setImagen] = useState([])

    const params = useParams();

    console.log(params)
  

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setContenidoDetails(data))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.id}/images?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setImagen(data.backdrops[0].file_path))
    }, [])


    return (

        <CardStyle>
            <div className="portada" >
                <img src={`https://image.tmdb.org/t/p/original/${imagen}`} />
            </div>
        <NavDetails></NavDetails>    
        <InfoDetails props={contenidoDetails}></InfoDetails>

        </CardStyle>

    )
}


export default Details;