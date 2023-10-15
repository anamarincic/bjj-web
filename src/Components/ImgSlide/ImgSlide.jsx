import "./ImgSlide.styles.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export function ImgSlide() {
  const properties = {
    prevArrow: <button className="buttonStyle">&lt;</button>,
    nextArrow: <button className="buttonStyle">&gt;</button>,
  };

  return (
    <Slide {...properties}>
      <div className="each-slide-effect">
        <div className="slideOne">
          <span>DISCIPLINA</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="slideTwo">
          <span>IZDRŽLJIVOST</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="slideThree">
          <span>SNAGA</span>
        </div>
      </div>
    </Slide>
  );
}
