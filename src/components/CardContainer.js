import React, {useState, useEffect} from 'react';
import Card from './Card'
import styled from 'styled-components';
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
                {contenido.map(element => {
                    return (
                        <Card info={element} key={element.id}></Card>
                    )
                })
                }
            </ContenedorTarjetas>
        </>

    )
    

}

export default CardContainer;