import React from "react";
import Card from "./Card";
import '../styles/Gallery.scss'

function Gallery({cards}) {

    return (
        <section className="Gallery">
            {cards.map( (card) => (
                <Card id={card.id} key={card.id} title={card.title} cover={card.cover} />
            ))}            
        </section>
        
    )
   
}

export default Gallery