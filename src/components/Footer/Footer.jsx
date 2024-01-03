import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <h6>About</h6>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <NavLink to="/" >
                Homepage
              </NavLink>
              <NavLink to="about" >
                About Me
              </NavLink>
              <NavLink to="help" >
                Help
              </NavLink>
              <NavLink to="career" >
                Careers
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
