import React, {useEffect, useState} from "react";
import Tokens from "../../Assets/image/Tokens.png";
import NFT from "../../Assets/image/NFT.png";
import AboutUs from "../landingPages/AboutUs";
import Arrow from "../../Assets/image/arrow.png";
import Roadmap from "../landingPages/Roadmap";
import Team from "../landingPages/Team";
import FAQS from "../landingPages/FAQS";
import { Link } from "react-router-dom";
import Test from "../Test";

const Home = () => {
  const [value, setValue] = useState("first-text");
  const [playAnimation, setPlayAnimation] = useState(false);
  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(!playAnimation);
    };
    console.log(playAnimation);
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    }
  }, []);

  return (
    <>
      <div id="home-head" className="pt-5">
        <div className="container-wrap pt-5">
          <div className="row pt-5 align-items-center">
            <div className="col-lg-4 px-0 pb-5 pb-lg-0" id="right-flex">
              {/*<div className="rgt-text mt-3">
                <h2 className="outline-txt text-white mb-0 letter-space">CLICK</h2>
                <h2 className="hthree text-white mb-0 mt-2">TO MINt</h2>
              </div>
              <div className="rgt-arow pt-5 mx-2">
                <img src={Arrow} alt="RightArrow" className="img-fluid" />
              </div>
              <div className="tkn pt-4">
                <button>
                  <Link to="#">
                    <img src={Token} alt="Token" className="img-fluid rotate" />
                  </Link>
                </button>
              </div> */}
              <div className={ playAnimation ? '' : 'myAnimation'}>
                <div className="rgt-text mt-3">
                <h2 className="outline-txt text-white mb-0 letter-space">CLICK</h2>
                <h2 className="hthree text-white mb-0 mt-1">TO MINt</h2>
                </div>
              </div>  
              <div className="rgt-arow pt-5 mx-2">
                <img src={Arrow} alt="RightArrow" className="img-fluid" />
              </div>
              <div className="tkn pt-4">
                <button>
                  <Link to="#">
                    <img src={Tokens} alt="Token" className="img-fluid rotate" />
                  </Link>
                </button>
              </div>
                
            </div>
            
            <div className="col-lg-8 homeleft p-0">
              <div className="row">
              <div className="left-img text-end">
                <div className="dot-btn mt-md-5">
                {value === "first-text" ? (
                  <div className="home-para">
                  <p className="mb-md-0">Our mission is to become</p>
                    <h6 className="hsix mb-md-0">LARGEST WOLF PACK</h6>
                     <p className="mb-md-0">in the NFT space</p>
                  </div>
                ) : value === "second-text" ? (
                  <div className="home-para">
                  <h6 className="hsix mb-md-0">Our differentiator lies in our pack, our masks, they are the essence of WSW.
                  </h6>
                  </div>
                ) : null}
                <div className="btn-home-checked">
                  <label htmlFor="huey" className={value === "first-text" ? "checked first-check" : "unchecked first-check"}>
                    <input
                      type="radio"
                      id="huey"
                      name="drone"
                      value="first-text"
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <i className="fa-solid fa-circle"></i>
                  </label>
                  <label htmlFor="dewey" className={value === "second-text" ? "checked second-check" : "unchecked second-check"}>
                    <input
                      type="radio"
                      id="dewey"
                      name="drone"
                      value="second-text"
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <i className="fa-solid fa-circle"></i>
                  </label>
                  </div>
                </div>
                <img src={NFT} alt="NFT" className="img-fluid homeimg fadein" onLoad={"document.body.className += ' loaded';"} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-about" className="scroll-top">
        <AboutUs />
      </div>
      <div id="roadmap" className="scroll-top">
      <div className="container-wrap">
        <Test />
   
        </div>
      </div>
      <div id="main-team" className="scroll-top">
        <Team />
      </div>

      {/*  START FAQ SECTION   */}
      <div id="faq" className="py-3 ">
        <div className="faq-section container-wrap py-5 scroll-top" id="main-faq">
          <div className="faq-head px-md-5 d-flex">
            <h2 className="white-txt">FAQS</h2>
            <p className="light-txt white-txt px-md-2 mt-md-3">frequently asked questions</p>
          </div>
          <FAQS />
        </div>
      </div>
      {/* END FAQ SECTION */}

      {/* <Test/> */}
    </>
  );
};

export default Home;
