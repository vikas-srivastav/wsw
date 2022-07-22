import React from "react";
import imgone from "../../Assets/image/brett.jpeg";
import imgtwo from "../../Assets/image/TSC_NFT.png";
import imgthree from "../../Assets/image/gandalf.jpeg";
import imgfour from "../../Assets/image/shred.jpeg";
import imgfive from "../../Assets/image/golden.jpeg";
import imgsix from "../../Assets/image/whiz.jpeg";
import Spicy from "../../Assets/image/Spicyone.png";
import kit from "../../Assets/image/kitsune.png";
import Typewriter from "typewriter-effect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fire from "../../Assets/image/fire.gif"

const Team = () => {
  const myRef = document.querySelector("#team");

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div id="team" className="pt-3 scroll-top">
        <div className="container-wrap py-5">
          <div className="teamtitle px-md-5 mx-5">
            <h2 className="red-txt pb-2">TEAM</h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `
                  Our founding team is an excellent combination of <span class="red-span">technology and</span>
                  <span class="red-span">strategy.</span> Our founders have professional experience in financial 
                  analysis, data plotting, software/product development, marketing, 
                  and are excited to bring this to not only the project but to our 
                  holders by educating them as well.`
                  )
                  .start();
              }}
            />
          </div>

          <div className="team-slide px-md-5 pt-3 pb-5">
            <Carousel responsive={responsive}  infinite={true} autoPlay={false} autoPlaySpeed={2000} itemClass='carouselItem'>
              <div className="card-div">
                <img width="100%" src={imgone} alt="Brett" />
                <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">BRETT SIMBA</h6>
                    <p>AlPHA WOLF</p>
                    <div className="card-info">
                      <i className="fa-brands fa-twitter"></i>
                      <a
                        href="https://twitter.com/BrettSimba"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @brettsimba
                      </a>
                      <p className="info-para mb-0">
                        Former 9 to 5. Now 5 to 9. Mil that is. Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img width="100%" src={imgtwo} alt="Brett" />
                <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">THE STALKERS</h6>
                    <p>LUNAR WOLVES</p>
                    <div className="card-info">
                      <i className="fa-brands fa-instagram"></i>
                      <a
                        href="https://www.instagram.com/thestalkercreatives/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        @thestalkercreatives
                      </a>
                      <p className="info-para mb-0">
                        Created by the Universe to create. #AllThingsDesign
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img width="100%" src={imgthree} alt="Brett" />
                <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0"> SHRED</h6>
                    <p>CLUB WOLF</p>
                    <div className="card-info">
                      <i className="fa-brands fa-instagram"></i>
                      <a href="#" rel="noopener noreferrer" target="_blank">
                        TBD
                      </a>
                      <p className="info-para mb-0">
                        From stocks to NFTs. Full time degen. Once said, no risk
                        no rari.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img width="100%" src={imgfour} alt="Brett" />
                <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">GANDALF</h6>
                    <p>WIZARD WOLF</p>
                    <div className="card-info">
                      <i className="fa-brands fa-instagram"></i>
                      <a href="#" rel="noopener noreferrer" target="_blank">
                        TBD
                      </a>
                      <p className="info-para mb-0">
                        Did you really expect another title? Arrives precisely
                        when needed. Project Lead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img width="100%" src={imgfive} alt="Brett" />
                <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">GOLDENX</h6>
                    <p>DEV WOLVES</p>
                    <div className="card-info">
                      <i className="fa-brands fa-twitter"></i>
                      <a
                        href="https://twitter.com/GoldenXnft"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        @goldenxnft
                      </a>
                      <p className="info-para mb-0">
                        Gold was once found between the lines of code, where X
                        marked the spot. Developers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-div">
                <img width="100%" src={imgsix} alt="Brett" />
                <div className="wrap-card-content">
                  <div className="twoh-div">
                    <h6 className="red-txt mb-0">WHIZ</h6>
                    <p>TACTICAL WOLF</p>
                    <div className="card-info">
                      <i className="fa-brands fa-instagram"></i>
                      <a href="#" rel="noopener noreferrer" target="_blank">
                        TBD
                      </a>
                      <p className="info-para mb-0">
                        Benevolent Pack Overlord. Community Lead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
            <div className="spi">
               <img src={Fire} alt="fire" className="img-fluid fire"  />
              <img src={Spicy} alt="spicy" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="spi-verti">
          <img src={kit} alt="veticalkit" />
        </div>
      </div>
    </>
  );
};

export default Team;
