import React from 'react';
import styled, { css } from 'styled-components';
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search" ;

const baseInputStyles = css`
color: #FFF;
width: 30px;
height: 30px;
margin: 20px;
`

const StyleNav = styled.div`
${baseInputStyles}
`

const icon = {
    home: <Home />,
    tv: <Tv />,
    video: <Video />,
    search: <Search />
}

const IconoNav = (props) => {
    return (
    <StyleNav>
   {icon[props.name]}
   {props.children}
   </StyleNav>
)   
}
    
export default IconoNav;