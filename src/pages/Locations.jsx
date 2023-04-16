import React from "react"
import Collapse from "../components/Collapse"
import Slideshow from "../components/Slideshow"
import '../styles/Location.scss'
import data from '../data/logements.json'
import { useParams, useNavigate } from 'react-router-dom'
import Star from '../components/Star'

function Locations() {

    const { id } = useParams()
    const location = data.find(location => location.id === id)
    const navigate = useNavigate()

    const hostRating = Number(location.rating);
    let ratings = Array(5).fill(null);

    ratings.forEach((_, index) => {
        ratings[index] = index + 1;
    });
    
    if (!location) {
        navigate('/error');
      }

    return (
        <section className="Location_container">
            <div className="Location_Img">
                <Slideshow slides={location.pictures} />
            </div>
                <div className="Location_content">

                    <div className="Location_title">
                        <h1>{location.title}</h1>
                        <h2>{location.location}</h2>

                     <ul>
                      {location.tags.map((tag, index) => (
                      <li key={index} className="Location_tags">{tag} </li>
                      ))}
                    </ul>

                    </div>

                    <div className="Location_owner">
                        <div className="Owner_profil">
                        <p className="Owner_Name">{location.host.name}</p>
                        <img src={location.host.picture} alt="" />
                        </div>

                        <div className="Location_stars">
                            <ul>
                            <div>
                                {ratings.map((rate) =>
                                    rate <= hostRating ? (
                                    <Star key={rate} color="#FF6060" />
                                    ) : (
                                    <Star key={rate} color="#E3E3E3" />
                                    )
                                )}
                                    </div>
                                </ul>
                            </div>
                    </div>
                </div>

            <div className="Location_Collapses">
                <div className="Collapse_left">
                    <Collapse title="Description">
                    <p>{location.description}</p>
                    </Collapse>
                </div>
                <div className="Collapse_right">
                   <Collapse title="Equipements">
                   <ul>
                    {location.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                    ))}
                </ul></Collapse>
                </div>
            </div>
        </section>

    )
}

export default Locations
