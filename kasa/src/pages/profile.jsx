import logo_kasa from '../assets/logo_kasa.png';
const logo_data = {
    name: 'logo kasa',
    imageUrl: logo_kasa,
    //imageSize: 90,
  };
  
export default function Profile() {
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