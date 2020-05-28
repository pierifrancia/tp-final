import React, { useState, useEffect } from 'react';
import Card from './Card'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const TrendingStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400&display=swap');
display: flex;
flex-wrap: wrap;
`

const Trending = (mediaType) => {

    //console.log(mediaType)

    const [contenido, setContenido] = useState([])

    const media_type = useParams().media_type;
    const section = useParams().section;
    //console.log(params)
    // buscar una manera de identificar de que parte viene, porque si no viene de home, deja de ser 
    // trending/movie/week y pasa a ser movie/popular x ej 

    console.log(section)

    let url = ''
    if (section === "trending") {
        url = `${section}/${media_type}/week`;
    } else {
        url = `${media_type}/${section}`;
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${url}?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setContenido(data.results))
    }, [])

    console.log(contenido)


    return (
        <TrendingStyle>
            {contenido.map((element) => {
                return (
                    <Link to={`/${element.media_type}/${element.id}`} key={element.id}>
                        <Card
                            poster={element.poster_path}
                            title={element.original_title}
                            key={element.id}
                            media={mediaType ? mediaType : element.media_type}>
                        </Card>
                    </Link>

                )
            })
            }
        </TrendingStyle>
    )

}

export default Trending;