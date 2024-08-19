// import React from 'react';
// import { useParams } from 'react-router-dom';
// import data_logements from '../data/logements.json';

// function ImagePage() {
//   const { id } = useParams();
//   const logement = data_logements.find(item => item.id === id);
//   return (
//     <div>
//     <h1>{logement.title}</h1>
//     <div>
//       {logement.pictures.map((picture, index) => (
//         <img key={index} src={picture} alt={`Image ${index + 1} de ${logement.title}`} style={{ width: '300px', margin: '10px' }} />
//       ))}
//     </div>
//   </div>
//     // <div>
//     //   <h1>Image {id}</h1>
//     //   <img src="url_de_votre_image" alt="Description"  />
//     // </div>
//   );
// }

// export default ImagePage;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data_logements from '../data/logements.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft,faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../components/collapse";

function ImagePage() {
  const { id } = useParams();
  const logement = data_logements.find(item => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const totalImages = logement.pictures.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {/* <h1>{logement.title}</h1> */}
      {/* <div style={{ position: 'relative', width: '300px', margin: 'auto' }}> */}
      <div>
        <img 
          src={logement.pictures[currentIndex]} 
          alt={`Image ${currentIndex + 1} de ${logement.title}`} 
           style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover', 
            borderRadius: '10px' 
            }}
  
        />
        
        <button 
        
          onClick={prevSlide} 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '10px', 
            transform: 'translateY(-50%)', 
            background: 'none', 
            border: 'none', 
            color: 'white', 
            cursor: 'pointer',
            zIndex: 1,
          
          
          }}
        >
          {/* &#10094; */}
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button 
          onClick={nextSlide} 
           style={{ 

            position: 'absolute', 
            top: '50%', 
            right: '10px', 
            transform: 'translateY(-50%)', 
            background: 'none', 
            border: 'none', 
            color: 'white', 
            cursor: 'pointer',
            zIndex: 1,
            }}
        >
               {/* {faChevronRight} */}
          {/* &#10095; */}
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
        <p
      style={{ 
        position: 'absolute', 
        bottom: '20px', 
        width: '100%', 
        textAlign: 'center', 
        color: 'white', 
        fontSize: '20px', 
        textShadow: '0 0 8px rgba(0, 0, 0, 0.7)' 
    }}
      >{currentIndex + 1} / {totalImages}</p>
      </div>

     
      
      <div
       style={{ 
        display: 'flex',
        justifyContent:'space-between'
    }}>
      <h1>{logement.title}</h1>
      <div
      style={{ 
        display: 'flex',
        justifyContent:'space-between',
   
    }}
      >
      <p>{logement.host.name}</p>
      <img src={logement.host.picture} alt="" 
       style={{ 
        display: 'flex',
        justifyContent:'space-between',
        borderRadius:'60px'
    }}/>
      </div>
      </div>
      <p>{logement.location}</p>
      <div
       style={{ 
        display: 'flex',
        justifyContent:'space-between'
    }}>
        <div>
        {logement.tags.map((tag, index) => (
          <span 
            key={index} 
            style={{ 
              padding: '5px 10px', 
              backgroundColor: '#ff6060', 
              color: 'white', 
              borderRadius: '10px', 
              fontSize: '14px' 
            }}
          >
            {tag}
          </span>
        ))}
        </div>
        <span style={{ display: 'flex', alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i} 
                  icon={faStar} 
                  size="sm" 
                  style={{ color: i < logement.rating ? '#ff6060' : '#e0e0e0' }} 
                />
              ))}
            </span>
      </div>
      <div
       style={{ 
        display: 'flex',
        justifyContent:'space-between'
    }}>
      <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"/>
<Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>

      </div>
    </div>
  );
}

export default ImagePage;
