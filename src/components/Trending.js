import React, { useState, useEffect } from 'react';
import Card from './Card'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const CardContainerStyle = styled.div`
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400&display=swap');
// `    


const Trending = (props, urlFetch) => {

    console.log(urlFetch)

    const [contenido, setContenido] = useState([])

    useEffect(() => {
        fetch(urlFetch)
            .then(res => res.json())
            .then(data => setContenido(data.results))
    }, [])

    console.log(props)
    console.log(contenido)


    return (
        <p>{'Todavia no pasa nada en trending'}</p>

        // data.map((element) => {

        //     return (
        //         <Link to={`/${element.media_type}/${element.id}`} key={element.id}>
        //             <Card info={element} key={element.id} media={element.media_type}></Card>
        //         </Link>

        //     )
        // })
    )

}

export default Trending;