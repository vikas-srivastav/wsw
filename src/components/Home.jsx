import React from "react";
import Token from "../Assets/image/Token.png";
import NFT from "../Assets/image/NFT.png";
import AboutUs from "../components/AboutUs";
import Arrow from "../Assets/image/arrow.png"
import Roadmap from "./Roadmap";
import Team from "./Team";
import FAQS from "./FAQS"
import  accordionData  from './utils/content';

const Home = () => {
  return (
    <>
      <div id="home-head">
        <div className="container-wrap">
          <div className="row">
            <div className="col-md-5" id="right-flex">
              <div className="rgt-text">
              <h1>
              CLICK 
              </h1>
              <br />
              <span> <h1>TO MINT</h1></span>
                
              
              </div>
              <div className="rgt-arow">
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div className="tkn">
                <img src={Token} alt="Token" className="img-fluid" />
              </div>

            </div>
            <div className="col-md-7">
              <div className="left-img text-center">
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
    <div className="faq-section" id="main-faq">
      <h1>FAQs</h1>
      <p>frequently asked questions</p>
      <div>
      {accordionData.map(({ title, content }) => (
          <FAQS title={title} content={content} />
        ))}
        </div>   
    </div>
    {/* END FAQ SECTION */} 
    </>
  );
};

export default Home;
