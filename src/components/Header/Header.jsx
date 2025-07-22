import CartWidget from "../CartWidget/CartWidget"; // arriba del todo
import { Link } from "react-router-dom";
import "./Header.css";
import banner from "../../assets/banner.png";
import banner1 from "../../assets/banner1.png";
import { useEffect, useState } from "react";


const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="container-fluid bg-white border-bottom custom-header">
      <div className="row align-items-center">
        <div className="col-12 col-md-3 text-center text-md-start mb-2 mb-md-0">
          <Link to="/">
            <img
              src={isMobile ? banner1 : banner}
              alt="Logo"
              className="img-fluid custom-logo"
            />
          </Link>
        </div>

        <nav className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
          {!isMobile && (
            <Link to="/" className="nav-link-hover">Inicio</Link>
          )}
          <Link to="/categoria/herejiaDeHorus" className="nav-link-hover">Herejía de Horus</Link>
          <Link to="/categoria/warhammer40K" className="nav-link-hover">Warhammer 40K</Link>
          <Link to="/categoria/ageOfSigmar" className="nav-link-hover">Age of Sigmar</Link>
          <Link to="/categoria/personajesIconicos" className="nav-link-hover">Personajes Icónicos</Link>
        </nav>

        <div className="col-12 col-md-3 d-flex justify-content-end mt-2 mt-md-0">
<div className="header-cart-icons d-flex gap-3">
  <CartWidget />
  <Link to="/ordenes" className="nav-link-hover">📄</Link>
</div>        </div>
      </div>
    </header>
  );
};

export default Header;
