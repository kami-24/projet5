import logo_kasa from './assets/logo_kasa.png';
import { Outlet } from 'react-router-dom';
import footer_logo_kasa from './assets/footer_logo.png';
export default function Root() {
    return (
      <>
  <header>
        <div className="logo">
         <Logo /> 
        </div>
        <nav>
            <ul>

                <li><a href="#">Accueil</a></li>
                <li>
              <a href={`/contacts/1`}>A Propos</a>
            </li>
            </ul>
        </nav>
    </header>
<main>
    <Outlet/>    

  
</main>
<footer>
            <img src={footer_logo_kasa} alt="" />
            {/* <h2>Kasa</h2> */}
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>

      </>
    );
  }


  const logo_data = {
    name: 'logo kasa',
    imageUrl: logo_kasa,
    //imageSize: 90,
  };
  
  function Logo() {
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