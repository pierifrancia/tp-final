import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionNameStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400&display=swap');
.h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin: 0px;
}
`


const SectionName = ({ title }) => {


    return (
        <SectionNameStyle>
            <h2>{title}</h2>
        </SectionNameStyle>

    )
}

export default SectionName;