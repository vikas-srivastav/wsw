import React from "react";
import Carousel from "react-grid-carousel";
import imgone from "../Assets/image/brett.jpeg";
import imgtwo from "../Assets/image/TSC_NFT.png";
import imgthree from "../Assets/image/gandalf.jpeg";
import imgfour from "../Assets/image/shred.jpeg";
import imgfive from "../Assets/image/golden.jpeg";
import imgsix from "../Assets/image/whiz.jpeg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <div id="team">
        <div className="container-wrap py-5">
          <div className="teamtitle px-5">
            <h4>TEAM</h4>
            <p>
              Our founding team is an excellent combination of{" "}
              <span> technology and strategy.</span> Our founders have
              professional experience in financial analysis, data plotting,
              software/product development, marketing, and are excited to bring
              this to not only the project but to our holders by educating them
              as well.
            </p>
          </div>
          <div className="team-slide px-5">
            <Carousel cols={4} rows={1} gap={10} loop>
              <Carousel.Item>
                <img width="100%" src={imgone} alt="Brett" />
                <div className="card-div">
                  <div className="card-hdiv">
                  <h6>BRETT SIMBA</h6>
                  <h6 className="teamhfive">AlPHA WOLF</h6>
                  </div>
                  <div className="card-info">
                    <i class="fa-brands fa-twitter"></i>
                    <Link to="https://twitter.com/BrettSimba">@brettsimba</Link>
                    <p className="info-para">
                      Former 9 to 5. Now 5 to 9. Mil that is. Founder (make sure
                      text is like PSD)
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src={imgtwo} alt="Brett" />
                <div className="card-div">
                  <h6>THE STALKERS</h6>
                  <h6 className="teamhfive">LUNAR WOLVES</h6>
                  <div className="card-info">
                    <i class="fa-brands fa-instagram"></i>
                    <Link to="https://www.instagram.com/thestalkercreatives/">
                      @brettsimba
                    </Link>
                    <p className="info-para">
                      Created by the Universe to create. #AllThingsDesign
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src={imgthree} alt="Brett" />
                <div className="card-div">
                  <h6>SHRED</h6>
                  <h6 className="teamhfive">CLUB WOLF</h6>
                  <div className="card-info">
                    <i class="fa-brands fa-instagram"></i>
                    <Link to="#">@brettsimba</Link>
                    <p className="info-para">
                      From stocks to NFTs. Full time degen. Once said, no risk
                      no rari.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src={imgfour} alt="Brett" />
                <div className="card-div">
                  <h6>GANDALF</h6>
                  <h6 className="teamhfive">WIZARD WOLF</h6>
                  <div className="card-info">
                    <i class="fa-brands fa-instagram"></i>
                    <Link to="#">@brettsimba</Link>
                    <p className="info-para">
                      Did you really expect another title? Arrives precisely
                      when needed. Project Lead.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src={imgfive} alt="Brett" />
                <div className="card-div">
                  <h6>GOLDENX</h6>
                  <h6 className="teamhfive">DEV WOLVES</h6>
                  <div className="card-info">
                    <i class="fa-brands fa-twitter"></i>
                    <Link to="https://twitter.com/GoldenXnft">@goldenxnft</Link>
                    <p className="info-para">
                      Gold was once found between the lines of code, where X
                      marked the spot. Developers.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src={imgsix} alt="Brett" />
                <div className="card-div">
                  <h6>WHIZ</h6>
                  <h6 className="teamhfive">TACTICAL WOLF</h6>
                  <div className="card-info">
                    <i class="fa-brands fa-instagram"></i>
                    <Link to="#">@brettsimba</Link>
                    <p className="info-para">
                      Benevolent Pack Overlord. Community Lead.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              {/* ... */}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
