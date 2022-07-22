import React, { useEffect, useRef } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import imag1 from "../images/roadmap1.png";
import imag2 from "../images/roadmap2.png";
import imag3 from "../images/roadmap3.png";
import { useActiveMenu } from "react-active-menu";
import classNames from "classnames";
import "../Assets/Css/Test.css";

const Test = () => {
  useEffect(() => {
    const scrollingDiv = document.getElementById("scrollContainer");
    const img1 = document.getElementById("img1");

    const left = document.querySelector(".sections .left");

    left.onscroll = function (e) {
      console.log(e);
    };

    scrollingDiv.onscroll = function () {
      if (scrollingDiv.scrollTop < 250) {
        img1.src = imag1;
      }

      if (scrollingDiv.scrollTop > 500) {
        img1.src = imag2;
      }
      if (scrollingDiv.scrollTop > 1000) {
        img1.src = imag3;
      }
    };
  }, []);

  const scrollableRef = useRef();
  const { active, handleTriggerClick, registerSectionRef, registerTriggerRef } =
    useActiveMenu({
      scrollableElement: scrollableRef.current,
    });

  return (
    <>
      <div className="roadmap-sections">
        <div className="container roadmap-trigger">
          <div className="row">
            <div className="col-md-1 rgt-sec">
              <nav className="triggers">
                <ul>
                  <li>
                    <button
                      className={classNames({
                        active: active === "section-1",
                      })}
                      onClick={handleTriggerClick("section-1")}
                      ref={registerTriggerRef("section-1")}
                      type="button"
                    >
                      <div className="verti-scroll"></div>
                    </button>
                  </li>
                  <li>
                    <button
                      className={classNames({ active: active === "section-2" })}
                      onClick={handleTriggerClick("section-2")}
                      ref={registerTriggerRef("section-2")}
                      type="button"
                    >
                      <div className="verti-scroll"></div>
                    </button>
                  </li>
                  <li>
                    <button
                      className={classNames({ active: active === "section-3" })}
                      onClick={handleTriggerClick("section-3")}
                      ref={registerTriggerRef("section-3")}
                      type="button"
                    >
                      <div className="verti-scroll"></div>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-11">
                <div className="rows">

                
              <div className="sections">
                <div
                  className="middle"
                  id="scrollContainer"
                  ref={scrollableRef}
                >
                  <div className="in-middle">
                    <div
                      className="in-in-middle"
                      id="1"
                      ref={registerSectionRef("section-1")}
                    >
                      <div className="row">
                        <div className="rightsec-road mx-md-4">
                          <h3>ROADMAP</h3>
                        </div>
                        <div className="road-heads mx-md-3">
                          <h1 className="outline-txt mx-md-2">LAUNCH</h1>
                        </div>
                        <div className="col-md-7 anim-list">
                          <ul>
                            <li>
                              Welcome{" "}
                              <span className="span-road">
                                10,000 new wolves
                              </span>{" "}
                              to the pack!
                            </li>
                            <li>
                              Our community vault is set up and fractionalized.
                              70% of the mint proceeds are sent to the community
                              wallet as initial funding for the vault.
                            </li>
                            <li>
                              <span className="span-road"> Rarity tools</span>{" "}
                              and{" "}
                              <span className="span-road"> rarity sniper</span>{" "}
                              are published to check trait rarity.
                            </li>
                            <li>
                              Our analyst teams will get to work on setting out
                              how to invest our funds to best serve the pack,
                              beginning with cryptocurrencies and NFTs.
                            </li>
                            <li>
                              <span className="span-road">
                                Alpha Wolf Sessions
                              </span>{" "}
                              begin with a special guest kickoff session!
                            </li>
                            <li>
                              <span className="span-road">
                                {" "}
                                Our second drop
                              </span>{" "}
                              will be put into motion and planned for launching
                              at the end of year or into early 2023 to add more
                              funds to the vault and expand our reach. Our
                              initial WSW holders will{" "}
                              <span className="spanone">ALWAYS</span>
                              receive higher benefits than future drops.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="in-in-middle"
                      id="2"
                      ref={registerSectionRef("section-2")}
                    >
                      <div className="row">
                        <div className="rightsec-road mx-md-3">
                          <h3 className="white-txt">ROADMAP</h3>
                        </div>
                        <div className="road-heads mx-md-3">
                          <div className="head-one">
                            <h2 className="white-txt">SHORTLY </h2>
                            <h2 className="white-txt aft-head">AFTER</h2>
                          </div>
                          <h1 className="outline-txt mx-md-4">LAUNCH</h1>
                        </div>
                        <div className="col-md-7 anim-list">
                          <ul>
                            <li>
                              Execute on main utility &{" "}
                              <span className="span-road">
                                {" "}
                                kick-off season 1{" "}
                              </span>
                            </li>
                            <li>
                              The staking website is launched, allowing everyone
                              to earn $WW tokens when staking their Wall Street
                              Wolves NFTs.
                            </li>
                            <li>
                              <span className="span-road">
                                {" "}
                                1/1 Wolves earn 2x staking rewards{" "}
                              </span>
                            </li>
                            <li>
                              <span className="white-span black-txt">
                                {" "}
                                “Alpha Traits”
                              </span>{" "}
                              for the first month will be revealed. Tokens with
                              one specific ultra-rare trait will be selected
                              each month and also earn bonus staking rewards.
                              Eligible traits rotate every month, your Wolves
                              might be next!
                            </li>
                            <li>
                              Release of the{" "}
                              <span className="span-road">“Wolves Den”</span>{" "}
                              <i>(login only for NFT holders).</i>
                              Stake/unstake your NFTs, track your share of the
                              community vault, get access to a curated NFT
                              calendar and wolfpad features, claim merch drops,
                              and much more!
                            </li>
                            <li>
                              <span className="span-road">
                                {" "}
                                Season 1 is officially launched{" "}
                              </span>
                              - the vault will be fired up and filled up with
                              various cryptocurrencies, bluechip NFTs, exciting
                              new projects, floor sweeps, and anything else the
                              community decides on!
                            </li>
                            <li>
                              Down the line, we will implement our full DAO
                              voting mechanism to empower the community to make
                              decisions on future NFT investments and more
                              general spending decisions for our community
                              wallet.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="in-in-middle"
                      id="3"
                      ref={registerSectionRef("section-3")}
                    >
                      <div className="row">
                        <div className="rightsec-road mx-md-3">
                          <h3 className="white-txt">ROADMAP</h3>
                        </div>
                        <div className="road-heads mx-md-3">
                          <div className="head-one">
                            <h2 className="white-txt">A BIT </h2>
                            <h2 className="white-txt"> DOWN</h2>
                          </div>

                          <h1 className="outline-txt mx-md-4"> THE ROAD</h1>
                        </div>
                        <div className="col-md-7 anim-list">
                          <ul>
                            <li>
                              Implement other benefits + set the stage for 2023.
                            </li>
                            <li>
                              We will release{" "}
                              <span className="span-road"> Roadmap 2.0,</span>{" "}
                              in which we lay out our goals and visions for the
                              end of 2022.
                            </li>
                            <li>
                              We will begin implementing ways to invest in the
                              broader market of stocks, options, and futures for
                              the vault.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left col-md-5">
                  <img id="img1" src={imag1} alt="{title}" />
                  <div className="anim-div mx-3"></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
