import React from "react"
import '../styles/Home.scss'
import Banner from "../components/Banner"
import BannerImg from '../assets/banner.png'
import Gallery from "../components/Gallery"
import data from '../data/logements.json'

const cards = data.map((card) =>({
    id: card.id,
    title: card.title,
    cover: card.cover,
}))

function Home() {
    return (
        <div className="main">

            <Banner title="Chez vous, partout et ailleurs" img={BannerImg}/>
            <Gallery cards={cards} />
            
        </div>
    )
}

export default Home