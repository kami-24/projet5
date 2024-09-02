import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data_logements from "../data/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../components/collapse";
import Slideshow from "../components/slideshow";
import "./logement.scss";
import { useNavigate } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  const logement = data_logements.find((item) => item.id === id);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <>
      <div>
        <Slideshow logement={logement} />
      </div>
      <div className="container_under_slideshow">
        <div className="left_container">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="right_container">
          <p>
            {logement.host.name.split(" ").map((part, index) => (
              <span key={index} style={{ display: "block" }}>
                {part}
              </span>
            ))}
          </p>
          <img src={logement.host.picture} alt="photo propriétaire" />
        </div>
      </div>
      <div className="container_tags_stars">
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="stars">
          <span>
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                size="sm"
                style={{ color: i < logement.rating ? "#ff6060" : "#e0e0e0" }}
              />
            ))}
          </span>
        </div>
      </div>
      <div className="desc_equip">
        <Collapse
          title="Description"
          content={logement.description}
          customClass="logement-collapse"
          customClassContent="logement_content"
        />
        <Collapse
          title="Équipements"
          customClass="logement-collapse"
          content={
            <>
              {logement.equipments.map((equipment, index) => (
                <span key={index} className="equipements">
                  {equipment}
                </span>
              ))}
            </>
          }
          customClassContent="logement_content"
        />
      </div>
    </>
  );
}

export default Logement;
