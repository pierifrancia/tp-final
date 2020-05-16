import React from 'react';
import Card from './Card'
import styled from 'styled-components';

const ContenedorTarjetas = styled.div`
    display: flex;
    `

const CardContainer = ({ props }) => {

    console.log(props)

    return (
        <>
            <p>{'Nombre de la seccion'}</p>
            <ContenedorTarjetas>
                {props.map(element => {
                    return (
                        <Card info={element}></Card>
                    )
                })
                }
            </ContenedorTarjetas>
        </>

    )
}


export default CardContainer;