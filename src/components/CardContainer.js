import React, {useState, useEffect} from 'react';
import Card from './Card'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SectionName from './SectionName'


const ContenedorTarjetas = styled.div`
    display: flex;
`

const CardContainer = ({ urlFetch, sectionName }) => {

const [contenido, setContenido] = useState([])

useEffect(() => {
    fetch(urlFetch)
      .then(res => res.json())
      .then(data => setContenido(data.results))
  }, [])



    return (
        <>
            <SectionName title={sectionName}></SectionName>
            <ContenedorTarjetas>
                {contenido.map((element, i) => {
                    if (i < 5 ) {
                    return (
                        <Link to={`/movie/${element.id}`}>
                        <Card info={element} key={element.id}></Card>
                        </Link>
                    )
                }
                })
                }
            </ContenedorTarjetas>
        </>

    )
    

}

export default CardContainer;