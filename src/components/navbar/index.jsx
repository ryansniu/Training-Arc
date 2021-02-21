import './style.css';
import {Link} from 'react-router-dom';
import { IconContext } from "react-icons";
import { FcIdea } from "react-icons/fc";

function Navbar() {
  return (
      <div className="navbar">
        <div className="navbar-left">
          <IconContext.Provider value={{ size: '45px',  className: "icon-style"}}>
            <div>
              <FcIdea />
            </div>
          </IconContext.Provider>
          <text className="title">Training Arc</text>
        </div>
        <div className="navbar-right">
          <p className="navbar-component-right">
              <Link to="/input-form" style={{ textDecoration: 'none', color: "#F6DD90" }}>Word Problem Solver</Link>
          </p>
          <p className="navbar-component-right">
              <Link to="/take-quiz" style={{ textDecoration: 'none', color: "#F6DD90" }}>Take Quiz</Link>
          </p>
        </div>
      </div>
  );
}

export default Navbar;