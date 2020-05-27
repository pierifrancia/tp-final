import React, { useState, useEffect } from 'react';
import Card from './Card'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainerStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400&display=swap');

body {
    margin: 0px;
    background-color: #333;
  }

.link {
    text-decoration: none;
    color: #fff;
}

.h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin: 0px;
}
`

const ContainerStyle = styled.div`
    display: flex;
    height: 500px;
`

const CardContainer = ({ urlFetch, sectionName, mediaType }) => {

    const [contenido, setContenido] = useState([])

    useEffect(() => {
        fetch(urlFetch)
            .then(res => res.json())
            .then(data => setContenido(data.results))
    }, [])

    console.log(contenido)

    return (

        <CardContainerStyle>

            <Link className="link" to={`/${mediaType}/trending/page`}>
                <h2>{sectionName}</h2>
            </Link>

            <ContainerStyle>
                {contenido.map((element, i) => {
                    if (i < 5) {
                        return (
                            <Link className="link" to={`/${mediaType}/${element.id}`} key={element.id}>
                                <Card 
                                poster={element.poster_path} 
                                title={element.original_name ? element.original_name : element.title} 
                                key={element.id} 
                                media={mediaType ? mediaType : element.media_type}>
                                </Card>
                            </Link>
                        )
                    }
                })
                }

            </ContainerStyle>

        </CardContainerStyle>

    )


}

export default CardContainer;