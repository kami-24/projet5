import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';

export default function Collapse({title,content}) {
    // const [count, trigerCollapse] = useState();

    const [isOpen, setIsOpen] = useState(false); // L'état pour savoir si le contenu est ouvert ou fermé

    const toggleCollapse = () => {
      setIsOpen(!isOpen); // Inverse l'état actuel
    };

    return (

<div className="details">
{/* il faut un h1 quelque part  */}
{/* <h2 className="summary">{title}<FontAwesomeIcon onClick={() => console.log("TEST12")} icon={faChevronUp} /></h2> */}
<h2 className="summary" onClick={toggleCollapse} >{title}      <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} /> </h2>
{/* <p>{content}</p> */}
{isOpen && <p>{content}</p>} {/* Affiche le contenu seulement si isOpen est vrai */}
</div>
    
    );
  }