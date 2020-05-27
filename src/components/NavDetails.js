import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Cast from './Cast'

const NavDetailsStyle = styled.div`
display: flex;
flex-position: center;
margin: 25px;
.link {
    text-decoration: none;
    color: #fff;
    margin: 15px;
}
`

const NavDetails = () => {

    const params = useParams();

    console.log(params)

    return (

    <NavDetailsStyle>

    <Link className="link" id="info" to={`/${params.media_type}/${params.id}/info`}>INFO</Link>

    {`${params.media_type}` == "tv" ? 
    <Link className="link" id="episodies" to={`/${params.media_type}/${params.id }/seasons/1`}>EPISODIOS</Link> 
    : ""}

    {/* <Link className="link" id="cast" to={`/${params.media_type}/${params.id}/cast`}>REPARTO</Link> */}

    
    {`${params.media_type}` == "movie" ? 
    <Link className="link" id="videos" to={`/${params.media_type}/${params.id}/videos`}>VIDEOS</Link> 
    : ""}
    
    <Link className="link" id="similars" to={`/${params.media_type}/${params.id}/similar`}>SIMILARES</Link>

    </NavDetailsStyle>

    )
}


export default NavDetails;