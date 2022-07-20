import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../Assets/image/WSW.png";
import Sea from "../Assets/image/OpenSea.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <>
      <section className={scroll ? "active-header header py-4" : "header py-4"}>
        <div className="container-wrap py-md-2">
          <div className="row ali-cen m-0">
            <div className="col-lg-2 col-6">
              <Link to="/">
                <img src={logo} alt="sitelogo" className="img-fluid logo" />
              </Link>
            </div>
            <div className="col-lg-10 col-6 nav-res">
              <Navbar collapseOnSelect expand="lg" className="p-md-0" expanded={expanded}>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav onClick={() => setExpanded(false)} >
                    <li id="head-nav">
                      <NavLink className="nav-link" to="#">
                        MINT
                      </NavLink>
                    </li>
                    <li  id="head-nav">
                    <NavDropdown title="ABOUT" id="basic-nav-dropdown" smooth to={"/#main-about"}>
                      <HashLink className="nav-link" smooth to={"/#main-about"}>
                        MANIFESTO
                      </HashLink>
                    </NavDropdown>
                    </li>
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
                    <span className="red-span">soon!</span>
                      <NavLink className="nav-link" to="#">
                        STAKING
                      </NavLink>
                    </li>

                    <li id="head-nav">
                    <span className="red-span">soon!</span>
                      <NavLink className="nav-link" to="#">
                        GALLERY
                      </NavLink>
                    </li>
                    <li id="head-nav">
                    <span className="red-span">soon!</span>
                    <NavDropdown title="MORE" id="basic-nav-dropdown">
                      <NavLink className="nav-link" to="#">
                        News
                      </NavLink>
                      <NavLink className="nav-link" to="#">
                        Events
                      </NavLink>
                      <NavLink className="nav-link" to="#">
                        Store
                      </NavLink>
                    </NavDropdown>
                    </li>
                  </Nav>

                  <div className="social-icons mt-md-4">
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
                    <a
                      href="https://opensea.io/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
