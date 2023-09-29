import { Menu } from "../../Components/Menu";
import { ImgSlide } from "../../Components/ImgSlide";
import { Table } from "../../Components/Table";
import { Hero } from "../../Components/Hero";
import { PlanHolder } from "../../Components/PlanHolder";
import { ImagesHolder } from "../../Components/ImagesHolder";
import { ImagesRandom } from "../../Components/ImagesRandom";
import { Description } from "../../Components/Description";
import { Footer } from "../../Components/Footer";
import { BackToTopButton } from "../../Components/BackToTopButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.styles.scss";
import { useState } from "react";
import ReactPlayer from "react-player";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
//import { useRef } from "react";
//import { useEffect } from "react";

export function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = (e) => {
    console.log(e);
    setShowVideo(true);
    document.getElementById("video").focus({ preventScroll: true });
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  showVideo ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div className="app">
      <header id="naslovna">
        <Menu />
        <ImgSlide />
      </header>
      <main>
        <div className="text-holder">
          <section className="row-bg-text">
            <span className="bg-text">B</span>
            <span className="bg-text">E</span>
            <span className="bg-text">N</span>
            <span className="bg-text">E</span>
            <span className="bg-text">F</span>
            <span className="bg-text">I</span>
            <span className="bg-text">T</span>
            <span className="bg-text">S</span>
          </section>
          <section className="widget">
            <span className="widget-title">NAPREDOVANJE</span>
            <span className="widget-title">SAMOOBRANA</span>
            <span className="widget-title">ZAJEDNIŠTVO</span>
            <span className="widget-title">SAMOPOUZDANJE</span>
          </section>
        </div>
        <Hero />
        <ImagesHolder />
        <Table />
        <div className="video-holder">
          <span>
            {!showVideo && (
              <FontAwesomeIcon
                icon={faCirclePlay}
                size="2xl"
                className="video-holder__icon"
                onClick={playVideo}
              />
            )}
            {showVideo ? (
              <div className="video-holder__play">
                <ReactPlayer
                  className="video-holder__play-video"
                  url="https://youtu.be/C-Wo1qmlhpI?si=miO-Wm6yvQF4Z83q"
                  controls={true}
                  id="video"
                  playing={true}
                />
                <div className="video-holder__close" onClick={closeVideo}>
                  <FontAwesomeIcon icon={faXmark} size="2xl" />
                </div>
              </div>
            ) : null}
          </span>
        </div>
        <PlanHolder />
        <ImagesRandom />
        <Description />
        <div id="info" className="quotesContent">
          <div className="quote">
            <h2>
              "Learn Gracie Jiu-Jitsu so that when a giant walks by, you don't
              think to yourself 'oh,no' you think to yourself 'how intersting!'"
              -Rener Gracie
            </h2>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
