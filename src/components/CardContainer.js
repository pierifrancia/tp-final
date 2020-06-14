import React, { useState, useEffect } from 'react';
import Card from './Card'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from "@styled-icons/feather/ArrowRight" ;

const ArrowRightIcon = styled(ArrowRight)`
color: rgb(33, 150, 243);
width: 20px;
height: 20px;
margin: 3px;
`

// El import de fonts.google se repite variables veces: seria preferible moverlo a App.js para que lo hereden todos 
// los componentes y no tener que repetirlo. 

// Ojo con el tabulado en tu css, esta algo desprolijo. A veces dejas espacios, a veces no. 
const CardContainerStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400&display=swap');
margin: 30px 0;
`
const ContainerStyle = styled.div`
    display: flex;
    height: 500px;
`

const CardContainer = ({ urlFetch, sectionName, mediaType, section }) => {

    // hay spanglish en tus variables; algunas en español, otras en ingles. Es preferible
    // mantener siempre coherencia en la convencion de nombres. 
    const [contenido, setContenido] = useState([])

    useEffect(() => {
        fetch(urlFetch)
            .then(res => res.json())
            .then(data => setContenido(data.results))
    }, [])

    return (

        <CardContainerStyle>

            <Link className="link" to={`/${mediaType}/${section}/page`}>
                <h2>{sectionName} <ArrowRightIcon /> </h2>
            </Link>

            <ContainerStyle>
                {contenido.map((element, i) => {
                    if (i < 5) {
                        return (
                            // este className link no parece hacer nada
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
