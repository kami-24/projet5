import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import data_logements from '../data/logements.json';
export default function Slideshow({}) {

    const [count, setCount] = useState(0);

    function handleClick() {
      console.log("HELLO")
    
    }

    const listItems = data_logements.map(product =>
        <a onClick={handleClick} className="card" href="#">
          <article >
           <img  src={product.cover}  alt=""/> 
          <h2> {product.title}</h2>
          </article> 
     </a>
     );
   


    return (
        <>
        <section className="cards" >{listItems}</section> 
              
        </>
            );
  }