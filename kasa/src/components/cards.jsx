import React from "react";

import { useNavigate } from "react-router-dom";
export default function Card({ logement }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/image/${id}`);
  };

  return (
    <a className="card" key={logement.id} href="">
      <article>
        <img
          onClick={() => handleClick(logement.id)}
          // style={{ cursor: 'pointer', width: '200px' }}
          src={logement.cover}
          alt={logement.title}
        />
        <h2> {logement.title}</h2>
      </article>
    </a>
  );
}
