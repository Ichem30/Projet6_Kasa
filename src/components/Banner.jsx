import React from "react";
import PropTypes from 'prop-types';
import '../styles/Banner.scss'

function Banner({ title, img }){
    const bannerImage = {
        backgroundImage: `url(${img})`
    }


    return(
        <div className="banner" style={bannerImage}>
            <h1>{title}</h1>
        </div>
    )
}

Banner.propTypes = {    
    title: PropTypes.string,
    image: PropTypes.string,
  };
    
  export default Banner;
  