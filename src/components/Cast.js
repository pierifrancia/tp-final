import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card'

const ContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 500px;
`

const Cast = () => {

    const [contenidoCast, setContenidoCast] = useState([])

    const params = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.id}/credits?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setContenidoCast(data.cast))
    }, [])

    console.log(contenidoCast)

    return (
        <ContainerStyle>
            {contenidoCast.map(element => {
                return (
                    <Card
                        name={element.name}
                        character={element.character}
                        photo={element.profile_path}>
                    </Card>)
            })
            }
        </ContainerStyle>
    )
}


export default Cast;