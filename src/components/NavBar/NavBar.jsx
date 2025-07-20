import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={banner} alt="Black Library Shop" />
        </div>

        <nav className="navbar-links">
          <Link to="/categoria/herejiaDeHorus">Herejía de Horus</Link>
          <Link to="/categoria/warhammer40K">Warhammer 40K</Link>
          <Link to="/categoria/ageOfSigmar">Age of Sigmar</Link>
          <Link to="/categoria/personajesIconicos">Personajes Icónicos</Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/cart">🛒</Link>
          <Link to="/ordenes">Órdenes</Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
