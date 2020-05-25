import React, { useState, useEffect } from 'react';
import Card from './Card'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SectionName from './SectionName'

const CardContainerStyle = styled.div`
body {
    margin: 0px;
    background-color: #333;
  }
`

const ContainerStyle = styled.div`
    display: flex;
    height: 500px;
`

const CardContainer = ({ urlFetch, sectionName }) => {

    const [contenido, setContenido] = useState([])

    useEffect(() => {
        fetch(urlFetch)
            .then(res => res.json())
            .then(data => setContenido(data.results))
    }, [])

    // console.log(contenido)

    return (

        <CardContainerStyle>

            <SectionName title={sectionName}></SectionName>
            <ContainerStyle>
                {contenido.map((element, i) => {
                    if (i < 5) {
                        return (
                            <Link to={`/${element.media_type}/${element.id}`} key={element.id}>
                                <Card info={element} key={element.id} media={element.media_type}></Card>
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