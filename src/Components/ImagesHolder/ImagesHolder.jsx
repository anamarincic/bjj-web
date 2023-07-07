import "./ImagesHolder.styles.scss";

export function ImagesHolder() {
  return (
    <div className="images-holder">
      <div className="images-holder__content images-holder-one">
        <img src={require("../../images/one.jpg")} alt=" " />
      </div>
      <div className="images-holder__content images-holder-two">
        <img src={require("../../images/two.jpg")} alt=" " />
      </div>
      <div className="images-holder__content images-holder-three">
        <img src={require("../../images/three.jpg")} alt=" " />
      </div>
      <div className="overlay"></div>
    </div>
  );
}
