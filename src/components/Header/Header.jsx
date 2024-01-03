import {
  NavLink
} from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
function Header() {
  return (
    <div>
        <nav>
            <h1>Your Company</h1>
            <NavLink to="/" className="nav-item">
              Homepage
            </NavLink>
            <NavLink to="about" className="nav-item">
              About Me
            </NavLink>
            <NavLink to="help" className="nav-item">
              Help 
            </NavLink>
            <NavLink to="career" className="nav-item">
              Careers 
            </NavLink>
            <NavLink to="vedio" className="nav-item">
              Vedios 
            </NavLink>
          </nav>
          <Breadcrumbs/>
    </div>
  );
}

export default Header;
