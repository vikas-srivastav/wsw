import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../Assets/image/WSW.png";
import Sea from "../Assets/image/OpenSea.png";

const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <div className="container-wrap my-2">
          <div className="row">
            <div className="col-md-2">
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="sitelogo" className="img-fluid" />
                </Link>
              </Navbar.Brand>
            </div>
            <div className="col-md-10 mx-5">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <li id="head-nav">
                    <NavLink className="nav-link" to="/mint">
                      MINT
                    </NavLink>
                  </li>
                  <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                    <HashLink className="nav-link" smooth to={"/#main-about"}>
                      MANIFESTO
                    </HashLink>
                  </NavDropdown>
                  <li id="head-nav">
                    <HashLink className="nav-link" smooth to={"/#roadmap"}>
                      ROADMAP
                    </HashLink>
                  </li>
                  <li id="head-nav">
                    <HashLink className="nav-link" smooth to={"/#main-team"}>
                      TEAM
                    </HashLink>
                  </li>
                  <li id="head-nav">
                    <HashLink className="nav-link" smooth to={"/#main-faq"}>
                      FAQS
                    </HashLink>
                  </li>
                  <li id="head-nav">
                    <NavLink className="nav-link" to="/staking">
                      STAKING
                    </NavLink>
                  </li>
                  <li id="head-nav">
                    <NavLink className="nav-link" to="/gallery">
                      GALLERY
                    </NavLink>
                  </li>
                  <NavDropdown title="MORE" id="basic-nav-dropdown">
                    <NavLink className="nav-link" to="/more">
                      News
                    </NavLink>
                    <NavLink className="nav-link" to="/events">
                      Events
                    </NavLink>
                    <NavLink className="nav-link" to="/store">
                      Store
                    </NavLink>
                  </NavDropdown>
                </Nav>

                <div className="social-icons mx-5">
                  <a
                    href="https://discord.com/invite/PZ7TtYGH5c"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-discord" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/wallstwolvesnft" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                    <img src={Sea} alt="opensea" className="img-fluid" />
                  </a>
                  <a
                    href="https://www.instagram.com/wallstwolvesnft/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i
                      className="fa-brands fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
