import React from "react";
import Token from "../Assets/image/Token.png";
import NFT from "../Assets/image/NFT.png";
import AboutUs from "../components/AboutUs";
import Arrow from "../Assets/image/arrow.png";
import Roadmap from "./Roadmap";
import Team from "./Team";
import FAQS from "./FAQS";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <div id="home-head">
        <div className="container-wrap pt-5">
          <div className="row pt-5">
            <div className="col-md-5 mt-5" id="right-flex">
              <div className="rgt-text mt-3">
                <h1>CLICK</h1>
                <h3>TO MINT</h3>
              </div>
              <div className="rgt-arow pt-5 mx-4">
                <img src={Arrow} alt="RightArrow" className="img-fluid" />
              </div>
              <div className="tkn pt-4">
                <button>
                  <Link to="/mint">
                    <img src={Token} alt="Token" className="img-fluid rotate" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-md-7 homeleft">
              {/* <ScrollAnimation
            animateIn="animate__fade animate__delay-1s"
            animateOnce
          > */}

              <div className="left-img text-end">
                <div className="dot-btn">
                {value === "first-text" ? (
                  <p className="home-para">
                    Our mission is to become <h6>LARGEST WOLF PACK</h6> THE in
                    the NFT space
                  </p>
                ) : value === "second-text" ? (
                  <p className="home-para">
                    Our differentiator lies in our pack, our masks, they are the
                    essence of WSW.
                  </p>
                ) : null}
                <div className="btn-home">
                  <label for="huey">
                    <input
                      type="radio"
                      id="huey"
                      name="drone"
                      value="first-text"
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <i class="fa-solid fa-circle"></i>
                  </label>
                  <label for="dewey">
                    <input
                      type="radio"
                      id="dewey"
                      name="drone"
                      value="second-text"
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <i class="fa-solid fa-circle"></i>
                  </label>
                  </div>
                </div>
                

                <img src={NFT} alt="NFT" className="img-fluid homeimg" />
              </div>
              {/* </ScrollAnimation> */}
            </div>
          </div>
        </div>
      </div>
      <div id="main-about">
        <AboutUs />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="main-team">
        <Team />
      </div>

      {/*  START FAQ SECTION   */}
      <div id="faq">
        <div className="faq-section container-wrap py-5" id="main-faq">
          <div className="faq-head px-5">
            <h3>FAQS</h3>
            <h5>frequently asked questions</h5>
          </div>
          <FAQS />
        </div>
      </div>
      {/* END FAQ SECTION */}
    </>
  );
};

export default Home;
