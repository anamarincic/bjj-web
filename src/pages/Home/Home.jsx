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
import video from "../../videos/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.styles.scss";
import { useState } from "react";

export function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const playVideo = (e) => {
    console.log(e);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div>
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
          {showVideo && (
            <div className="video-holder__play">
              <video
                src={video}
                width="100%"
                height="500"
                autoPlay
                muted></video>
              <div className="video-holder__close" onClick={closeVideo}>
                <FontAwesomeIcon icon={faXmark} size="2xl" />
              </div>
            </div>
          )}
          <FontAwesomeIcon
            icon={faCirclePlay}
            size="2xl"
            className="video-holder__icon"
            onClick={playVideo}
          />
        </div>
        <PlanHolder />
        <ImagesRandom />
        <Description />
        <div id="info" className="quotesContent">
          <div className="quote">
            <h2>
              Iskusite snagu, tehnike i ljepotu ovog izvanrednog borilačkog
              sporta i krenite na put prema osobnom razvoju i
              samopouzdanju.Imate li bilo kakva pitanja ili želite saznati više,
              slobodno nas kontaktirajte. Veselimo se što ćemo vas upoznati i
              biti dio vaše Jiu Jitsu priče.
            </h2>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
