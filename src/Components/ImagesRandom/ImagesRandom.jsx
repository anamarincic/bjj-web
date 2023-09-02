import "./ImagesRandom.styles.scss";

export function ImagesRandom() {
  return (
    <div className="images-random">
      <div className="images-random__content">
        <img src={require("../../images/random/randomOne.jpg")} alt=" " />
      </div>
      <div className="images-random__content wide">
        <img src={require("../../images/random/randomTwo.jpg")} alt=" " />
      </div>
      <div className="images-random__content">
        <img src={require("../../images/random/randomThree.jpg")} alt=" " />
      </div>
      <div className="images-random__content wide">
        <img src={require("../../images/random/randomFour.jpg")} alt=" " />
      </div>
      <div className="images-random__content">
        <img src={require("../../images/random/randomFive.jpg")} alt=" " />
      </div>
      <div className="images-random__content ">
        <img src={require("../../images/random/randomSix.jpg")} alt=" " />
      </div>
    </div>
  );
}
