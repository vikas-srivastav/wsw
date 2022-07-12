import React from "react";
import Carousel from "react-grid-carousel";
import imgone from "../../Assets/image/brett.jpeg";
import imgtwo from "../../Assets/image/TSC_NFT.png";
import imgthree from "../../Assets/image/gandalf.jpeg";
import imgfour from "../../Assets/image/shred.jpeg";
import imgfive from "../../Assets/image/golden.jpeg";
import imgsix from "../../Assets/image/whiz.jpeg";
import { Link } from "react-router-dom";
import Spicy from "../../Assets/image/Spicy.png";
import kit from "../../Assets/image/kitsune.png";

const Team = () => {
  return (
    <>
      <div id="team" className="pt-3">
        <div className="container-wrap py-5">
          <div className="teamtitle px-md-5">
            <h2 className="red-txt pb-2">TEAM</h2>
            <p>
              Our founding team is an excellent combination of{" "}
              <span> technology and strategy.</span> Our founders have
              professional experience in financial analysis, data plotting,
              software/product development, marketing, and are excited to bring
              this to not only the project but to our holders by educating them
              as well.
            </p>
          </div>

          <div className="team-slide px-5 pt-3 pb-5">
            <Carousel cols={4} rows={1} gap={10} loop autoplay={1500}>
              <Carousel.Item>
                <div className="card-div">
                  <img width="100%" src={imgone} alt="Brett" />
                  <div className="wrap-card-content">
                    <div className="twoh-div">
                      <h6 className="red-txt mb-0">BRETT SIMBA</h6>
                      <p>AlPHA WOLF</p>
                      <div className="card-info">
                        <i class="fa-brands fa-twitter"></i>
                        <Link to="https://twitter.com/BrettSimba">
                          @brettsimba
                        </Link>
                        <p className="info-para mb-0">
                          Former 9 to 5. Now 5 to 9. Mil that is. Founder (make
                          sure text is like PSD)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card-div">
                  <img width="100%" src={imgtwo} alt="Brett" />
                  <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">THE STALKERS</h6>
                    <p>LUNAR WOLVES</p>
                    <div className="card-info">
                      <i class="fa-brands fa-instagram"></i>
                      <Link to="https://www.instagram.com/thestalkercreatives/">
                      @thestalkercreatives
                      </Link>
                      <p className="info-para mb-0">
                        Created by the Universe to create. #AllThingsDesign
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card-div">
                  <img width="100%" src={imgthree} alt="Brett" />
                  <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0"> SHRED</h6>
                    <p>CLUB WOLF</p>
                    <div className="card-info">
                      <i class="fa-brands fa-instagram"></i>
                      <Link to="#">TBD</Link>
                      <p className="info-para mb-0">
                        From stocks to NFTs. Full time degen. Once said, no risk
                        no rari.
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card-div">
                  <img width="100%" src={imgfour} alt="Brett" />
                  <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">GANDALF</h6>
                    <p>WIZARD WOLF</p>
                    <div className="card-info">
                      <i class="fa-brands fa-instagram"></i>
                      <Link to="#">TBD</Link>
                      <p className="info-para mb-0">
                        Did you really expect another title? Arrives precisely
                        when needed. Project Lead.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card-div">
                  <img width="100%" src={imgfive} alt="Brett" />
                  <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">GOLDENX</h6>
                    <p>DEV WOLVES</p>
                    <div className="card-info">
                      <i class="fa-brands fa-twitter"></i>
                      <Link to="https://twitter.com/GoldenXnft">
                        @goldenxnft
                      </Link>
                      <p className="info-para mb-0">
                        Gold was once found between the lines of code, where X
                        marked the spot. Developers.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card-div">
                  <img width="100%" src={imgsix} alt="Brett" />
                  <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">WHIZ</h6>
                    <p>TACTICAL WOLF</p>
                    <div className="card-info">
                      <i class="fa-brands fa-instagram"></i>
                      <Link to="#">@brettsimba</Link>
                      <p className="info-para mb-0">
                        Benevolent Pack Overlord. Community Lead.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </Carousel.Item>
              {/* ... */}
            </Carousel>
            <div className="spi-verti">
              <img src={kit} alt="veticalkit" />
            </div>
            <div className="spi">
              <img src={Spicy} alt="spicy" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
