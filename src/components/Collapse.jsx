import React from "react";
import { useState } from "react";
import '../styles/Collapse.scss'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'



function Collapse({title, children}) {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    

    
    return (
        <span className="Collapse">
            <div className="Collapse_title" onClick={handleToggle}>
                <h3>{title}</h3>
                <img src={isOpen ? arrowUp : arrowDown} alt="arrow-icon" />
            </div>
            
            {isOpen && (
            <div className="Collapse_content">
                {children}
            </div>)}
        </span>
    )
}

export default Collapse

/* Div qui contient une flèche, le reste est généré par le contenu parent 
Import logo flèches
isOpen ? ArrowUp : ArrowDown
OnClick génère une div en dessous qui est en display none
*/
