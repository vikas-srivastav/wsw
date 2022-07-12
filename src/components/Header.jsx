import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../Assets/image/WSW.png";
import Sea from "../Assets/image/OpenSea.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <>
      <section
        className={scroll ? "active-header header py-3" : "header py-3"}
      >
        <div className="container-wrap py-md-2">
          <div className="row">
            <div className="col-md-2">
              <Link to="/">
                <img src={logo} alt="sitelogo" className="img-fluid logo" />
              </Link>
            </div>
            <div className="col-md-10 nav-res">
              <Navbar expand="lg" className="p-md-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

                  <div className="social-icons">
                    <a
                      href="https://discord.com/invite/PZ7TtYGH5c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-brands fa-discord"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://twitter.com/wallstwolvesnft"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-brands fa-twitter"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src={Sea} alt="opensea" className="img-fluid" />
                    </a>
                    <a
                      href="https://www.instagram.com/wallstwolvesnft/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-brands fa-instagram"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
