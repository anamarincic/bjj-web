import video from "../../videos/video.mp4";
import "./Hero.styles.scss";

export function Hero() {
  return (
    <div className="hero" id="onama">
      <div className="hero__text">
        <h2 className="hero__text-head">
          Kod nas se Jiu Jitsu ne uči, kod nas se Jiu Jitsu živi
        </h2>
        <h3 className="hero__text-content">
          Klub Universum je mjesto gdje se susreću entuzijasti ovog prekrasnog
          brazilskog borilačkog sporta i zajedno stvaraju jedinstvenu, povezanu
          i podržavajuću jiu jitsu zajednicu. Naša misija je pružiti vrhunsku
          obuku Jiu Jitsua svim dobnim skupinama i razinama iskustva. Bez obzira
          jeste li početnik koji tek ulazi u svijet Jiu Jitsua ili iskusni
          natjecatelj, klub Universum nudi treninge prilagođene vašim potrebama.
        </h3>
      </div>
      <div className="hero__video">
        <video src={video} height="500" controls muted></video>
      </div>
    </div>
  );
}
