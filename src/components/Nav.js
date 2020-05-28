import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import IconoNav from './IconoNav';
import Search from './Search';
import style from 'styled-components';


const NavStyle = style.nav`
display: flex;
background-color: #eee;
`

const Nav = () => {

    const [busqueda, setBusqueda] = useState("")
    const [data, setData] = useState([])

    const handleChange = e => {
        setBusqueda(e.target.value)
    }

    console.log(busqueda)

    useEffect(() => {
        if (busqueda.length > 2) {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=ae73920dc1db068b1ee4b5b159748206&query=${busqueda}`)
                .then(res => res.json())
                .then(data => setData(data.results))
        }
    }, [busqueda])

    console.log(data)


    return (

        <>
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
                <IconoNav name="search">
                    <input onChange={handleChange} type="text" placeholder={"Búsqueda..."}></input>
                </IconoNav>

            </NavStyle>


            {data.length != 0
                ? <Search data={data}></Search>
                : null
            }
        </>
    )


}

export default Nav;