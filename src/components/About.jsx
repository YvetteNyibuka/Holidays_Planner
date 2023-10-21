import React from "react";
import "../styles/About.css";
import smallAbout from "../../public/images/about-small-image.jpg";
import bigAbout from "../../public/images/about-big-image.jpg";

const About = () => {
  return (
    <div className="aboutCont">
      <div className="photoes">
        <div className="aboutpic1">
          <img
            src={bigAbout}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="aboutpic2">
          <img
            src={smallAbout}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className="aboutDesc">
        <p className="title">About us</p>
        <h2>Plan Your Trip With Us</h2>
          <p className="descc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic. Italic Mountains, she had a last
            view back on the skyline
          </p>
          <button className="readmoreBtn">READ MORE</button>
      </div>
    </div>
  );
};

export default About;
