import React from 'react';
import Card from './Card'
import style from 'styled-components';

const ContenedorTarjetas = style.div`
    display: flex;
    `



const CardContainer = ({ props }) => {

    console.log(props)

    return (
        <>
            <p>{'Hola, soy el nombre de la seccion'}</p>
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