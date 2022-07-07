import React from "react";
import Logo from "../Assets/image/Logo_Footer.gif";
import footlogo from "../Assets/image/bar.png";
import Sea from "../Assets/image/OpenSea.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="foot">
          <div className="processbar text-center">
            <img src={footlogo} alt="" className="img-fluid" />
          </div>
          <div className="container-wrap">
            <div className="row my-5">
              <div className="col-md-4">
                <div className="footone">
                  <h6>JOIN THE PACH</h6>

                  <div className="inp">
                    <input
                      type="email"
                      placeholder="e-mail adress"
                      className="inpfot"
                    />
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="logo-img">
                  <Link to="https://www.dropbox.com/s/g16fe7etp93zklc/Logo_Footer.gif?dl=0">
                  <img src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mt-4 ">
                <div className="foot-social-icons">
                  <a
                    href="https://discord.com/invite/PZ7TtYGH5c"
                    target="_blank"
                  >
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
                  <a
                    href="https://www.instagram.com/wallstwolvesnft/"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div className="copytxtfoot mt-2">
                  <h6>
                   ©2022 Wall Street Wolves LLC
                  </h6>
                  <h5>WSW All Rights Reserved.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
