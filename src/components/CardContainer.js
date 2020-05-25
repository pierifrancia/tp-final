import React, { useState, useEffect } from 'react';
import Card from './Card'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Trending from './Trending';

const CardContainerStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400&display=swap');

body {
    margin: 0px;
    background-color: #333;
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

    console.log(mediaType)

    return (

        <CardContainerStyle>
            
            <Link to={`/${mediaType}/trending/page`}>
            <h2>{sectionName}</h2>
            </Link>

            <ContainerStyle>
                {contenido.map((element, i) => {
                    if (i < 5) {
                        return (
                            <Link to={`/${mediaType}/${element.id}`} key={element.id}>
                                <Card info={element} key={element.id} media={mediaType ? mediaType : element.media_type}></Card>
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