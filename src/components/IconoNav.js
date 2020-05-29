import React from 'react';
import styled, { css } from 'styled-components';
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search" ;

const baseInputStyles = css`
color: #333;
width: 40px;
height: 80%;
margin: 10px;
`

const StyleNav = styled.div`
${baseInputStyles}
height: 45px;
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