import React from "react";
/* import data from '../data/logements.json' */
/* import { useParams } from "react-router-dom"; */
import { useState } from "react";
import ArrowLeft from '../assets/arrow-left.png';
import ArrowRight from '../assets/arrow-right.png';
import '../styles/Slideshow.scss'

function Slideshow({ slides }){


    /* const [ index, setIndex ] = useState(0) */
    const [selectedSlide, setSelectedSlide] = useState(0);
    
    const handleDotClick = (index) => {
      setSelectedSlide(index);
    };
    const handleArrowLeftClick = () => {
      setSelectedSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    const handleArrowRightClick = () => {
      setSelectedSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
          return (
            <div className="Slideshow">
              <img
                className="slideshow-image-container"
                src={slides[selectedSlide]}
                alt={slides[selectedSlide].tagLine}
              />
              <p dangerouslySetInnerHTML={{ __html: slides[selectedSlide].tagLine }}></p>
              <div className="dots">
                {slides.map((slide, index) => (
                  <p
                    key={index}
                    className={`dot ${selectedSlide === index ? 'dot_selected' : ''}`}
                    onClick={() => handleDotClick(index)}
                  ></p>
                ))}
              </div>

              <div className="arrow_left" onClick={handleArrowLeftClick}>
                <img src={ArrowLeft} alt="" />
              </div>

              <span className="slideshow_count">{selectedSlide + 1}/{slides.length}</span>

              <div className="arrow_right" onClick={handleArrowRightClick}>
              <img src={ArrowRight} alt="" />
              </div>
            </div>
          );
        };
        
        export default Slideshow;

/* L'image s'affiche selon l'indice que j'ai et qui augmente ou baisse selon la flèche sur laquelle je clic */