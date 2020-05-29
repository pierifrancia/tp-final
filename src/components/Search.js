import React, { useState, useEffect } from 'react';
import Card from './Card';
import style from 'styled-components';


const SearchStyle = style.div`
display: flex;
flex-direction: column;
h2 {
    margin-top: 30px;
}
.cards {
    display: flex;
    flex-wrap: wrap;
    
}
`

const Search = ({ data, query }) => {


    return (
        <SearchStyle>
            <div><h2>{`Resultados de búsqueda para: ${query}`}</h2></div>
            <div className="cards">
            {data.map(element => {
                return (

                    <Card
                        poster={element.poster_path}
                        title={element.original_name ? element.original_name : element.title}
                        key={element.id}
                        media={element.media_type}>
                    </Card>


                )
            }
            )}
            </div>
        </SearchStyle>
    )

}


export default Search;