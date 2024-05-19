import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import hero_banner from "../../../assets/hero_banner1.jpg";
import hero_title from "../../../assets/hero_title3.png";
import play_icon from "../../../assets/play_icon.png";
import info_icon from "../../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";

function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [showMovieInfo, setShowMovieInfo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const toggleMovieInfo = () => {
    setShowMovieInfo(!showMovieInfo);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            The series follows Wednesday Addams, a troublesome kid sent off to
            Nevermore Academy where her parents went. While she's there, she
            attempts to master her psychic ability, prevents a killing spree,
            and discovers her parents' darkest secret: that they were a part of
            a murder that took place while they were students.
          </p>
          <div className="hero-btns">
            <button onClick={toggleVideo} className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button onClick={toggleMovieInfo} className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          {showMovieInfo && (
            <div className="movie-info">
              <h2>Wednesday (TV series)</h2>
              <p>
                Wednesday is an American coming-of-age supernatural mystery
                television series based on the character Wednesday Addams by
                Charles Addams. Created by Alfred Gough and Miles Millar, it
                stars Jenna Ortega as the titular character, with Gwendoline
                Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy
                Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J.
                Ogawa, Christina Ricci, and Moosa Mostafa appearing in
                supporting roles. Four out of the eight episodes of the first
                season were directed by Tim Burton, who also serves as executive
                producer. It revolves around Wednesday Addams, who attempts to
                solve a murder mystery at her new school.
              </p>
            </div>
          )}
        </div>
      </div>
      {showVideo && (
        <div className="video-container">
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/Di310WS8zLk?si=QPAZZJXOIcIiowTO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="more-cards">
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Popular Movies"} category={"popular"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCards title={"Now Playing"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
