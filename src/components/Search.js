import React, { useState, useEffect } from 'react';
import Card from './Card';
import style from 'styled-components';


const SearchStyle = style.nav`
display: flex;
background-color: #eee;
`

const Search = ({data}) => {


    return (
        <SearchStyle>

            {data.map(element => {
            return (
            <Card
                poster={element.poster_path}
                title={element.original_name ? element.original_name : element.title}
                key={element.id}
                media={element.media_type}>
            </Card>

        )}
        )}
        </SearchStyle>
)
       
}


export default Search;