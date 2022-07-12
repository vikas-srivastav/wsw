import React from "react";
import Logo from "../Assets/image/Logo_Footer.gif";
import footlogo from "../Assets/image/bar.png";
import Sea from "../Assets/image/OpenSea.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="foot py-4">
          <div className="scroll-img px-3">
          <div className="bar-scroll"><img src={footlogo} alt="" className="img-fluid" /></div>
          <div className="bar-scroll"><img src={footlogo} alt="" className="img-fluid" /></div>
          </div>
          <div className="container-wrap">
            <div className="row py-5 align-items-center">
              <div className="col-md-4 p-0">
                <div className="footone">
                  <h6>JOIN THE PACH</h6>

                  <div className="inp">
                    <input
                      type="email"
                      placeholder="e-mail adress"
                      className="inpfot"
                    />
                    <button type="submit"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="logo-img">
                  <Link to="https://www.dropbox.com/s/g16fe7etp93zklc/Logo_Footer.gif?dl=0">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 p-0 col-right">
                <div className="foot-social-icons pb-3">
                  <a href="https://discord.com/invite/PZ7TtYGH5c" target="_blank">
                    <i className="fa-brands fa-discord" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/wallstwolvesnft" target="_blank">
                    <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <img
                      src={Sea}
                      alt="OpenSea"
                      className="opneseafoot img-fluid"
                    />
                  </a>
                  <a href="https://www.instagram.com/wallstwolvesnft/" target="_blank">
                    <i className="fa-brands fa-instagram"aria-hidden="true"></i>
                  </a>
                </div>
                <div className="copytxtfoot mt-2">
                  <p className="mb-1 white-txt">©2022 Wall Street Wolves LLC</p>
                  <p className="mb-0 red-txt">WSW All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
