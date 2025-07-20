import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import desktopLogo from "../../assets/banner.png";
import mobileLogo from "../../assets/banner1.png";
import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img
            src={isMobile ? mobileLogo : desktopLogo}
            alt="Black Library Shop"
            className="logo-img"
          />
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/categoria/herejiaDeHorus">Herejía de Horus</Link>
        <Link to="/categoria/warhammer40K">Warhammer 40K</Link>
        <Link to="/categoria/ageOfSigmar">Age of Sigmar</Link>
        <Link to="/categoria/personajesIconicos">Personajes Icónicos</Link>
      </nav>

      <div className="header-cart">
        <Link to="/ordenes">
          <FaShoppingCart /> Órdenes
        </Link>
      </div>
    </header>
  );
};

export default Header;
