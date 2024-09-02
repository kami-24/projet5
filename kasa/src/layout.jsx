import logo_kasa from "./assets/logo_kasa.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import footer_logo_kasa from "./assets/footer_logo.png";
import Logo from "./components/logo";
import "./index.scss";

export default function Root() {
  return (
    <>
      <header>
        <div className="logo">
          <Logo img_path={logo_kasa} img_name={"logo kasa"} />
        </div>
        <nav>
          <ul>
            <Link to="/">Accueil</Link>
            <li>
              {/* <a href={`/a-propos`}>A Propos</a> */}
              <Link to="/a-propos">A Propos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <img src={footer_logo_kasa} alt="" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
