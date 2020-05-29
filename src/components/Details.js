import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Info from './Info';
import Cast from './Cast'
import Videos from './Videos'
import Similar from './Similar'
import Episodies from './Episodies'

const DetailsStyle = styled.div`
.portada {
    overflow: hidden;
    background-image: cover;
    background-position: center;
    width: 100%;
    height: 600px;
    img {
        width: 100%;
        height: auto;
    }
}
display: flex;
flex-direction: column;
align-items: center;
`

const NavDetailsStyle = styled.div`
display: flex;
flex-position: center;
margin: 25px;
.link {
    margin: 15px;
    text-decoration: none;
}
button {
    border: none;
    margin: 15px;
    background-color: rgb(54, 57, 63);
    color: #FFF;
    font-size: 15px;
}
`

const Details = () => {

    const [contenidoDetails, setContenidoDetails] = useState([])
    const [imagen, setImagen] = useState([])
    const [selection, setSelection] = useState("info")

    const params = useParams();

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


    const handleClick = (e) => {
        e.preventDefault()
        setSelection(e.target.id)

    }

    return (
        <>
            <DetailsStyle>
                <div className="portada" >
                    <img src={`https://image.tmdb.org/t/p/original/${imagen}`} />
                </div>

                <NavDetailsStyle>

                    {<button id="info" onClick={handleClick}> INFO </button>}
                    {`${params.media_type}` == "tv" ? <button id="episodies" onClick={handleClick}> EPISODIOS </button> : ""}
                    {<button id="cast" onClick={handleClick}> REPARTO </button>}
                    {`${params.media_type}` == "movie" ? <button id="videos" onClick={handleClick}> VIDEOS </button>  : ""}
                    {<button id="similar" onClick={handleClick}> SIMILARES </button>}

                </NavDetailsStyle>
            </DetailsStyle>

            { selection == "info" ? <Info props={contenidoDetails} /> : "" }
            { selection == "cast" ? <Cast /> : "" }
            { selection == "videos" ? <Videos /> : "" }
            { selection == "similar" ? <Similar /> : "" }

        </>

    )
}

export default Details;