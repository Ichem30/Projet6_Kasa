import React from "react";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import ErrorPage from "./ErrorPage";
import "../styles/Location.scss";
import data from "../data/logements.json";
import { useParams, useNavigate } from "react-router-dom";
import Star from "../components/Star";

function Locations() {
  const { id } = useParams();

  const locationDetails = data.find(
    (locationDetails) => locationDetails.id === id
  );
  const navigate = useNavigate();

  if (!locationDetails) {
    navigate("/Error");
    return <ErrorPage />;
  }
  const hostRating = Number(locationDetails.rating);
  let ratings = Array(5).fill(null);

  ratings.forEach((_, index) => {
    ratings[index] = index + 1;
  });

  return (
    <section className="Location_container">
      <div className="Location_Img">
        <Slideshow slides={locationDetails.pictures} />
      </div>
      <div className="Location_content">
        <div className="Location_title">
          <h1>{locationDetails.title}</h1>
          <h2>{locationDetails.location}</h2>

          <ul>
            {locationDetails.tags.map((tag, index) => (
              <li key={index} className="Location_tags">
                {tag}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="Location_owner">
          <div className="Owner_profil">
            <p className="Owner_Name">{locationDetails.host.name}</p>
            <img src={locationDetails.host.picture} alt="" />
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
            <p>{locationDetails.description}</p>
          </Collapse>
        </div>
        <div className="Collapse_right">
          <Collapse title="Equipements">
            <ul>
              {locationDetails.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default Locations;
