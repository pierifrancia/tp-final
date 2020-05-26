import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

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

    <Link className="link" to={`/${params.media_type}/${params.id}/info`}>INFO</Link>

    {`${params.media_type}` == "tv" ? <Link className="link" to={`/${params.media_type}/${params.id }/seasons/1`}>EPISODIOS</Link> : ""}

    <Link className="link" to={`/${params.media}/${params.id}/cast`}>REPARTO</Link>

    {`${params.media_type}` == "movie" ? <Link className="link" to={`/${params.media_type}/${params.id}/videos`}>VIDEOS</Link> : ""}
    
    <Link className="link" to={`/${params.media_type}/${params.id}/similar`}>SIMILARES</Link>

    </NavDetailsStyle>

    )

    // if (mediaType == 'tv') {
    //     return (
    //         <NavDetailsStyle>
    //             <button id="info" onClick={handleClick}>INFO</button>
    //             <button id="episodes" onClick={handleClick}>EPISODIOS</button>
    //             <button id="cast" onClick={handleClick}>REPARTO</button>
    //             <button id="similars" onClick={handleClick}>SIMILARES</button>
    //         </NavDetailsStyle>
    //     )
    // }
    // else {
    //     return (
    //         <NavDetailsStyle>
    //             <button id="info" onClick={handleClick}>INFO</button>
    //             <button id="cast" onClick={handleClick}>REPARTO</button>
    //             <button id="videos" onClick={handleClick}>VIDEOS</button>
    //             <button id="similars" onClick={handleClick}>SIMILARES</button>
    //         </NavDetailsStyle>
    //     )
    // }

}


export default NavDetails;