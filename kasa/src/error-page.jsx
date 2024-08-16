import { useRouteError } from "react-router-dom";
import logo_kasa from './assets/logo_kasa.png';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

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

    <div className="error-page">
      <h1>404</h1> 
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="#">Retourner sur la page d'accueil</a>
   
       
    
    </div>
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