import React from 'react';
import { Link } from 'react-router-dom'
import IconoNav from './IconoNav';
import style from 'styled-components';


const NavStyle = style.nav`
display: flex;
background-color: #eee;
`


const Nav = () => {
    return (
        <NavStyle>
           <Link className="icon" to="/">
               <IconoNav name="home" />
           </Link>
            <Link className="icon" to="/movies">
               <IconoNav name="video" />
           </Link>
            <Link className="icon" to="/tv">
               <IconoNav name="tv" />
           </Link>
           <IconoNav name="search" />

    
        </NavStyle>
    )
}

export default Nav;