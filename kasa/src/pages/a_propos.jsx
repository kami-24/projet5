import { Form } from "react-router-dom";
import logo_kasa from '../assets/logo_kasa.png';
import Background from "./home.jsx"
import Collapse from "../components/collapse";
import img_a_propos from '../assets/bandeau_a_propos.png';

export default function Apropos() {


  return (
    <>
    {/* <header>
   <div className="logo">
   <Profile />
   </div>
   <nav>
       <ul>

           <li><a href="#">Accueil</a></li>
           <li>
         <a href={`/contacts/1`}>A Propos</a>
       </li>
       </ul>
   </nav>
</header> */}

<div className="bandeau">
          <Img />
    
  </div>

<body>
<Collapse title="Fiabilité" content=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
<Collapse title="Respect" content="La bienveillance fait partir des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
<Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"/>
<Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>


</body>
</>
   
  );
}


const logo_data = {
  name: 'logo kasa',
  imageUrl: logo_kasa,
  //imageSize: 90,
};

function Profile() {
  return (


      <img
        className="logo"
        src={logo_data.imageUrl}
        alt={'Photo de ' + logo_data.name}
        style={{
          width: logo_data.imageSize,
          height: logo_data.imageSize
        }}
      />
  
  );
}


const image_a_propos = {
  name: 'photo falaise mer',
  imageUrl: img_a_propos,
 // imageSize: 380,
};

function Img() {
  return (


      <img
        // className="logo"
        src={image_a_propos.imageUrl}
        alt={'Photo de ' + image_a_propos.name}
        style={{
          width: image_a_propos.imageSize,
          height: image_a_propos.imageSize,
          display:"block",
          
        }}
      />
  
  );
}