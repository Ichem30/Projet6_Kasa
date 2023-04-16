import React from "react";
import '../styles/Nav.scss'
import { Link, /*useLocation*/ } from "react-router-dom";
import logo from '../assets/Logo.png'

function Nav(){
    return (
        <nav>
            
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/About">À propos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav