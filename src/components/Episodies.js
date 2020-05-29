import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card'

const ContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 500px;
`

const Episodies = () => {

    const [contenidoEpisodies, setContenidoEpisodies] = useState([])

    const params = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.id}/videos?api_key=ae73920dc1db068b1ee4b5b159748206`)
            .then(res => res.json())
            .then(data => setContenidoEpisodies(data.results))
    }, [])

    console.log(contenidoEpisodies)

    return (
        <ContainerStyle>
            {contenidoEpisodies.map(element => {
                return (
                    <Card
                        id={element.id}
                        name={element.name}
                        site={element.site}>
                    </Card>
                    )
            })
            }
        </ContainerStyle>
    )
}


export default Episodies;