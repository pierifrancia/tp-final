import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { Imdb } from "@styled-icons/fa-brands/Imdb"
import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Link } from "@styled-icons/fa-solid/Link";
// import { Star } from "styled-icons/material/Star";
// import { StarHalf } from "styled-icons/material/StarHalf";
// import { StarBorder } from "styled-icons/material/StarBorder" ;

const ImdbIcon = styled(Imdb)`
color: #FFF;
width: 30px;
height: 30px;
margin: 3px;
`
const FacebookIcon = styled(FacebookSquare)`
color: #FFF;
width: 30px;
height: 30px;
margin: 3px;
`
const TwitterIcon = styled(Twitter)`
color: #FFF;
width: 30px;
height: 30px;
margin: 3px;
`
const InstagramIcon = styled(Instagram)`
color: #FFF;
width: 30px;
height: 30px;
margin: 3px;
`

const LinkIcon = styled(Link)`
color: #FFF;
width: 30px;
height: 30px;
margin: 3px;
`

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
.external {
    display: flex;
    a {
        margin: 3px;
    }
}
}
}
`
const Info = ({props}) => {

    const params = useParams();
    const [external, SetExternal] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/external_ids?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => SetExternal(data))
    }, [])

console.log(props)

let production = props.production_companies

    return (

        <CardStyle>
            <section>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} 
                alt={`${props.poster_path}`} />
            </div>
            <div className="textDetails">
            <h2>{props.original_title}</h2>
            <p>{props.vote_average}</p>
            <p>{props.overview}</p>
            <p>{`Duración: ${props.runtime} min`}</p>
    <p>{`Géneros`}</p>
    <p>{`Recaudación: $${ (new Intl.NumberFormat().format(props.revenue))}`}</p>
    <p>{`Producción:`}</p>
    {/* {production.map(element => {return (element.name)})} */}

    <div className="external">
    <a href={`https://www.imdb.com/title/${external.imdb_id}`}> <ImdbIcon /></a>
    <a href={`https://twitter.com/${external.twitter_id}`}>< TwitterIcon /></a>
    <a href={`https://www.facebook.com/${external.facebook_id}`}> <FacebookIcon /></a>
    <a href={`https://www.instagram.com/badboys/${external.instagram_id}`}> <InstagramIcon /></a>
    <a href={`${props.homepage}`}> <LinkIcon /> </a>
            </div>
            </div>
           
            </section>

        </CardStyle>

    )
}

export default Info;