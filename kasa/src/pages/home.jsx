import logo_kasa from '../assets/logo_kasa.png';
import background_logo from '../assets/background_bandeau.png';
import data_logements from '../data/logements.json';
import Slideshow from "../components/slideshow";
export default function Home() {
    return (
      
      <>
    ’

        <div className="bandeau">
          
                <h1 >Chez vous, partout et ailleurs</h1> 
                <Background />
          
        </div>
         <main>
         {/* <Logements />  */}
      <Slideshow />
       
    </main> 

      </>
    );
  }





  

const background = {
    name: 'photo falaise mer',
    imageUrl: background_logo,
   // imageSize: 380,
  };
  
function Background() {
    return (

 
        <img
          // className="logo"
          src={background.imageUrl}
          alt={'Photo de ' + background.name}
          style={{
            width: background.imageSize,
            height: background.imageSize,
            display:"block",
            
          }}
        />
    
    );
  }
  
  const products = [
    { title: 'Chou', isFruit: false, id: 1 },
    { title: 'Ail', isFruit: false, id: 2 },
    { title: 'Pomme', isFruit: true, id: 3 },
  ];
  
function Logements() {
    const listItems = data_logements.map(product =>
       
       <a className="card" href="#">
         <article >
          <img  src={product.cover}  alt=""/> 
         <h2> {product.title}</h2>
         </article> 
           
     
    </a>
    /*  <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }
    
    }
      >
        {product.title}
      </li>*/
    );
  
    return (
      <section className="cards" >{listItems}</section>
    );
  }

function Card() {
    return (
        <div className="card">
        <div className="card-content">
            <p>Titre de la location</p>
        </div>
    </div>
    );
}  



