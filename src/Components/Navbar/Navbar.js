import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="NavbarMainDiv">

      {/* -------------------This is Logo Section -----------------*/}
      <div className="Logo">
        <p>
          Jayesh<span>.</span>
        </p>
      </div>

      {/* -------------------This is Navbar Link Section -----------------*/}
      <div className="NavLinksDiv">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-links "
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-links"
        >
          About
        </Link>
        <Link
          to="education-experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-links"
        >
          Education
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-links"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-links"
        >
          Contact
        </Link>
      </div>

      {/* -------------------This is Image Section -----------------*/}
      <div className="nav-img-div">
        <a href="https://www.linkedin.com/in/jayesh-tambat-549881251">
          <img src="./images/linkedinB.png" />
        </a>
        <a href="https://www.instagram.com/jayesh_tambat/">
          <img src="./images/instagramB.png" />
        </a>
        <a href="https://github.com/Jayesh-Tambat/My_Repository">
          <img src="./images/gitB.png" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
