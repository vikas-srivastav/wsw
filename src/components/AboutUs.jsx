import React from "react";
import Abtimg from "../Assets/image/abtimg.png"
import Bar from "../Assets/image/bar3.png"


const AboutUs = () => {
  return (
    <>
      <div id="about-us">
        <div className="about">
          <img src={Bar} alt="bar" className="img-fluid" />
          <div className="container-wrap">
            <div className="row">
              <div className="col-md-6 abt-rgt">
                <div className="abt-textone text-start px-5">
                  <h1>ABOUT</h1>
                  <p>
                    Wall Street Wolves is a project that hunts sand invests into
                    opportunities and projects for a community vault that you
                    can earn shares in!
                  </p>
                </div>
                <div className="abt-texttwo px-5 mt-5">
                  <h1>MANIFESTO</h1>
                  <p>
                    Well versed in all markets, our pack dedicates their time to
                    not only finding the right prey, but teaching you to hunt
                    along the way.
                    <br />
                    Join our ranks, leave the comfort of the den, and earn your
                    rise to the top as an Alpha Wolf.
                  </p>
                </div>
              </div>
              <div className="col-md-6 abt-left text-center">
                <img src={Abtimg} alt="about left image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
