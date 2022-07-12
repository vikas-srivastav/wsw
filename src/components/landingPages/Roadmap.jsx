import React from "react";
import AnimImg from "../../Assets/image/WSW_Animation.png";
import Bar from "../../Assets/image/bar.png"

const Roadmap = () => {
  return (
    <>
      <div id="ro-map">
          <div className="scroll-img px-3 rodmap">
          <div className="bar-scroll"><img src={Bar} alt="Divider-Bar"className="img-fluid"/></div>
          <div className="bar-scroll"><img src={Bar} alt="Divider-Bar"className="img-fluid"/></div>
          </div>
        <div className="roadmap px-5 py-5">
          <div className="container-wrap">
            <div className="rgt-sidebar">
              <div className="barone"></div>
            </div>
            <div className="rightsec-road">
              <h3 className="hthree white-txt">ROADMAP</h3>
            </div>
            <div className="rgt-list white-txt">
              
                <h1 className="hone outline-txt">LAUNCH</h1>
              
              <div className="row">
                <div className="col-md-7">
                  <ul>
                    <li>
                      Welcome <span className="span-road">10,000 new wolves</span> to the pack!
                    </li>
                    <li>
                      Our community vault is set up and fractionalized. 70% of
                      the mint proceeds are sent to the community wallet as
                      initial funding for the vault.
                    </li>
                    <li>
                      <span className="span-road"> Rarity tools</span> and <span className="span-road"> rarity sniper</span>{" "}
                      are published to check trait rarity.
                    </li>
                    <li>
                      Our analyst teams will get to work on setting out how to
                      invest our funds to best serve the pack, beginning with
                      cryptocurrencies and NFTs.
                    </li>
                    <li>
                      <span className="span-road">Alpha Wolf Sessions</span> begin with a special
                      guest kickoff session!
                    </li>
                    <li>
                      <span className="span-road"> Our second drop</span> will be put into motion and
                      planned for launching at the end of year or into early
                      2023 to add more funds to the vault and expand our reach.
                      Our initial WSW holders will{" "}
                      <span className="spanone">ALWAYS</span>receive higher
                      benefits than future drops.
                    </li>
                  </ul>
                </div>
                <div className="rgt-listtwo">
                  
                    <h1 className="hone">LAUNCH</h1>
                  
                  <ul>
                    <li>
                      Welcome <span className="span-road">10,000 new wolves</span> to the pack!
                    </li>
                    <li>
                      Our community vault is set up and fractionalized. 70% of
                      the mint proceeds are sent to the community wallet as
                      initial funding for the vault.
                    </li>
                    <li>
                      <span className="span-road"> Rarity tools</span> and <span> rarity sniper</span>{" "}
                      are published to check trait rarity.
                    </li>
                    <li>
                      Our analyst teams will get to work on setting out how to
                      invest our funds to best serve the pack, beginning with
                      cryptocurrencies and NFTs.
                    </li>
                    <li>
                      <span className="span-road">Alpha Wolf Sessions</span> begin with a special
                      guest kickoff session!
                    </li>
                    <li>
                      <span className="span-road"> Our second drop</span> will be put into motion and
                      planned for launching at the end of year or into early
                      2023 to add more funds to the vault and expand our reach.
                      Our initial WSW holders will <span className="span-road">ALWAYS</span>receive
                      higher benefits than future drops.
                    </li>
                  </ul>
                </div>
                <div className="rgt-listthree">
                 
                    <h1 className="hone">LAUNCH</h1>
                  
                  <ul>
                    <li>
                      Welcome <span className="span-road">10,000 new wolves</span> to the pack!
                    </li>
                    <li>
                      Our community vault is set up and fractionalized. 70% of
                      the mint proceeds are sent to the community wallet as
                      initial funding for the vault.
                    </li>
                    <li>
                      <span className="span-road"> Rarity tools</span> and <span className="span-road"> rarity sniper</span>{" "}
                      are published to check trait rarity.
                    </li>
                    <li>
                      Our analyst teams will get to work on setting out how to
                      invest our funds to best serve the pack, beginning with
                      cryptocurrencies and NFTs.
                    </li>
                    <li>
                      <span className="span-road">Alpha Wolf Sessions</span> begin with a special
                      guest kickoff session!
                    </li>
                    <li>
                      <span className="span-road"> Our second drop</span> will be put into motion and
                      planned for launching at the end of year or into early
                      2023 to add more funds to the vault and expand our reach.
                      Our initial WSW holders will <span className="span-road">ALWAYS</span>receive
                      higher benefits than future drops.
                    </li>
                  </ul>
                </div>
             
              <div className="col-md-5 lft-roadimg">
                <img
                  src={AnimImg}
                  alt="AnminationImage"
                  className="img-fluid"
                />
                <div className="anim-div"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;