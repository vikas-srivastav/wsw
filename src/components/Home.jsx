import React from "react";
import Token from "../Assets/image/Token.png";
import NFT from "../Assets/image/NFT.png";
import AboutUs from "../components/AboutUs";
import Arrow from "../Assets/image/arrow.png";
import Roadmap from "./Roadmap";
import Team from "./Team";
import FAQS from "./FAQS";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <>
      <div id="home-head">
        <div className="container-wrap pt-5">
          <div className="row">
            <div className="col-md-5 mt-5" id="right-flex">
              <div className="rgt-text mt-3">
                <h1>CLICK</h1>
                <h3>TO MINT</h3>
              </div>
              <div className="rgt-arow pt-5 mx-4">
                <img src={Arrow} alt="RightArrow" className="img-fluid" />
              </div>
              <div className="tkn pt-4">
                <button >
                  <Link to="/mint">
                <img src={Token} alt="Token" className="img-fluid" />
                </Link>
                </button>
              </div>
            </div>
            <div className="col-md-7">
              
              <div className="left-img text-end">
                <img src={NFT} alt="NFT" className="img-fluid" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Roadmap />
      <Team />
      {/*  START FAQ SECTION   */}
      <div className="faq-section container-wrap" id="main-faq">
        <h1>FAQs</h1>
        <p>frequently asked questions</p>
        <FAQS />
      </div>
      {/* END FAQ SECTION */}
    </>
  );
};

export default Home;
