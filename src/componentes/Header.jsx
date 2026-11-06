import { Link } from 'react-router-dom';
import {UserRound} from 'lucide-react';
import './haederstyles.css';

function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/preguntas">Preguntas</Link>
        <Link to="/productos">Productos</Link>
      </nav>
    </header>
  );
}

export default Header;