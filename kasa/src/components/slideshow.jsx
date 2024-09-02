import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./slideshow.scss";

export default function Slideshow({ logement }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = logement.pictures.length;
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      <div>
        <div className="slideshow_container">
          <img
            src={logement.pictures[currentIndex]}
            alt={`Image ${currentIndex + 1} de ${logement.title}`}
            className="img_slideshow"
          />
          {totalImages > 1 && (
            <p className="counter">
              {currentIndex + 1} / {totalImages}
            </p>
          )}
          {totalImages > 1 && (
            <>
              <button onClick={prevSlide} className="left_arrow">
                <FontAwesomeIcon icon={faChevronLeft} size="2x" />
              </button>

              <button onClick={nextSlide} className="right_arrow">
                <FontAwesomeIcon icon={faChevronRight} size="2x" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
