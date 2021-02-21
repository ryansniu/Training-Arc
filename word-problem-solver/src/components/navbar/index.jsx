import './style.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
      <div className="navbar">
        <p className="navbar-component">
            <Link to="/" style={{ textDecoration: 'none', color: "#F6DD90" }}>Word Problem Solver</Link>
        </p>
        <p className="navbar-component">
            <Link to="/take-quiz" style={{ textDecoration: 'none', color: "#F6DD90" }}>Take Quiz</Link>
        </p>
      </div>
  );
}

export default Navbar;