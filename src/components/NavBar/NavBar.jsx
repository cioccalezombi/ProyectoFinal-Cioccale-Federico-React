import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/"><h1>Mi E-commerce</h1></Link>
        <ul>
          <li><Link to="/categoria/tecnologia">Tecnología</Link></li>
          <li><Link to="/categoria/ropa">Ropa</Link></li>
          <li><Link to="/carrito"><CartWidget /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
