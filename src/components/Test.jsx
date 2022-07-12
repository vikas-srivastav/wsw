import React, { useRef } from "react";
import { useActiveMenu } from "react-active-menu";
import classNames from "classnames";
import "../Assets/Css/Test.css";
import AnimImg from "../Assets/image/WSW_Animation.png";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";

const Test = () => {
  const scrollableRef = useRef();
  const { active, handleTriggerClick, registerSectionRef, registerTriggerRef } =
    useActiveMenu({
      scrollableElement: scrollableRef.current,
    });

  return (
    <>
      <nav className="triggers py-md-2">
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
      <div className="sections" ref={scrollableRef}>
      
        <section
          ref={registerSectionRef("section-1")}
          className="section-bg white-txt pt-md-3"
        >
          
          <div className="rightsec-road mx-md-4">
            <h3>ROADMAP</h3>
          </div>
          <h1 className="outline-txt mx-md-4">LAUNCH</h1>
          <div className="row">
            <div className="col-md-7 anim-list">
              <ul>
                <li>
                  Welcome <span className="span-road">10,000 new wolves</span>{" "}
                  to the pack!
                </li>
                <li>
                  Our community vault is set up and fractionalized. 70% of the
                  mint proceeds are sent to the community wallet as initial
                  funding for the vault.
                </li>
                <li>
                  <span className="span-road"> Rarity tools</span> and{" "}
                  <span className="span-road"> rarity sniper</span> are
                  published to check trait rarity.
                </li>
                <li>
                  Our analyst teams will get to work on setting out how to
                  invest our funds to best serve the pack, beginning with
                  cryptocurrencies and NFTs.
                </li>
                <li>
                  <span className="span-road">Alpha Wolf Sessions</span> begin
                  with a special guest kickoff session!
                </li>
                <li>
                  <span className="span-road"> Our second drop</span> will be
                  put into motion and planned for launching at the end of year
                  or into early 2023 to add more funds to the vault and expand
                  our reach. Our initial WSW holders will{" "}
                  <span className="spanone">ALWAYS</span>receive higher benefits
                  than future drops.
                </li>
              </ul>
            </div>
            <div className="col-md-5 anim-img">
              <img src={AnimImg} alt="AnminationImage" className="img-fluid" />
              <div className="anim-div"></div>
            </div>
          </div>
         
        </section>
        
       
       
        <section
          ref={registerSectionRef("section-2")}
          className="section-bg white-txt pt-md-3"
        >
          
          <h1 className="outline-txt mx-md-4">SHORTLY AFTER LAUNCH</h1>
          <div className="row">
            <div className="col-md-7 anim-list">
              <ul>
                <li>Execute on main utility & kick-off season 1</li>
                <li>
                  The staking website is launched, allowing everyone to earn $WW
                  tokens when staking their Wall Street Wolves NFTs.
                </li>
                <li>1/1 Wolves earn 2x staking rewards</li>
                <li>
                  “Alpha Traits” for the first month will be revealed. Tokens
                  with one specific ultra-rare trait will be selected each month
                  and also earn bonus staking rewards. Eligible traits rotate
                  every month, your Wolves might be next!
                </li>
                <li>
                  Release of the “Wolves Den” (login only for NFT holders).
                  Stake/unstake your NFTs, track your share of the community
                  vault, get access to a curated NFT calendar and wolfpad
                  features, claim merch drops, and much more!
                </li>
                <li>
                  Season 1 is officially launched - the vault will be fired up
                  and filled up with various cryptocurrencies, bluechip NFTs,
                  exciting new projects, floor sweeps, and anything else the
                  community decides on!
                </li>
                <li>
                  Down the line, we will implement our full DAO voting mechanism
                  to empower the community to make decisions on future NFT
                  investments and more general spending decisions for our
                  community wallet.
                </li>
              </ul>
            </div>
            <div className="col-md-5 anim-img py-md-5">
              <img src={AnimImg} alt="AnminationImage" className="img-fluid" />
              <div className="anim-div"></div>
            </div>
          </div>
        
         
        </section>
        
       
        
        <section
          ref={registerSectionRef("section-3")}
          className="section-bg white-txt pt-md-3"
        >
         
          <h1 className="outline-txt mx-md-4">A BIT DOWN THE ROAD</h1>
          <div className="row">
            <div className="col-md-7 anim-list">
              <ul>
                <li>Implement other benefits + set the stage for 2023.</li>
                <li>
                  We will release Roadmap 2.0, in which we lay out our goals and
                  visions for the end of 2022.
                </li>
                <li>
                  We will begin implementing ways to invest in the broader
                  market of stocks, options, and futures for the vault.
                </li>
              </ul>
            </div>
            <div className="col-md-5 anim-img">
              <img src={AnimImg} alt="AnminationImage" className="img-fluid" />
              <div className="anim-div"></div>
            </div>
          </div>
         
        </section>
       
       
      </div>
    </>
  );
};

export default Test;
