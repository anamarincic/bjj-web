import "./ImagesRandom.styles.scss";

export function ImagesRandom() {
  return (
    <div className="images-random">
      <div className="images-random__content">
        <img
          src={require("../../images/random/randomOne.jpg")}
          alt="jj kimono"
        />
      </div>
      <div className="images-random__content wide">
        <img
          src={require("../../images/random/randomTwo.jpg")}
          alt="jj universum kimono "
        />
      </div>
      <div className="images-random__content">
        <img
          src={require("../../images/random/randomThree.jpg")}
          alt="plavi kimono"
        />
      </div>
      <div className="images-random__content wide">
        <img
          src={require("../../images/random/randomFour.jpg")}
          alt="borilačka vještina za djeca "
        />
      </div>
      <div className="images-random__content">
        <img
          src={require("../../images/random/randomFive.jpg")}
          alt="bjj kimono"
        />
      </div>
      <div className="images-random__content ">
        <img
          src={require("../../images/random/randomSix.jpg")}
          alt="jj izlet djece "
        />
      </div>
    </div>
  );
}
