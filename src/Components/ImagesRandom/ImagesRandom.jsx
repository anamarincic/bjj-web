import "./ImagesRandom.styles.scss";

export function ImagesRandom() {
  return (
    <div className="images-random">
      <div className="images-random__content">
        <img src={require("../../images/randomOne.jpg")} alt=" " />
      </div>
      <div className="images-random__content wide">
        <img src={require("../../images/randomTwo.jpg")} alt=" " />
      </div>
      <div className="images-random__content">
        <img src={require("../../images/randomThree.jpg")} alt=" " />
      </div>
      <div className="images-random__content wide">
        <img src={require("../../images/randomFour.jpg")} alt=" " />
      </div>
      <div className="images-random__content">
        <img src={require("../../images/randomFive.jpg")} alt=" " />
      </div>
      <div className="images-random__content ">
        <img src={require("../../images/randomSix.jpg")} alt=" " />
      </div>
    </div>
  );
}
