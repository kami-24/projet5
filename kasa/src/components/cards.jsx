import React from "react";

import { useNavigate } from "react-router-dom";
export default function Card({ logement }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    // navigate(`/image/${id}`);
    navigate(`/logement/${id}`);
  };

  return (
    <a
      className="card"
      key={logement.id}
      href=""
      onClick={() => handleClick(logement.id)}
    >
      <article>
        <img
          // onClick={() => handleClick(logement.id)}
          src={logement.cover}
          alt={logement.title}
        />
        <h2> {logement.title}</h2>
      </article>
    </a>
  );
}
