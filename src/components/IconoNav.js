import React from 'react';
import styled, { css } from 'styled-components';
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search" ;

const baseInputStyles = css`
color: darkgray;
width: 40px;
height: 40px;
margin: 10px;
`

const StyleHome = styled.div`
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
    <StyleHome>
   {icon[props.name]}
   {props.children}
   </StyleHome>
)   
}
    
export default IconoNav;