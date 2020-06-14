import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import IconoNav from './IconoNav';
import Search from './Search';
// aca home no se usa 
import Home from './Home';
import style from 'styled-components';


const NavStyle = style.nav`
display: flex;
background-color: rgb(35, 39, 42);
margin-botom: 30px;

.buscador {
    display: flex;
    width: 100%;
    align-items: baseline;
}

input {
    width: 100px;
    height: 25px;
    background-color: rgb(35, 39, 42);
    color: #fff;
    border: solid grey 0.5px;
}
`

const Nav = () => {

    const [busqueda, setBusqueda] = useState("")
    const [data, setData] = useState([])

    const handleChange = e => {
        setBusqueda(e.target.value)
    }

    useEffect(() => {
        // privilegia escribir if (!busqueda.length)
        if (busqueda.length != 0) {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=ae73920dc1db068b1ee4b5b159748206&query=${busqueda}`)
                .then(res => res.json())
                .then(data => setData(data.results))
        }
    }, [busqueda])



    return (

        <>
        <NavStyle>
            <div><Link className="icon" to="/">
                <IconoNav name="home" />
            </Link></div>
            <div><Link className="icon" to="/movies">
                <IconoNav name="video" />
            </Link>
            </div>
            <div><Link className="icon" to="/tv">
                <IconoNav name="tv" />
            </Link>
            </div>
            <div className="buscador">
                <IconoNav name="search" />
        {/* Yo se que es muchisimo pedir, con lo bien que esta tu trabajo, 
        pero le faltó algo de amor a este input
        (con amor me refiero a css) */}
                <input onChange={handleChange} type="text" placeholder={"Búsqueda..."}></input>
            </div>
            </NavStyle>

            {/* Aca no se hace nada si data.length no es mayor a cero, asi que seria mejor el operador && antes que el ternario */}

            {data.length > 0
                ? <Search data={data} query={busqueda}></Search>
                : null
            }
            </>
   

    )


}

export default Nav;
