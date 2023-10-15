import "./Hero.styles.scss";
import ReactPlayer from "react-player";

export function Hero() {
  return (
    <div className="hero" id="onama">
      <div className="hero__text">
        <h2 className="hero__text-head">
          Kod nas se Jiu Jitsu ne uči, <br></br> kod nas se Jiu Jitsu živi
        </h2>
        <h3 className="hero__text-content">
          Klub Universum je mjesto gdje se susreću entuzijasti ovog prekrasnog
          brazilskog borilačkog sporta i zajedno stvaraju jedinstvenu, povezanu
          i podržavajuću jiu jitsu zajednicu. Naša misija je pružiti vrhunsku
          obuku Jiu Jitsua svim dobnim skupinama i razinama iskustva. Bez obzira
          jeste li početnik koji tek ulazi u svijet Jiu Jitsua ili iskusni
          natjecatelj, klub Universum u Osijeku nudi treninge prilagođene vašim
          potrebama.
        </h3>
      </div>
      <div className="hero__video">
        <ReactPlayer
          className="hero__video-play"
          url="https://youtu.be/KcxgmDS7Z_0?si=DNpQAqLbSYsEiQFg"
          controls={true}
          id="video"
          playing={true}
        />
      </div>
    </div>
  );
}

///<iframe
//src="https://youtu.be/KcxgmDS7Z_0?si=DNpQAqLbSYsEiQFg"
//title="YouTube video player"
//frameborder="0"
//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//allowfullscreen></iframe>
