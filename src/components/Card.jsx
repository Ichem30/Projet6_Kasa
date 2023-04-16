import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.scss'

function Card({cover, title, id}){
    return (
        <article key={id} className="card">
            <Link to={`/logement/${id}`}> 
            <img src={cover} alt={title} />
            <h2>{title}</h2>
            </Link>
        </article>
    )
}

export default Card