import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card'

const ContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 500px;
`

const Similar = () => {

    const [contenidoSimilar, setContenidoSimilar] = useState([])

    const params = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.id}/similar?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setContenidoSimilar(data.results))
    }, [])

    console.log(contenidoSimilar)

    return (
        <ContainerStyle>
            {contenidoSimilar.map(element => {
                return (
                    <Card
                    poster={element.poster_path} 
                    title={element.original_title ? element.original_title : element.original_name} 
                    key={element.id}
                    > 
                    </Card>
                    )
            })
            }
        </ContainerStyle>
    )
}


export default Similar;