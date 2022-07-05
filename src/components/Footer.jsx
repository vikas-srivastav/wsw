import React from "react";
import Logo from "../Assets/image/Logo_Footer.gif";
import footlogo from "../Assets/image/bar.png";
import Sea from "../Assets/image/OpenSea.png";

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
                  <h4>JOIN THE PACH</h4>

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
                  <img src={Logo} alt="logo" />
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="foot-social-icons text-center">
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
                <div className="copytxtfoot mt-2 text-center">
                  <h6>
                    <span>©2022 Wall Street Wolves LLC</span>{" "}
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
