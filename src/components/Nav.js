import React from 'react';
import IconoNav from './IconoNav';
import style from 'styled-components';


const NavStyle = style.nav`
display: fixed;
`

const Nav = () => {
    return (
        <NavStyle>
            <IconoNav name="Home"/>
            <IconoNav name="Video"/>
            <IconoNav name="Tv"/>
            <IconoNav name="Search"/>
        </NavStyle>
    )
}

export default Nav;