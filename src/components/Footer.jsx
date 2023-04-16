import React from "react";
import logo from '../assets/logo-footer.png'
import '../styles/Footer.scss'

function Footer(){
    return (
        <footer>
            <img src={logo} alt="Logo" />

            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer